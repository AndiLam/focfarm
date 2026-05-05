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
      whileHover={{
        scale: 1.03,
        rotate: -1,
        y: -5,
      }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={`/services/${slug}`}
        className="block overflow-hidden rounded-[32px] bg-white p-4 shadow-sm"
      >
        <img
          src={image}
          alt={title}
          className="h-52 w-full rounded-3xl object-cover"
        />

        <h3 className="mt-6 text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-3 text-gray-600">
          {description}
        </p>
      </Link>
    </motion.div>
  )
}
