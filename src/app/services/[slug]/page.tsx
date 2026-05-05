import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/lib/wordpress.service'

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const service = await getServiceBySlug(slug)

  if (!service) return notFound()

  return (
    <section className="container mx-auto max-w-7xl px-6 pt-32 pb-24">

      <div className="max-w-4xl">

        <img
          src={service.image}
          alt={service.title}
          className="mt-12 w-full rounded-[40px] object-cover"
        />

        <p className="mt-6 text-lg text-gray-700">
          {service.description}
        </p>

      </div>

    </section>
  )
}
