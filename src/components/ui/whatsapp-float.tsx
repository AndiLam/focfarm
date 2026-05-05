'use client'

import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function WhatsAppFloat() {
  const phoneNumber = '6281319841800'
  const message = encodeURIComponent(
    'Halo, saya tertarik dengan layanan FOC Farm. Bisa saya dapatkan informasi lebih lanjut?'
  )

  const waLink = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  )
}
