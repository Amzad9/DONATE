import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* Footer CTA Bar - dark background, headline + red button, separator below */}
      <div className="bg-darkSoft text-white pt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <h2 className="text-xl sm:text-2xl font-bold text-left">
            Donate Money Now
          </h2>
          <Link
            href="/#start"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors shrink-0"
          >
            Start Fundraising
          </Link>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="border-t border-white/20" />
        </div>
      </div>

      {/* Main Footer - dark, 4 columns */}
      <footer className="bg-darkSoft text-white py-3 sm:pt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-5">
            {/* Column 1: Logo + Social */}
            <div>
              <Link href="/" className="inline-block relative h-10 w-50 sm:h-12 sm:w-[240px] mb-4">
                {/* <Image
                  src="/DMNLogo.png"
                  alt="Donate Money Now"
                  className="object-contain object-left"
                  width={240}
                  height={100}
                /> */}
                 <Image
                src="/logo-h2 1.png"
                alt="Donate Money Now"
                className=""
                width={120}
                height={50}
                priority
              />
              </Link>
           
            </div>

            {/* Column 2: Our Solution */}
            <div>
              <h4 className="font-bold text-base mb-4">Our Solution</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/#solutions" className="text-white/90 hover:text-white transition-colors text-sm">
                    Federal Campaigns
                  </Link>
                </li>
                <li>
                  <Link href="/#solutions" className="text-white/90 hover:text-white transition-colors text-sm">
                    Political Organizations
                  </Link>
                </li>
                <li>
                  <Link href="/#solutions" className="text-white/90 hover:text-white transition-colors text-sm">
                    State & Local
                  </Link>
                </li>
                <li>
                  <Link href="/#solutions" className="text-white/90 hover:text-white transition-colors text-sm">
                    Nonprofits
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="font-bold text-base mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/#features" className="text-white/90 hover:text-white transition-colors text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#solutions" className="text-white/90 hover:text-white transition-colors text-sm">
                    Solution
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-white/90 hover:text-white transition-colors text-sm">
                    Price
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-white/90 hover:text-white transition-colors text-sm">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-white/90 hover:text-white transition-colors text-sm">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h4 className="font-bold text-base mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-white/80 mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="text-white/90 text-sm">
                    <div>
                      <span className="font-medium">Local:</span>{" "}
                      <a href="tel:+12403299424" className="hover:text-white transition-colors">
                        (240) 329-9424
                      </a>
                    </div>
                    <div className="mt-1">
                      <span className="font-medium">Toll-Free:</span>{" "}
                      <a href="tel:+18774158627" className="hover:text-white transition-colors">
                        (877) 415-8627
                      </a>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-white/80 mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="text-white/90 text-sm">
                    <span className="font-medium">Visit:</span>
                    <br />
                    13701 Maugansville Rd #5
                    <br />
                    Hagerstown, MD 21740
                  </div>
                </li>
              </ul>
                 <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-opacity"
                  aria-label="X (Twitter)"
                >
                  <span className="text-lg font-bold">X</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-opacity font-semibold"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-opacity"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-opacity text-sm font-semibold"
                  aria-label="LinkedIn"
                >
                  in
                </a>
              </div>
            </div>
          </div>

          {/* Bottom: Copyright + Legal */}
          <div className="border-t border-white/20 pt-3 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm order-2 sm:order-1">
             Donate Money Now © {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm order-1 sm:order-2">
              <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/60">|</span>
              <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
