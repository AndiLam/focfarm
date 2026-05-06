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
      className="container mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24"
    >
      <div className="relative overflow-hidden rounded-3xl md:rounded-[48px] bg-gradient-to-br from-[#6b705c] to-[#a5a58d] p-6 sm:p-10 md:p-16 text-center text-white">

        {/* decorative blur circles */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#cb997e]/30 blur-3xl" />

        {/* CONTENT */}
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Partner With Modern Livestock Experts
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90">
            Let’s build a sustainable food supply together with high-quality livestock production
            and eco-friendly farming systems.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row justify-center">

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/contact"
              className="w-full sm:w-auto rounded-full bg-white px-6 py-3 text-sm sm:text-base font-semibold text-[#6b705c]"

            >
              Contact Us
            </motion.a>

            <Link
              href="/services"
              className="w-full sm:w-auto rounded-full border border-white/40 px-6 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-white/10"
            >
              Explore Services
            </Link>

          </div>
        </div>

      </div>
    </motion.section>
  )
}
