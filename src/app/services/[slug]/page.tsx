import { getServiceBySlug } from '@/lib/wordpress.service'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function ServiceDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <article className="container mx-auto max-w-5xl px-4 pb-24 pt-32 md:px-6 md:pt-40">
      {/* Tombol Kembali - Jarak diperkecil di mobile */}
      <Link 
        href="/services" 
        className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#a5a58d] hover:text-[#cb997e] transition-colors md:text-sm"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Services
      </Link>

      {/* Grid Layout: Stack di mobile, Grid di Desktop (jika ingin) */}
      <div className="mt-8 flex flex-col gap-10 md:mt-12 lg:flex-row lg:items-start">
        
        {/* Gambar: Disesuaikan agar tidak terlalu memakan tempat di mobile */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
          <div className="aspect-video overflow-hidden rounded-[32px] shadow-xl md:aspect-[4/5] md:rounded-[48px] lg:rounded-[60px]">
            <img 
              src={service.image} 
              alt={service.title} 
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
            />
          </div>
        </div>

        {/* Konten Teks: Penyesuaian ukuran font */}
        <div className="w-full lg:w-7/12">
          <h1 
            className="text-3xl font-bold leading-tight text-[#6b705c] md:text-5xl lg:text-6xl"
            dangerouslySetInnerHTML={{ __html: service.title }}
          />
          
          <div className="mt-6 h-1.5 w-20 rounded-full bg-[#cb997e]/20" />
          
          {/* Konten Deskripsi dengan Typography style */}
          <div className="prose prose-slate mt-8 max-w-none text-base leading-relaxed text-gray-600 md:prose-lg md:text-lg">
            <div dangerouslySetInnerHTML={{ __html: service.description }} />
          </div>

          {/* Optional: Tambahan tombol CTA di bawah deskripsi */}
          <div className="mt-12">
            <Link 
              href="/contact"
              className="inline-block rounded-full bg-[#6b705c] px-8 py-4 text-sm font-bold text-white transition-transform active:scale-95"
            >
              Inquire About This Service
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}