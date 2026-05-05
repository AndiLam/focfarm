'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

type Props = {
  src: string
  description?: string
}

export default function GalleryItem({ src, description }: Props) {
  const [open, setOpen] = useState(false)

  // ESC support
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <>
      {/* CARD */}
      <motion.div
        whileHover={{ scale: 1.03, rotate: -1, y: -5 }}
        transition={{ duration: 0.3 }}
        className="relative cursor-pointer overflow-hidden rounded-[32px]"
        onClick={() => setOpen(true)}
      >
        {/* IMAGE */}
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
          src={src}
          alt="gallery"
          className="aspect-[4/3] w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition hover:opacity-100">
          <div className="p-6 text-white">
            <p className="text-sm">
              {description || 'Livestock activity'}
            </p>
          </div>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.img
              src={src}
              className="max-h-[90vh] max-w-full rounded-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />

            {/* CLOSE BTN */}
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
