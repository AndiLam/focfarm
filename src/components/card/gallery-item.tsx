'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

type Props = {
  src: string
  description?: string
}

export default function GalleryItem({ src, description }: Props) {
  const [open, setOpen] = useState(false)

  // Lock body scroll saat modal buka
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
  }, [open])

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
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.97 }}
        className="group relative cursor-pointer overflow-hidden rounded-2xl md:rounded-[32px]"
        onClick={() => setOpen(true)}
      >
        {/* IMAGE */}
        <motion.img
          src={src}
          alt="gallery"
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110 md:aspect-[4/5]"
        />

        {/* OVERLAY - Muncul halus saat hover di desktop, selalu ada gradasi tipis di mobile */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="p-4 text-white md:p-6">
            <p className="text-xs font-medium leading-relaxed md:text-sm">
              {description || 'Livestock activity'}
            </p>
          </div>
        </div>
      </motion.div>

      {/* MODAL / LIGHTBOX */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            {/* CLOSE BTN - Lebih besar & mudah diklik di mobile */}
            <button
              className="absolute right-6 top-6 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={() => setOpen(false)}
            >
              <span className="text-2xl">✕</span>
            </button>

            <motion.div 
              className="relative max-h-full max-w-5xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Mencegah klik gambar ikut nutup modal
            >
              <img
                src={src}
                className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
                alt="preview"
              />
              {description && (
                <div className="mt-4 text-center text-white/80">
                  <p className="text-sm italic md:text-base">"{description}"</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}