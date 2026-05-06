'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ServicePreview() {
  const [services, setServices] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API}/services?_embed`)
        const json = await res.json()

        const mapped = json.map((item: any) => ({
          id: item.id,
          slug: item.slug,
          title: item.title?.rendered,
          description: item.acf?.description || '',
          image: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/fallback.jpg',
        }))

        setServices(mapped)
      } catch (err) {
        console.error("Failed to fetch services", err)
      }
    }
    fetchData()
  }, [])

  return (
    <section className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      {/* HEADER */}
      <div className="mb-10 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a5a58d]">
          Services
        </p>
        <h2 className="mt-2 text-2xl font-bold leading-tight text-[#6b705c] sm:text-4xl md:text-5xl">
          What We Provide
        </h2>
      </div>

      {/* GRID: Menggunakan slice(0, 4) untuk membatasi item */}
      <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
        {services.slice(0, 4).map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="col-span-1"
          >
            <Link
              href={`/services/${service.slug}`}
              className="group relative block h-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all active:scale-[0.97]"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={service.image}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                  <h3 
                    className="text-sm font-bold leading-tight md:text-xl"
                    dangerouslySetInnerHTML={{ __html: service.title }}
                  />
                  <p className="mt-2 hidden text-xs opacity-80 line-clamp-2 md:block">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* VIEW ALL BUTTON (Muncul jika ada lebih dari 4 service) */}
      <div className="mt-12 flex justify-center">
        <Link 
          href="/services"
          className="text-sm font-bold uppercase tracking-widest text-[#cb997e] transition-colors hover:text-[#6b705c]"
        >
          View All Services <span className="ml-1">→</span>
        </Link>
      </div>
    </section>
  )
}