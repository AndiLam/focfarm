type WPImage =
  | number
  | string
  | {
      source_url?: string
      url?: string
      sizes?: {
        large?: string
        medium?: string
        thumbnail?: string
      }
    }
  | null
  | undefined

export function resolveImage(image: WPImage, embedded?: any): string {
  // fallback default
  const fallback = '/fallback.jpg'

  if (!image) return fallback

  // =========================
  // 1. STRING URL
  // =========================
  if (typeof image === 'string') {
    return image
  }

  // =========================
  // 2. OBJECT IMAGE
  // =========================
  if (typeof image === 'object') {
    return (
      image.source_url ||
      image.url ||
      image.sizes?.large ||
      image.sizes?.medium ||
      image.sizes?.thumbnail ||
      fallback
    )
  }

  // =========================
  // 3. NUMBER (ACF IMAGE ID)
  // =========================
  if (typeof image === 'number') {
    return (
      embedded?.['wp:featuredmedia']?.[0]?.source_url ||
      fallback
    )
  }

  return fallback
}
