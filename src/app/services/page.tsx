import ServiceCard from '@/components/card/service-card'
import { getServices } from '@/lib/wordpress.service'

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <section className="container mx-auto max-w-7xl px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a5a58d]">
          Our Services
        </p>

        <h1 className="mt-4 text-3xl font-bold leading-tight text-[#6b705c] sm:text-4xl md:text-6xl">
          Sustainable Livestock <br className="hidden md:block" /> Solutions
        </h1>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-2 lg:gap-8">
        {services.map((item, i) => (
          <div 
            key={item.id} 
            className={i === 2 ? "col-span-1 lg:col-span-1" : "col-span-1"}
          >
            <ServiceCard
              slug={item.slug}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </section>
  )
}