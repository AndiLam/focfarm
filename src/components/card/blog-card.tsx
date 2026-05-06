'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {
  title: string
  slug: string
  image: string
}

export default function BlogCard({ title, slug, image }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={`/blog/${slug}`}
        className="group block overflow-hidden rounded-[32px] bg-white shadow-sm transition-all hover:shadow-xl"
      >
        <div className="relative h-56 overflow-hidden md:h-64">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-6 md:p-8">
          <h2 className="text-xl font-bold leading-tight text-[#6b705c] transition-colors group-hover:text-[#cb997e] md:text-2xl">
            {title}
          </h2>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a5a58d]">
            Read Article <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}