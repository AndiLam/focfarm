import { getGalleries } from '@/lib/wordpress.service'
import GalleryItem from '@/components/card/gallery-item'

export default async function GalleryPage() {
  const galleries = await getGalleries()

  return (
    <section className="container mx-auto max-w-7xl px-6 pt-32 pb-24">

      {/* HEADER */}
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#a5a58d]">
          Gallery
        </p>

        <h1 className="mt-4 text-4xl font-bold text-[#6b705c] md:text-5xl">
          Life Inside Our Farms
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          A glimpse into our daily livestock operations — from feeding,
          breeding, to sustainable production processes.
        </p>
      </div>

      {/* GRID (Masonry style) */}
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleries.map((item) => (
          <div key={item.id} className="mb-6 break-inside-avoid">
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
