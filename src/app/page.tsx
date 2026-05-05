
import HeroSection from '@/components/sections/hero-section'
import AboutPreview from '@/components/sections/about-preview'
import ServicePreview from '@/components/sections/service-preview'
import GalleryPreview from '@/components/sections/gallery-preview'
import TestimonialSection from '@/components/sections/testimonial-section'
import CTASection from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <main>

      <HeroSection />

      <AboutPreview />

      <ServicePreview />

      <GalleryPreview />

      <TestimonialSection />

      <CTASection />

    </main>
  )
}