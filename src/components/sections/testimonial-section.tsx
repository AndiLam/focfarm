'use client'

import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { resolveImage } from '@/lib/image'

import 'swiper/css'
import 'swiper/css/pagination'

type Testimonial = {
  id: number
  quote: string
  name: string
  role: string
  image: string 
}

export default function TestimonialSection() {
  const [data, setData] = useState<Testimonial[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WP_API}/testimonials?_embed`
        )

        const json = await res.json()
        const items = json || []

        const mapped: Testimonial[] = await Promise.all(
          items.map(async (item: any) => {
            const image = await resolveImage(
              item.acf?.image ||
              item._embedded?.['wp:featuredmedia']?.[0]
            )

            return {
              id: item.id,
              quote: item.acf?.quote || '',
              name: item.acf?.name || '',
              role: item.acf?.role || '',
              image,
            }
          })
        )

        setData(mapped)
      } catch (err) {
        console.log('TESTIMONIAL ERROR:', err)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="rounded-[48px] bg-[#6b705c] px-8 py-16 text-white md:px-16">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#cb997e]">
            Testimonial
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Trusted by Farmers & Partners
          </h2>
        </div>

        {/* SWIPER */}
        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-md">

                  <p className="text-lg text-white/90">
                    “{item.quote}”
                  </p>

                  <div className="mt-8 flex items-center gap-4 border-t border-white/20 pt-6">

                    <img
                      src={item.image}
                      className="h-12 w-12 rounded-full object-cover"
                      alt={item.name}
                    />

                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-300">{item.role}</p>
                    </div>

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  )
}
