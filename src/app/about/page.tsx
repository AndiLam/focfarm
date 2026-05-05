import { resolveImage } from '@/lib/image'

export default async function AboutPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API}/pages?slug=about&_embed`,
    { cache: 'no-store' }
  )

  const json = await res.json()
  const about = json?.[0]

  console.log('🔥 ABOUT RAW:', json)

  if (!about) return <div>Not found</div>

  const acf = about.acf || {}

const image = await resolveImage(
  about?._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
  about?.acf?.image ||
  '/fallback.jpg'
)


  console.log('🖼️ ABOUT IMAGE:', image)

  return (
    <section className="container mx-auto max-w-7xl px-6 pt-32 pb-24">

      <div className="grid items-center gap-12 lg:grid-cols-2">

        {/* TEXT */}
        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-[#a5a58d]">
            About Us
          </p>

          <h1
            className="mt-4 text-4xl font-bold text-[#6b705c] md:text-5xl"
            dangerouslySetInnerHTML={{
              __html: about.title?.rendered || '',
            }}
          />

          <div
            className="mt-6 text-lg leading-8 text-gray-700"
            dangerouslySetInnerHTML={{
              __html: acf.description || about.content?.rendered || '',
            }}
          />

          {/* VALUE */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-[28px] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">
                {acf.vision_title}
              </h3>
              <p className="mt-3 text-gray-600 whitespace-pre-line">
                {acf.vision_desc}
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">
                {acf.mission_title}
              </h3>
              <p className="mt-3 text-gray-600 whitespace-pre-line">
                {acf.mission_desc}
              </p>
            </div>

          </div>

        </div>

        {/* IMAGE */}
        <div className="relative">
          <img
            src={image || '/fallback.jpg'}
            alt="about"
            className="h-full w-full rounded-[48px] object-cover"
          />

          {acf.badge_text && (
            <div className="absolute bottom-6 left-6 rounded-full bg-white/90 px-5 py-3 text-sm font-medium text-[#6b705c] shadow-sm backdrop-blur">
              {acf.badge_text}
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
