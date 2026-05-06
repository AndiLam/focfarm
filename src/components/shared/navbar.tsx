'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const menu = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    if (open) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth

      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollBarWidth}px`
    } else {
      document.body.style.overflow = 'auto'
      document.body.style.paddingRight = '0px'
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.body.style.paddingRight = '0px'
    }
  }, [open])

  return (
    <header className="fixed left-0 top-0 z-50 w-full">

      <div className="container mx-auto max-w-7xl px-6 py-4">

        <div className="flex items-center justify-between rounded-full border border-white/30 bg-white/60 px-6 py-3 backdrop-blur-xl shadow-sm">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <p className="text-xl font-bold text-[#6b705c]">
              FOC FARM
            </p>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
            {menu.map((item) => {
              const active = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group text-sm font-medium text-[#2f2f2f]"
                >
                  {item.name}

                  {/* ACTIVE UNDERLINE */}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#6b705c]"
                    />
                  )}

                  {/* HOVER UNDERLINE */}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#6b705c] transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            })}
          </nav>

          {/* MOBILE BUTTON (MORPH) */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="relative h-6 w-6 md:hidden"
            animate={open ? 'open' : 'closed'}
          >
            {/* TOP */}
            <motion.span
              className="absolute left-0 top-1/2 h-[2px] w-6 -translate-y-1/2 bg-[#2f2f2f]"
              variants={{
                closed: { rotate: 0, y: -6 },
                open: { rotate: 45, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            />

            {/* MIDDLE */}
            <motion.span
              className="absolute left-0 top-1/2 h-[2px] w-6 -translate-y-1/2 bg-[#2f2f2f]"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.2 }}
            />

            {/* BOTTOM */}
            <motion.span
              className="absolute left-0 top-1/2 h-[2px] w-6 -translate-y-1/2 bg-[#2f2f2f]"
              variants={{
                closed: { rotate: 0, y: 6 },
                open: { rotate: -45, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white flex items-center justify-center"
          >

            {/* CONTENT */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center gap-8"
            >

              {/* CLOSE BUTTON */}
              <motion.button
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300"
              >
                <span className="relative block h-5 w-5">
                  <span className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 rotate-45 bg-black" />
                  <span className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 -rotate-45 bg-black" />
                </span>
              </motion.button>

              {/* MENU ITEMS */}
              {menu.map((item, i) => {
                const active = pathname === item.href

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`text-2xl font-semibold ${
                        active ? 'text-[#a4ae82]' : 'text-[#272727]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              })}

              {/* FOOTER */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 text-center"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Get in Touch
                </p>
                <p className="mt-2 font-medium text-[#6b705c]">
                  hello@focfarm.id
                </p>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  )
}
