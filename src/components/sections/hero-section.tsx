import { getHero } from '@/lib/wordpress.service'
import HeroClient from './hero-section.client'

export default async function HeroSection() {
  const hero = await getHero()
  
  if (!hero) return null

  return <HeroClient hero={hero} />
}
