'use client'

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

        // ambil 3 aja
        setGalleries(data.slice(0, 3))
      } catch (err) {
        console.log('Gallery error:', err)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="container mx-auto max-w-7xl px-6 py-24">

      {/* HEADER */}
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#a5a58d]">
          Gallery
        </p>

        <h2 className="mt-4 text-4xl font-bold text-[#6b705c] md:text-5xl">
          Our Farm Moments
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Capturing daily life in our livestock farms.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {galleries.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
            }}
          >
            <GalleryItem
              src={item.image}
              description={item.description}
            />
          </motion.div>
        ))}
      </div>

    </section>
  )
}
