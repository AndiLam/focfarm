'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="container mx-auto max-w-7xl px-6 py-24"
    >
      <div className="relative overflow-hidden rounded-48px bg-linear-to-br from-[#6b705c] to-[#a5a58d] p-12 text-center text-white md:p-20">

        {/* decorative blur circles */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#cb997e]/30 blur-3xl" />

        {/* CONTENT */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold md:text-5xl">
            Partner With Modern Livestock Experts
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Let’s build a sustainable food supply together with high-quality livestock production
            and eco-friendly farming systems.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/contact"
              className="rounded-full bg-white px-8 py-4 font-semibold text-[#6b705c] transition"
            >
              Contact Us
            </motion.a>

            <Link
              href="/services"
              className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Services
            </Link>

          </div>
        </div>

      </div>
    </motion.section>
  )
}
