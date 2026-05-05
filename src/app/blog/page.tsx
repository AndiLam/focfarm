import BlogCard from '@/components/card/blog-card'
import { getPosts } from '@/lib/wordpress.service'

export default async function BlogPage() {
  const blogs = await getPosts('posts')

  return (
    <section className="container mx-auto max-w-7xl px-6 pt-32 pb-24">

      {/* HEADER */}
      <div className="text-center">

        <p className="text-sm uppercase tracking-[0.3em] text-[#a5a58d]">
          Knowledge Center
        </p>

        <h1 className="mt-4 text-4xl font-bold text-[#6b705c] md:text-5xl">
          Livestock Insights & Articles
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Explore modern farming knowledge, sustainable livestock practices,
          and industry insights to improve productivity and animal welfare.
        </p>

      </div>

      {/* GRID */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((item) => (
          <BlogCard
            key={item.id}
            title={item.title}
            slug={item.slug}
            image={item.image}
          />
        ))}
      </div>

    </section>
  )
}
