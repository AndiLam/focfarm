'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type Hero = {
  title: string
  description: string
  image: string
  ctaPrimaryText: string
  ctaPrimaryLink: string
  ctaSecondaryText: string
  ctaSecondaryLink: string
}

export default function HeroClient({ hero }: { hero: Hero }) {
  return (
    <section className="relative h-[90vh] md:h-screen overflow-hidden">
      {/* BACKGROUND */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src={hero.image}
          alt="hero"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6">

        <div className="max-w-3xl text-center text-white">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold leading-[1.1] sm:text-5xl md:text-7xl px-2"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-base leading-relaxed text-gray-200 px-4 opacity-90"
          >
            {hero.description}
          </motion.p>

          <div className="mt-10 flex flex-col gap-4 px-6 sm:flex-row sm:justify-center sm:px-0">

            <a
              href={hero.ctaPrimaryLink}
              className="w-full sm:w-auto rounded-full bg-[#cb997e] px-8 py-4 text-center font-medium transition-transform active:scale-95"
            >
              {hero.ctaPrimaryText}
            </a>

            <a
              href={hero.ctaSecondaryLink}
              className="w-full sm:w-auto rounded-full border border-white/40 px-8 py-4 text-center font-medium transition-transform active:scale-95"
            >
              {hero.ctaSecondaryText}
            </a>

          </div>

        </div>
      </div>

    </section>
  )
}
