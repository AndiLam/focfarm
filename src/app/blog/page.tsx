import BlogCard from '@/components/card/blog-card'
import { getPosts } from '@/lib/wordpress.service'

export const revalidate = 3600

export default async function BlogPage() {
  const blogs = await getPosts('posts')

  return (
    <section className="container mx-auto max-w-7xl px-4 pb-24 pt-32 md:px-6 md:pt-40">
      {/* HEADER */}
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a5a58d]">
          Knowledge Center
        </p>

        <h1 className="mt-4 text-3xl font-bold leading-tight text-[#6b705c] sm:text-4xl md:text-6xl">
          Livestock Insights <br className="hidden md:block" /> & Articles
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-lg">
          Explore modern farming knowledge, sustainable livestock practices,
          and industry insights to improve productivity and animal welfare.
        </p>
      </div>

      {/* GRID */}
      {blogs.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {blogs.map((item) => (
            <BlogCard
              key={item.id}
              title={item.title}
              slug={item.slug}
              image={item.image}
            />
          ))}
        </div>
      ) : (
        <div className="mt-20 text-center text-gray-400">
          <p>No articles found at the moment.</p>
        </div>
      )}
    </section>
  )
}