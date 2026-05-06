'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const whatsappLink =
    'https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda'

  return (
    <section className="container mx-auto max-w-7xl px-6 pb-24 pt-32 md:pt-40 lg:px-8">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        
        {/* LEFT SIDE: Content & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a5a58d]">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-[1.1] text-[#6b705c] md:text-5xl lg:text-6xl">
            Let’s Work <br /> Together
          </h1>

          <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
            We’re open for livestock supply, partnership opportunities,
            and consultation. Reach out to us and let’s discuss how we can
            collaborate for a sustainable future.
          </p>

          {/* CONTACT LIST */}
          <div className="mt-12 space-y-8">
            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#a5a58d]/10 text-[#a5a58d]">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Email</p>
                <p className="text-lg font-semibold text-[#6b705c]">hello@focfarm.id</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#a5a58d]/10 text-[#a5a58d]">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Phone / WhatsApp</p>
                <p className="text-lg font-semibold text-[#6b705c]">+62 812 3456 7890</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#a5a58d]/10 text-[#a5a58d]">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Location</p>
                <p className="text-lg font-semibold text-[#6b705c]">Sukabumi, Jawa Barat, Indonesia</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Card Style */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden rounded-[40px] bg-[#6b705c] p-8 md:p-12 text-white shadow-2xl lg:rounded-[56px]"
        >
          {/* Dekorasi lingkaran di belakang (Optional) */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Quick Response Guaranteed
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Our team is dedicated to providing you with the best service. 
              Contact us directly via WhatsApp for a faster response regarding orders or consultations.
            </p>

            {/* BENEFITS LIST */}
            <div className="mt-10 space-y-5">
              {[
                "Fast response within 24 hours",
                "Professional livestock consultation",
                "Trusted by local partners & farms"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#cb997e] text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm font-medium md:text-base">{benefit}</p>
                </div>
              ))}
            </div>

            {/* BIG CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 flex w-full items-center justify-center gap-3 rounded-full bg-white py-5 text-center font-bold text-[#6b705c] transition-all hover:bg-[#ddbea9] hover:text-white active:scale-95"
            >
              <MessageCircle size={20} />
              Start Conversation
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}