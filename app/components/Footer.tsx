import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* Footer CTA Bar - dark background, headline + red button, separator below */}
      <div className="bg-(--footer-bg) text-white py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <h2 className="text-xl sm:text-2xl font-bold text-left">
            Get started with
            <br />
            Elite Processing
          </h2>
          <Link
            href="/#start"
            className="bg-(--red) hover:bg-(--red-dark) text-white px-8 py-3 rounded-lg font-semibold transition-colors shrink-0"
          >
            Start Fundraising
          </Link>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="border-t border-white/20" />
        </div>
      </div>

      {/* Main Footer - dark, 4 columns */}
      <footer className="bg-(--footer-bg) text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-14">
            {/* Column 1: Logo + Social */}
            <div>
              <Link href="/" className="inline-block relative h-10 w-[200px] sm:h-12 sm:w-[240px] mb-4">
                <Image
                  src="/logo.jpg"
                  alt="Donate Money Now"
                  className="object-contain object-left"
                  width={240}
                  height={100}
                />
              </Link>
              <div className="flex items-center gap-4">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:support@eliteprocessing.com"
                    className="text-white/90 hover:text-white transition-colors text-sm"
                  >
                    support@eliteprocessing.com
                  </a>
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+15551234567"
                    className="text-white/90 hover:text-white transition-colors text-sm"
                  >
                    +1 (555) 123-4567
                  </a>
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
                  <span className="text-white/90 text-sm">
                    123 Business St, Suite 100
                    <br />
                    New York, NY 10001
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom: Copyright + Legal */}
          <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm order-2 sm:order-1">
              © {new Date().getFullYear()} Elite Processing. All rights reserved.
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
