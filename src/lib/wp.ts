export function getWpImage(item: any) {
  return (
    item?._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    '/fallback.jpg'
  )
}
