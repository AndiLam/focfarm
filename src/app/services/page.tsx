import ServiceCard from '@/components/card/service-card'
import { getServices } from '@/lib/wordpress.service'

export default async function ServicesPage() {
  const services = await getServices()

  console.log('🔥 SERVICES:', services)

  return (
    <section className="container mx-auto max-w-7xl px-6 pt-32 pb-24">

      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#a5a58d]">
          Services
        </p>

        <h1 className="mt-4 text-4xl font-bold text-[#6b705c] md:text-5xl">
          Sustainable Livestock Solutions
        </h1>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {services.map((item) => (
          <ServiceCard
            key={item.id}
            slug={item.slug}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}

      </div>

    </section>
  )
}
