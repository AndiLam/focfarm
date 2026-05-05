import type { Metadata } from 'next'
import './globals.css'
import RouteLoader from '@/components/ui/route-loader'
import PageTransition from '@/components/transition/page-transition'

import { Inter, Playfair_Display } from 'next/font/google'

import Navbar from '@/components/shared/navbar'
import Footer from '@/components/shared/footer'
import WhatsAppFloat from '@/components/ui/whatsapp-float'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Company Profile',
  description: 'Modern Company Profile Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-[#f5f1ea] text-[#2f2f2f] antialiased`}>
        <RouteLoader />
          <Navbar />
          <PageTransition>
            {children}
              <WhatsAppFloat />
            <Footer />
          </PageTransition>
      </body>
    </html>
  )
}
