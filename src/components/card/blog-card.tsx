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
      whileHover={{
        scale: 1.03,
        rotate: -1,
        y: -5,
      }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={`/blog/${slug}`}
        className="block overflow-hidden rounded-[32px] bg-white shadow-sm"
      >
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover"
        />

        <div className="p-8">
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
      </Link>
    </motion.div>
  )
}
