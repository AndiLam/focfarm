import { getPostBySlug } from '@/lib/wordpress.service'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params

  const blog = await getPostBySlug('posts', slug)

  if (!blog) {
    return (
      <div className="container mx-auto px-6 pt-32">
        <h1 className="text-2xl font-bold">Article not found</h1>
      </div>
    )
  }

  return (
    <section className="container mx-auto max-w-5xl px-6 pt-32 pb-24">

      <img
        src={blog.image}
        alt={blog.title}
        className="h-[500px] w-full rounded-[40px] object-cover"
      />

      <h1 className="mt-12 text-5xl text-[#6b705c]">
        {blog.title}
      </h1>

      <div
        className="mt-8 leading-8 text-gray-700"
        dangerouslySetInnerHTML={{
          __html: blog.content,
        }}
      />

    </section>
  )
}
