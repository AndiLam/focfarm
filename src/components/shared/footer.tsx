import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-32 bg-[#6b705c] text-white">

      <div className="container mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* BRAND */}
          <div className="text-center md:text-left">
            <img
              src="/images/logo.png"
              className="mx-auto h-16 w-auto md:mx-0 md:h-20"
              alt="logo"
            />

            <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-white/80 md:mx-0">
              Modern livestock farming company focused on sustainable,
              ethical, and high-quality production systems.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold">
              Navigation
            </h4>

            <div className="mt-5 flex flex-col items-center gap-3 text-sm text-white/80 md:items-start">

              <Link href="/about" className="transition hover:text-white">
                About
              </Link>

              <Link href="/services" className="transition hover:text-white">
                Services
              </Link>

              <Link href="/gallery" className="transition hover:text-white">
                Gallery
              </Link>

              <Link href="/blog" className="transition hover:text-white">
                Blog
              </Link>

              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>

            </div>
          </div>

          {/* CONTACT */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold">
              Contact
            </h4>

            <div className="mt-5 space-y-2 text-sm text-white/80">
              <p>hello@company.com</p>
              <p>+62 812 3456 7890</p>
              <p>Indonesia</p>
            </div>

            {/* TRUST BADGE */}
            <div className="mx-auto mt-6 max-w-xs rounded-2xl bg-white/10 p-5 text-sm text-white/80 backdrop-blur md:mx-0">
              ✔ Fast response <br />
              ✔ Sustainable farming partner <br />
              ✔ Trusted livestock supplier
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col items-center justify-center gap-3 border-t border-white/20 pt-6 text-center text-sm text-white/60 md:flex-row md:justify-center md:text-left">
          <p>
            © {new Date().getFullYear()} Company. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
