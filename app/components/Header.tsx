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
    <header className="fixed w-full top-0 z-100 bg-darkSoft border-b border-white/10">
      <nav
        className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 relative z-100 ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="block">
              <Image
                src="/DMNFinal.jpg"
                alt="Donate Money Now"
                className=""
                width={300}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - 5 links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-white/90 hover:text-white font-medium transition-colors text-[15px]"
            >
              Platform
            </Link>
            <Link
              href="/political-campaigns"
              className="text-white/90 hover:text-white font-medium transition-colors text-[15px]"
            >
              Political Campaigns
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
              href="/contact"
              className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold text-[15px] transition-colors"
            >
              Start Fundraising
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

        {/* Mobile overlay - tap to close */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/50 z-[98] transition-opacity duration-300 ease-out ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile Menu - right-side drawer */}
        <div
          className={`lg:hidden fixed top-0 right-0 bottom-0 w-full max-w-[320px] bg-darkSoft border-l border-white/10 shadow-2xl z-[99] transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col h-full pt-20 pb-6 px-6">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/90 hover:text-white hover:bg-white/5 font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Platform
              </Link>
              <Link
                href="/political-campaigns"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/90 hover:text-white hover:bg-white/5 font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Political Campaigns
              </Link>
              <Link
                href="/churches-nonprofits"
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
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Start Fundraising
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
}
