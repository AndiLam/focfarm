'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ServicePreview() {
  const [services, setServices] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WP_API}/services?_embed`
      )

      const json = await res.json()

      const mapped = json.map((item: any) => ({
        id: item.id,
        slug: item.slug,
        title: item.title?.rendered,
        description: item.acf?.description || '',
        image:
          item._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
          '/fallback.jpg',
      }))

      setServices(mapped)
    }

    fetchData()
  }, [])

  return (
    <section className="container mx-auto max-w-7xl px-6 py-24">

      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#a5a58d]">
          Services
        </p>

        <h2 className="mt-4 text-4xl font-bold text-[#6b705c] md:text-5xl">
          What We Provide
        </h2>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {services.map((service, i) => (
          <motion.div
            key={service.id}
            whileHover={{ y: -8 }}
          >
            <Link
              href={`/services/${service.slug}`}
              className="block overflow-hidden rounded-[36px] bg-white shadow-sm"
            >

              <img
                src={service.image}
                className="h-56 w-full object-cover"
                alt={service.title}
              />

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#6b705c]">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {service.description}
                </p>
              </div>

            </Link>
          </motion.div>
        ))}

      </div>

    </section>
  )
}
