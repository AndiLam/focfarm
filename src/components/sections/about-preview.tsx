'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AboutPreview() {
  const [about, setAbout] = useState<any>(null)
  const [image, setImage] = useState<string>('')

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WP_API}/pages?slug=about&_embed`
        )

        const json = await res.json()
        const data = json?.[0]

        if (!data) return

        if (isMounted) setAbout(data)

        const img =
          data?._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
          data?.acf?.image ||
          '/fallback.jpg'

        if (isMounted) {
          setImage(img)
        }

      } catch (err) {}
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [])

  if (!about) return null

  const acf = about.acf || {}

  return (
   <section className="container mx-auto px-4 sm:px-6 py-16 md:py-24">

      <div className="grid items-center gap-12 lg:grid-cols-2">

        {/* IMAGE */}
        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-[4/3] w-full overflow-hidden rounded-3xl md:aspect-square md:rounded-[48px]"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src={image}
              alt="about"
              className="h-full w-full object-cover"
            />
          </motion.div>
        )}

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <p className="text-sm uppercase tracking-[0.3em] text-[#a5a58d]">
            About Us
          </p>

          <h2
            className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-[#6b705c]"
            dangerouslySetInnerHTML={{
              __html: about.title?.rendered || '',
            }}
          />

          <p className="mt-4 text-base sm:text-lg text-gray-700">
            {acf.short_description}
          </p>

          {/* HIGHLIGHT */}
          <div className="mt-8 space-y-4">

            <div className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-[#cb997e]" />
              <p>Ethical and sustainable livestock practices</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-[#cb997e]" />
              <p>Data-driven farming system for efficiency</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-[#cb997e]" />
              <p>High-quality livestock for market supply</p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}
