const BASE_URL = process.env.NEXT_PUBLIC_WP_API

if (!BASE_URL) {
  throw new Error('NEXT_PUBLIC_WP_API belum diset')
}

export async function fetchAPI<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`)
  }

  return res.json()
}
