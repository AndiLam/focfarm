'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {
  title: string
  slug: string
  image: string
  description: string
}

export default function ServiceCard({ title, slug, image, description }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.97 }}
      className="h-full"
    >
      <Link
        href={`/services/${slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-white p-3 shadow-sm transition-all hover:shadow-xl md:rounded-[32px] md:p-4"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] md:aspect-video md:rounded-2xl">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="flex flex-1 flex-col px-1 py-4 md:px-2">
          <h3 className="text-lg font-bold text-[#6b705c] md:text-2xl transition-colors group-hover:text-[#cb997e]">
            {title}
          </h3>

          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-500 md:text-base md:line-clamp-3">
            {description}
          </p>
          
          <div className="mt-auto pt-4 text-[10px] font-bold uppercase tracking-wider text-[#cb997e] md:text-xs">
            View Details →
          </div>
        </div>
      </Link>
    </motion.div>
  )
}