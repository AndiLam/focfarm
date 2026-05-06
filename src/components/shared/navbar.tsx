'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

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

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1 md:hidden"
          >
            <span className="h-[2px] w-6 bg-[#2f2f2f]" />
            <span className="h-[2px] w-6 bg-[#2f2f2f]" />
            <span className="h-[2px] w-6 bg-[#2f2f2f]" />
          </button>

        </div>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
          >
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
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 text-center"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Get in Touch</p>
              <p className="mt-2 font-medium text-[#6b705c]">hello@focfarm.id</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  )
}

