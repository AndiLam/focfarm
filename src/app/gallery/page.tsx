import { getGalleries } from '@/lib/wordpress.service'
import GalleryItem from '@/components/card/gallery-item'

export default async function GalleryPage() {
  const galleries = await getGalleries()

  return (
    <section className="container mx-auto max-w-7xl px-4 pb-24 pt-32 md:px-6 md:pt-40">
      {/* HEADER */}
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a5a58d]">
          Gallery
        </p>

        <h1 className="mt-4 text-3xl font-bold leading-tight text-[#6b705c] sm:text-4xl md:text-6xl">
          Life Inside <br className="md:hidden" /> Our Farms
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
          A glimpse into our daily livestock operations — from feeding,
          breeding, to sustainable production processes.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-5">
        {galleries.map((item, i) => (
          <div 
            key={item.id} 
            className={i % 4 === 0 ? "col-span-1" : "col-span-1"}
          >
            <GalleryItem
              src={item.image}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </section>
  )
}