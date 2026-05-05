export interface ACFHero {
  title?: string
  description?: string
  image?: {
    url: string
  }
  cta_primary_text?: string
  cta_primary_link?: string
  cta_secondary_text?: string
  cta_secondary_link?: string
}

export interface WPPage {
  id: number
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string
    }[]
  }
  acf?: ACFHero
}

export interface WPImage {
  source_url: string
}

export interface WPEmbedded {
  'wp:featuredmedia'?: WPImage[]
}

export interface WPPost {
  id: number
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  _embedded?: WPEmbedded
}

export type WPGallery = {
  id: number
  slug: string
  title: {
    rendered: string
  }
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string
    }[]
  }
}
