import { fetchAPI } from './api'
import { resolveImage } from './image'

/* =========================
   TYPES CLEAN OUTPUT
========================= */

export type Service = {
  id: number
  slug: string
  title: string
  description: string
  image: string
}

export type Post = {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
}

export type Hero = {
  title: string
  description: string
  image: string
  ctaPrimaryText: string
  ctaPrimaryLink: string
  ctaSecondaryText: string
  ctaSecondaryLink: string
}

export type Gallery = {
  id: number
  slug: string
  title: string
  description: string
  image: string
}

/* =========================
   HERO
========================= */

export async function getHero(): Promise<Hero | null> {
  const data = await fetchAPI<any[]>(`/pages?slug=home&_embed`)

  if (!data || !data.length) return null

  const page = data[0]
  const acf = page?.acf || {}

  let image = '/fallback.jpg'

  try {
    const mediaId = page?.featured_media

    if (mediaId) {
      const media = await fetchAPI<any>(`/media/${mediaId}`)
      image = media?.source_url || image
    }
  } catch (err) {}

  return {
    title: acf.title || page?.title?.rendered || 'FOC FARM',
    description: acf.subtitle || '',

    image,

    ctaPrimaryText: acf.cta_primary_text || 'Explore',
    ctaPrimaryLink: acf.cta_primary_link || '/services',

    ctaSecondaryText: acf.cta_secondary_text || 'Learn More',
    ctaSecondaryLink: acf.cta_secondary_link || '/about',
  }
}


/* =========================
   SERVICES
========================= */

async function normalizeService(item: any): Promise<Service> {
  return {
    id: item.id,
    slug: item.slug,

    title: item.title?.rendered || '',

    description:
      item.acf?.description ||
      item.excerpt?.rendered ||
      '',

    image:
      item._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
      '/fallback.jpg',
  }
}

export async function getServices(): Promise<Service[]> {
  const data = await fetchAPI<any[]>(`/services?_embed`)

  return await Promise.all(data.map(normalizeService))
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const data = await fetchAPI<any[]>(`/services?slug=${slug}&_embed`)

  if (!data.length) return null

  return await normalizeService(data[0])
}

/* =========================
   POSTS
========================= */

async function normalizePost(item: any): Promise<Post> {
  return {
    id: item.id,
    slug: item.slug,

    title: item.title.rendered,
    excerpt: item.excerpt?.rendered || '',
    content: item.content.rendered,

    image: await resolveImage(
      item._embedded?.['wp:featuredmedia']?.[0]
    ),
  }
}

export async function getPosts(type: string): Promise<Post[]> {
  const data = await fetchAPI<any[]>(`/${type}?_embed`)

  return await Promise.all(data.map(normalizePost))
}

export async function getPostBySlug(type: string, slug: string): Promise<Post | null> {
  const data = await fetchAPI<any[]>(
    `/${type}?slug=${slug}&_embed`
  )

  if (!data.length) return null

  return await normalizePost(data[0])
}

/* =========================
   GALLERY
========================= */

async function normalizeGallery(item: any) {
  const acf = item.acf || {}

  let image = '/fallback.jpg'

  if (typeof acf.image === 'string') {
    image = acf.image
  }

  else if (acf.image?.url) {
    image = acf.image.url
  }

  else if (typeof acf.image === 'number' || item.featured_media) {
    const mediaId = acf.image || item.featured_media

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WP_API}/media/${mediaId}`
      )
      const media = await res.json()

      image = media.source_url || '/fallback.jpg'
    } catch (err) {}
  }

  return {
    id: item.id,
    slug: item.slug,
    title: acf.title || item.title?.rendered || '',
    description: acf.description || '',
    image,
  }
}

export async function getGalleries(): Promise<Gallery[]> {
  const data = await fetchAPI<any[]>(`/gallery?_embed`)

  if (!Array.isArray(data)) {
    return []
  }

  return await Promise.all(
    data.map(normalizeGallery)
  )
}