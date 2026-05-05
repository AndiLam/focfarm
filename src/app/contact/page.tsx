export default function ContactPage() {
  const whatsappLink =
    'https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda'

  return (
    <section className="container mx-auto max-w-7xl px-6 pt-32 pb-24">

      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-[#a5a58d]">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-bold text-[#6b705c] md:text-5xl">
            Let’s Work Together
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            We’re open for livestock supply, partnership opportunities,
            and consultation. Reach out to us and let’s discuss how we can
            collaborate.
          </p>

          {/* INFO */}
          <div className="mt-10 space-y-6 text-gray-700">

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">hello@focfarm.id</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone / WhatsApp</p>
              <p className="font-medium">+62 812 3456 7890</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-medium">Kabupaten Sukabumi, Jawa Barat, Indonesia</p>
            </div>

          </div>
        </div>

        {/* RIGHT - CARD STYLE */}
        <div className="rounded-[48px] bg-[#6b705c] p-10 text-white">

          <h2 className="text-3xl font-semibold">
            Quick Response Guaranteed
          </h2>

          <p className="mt-4 text-white/80">
            Our team is ready to respond quickly to your inquiries.
            Contact us directly via WhatsApp for faster communication.
          </p>

          {/* BENEFITS */}
          <div className="mt-10 space-y-4 text-white/90">

            <div className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-[#cb997e]" />
              <p>Fast response within 24 hours</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-[#cb997e]" />
              <p>Professional livestock consultation</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-[#cb997e]" />
              <p>Trusted by local partners & farms</p>
            </div>

          </div>

          {/* BIG CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            className="mt-10 block w-full rounded-full bg-white py-4 text-center font-medium text-[#6b705c] transition hover:opacity-90"
          >
            Start Conversation
          </a>

        </div>

      </div>

    </section>
  )
}
