'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getGalleries } from '@/lib/wordpress.service'
import GalleryItem from '@/components/card/gallery-item'

type Gallery = {
  id: number
  image: string
  description: string
}

export default function GalleryPreview() {
  const [galleries, setGalleries] = useState<Gallery[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGalleries()

        setGalleries(data.slice(0, 4))
      } catch (err) {}
    }

    fetchData()
  }, [])

  return (
    <section className="container mx-auto max-w-7xl px-6 py-16 md:py-24">

      {/* HEADER */}
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a5a58d]">
          Gallery
        </p>

        <h2 className="mt-4 text-3xl font-bold leading-tight text-[#6b705c] sm:text-4xl md:text-5xl">
          Our Farm Moments
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-gray-600 px-4">
          Capturing daily life in our livestock farms.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-center">
        {galleries.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
            }}
            className={`${
              i === 2 ? "col-span-1 md:col-span-1" : "col-span-1"
            }`}
          >
          <div className="group relative aspect-square overflow-hidden rounded-2xl md:rounded-[32px]">  
            <GalleryItem
              src={item.image}
              description={item.description}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 md:block" />
          </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link 
          href="/gallery"
          className="text-sm font-bold uppercase tracking-widest text-[#cb997e] transition-colors hover:text-[#6b705c]"
        >
          View All Galleries <span className="ml-1">→</span>
        </Link>
      </div>
    </section>
  )
}
