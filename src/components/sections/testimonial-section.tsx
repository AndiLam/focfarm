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
      } catch (err) {}
    }

    fetchData()
  }, [])

  return (
    <section className="container mx-auto px-6 py-24">
     <div className="rounded-[40px] md:rounded-[60px] bg-[#6b705c] px-6 py-14 md:px-12 md:py-20 text-white">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#cb997e]">
            Testimonial
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-bold">
            Trusted by Farmers & Partners
          </h2>
        </div>

        {/* SWIPER */}
        <div className="mt-14">
          <Swiper
            className="pb-12"
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
                <div className="flex h-full flex-col justify-between rounded-3xl bg-white/5 p-6 md:p-10">

                 <p className="text-lg italic leading-relaxed md:text-xl">
                    “{item.quote}”
                  </p>

                  <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">

                    <img
                      src={item.image}
                      className="h-14 w-14 rounded-full border-2 border-[#cb997e]/30 object-cover"
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
