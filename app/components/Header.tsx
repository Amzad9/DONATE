'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed w-full top-0 z-[100] bg-[var(--hero-dark)] border-b border-white/10">
      <nav
        className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 relative z-[100] ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="block relative h-9 w-[180px] sm:h-10 sm:w-[200px]">
              <Image
                src="/logo.jpg"
                alt="Donate Money Now"
                fill
                className="object-contain object-left"
                sizes="220px"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - 5 links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/#features"
              className="text-white/90 hover:text-white font-medium transition-colors text-[15px]"
            >
              Platform
            </Link>
            <Link
              href="/solutions"
              className="text-white/90 hover:text-white font-medium transition-colors text-[15px]"
            >
              Solutions
            </Link>
            <Link
              href="/churches-nonprofits"
              className="text-white/90 hover:text-white font-medium transition-colors text-[15px]"
            >
              Churches & Nonprofits
            </Link>
            <Link
              href="/pricing"
              className="text-white/90 hover:text-white font-medium transition-colors text-[15px]"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-white/90 hover:text-white font-medium transition-colors text-[15px]"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/#start"
              className="bg-(--red) hover:bg-(--red-dark) text-white px-6 py-2.5 rounded-lg font-semibold text-[15px] transition-colors"
            >
              Start Donating
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - dark theme */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full bg-[var(--hero-dark)] border-b border-white/10 shadow-xl transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
          }`}
          style={{ zIndex: 99 }}
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/90 hover:text-white hover:bg-white/5 font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Platform
              </Link>
              <Link
                href="/#solutions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/90 hover:text-white hover:bg-white/5 font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="/#solutions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/90 hover:text-white hover:bg-white/5 font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Churches & Nonprofits
              </Link>
              <Link
                href="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/90 hover:text-white hover:bg-white/5 font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/90 hover:text-white hover:bg-white/5 font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Contact
              </Link>
              <div className="pt-4 mt-4 border-t border-white/10">
                <Link
                  href="/#start"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-(--red) hover:bg-(--red-dark) text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Start Donating
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/40 z-[98] top-[57px]"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </nav>
    </header>
  );
}
