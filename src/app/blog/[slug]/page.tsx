import { getPostBySlug } from '@/lib/wordpress.service'
import Link from 'next/link'
import ShareButtons from '@/components/link/share-buttons'

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
      <div className="container mx-auto flex h-[60vh] items-center justify-center px-6 pt-32">
        <h1 className="text-2xl font-bold text-gray-400">Article not found</h1>
      </div>
    )
  }

  return (
    <section className="container mx-auto max-w-4xl px-4 pb-24 pt-32 md:px-6 md:pt-40">
      {/* Breadcrumb */}
      <Link 
        href="/blog" 
        className="mb-8 inline-block text-xs font-bold uppercase tracking-widest text-[#a5a58d] hover:text-[#cb997e]"
      >
        ← Back to Insights
      </Link>

      <div className="overflow-hidden rounded-[32px] shadow-2xl md:rounded-[48px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="aspect-video w-full object-cover md:h-[500px]"
        />
      </div>

      <header className="mt-10 md:mt-16">
        <h1 className="text-3xl font-bold leading-tight text-[#6b705c] md:text-5xl lg:text-6xl">
          {blog.title}
        </h1>
        {/* Kamu bisa tambahkan tanggal atau kategori di sini jika ada datanya */}
        <div className="mt-6 h-1 w-20 bg-[#cb997e] rounded-full" />
      </header>

      {/* Artikel Content - Menggunakan Tailwind Typography (prose) */}
      <div
        className="prose prose-slate prose-lg mt-10 max-w-none text-gray-700 
                   prose-headings:text-[#6b705c] prose-headings:font-bold
                   prose-img:rounded-3xl prose-a:text-[#cb997e]"
        dangerouslySetInnerHTML={{
          __html: blog.content,
        }}
      />

      <footer className="mt-20">
        <ShareButtons 
          title={blog.title} 
          url={`/blog/${slug}`} 
        />
      </footer>
    </section>
  )
}