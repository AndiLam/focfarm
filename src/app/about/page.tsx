import { resolveImage } from '@/lib/image'

export default async function AboutPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API}/pages?slug=about&_embed`,
    { cache: 'no-store' }
  )

  const json = await res.json()
  const about = json?.[0]

  if (!about) return <div className="flex h-screen items-center justify-center">Not found</div>

  const acf = about.acf || {}
  const image = await resolveImage(
    about?._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    about?.acf?.image ||
    '/fallback.jpg'
  )

  return (
    <section className="container mx-auto max-w-7xl px-6 pb-20 pt-28 md:pb-32 md:pt-40">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        
        {/* TEXT CONTENT */}
        <div className="order-2 lg:order-1">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a5a58d]">
            About Us
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-[#6b705c] sm:text-4xl md:text-6xl">
            {acf.title || ''}
          </h1>

          <div
            className="prose prose-slate mt-6 text-base leading-relaxed text-gray-600 md:text-lg md:leading-8"
            dangerouslySetInnerHTML={{
              __html: acf.description || about.content?.rendered || '',
            }}
          />

          {/* VISION & MISSION CARDS */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:gap-6">
            <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#cb997e]/10 text-[#cb997e]">
                <span className="font-bold">V</span>
              </div>
              <h3 className="text-xl font-bold text-[#6b705c]">
                {acf.vision_title || 'Vision'}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {acf.vision_desc}
              </p>
            </div>

            <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#6b705c]/10 text-[#6b705c]">
                <span className="font-bold">M</span>
              </div>
              <h3 className="text-xl font-bold text-[#6b705c]">
                {acf.mission_title || 'Mission'}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {acf.mission_desc}
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative order-1 lg:order-2 lg:sticky lg:top-32">
          <div className="aspect-[4/5] overflow-hidden rounded-[40px] shadow-2xl md:rounded-[60px]">
            <img
              src={image || '/fallback.jpg'}
              alt="about"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating Badge - Diperkecil di Mobile */}
          {acf.badge_text && (
            <div className="absolute -bottom-4 -right-2 rounded-2xl bg-[#cb997e] px-4 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-xl md:bottom-10 md:left-10 md:right-auto md:rounded-full md:px-8 md:py-4 md:text-sm">
              {acf.badge_text}
            </div>
          )}
          
          {/* Decorative Element */}
          <div className="absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-full bg-[#a5a58d]/10 blur-3xl" />
        </div>

      </div>
    </section>
  )
}