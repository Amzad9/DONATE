'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full top-0 z-[100]">
        <nav className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 relative z-[100] ${isScrolled ? 'mt-0' : 'mt-4'}`}>
          <div className={`flex justify-between items-center py-4 px-6 rounded-2xl transition-all duration-300 relative z-[100] ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg' 
              : 'bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-md'
          }`}>
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-3 shadow-lg" style={{background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)'}}>
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Elite Donate</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors text-base">Features</Link>
              <Link href="#solutions" className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors text-base">Solutions</Link>
              <Link href="#pricing" className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors text-base">Pricing</Link>
              <Link href="#support" className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors text-base">Support</Link>
              <Link href="#about" className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors text-base">About</Link>
            </div>
            
            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="#login" className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors text-base">Log In</Link>
              <Link href="#start" className="text-white px-6 py-2.5 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105" style={{background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)'}}>
                Start Fundraising
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed inset-x-0 top-0 mt-20 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-4'
            }`}
            style={{ zIndex: 99 }}
          >
            <div className="container mx-auto px-4 sm:px-6 py-6">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#features"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors text-base py-2 px-4 rounded-lg hover:bg-gray-50"
                >
                  Features
                </Link>
                <Link
                  href="#solutions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors text-base py-2 px-4 rounded-lg hover:bg-gray-50"
                >
                  Solutions
                </Link>
                <Link
                  href="#pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors text-base py-2 px-4 rounded-lg hover:bg-gray-50"
                >
                  Pricing
                </Link>
                <Link
                  href="#support"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors text-base py-2 px-4 rounded-lg hover:bg-gray-50"
                >
                  Support
                </Link>
                <Link
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors text-base py-2 px-4 rounded-lg hover:bg-gray-50"
                >
                  About
                </Link>
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <Link
                    href="#login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-700 hover:text-[var(--primary)] font-medium transition-colors text-base py-2 px-4 rounded-lg hover:bg-gray-50 text-center"
                  >
                    Log In
                  </Link>
                  <Link
                    href="#start"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
                    style={{background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)'}}
                  >
                    Start Fundraising
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[98] mt-20"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-[calc(100vh)] pt-20 py-24 lg:py-40 overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/7156173/pexels-photo-7156173.jpeg)',
          backgroundPosition: '0% -50%',
        }}
      > 
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/80 via-gray-900/50 to-transparent"></div>
        
        {/* Color overlay with brand colors */}
        <div className="absolute inset-0 bg-linear-to-r from-[var(--primary)]/30 via-transparent to-[var(--accent)]/10"></div>
        
        {/* Lineart Overlay - Left to Right */}
        <div className="absolute inset-0 z-10 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Decorative lines flowing left to right */}
            <path d="M0,200 Q400,100 800,200 T1920,200" stroke="var(--primary)" strokeWidth="3" fill="none" opacity="0.6"/>
            <path d="M0,400 Q500,300 1000,400 T1920,400" stroke="var(--accent)" strokeWidth="3" fill="none" opacity="0.5"/>
            <path d="M0,600 Q600,500 1200,600 T1920,600" stroke="var(--primary-light)" strokeWidth="3" fill="none" opacity="0.4"/>
            <path d="M0,300 Q300,250 600,300 T1920,300" stroke="var(--primary)" strokeWidth="2" fill="none" opacity="0.5"/>
            <path d="M0,700 Q700,600 1400,700 T1920,700" stroke="var(--accent)" strokeWidth="2" fill="none" opacity="0.4"/>
            <path d="M0,500 Q400,450 800,500 T1920,500" stroke="var(--primary-light)" strokeWidth="2" fill="none" opacity="0.3"/>
            
            {/* Additional decorative elements */}
            <circle cx="300" cy="300" r="4" fill="var(--primary)" opacity="0.6"/>
            <circle cx="700" cy="500" r="3.5" fill="var(--accent)" opacity="0.5"/>
            <circle cx="1100" cy="700" r="4" fill="var(--primary-light)" opacity="0.4"/>
            <circle cx="400" cy="800" r="3" fill="var(--primary)" opacity="0.5"/>
            <circle cx="1200" cy="900" r="3.5" fill="var(--accent)" opacity="0.4"/>
            
            {/* Connecting lines */}
            <line x1="300" y1="300" x2="700" y2="500" stroke="var(--primary)" strokeWidth="1.5" opacity="0.3" strokeDasharray="6,6"/>
            <line x1="700" y1="500" x2="1100" y2="700" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" strokeDasharray="6,6"/>
            <line x1="400" y1="800" x2="1200" y2="900" stroke="var(--primary-light)" strokeWidth="1.5" opacity="0.3" strokeDasharray="6,6"/>
          </svg>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10" style={{background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)', transform: 'translate(30%, -30%)'}}></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-10" style={{background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)', transform: 'translate(-30%, 30%)'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
          <div className="mx-auto w-full">
            <div className="max-w-5xl space-y-8">
            
              
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
              Power Change with Confidence              
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl font-medium drop-shadow-lg">
                Secure payment processing, instant notifications, and powerful tools to maximize your fundraising efforts.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5">
                <Link 
                  href="#start" 
                  className="text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-2xl text-center hover:shadow-3xl transform hover:scale-105" 
                  style={{background: 'var(--accent-dark)'}}
                >
                  Start Accepting Donations
                </Link>
                <Link 
                  href="#demo" 
                  className="bg-white hover:bg-gray-50 border-2 px-10 py-5 rounded-xl font-bold text-xl transition-all text-center hover:shadow-xl transform hover:scale-105" 
                  style={{borderColor: 'var(--primary)', color: 'var(--primary)'}}
                >
                  See Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Fast Section */}
      <section className="py-24 bg-linear-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Launch Fast, Raise More
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes with our purpose-built solutions for every type of organization
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative text-white rounded-3xl p-8 cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden" style={{background: 'linear-gradient(135deg, #042E4B 0%, #002b5c 100%)'}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Federal Campaigns</h3>
                <p className="text-white/90 leading-relaxed">Comprehensive tools for federal political campaigns and PACs.</p>
              </div>
            </div>
            <div className="group relative text-white rounded-3xl p-8 cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden" style={{background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)'}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Political Organizations</h3>
                <p className="text-white/90 leading-relaxed">501(c)(4) organizations and political action committees.</p>
              </div>
            </div>
            <div className="group relative text-white rounded-3xl p-8 cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden" style={{background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--secondary) 100%)'}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">State & Local</h3>
                <p className="text-white/90 leading-relaxed">State and local campaign fundraising solutions.</p>
              </div>
            </div>
            <div className="group relative text-white rounded-3xl p-8 cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden" style={{background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)'}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Nonprofits</h3>
                <p className="text-white/90 leading-relaxed">501(c)(3) nonprofit organizations and charities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-linear-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5" style={{background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)', transform: 'translate(-50%, -50%)'}}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5" style={{background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)', transform: 'translate(50%, 50%)'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{background: 'rgba(68, 136, 184, 0.1)', color: '#042E4B'}}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Powerful Features</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Everything You Need<br />for Online Donations
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Elite Processing provides all the tools you need to receive online donations, manage your donors, and track your fundraising progress, all in one place.
            </p>
          </div>

          {/* Action Pages Feature */}
          <div className="bg-white rounded-3xl  overflow-hidden mb-16 border-2" style={{borderColor: 'rgba(68, 136, 184, 0.1)'}}>
            <div className="grid lg:grid-cols-2 gap-0 items-stretch">
              <div className="p-12 lg:p-16 relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(68, 136, 184, 0.03) 100%)'}}>
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #042E4B 0%, transparent 70%)', transform: 'translate(30%, -30%)'}}></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold mb-8 shadow-sm" style={{background: 'linear-gradient(135deg, rgba(68, 136, 184, 0.15) 0%, rgba(68, 136, 184, 0.1) 100%)', color: '#042E4B'}}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>Featured Tool</span>
                  </div>
                  <h3 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">Action Pages</h3>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    Create beautiful, mobile-friendly donation pages in minutes. Customize them to match your brand and collect donations, registrations, and more.
                  </p>
                  <div className="space-y-4 mb-10">
                    <div className="group flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(68, 136, 184, 0.05) 100%)', border: '1px solid rgba(68, 136, 184, 0.1)'}}>
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #042E4B 0%, #002b5c 100%)'}}>
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 text-xl">Beautiful</h4>
                        <p className="text-gray-600 leading-relaxed">Create stunning pages that convert donors with professional designs.</p>
                      </div>
                    </div>
                    <div className="group flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(252, 189, 73, 0.05) 100%)', border: '1px solid rgba(252, 189, 73, 0.1)'}}>
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #fcc201 0%, #e8a832 100%)'}}>
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 text-xl">Customizable</h4>
                        <p className="text-gray-600 leading-relaxed">Match your brand with custom colors, fonts, logos, and layouts.</p>
                      </div>
                    </div>
                    <div className="group flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(246, 110, 123, 0.05) 100%)', border: '1px solid rgba(246, 110, 123, 0.1)'}}>
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #00a0ff 0%, #e55a68 100%)'}}>
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 text-xl">Fast</h4>
                        <p className="text-gray-600 leading-relaxed">Launch pages in minutes, not hours. Get started instantly.</p>
                      </div>
                    </div>
                  </div>
                  <Link href="#learn-more" className="font-bold inline-flex items-center gap-3 text-lg group transition-all" style={{color: '#042E4B'}}>
                    Learn more about our features
                    <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="relative p-12 lg:p-16 flex items-center" style={{background: 'linear-gradient(135deg, rgba(68, 136, 184, 0.05) 0%, rgba(68, 136, 184, 0.02) 50%, rgba(255, 255, 255, 1) 100%)'}}>
                <div className="bg-white rounded-3xl shadow-2xl p-8 w-full border-2" style={{borderColor: 'rgba(68, 136, 184, 0.1)'}}>
                  <div className="flex items-center justify-between mb-8 pb-6 border-b-2" style={{borderColor: 'rgba(68, 136, 184, 0.1)'}}>
                    <div>
                      <h4 className="font-bold text-gray-900 text-2xl mb-1">Your Pages</h4>
                      <p className="text-sm text-gray-500">Manage all your donation pages</p>
                    </div>
                    <button className="text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105" style={{background: 'linear-gradient(135deg, #042E4B 0%, #002b5c 100%)'}}>
                      + New Page
                    </button>
                  </div>
                  <div className="space-y-5">
                    <div className="border-2 rounded-2xl p-6 transition-all cursor-pointer group hover:shadow-xl" style={{borderColor: 'rgba(68, 136, 184, 0.2)', background: 'linear-gradient(135deg, rgba(68, 136, 184, 0.02) 0%, rgba(255, 255, 255, 1) 100%)'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = 'rgba(68, 136, 184, 0.4)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(68, 136, 184, 0.05) 0%, rgba(255, 255, 255, 1) 100%)';}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = 'rgba(68, 136, 184, 0.2)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(68, 136, 184, 0.02) 0%, rgba(255, 255, 255, 1) 100%)';}}>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-gray-900 text-lg">Campaign 2024</span>
                        <span className="text-xs px-3 py-1.5 rounded-full font-bold shadow-sm" style={{background: 'rgba(159, 223, 135, 0.1)', color: '#9fdf87'}}>Active</span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-bold text-gray-900">$12,450</span>
                        <span className="text-sm text-gray-500 font-medium">raised</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full rounded-full transition-all duration-500" style={{width: '75%', background: 'linear-gradient(90deg, #042E4B 0%, #002b5c 100%)'}}></div>
                      </div>
                    </div>
                    <div className="border-2 rounded-2xl p-6 transition-all cursor-pointer group hover:shadow-xl" style={{borderColor: 'rgba(252, 189, 73, 0.2)', background: 'linear-gradient(135deg, rgba(252, 189, 73, 0.02) 0%, rgba(255, 255, 255, 1) 100%)'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = 'rgba(252, 189, 73, 0.4)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(252, 189, 73, 0.05) 0%, rgba(255, 255, 255, 1) 100%)';}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = 'rgba(252, 189, 73, 0.2)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(252, 189, 73, 0.02) 0%, rgba(255, 255, 255, 1) 100%)';}}>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-gray-900 text-lg">Monthly Donors</span>
                        <span className="text-xs px-3 py-1.5 rounded-full font-bold shadow-sm" style={{background: 'rgba(159, 223, 135, 0.1)', color: '#9fdf87'}}>Active</span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-bold text-gray-900">$8,200</span>
                        <span className="text-sm text-gray-500 font-medium">raised</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full rounded-full transition-all duration-500" style={{width: '60%', background: 'linear-gradient(90deg, #fcc201 0%, #e8a832 100%)'}}></div>
                      </div>
                    </div>
                    <div className="border-2 rounded-2xl p-6 transition-all cursor-pointer opacity-60" style={{borderColor: 'rgba(156, 163, 175, 0.3)'}}>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-gray-900 text-lg">Emergency Fund</span>
                        <span className="text-xs px-3 py-1.5 rounded-full font-bold" style={{background: 'rgba(156, 163, 175, 0.1)', color: '#6b7280'}}>Draft</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gray-400">$0</span>
                        <span className="text-sm text-gray-400 font-medium">raised</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Finance Feature */}
          <div className="rounded-3xl shadow-2xl overflow-hidden border-2" style={{background: 'linear-gradient(135deg, rgba(252, 189, 73, 0.08) 0%, rgba(246, 110, 123, 0.08) 100%)', borderColor: 'rgba(252, 189, 73, 0.2)'}}>
            <div className="grid lg:grid-cols-2 gap-0 items-stretch">
              <div className="relative p-12 lg:p-16 order-2 lg:order-1 flex items-center" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(252, 189, 73, 0.03) 100%)'}}>
                <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #fcc201 0%, transparent 70%)', transform: 'translate(-30%, -30%)'}}></div>
                <div className="bg-white rounded-3xl shadow-2xl p-10 w-full border-2 relative z-10" style={{borderColor: 'rgba(252, 189, 73, 0.1)'}}>
                  <div className="flex items-center justify-between mb-8 pb-6 border-b-2" style={{borderColor: 'rgba(252, 189, 73, 0.1)'}}>
                    <div>
                      <h4 className="font-bold text-gray-900 text-2xl mb-2">Financial Overview</h4>
                      <p className="text-sm text-gray-500 font-medium">Last 30 days performance</p>
                    </div>
                    <button className="text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105" style={{background: 'linear-gradient(135deg, #fcc201 0%, #e8a832 100%)'}}>
                      <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Export
                    </button>
                  </div>
                  <div className="space-y-5">
                    <div className="border-2 rounded-2xl p-6 transition-all hover:shadow-lg group" style={{borderColor: 'rgba(68, 136, 184, 0.2)', background: 'linear-gradient(135deg, rgba(68, 136, 184, 0.03) 0%, rgba(255, 255, 255, 1) 100%)'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = 'rgba(68, 136, 184, 0.4)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(68, 136, 184, 0.06) 0%, rgba(255, 255, 255, 1) 100%)';}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = 'rgba(68, 136, 184, 0.2)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(68, 136, 184, 0.03) 0%, rgba(255, 255, 255, 1) 100%)';}}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Total Donations</span>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'rgba(159, 223, 135, 0.1)'}}>
                          <svg className="w-6 h-6" style={{color: '#9fdf87'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">$45,230</div>
                      <div className="flex items-center gap-2 text-sm font-bold" style={{color: '#9fdf87'}}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>+12.5% from last month</span>
                      </div>
                    </div>
                    <div className="border-2 rounded-2xl p-6 transition-all hover:shadow-lg group" style={{borderColor: 'rgba(252, 189, 73, 0.2)', background: 'linear-gradient(135deg, rgba(252, 189, 73, 0.03) 0%, rgba(255, 255, 255, 1) 100%)'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = 'rgba(252, 189, 73, 0.4)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(252, 189, 73, 0.06) 0%, rgba(255, 255, 255, 1) 100%)';}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = 'rgba(252, 189, 73, 0.2)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(252, 189, 73, 0.03) 0%, rgba(255, 255, 255, 1) 100%)';}}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">This Month</span>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'rgba(68, 136, 184, 0.1)'}}>
                          <svg className="w-6 h-6" style={{color: '#042E4B'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">$12,450</div>
                      <div className="flex items-center gap-2 text-sm font-bold" style={{color: '#042E4B'}}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>On track for record month</span>
                      </div>
                    </div>
                    <div className="border-2 rounded-2xl p-6 transition-all hover:shadow-lg group" style={{borderColor: 'rgba(246, 110, 123, 0.2)', background: 'linear-gradient(135deg, rgba(246, 110, 123, 0.03) 0%, rgba(255, 255, 255, 1) 100%)'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = 'rgba(246, 110, 123, 0.4)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(246, 110, 123, 0.06) 0%, rgba(255, 255, 255, 1) 100%)';}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = 'rgba(246, 110, 123, 0.2)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(246, 110, 123, 0.03) 0%, rgba(255, 255, 255, 1) 100%)';}}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Recurring</span>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'rgba(246, 110, 123, 0.1)'}}>
                          <svg className="w-6 h-6" style={{color: '#00a0ff'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">$8,200</div>
                      <div className="flex items-center gap-2 text-sm font-bold" style={{color: '#00a0ff'}}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>
                        <span>Monthly recurring revenue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-12 lg:p-16 relative overflow-hidden order-1 lg:order-2" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(252, 189, 73, 0.03) 100%)'}}>
                <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #fcc201 0%, transparent 70%)', transform: 'translate(30%, 30%)'}}></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold mb-8 shadow-sm" style={{background: 'linear-gradient(135deg, rgba(252, 189, 73, 0.2) 0%, rgba(252, 189, 73, 0.1) 100%)', color: '#e8a832'}}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2v-5zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                    </svg>
                    <span>Finance Tools</span>
                  </div>
                  <h3 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">Finance</h3>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    Track your donations, manage your donors, and reconcile your finances with ease. Elite Processing provides detailed reports and integrations to streamline your accounting.
                  </p>
                  <div className="space-y-4 mb-10">
                    <div className="group flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(252, 189, 73, 0.05) 100%)', border: '1px solid rgba(252, 189, 73, 0.1)'}}>
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #fcc201 0%, #e8a832 100%)'}}>
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 text-xl">Reporting</h4>
                        <p className="text-gray-600 leading-relaxed">Access detailed reports on donations, donors, and campaigns with real-time analytics.</p>
                      </div>
                    </div>
                    <div className="group flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(252, 189, 73, 0.05) 100%)', border: '1px solid rgba(252, 189, 73, 0.1)'}}>
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #fcc201 0%, #e8a832 100%)'}}>
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 text-xl">Reconciliation</h4>
                        <p className="text-gray-600 leading-relaxed">Easily reconcile your finances with bank statements and accounting software integrations.</p>
                      </div>
                    </div>
                    <div className="group flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(252, 189, 73, 0.05) 100%)', border: '1px solid rgba(252, 189, 73, 0.1)'}}>
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #fcc201 0%, #e8a832 100%)'}}>
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 text-xl">Security</h4>
                        <p className="text-gray-600 leading-relaxed">Protect donor data with industry-leading security measures and compliance standards.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      {/* <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Who we serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elite Processing is trusted by thousands of organizations across the country, from small local nonprofits to large national campaigns.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nonprofit Organizations</h3>
              <p className="text-gray-600">501(c)(3) charities and foundations</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Churches & Ministries</h3>
              <p className="text-gray-600">Religious organizations and faith-based groups</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Political Campaigns</h3>
              <p className="text-gray-600">Federal, state, and local campaigns</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schools & Universities</h3>
              <p className="text-gray-600">Educational institutions and alumni associations</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Boost Conversions Section */}
      <section className="py-24 lg:py-32 text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, #042E4B 0%, #002b5c 100%)'}}>
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{background: 'radial-gradient(circle, #fcc201 0%, transparent 70%)', transform: 'translate(30%, -30%)'}}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10" style={{background: 'radial-gradient(circle, #00a0ff 0%, transparent 70%)', transform: 'translate(-30%, 30%)'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 bg-white/10 backdrop-blur-sm border border-white/20">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Conversion Optimization</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Drive success with innovative solutions
                </h2>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#fcc201'}}>
                  Boost conversions
                </h3>
                <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                  Our platform is designed to maximize your donation conversion rates. With optimized checkout flows, mobile-first design, and A/B testing capabilities, you'll see more donors complete their contributions.
                </p>
              </div>

              {/* Feature highlights */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/10 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Optimized Checkout</h4>
                    <p className="text-white/80 leading-relaxed">Streamlined donation process that reduces friction and increases completion rates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/10 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Mobile-First Design</h4>
                    <p className="text-white/80 leading-relaxed">Perfect experience on any device, ensuring donors can give from anywhere.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/10 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">A/B Testing</h4>
                    <p className="text-white/80 leading-relaxed">Test different approaches and optimize based on real donor behavior data.</p>
                  </div>
                </div>
              </div>

              <Link href="#features" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg bg-white hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105" style={{color: 'var(--primary)'}}>
                Learn more about our features
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              {/* Enhanced image container with multiple decorative elements */}
              <div className="absolute -inset-4 rounded-3xl opacity-20 blur-3xl" style={{background: 'linear-gradient(135deg, rgba(68, 136, 184, 0.4) 0%, rgba(252, 189, 73, 0.4) 100%)'}}></div>
              <div className="absolute -inset-2 rounded-3xl opacity-30 blur-xl" style={{background: 'linear-gradient(135deg, rgba(252, 189, 73, 0.3) 0%, rgba(246, 110, 123, 0.3) 100%)'}}></div>
              <div className="relative z-10">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl z-20" style={{background: 'linear-gradient(135deg, #fcc201 0%, #e8a832 100%)'}}>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">+45%</div>
                    <div className="text-xs font-semibold text-white/90">Conversion</div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-xl flex items-center justify-center shadow-2xl z-20" style={{background: 'linear-gradient(135deg, #00a0ff 0%, #e55a68 100%)'}}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
        <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=700&fit=crop&q=80"
                  alt="Analytics dashboard"
                  width={800}
                  height={700}
                  className="w-full h-auto rounded-3xl shadow-2xl relative z-10 ring-4 ring-white/30"
                />
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{color: '#fcc201'}}>45%</div>
              <div className="text-white/80 font-medium">Higher Conversion</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{color: '#fcc201'}}>3x</div>
              <div className="text-white/80 font-medium">Faster Checkout</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{color: '#fcc201'}}>98%</div>
              <div className="text-white/80 font-medium">Mobile Optimized</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{color: '#fcc201'}}>24/7</div>
              <div className="text-white/80 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #042E4B 0%, transparent 70%)', transform: 'translate(30%, -30%)'}}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #fcc201 0%, transparent 70%)', transform: 'translate(-30%, 30%)'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6" style={{background: 'rgba(68, 136, 184, 0.1)', color: '#042E4B'}}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Integrations</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Seamless Integrations,<br />Unlimited Possibilities
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Elite Processing integrates with your favorite tools to streamline your workflow and maximize your impact.
            </p>
          </div>

        

          {/* Integration Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
            {[
              { name: 'Mailchimp', category: 'Marketing', image: 'https://logos-world.net/wp-content/uploads/2021/02/Mailchimp-Logo.png' },
              { name: 'Salesforce', category: 'CRM', image: 'https://toppng.com/uploads/preview/salesforce-logo-115630685425lo9y3yoc9.png' },
              { name: 'Stripe', category: 'Payment', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFG_shbxV7ib4ezJAaos2DcQ95T6j_AC8ng&s' },
              { name: 'Zapier', category: 'Automation', image: 'https://img.favpng.com/18/20/3/zapier-logo-VY4evj0B.jpg' },
              { name: 'Google Analytics', category: 'Analytics', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Logo_Google_Analytics.svg/1280px-Logo_Google_Analytics.svg.png' },
              { name: 'Facebook', category: 'Social', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png' },
              { name: 'QuickBooks', category: 'Accounting', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWIXgXuN4cxuAVcTZecoegfyAN32vgWvNGQ&s' },
              { name: 'HubSpot', category: 'CRM', image: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg' },
              { name: 'Constant Contact', category: 'Marketing', image: 'https://logos-world.net/wp-content/uploads/2021/02/Mailchimp-Logo.png' },
              { name: 'Pipedrive', category: 'CRM', image: 'https://logos-world.net/wp-content/uploads/2021/02/Mailchimp-Logo.png' }
            ].map((integration, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer transform hover:-translate-y-2"
                style={{borderColor: 'rgba(4, 46, 75, 0.1)'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(4, 46, 75, 0.3)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(4, 46, 75, 0.02) 0%, rgba(255, 255, 255, 1) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(4, 46, 75, 0.1)';
                  e.currentTarget.style.background = 'white';
                }}
              >
                {/* Logo Image */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-white group-hover:scale-110 transition-transform duration-300 border-2 overflow-hidden" style={{borderColor: 'rgba(4, 46, 75, 0.1)'}}>
                  <Image
                    src={integration.image}
                    alt={integration.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <h3 className="text-center font-bold text-gray-900 mb-2 text-lg leading-tight transition-colors" style={{'--hover-color': 'var(--primary)'} as React.CSSProperties}>
                  {integration.name}
                </h3>
                <p className="text-center text-sm text-gray-500 font-medium">{integration.category}</p>
                {/* Hover overlay effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" style={{background: 'linear-gradient(135deg, #042E4B 0%, #fcc201 100%)'}}></div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-3xl bg-white shadow-xl border-2" style={{borderColor: 'rgba(68, 136, 184, 0.1)'}}>
              <div className="text-left sm:text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Need a custom integration?</h3>
                <p className="text-gray-600">We can build custom integrations for your specific needs.</p>
              </div>
              <Link 
                href="#integrations" 
                className="px-8 py-4 rounded-xl font-bold text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
                style={{background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)'}}
              >
                View All Integrations
                <svg className="w-5 h-5 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #042E4B 0%, transparent 70%)', transform: 'translate(-30%, -30%)'}}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #fcc201 0%, transparent 70%)', transform: 'translate(30%, 30%)'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6" style={{background: 'rgba(68, 136, 184, 0.1)', color: '#042E4B'}}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Pricing</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Zero Fees, Zero Contracts.<br />100% Focus on Your Success.
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Elite Processing offers transparent pricing with no hidden fees. You only pay when you receive a donation.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Pricing Card */}
            <div className="rounded-3xl shadow-2xl p-10 lg:p-16 text-white relative overflow-hidden mb-12" style={{background: 'linear-gradient(135deg, #042E4B 0%, #002b5c 100%)'}}>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{background: 'radial-gradient(circle, #fcc201 0%, transparent 70%)', transform: 'translate(30%, -30%)'}}></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10" style={{background: 'radial-gradient(circle, #00a0ff 0%, transparent 70%)', transform: 'translate(-30%, 30%)'}}></div>
              
              <div className="relative z-10">
                {/* Zero Monthly Fee Highlight */}
                <div className="text-center mb-12 pb-8 border-b-2 border-white/20">
                  <div className="inline-flex items-baseline gap-2 mb-4">
                    <span className="text-7xl lg:text-8xl font-bold">$0</span>
                    <span className="text-3xl lg:text-4xl font-semibold text-white/80">/month</span>
                  </div>
                  <p className="text-2xl text-white/90 font-semibold">No monthly fees, ever</p>
                  <p className="text-lg text-white/70 mt-2">Pay only when you receive donations</p>
                </div>

                {/* Pricing Plans */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Standard Plan */}
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20 hover:bg-white/15 transition-all">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold mb-2">Standard</h3>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-4xl font-bold">2.9%</span>
                        <span className="text-xl text-white/80">+ $0.30</span>
                      </div>
                      <p className="text-white/80 text-lg font-medium">per transaction</p>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-lg leading-relaxed">Unlimited donation pages</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-lg leading-relaxed">Basic reporting & analytics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-lg leading-relaxed">Email support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-lg leading-relaxed">Mobile-optimized pages</span>
                      </li>
                    </ul>
                  </div>

                  {/* Pro Plan */}
                  <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border-2 border-white/30 hover:bg-white/20 transition-all relative">
                    {/* Popular Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-1.5 rounded-full text-sm font-bold shadow-lg" style={{background: 'linear-gradient(135deg, #fcc201 0%, #e8a832 100%)', color: 'white'}}>
                      Most Popular
                    </div>
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold mb-2">Pro</h3>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-4xl font-bold">2.5%</span>
                        <span className="text-xl text-white/80">+ $0.30</span>
                      </div>
                      <p className="text-white/80 text-lg font-medium">per transaction</p>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white text-lg leading-relaxed font-semibold">Everything in Standard</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white text-lg leading-relaxed">Advanced analytics & insights</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white text-lg leading-relaxed">Priority 24/7 support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white text-lg leading-relaxed">Custom integrations & API access</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white text-lg leading-relaxed">A/B testing & optimization tools</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Link 
                    href="#start" 
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-xl bg-white hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105" 
                    style={{color: 'var(--primary)'}}
                  >
                    Get Started Today
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-linear-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #042E4B 0%, transparent 70%)', transform: 'translate(30%, -30%)'}}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #fcc201 0%, transparent 70%)', transform: 'translate(-30%, 30%)'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6" style={{background: 'rgba(68, 136, 184, 0.1)', color: '#042E4B'}}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span>Success Stories</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Success Stories<br />from Real Organizations
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real results from real organizations. Discover how our platform helps campaigns and nonprofits achieve their fundraising goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Story 1 */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2" style={{borderColor: 'rgba(68, 136, 184, 0.1)'}}>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=600&fit=crop&q=80"
                  alt="Success story"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-5 left-5">
                  <span className="text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg" style={{background: 'linear-gradient(135deg, #042E4B 0%, #002b5c 100%)'}}>Case Study</span>
                </div>
                {/* Stats overlay */}
                <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-xl">
                  <div className="text-2xl font-bold" style={{color: '#042E4B'}}>+300%</div>
                  <div className="text-xs text-gray-600 font-semibold">Donations</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#042E4B] transition-colors">
                  How Houston Campaign Streamlined Fundraising
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                  Learn how a local campaign increased donations by 300% using our platform and reached their fundraising goal in record time.
                </p>
                {/* Testimonial snippet */}
                <div className="mb-5 p-4 rounded-xl" style={{background: 'rgba(68, 136, 184, 0.05)'}}>
                  <p className="text-gray-700 italic text-sm mb-2">"Elite Processing transformed our fundraising efforts. The results speak for themselves."</p>
                  <p className="text-sm font-semibold text-gray-900">— Campaign Manager, Houston</p>
                </div>
                <Link href="#story1" className="font-bold inline-flex items-center gap-2 text-lg hover:gap-3 transition-all group" style={{color: '#042E4B'}}>
                  Read full story
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Story 2 */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2" style={{borderColor: 'rgba(252, 189, 73, 0.1)'}}>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=600&fit=crop&q=80"
                  alt="Success story"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-5 left-5">
                  <span className="text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg" style={{background: 'linear-gradient(135deg, #fcc201 0%, #e8a832 100%)'}}>Success</span>
                </div>
                {/* Stats overlay */}
                <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-xl">
                  <div className="text-2xl font-bold" style={{color: '#fcc201'}}>98%</div>
                  <div className="text-xs text-gray-600 font-semibold">Satisfaction</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#042E4B] transition-colors">
                  Superior Donor Support Impact
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                  See how superior customer support made a real impact for a national nonprofit organization.
                </p>
                {/* Testimonial snippet */}
                <div className="mb-5 p-4 rounded-xl" style={{background: 'rgba(252, 189, 73, 0.05)'}}>
                  <p className="text-gray-700 italic text-sm mb-2">"The support team is incredible. They helped us every step of the way."</p>
                  <p className="text-sm font-semibold text-gray-900">— Director, National Nonprofit</p>
                </div>
                <Link href="#story2" className="font-bold inline-flex items-center gap-2 text-lg hover:gap-3 transition-all group" style={{color: '#042E4B'}}>
                  Read full story
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Story 3 */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2" style={{borderColor: 'rgba(246, 110, 123, 0.1)'}}>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=600&fit=crop&q=80"
                  alt="Success story"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-5 left-5">
                  <span className="text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg" style={{background: 'linear-gradient(135deg, #00a0ff 0%, #e55a68 100%)'}}>Featured</span>
                </div>
                {/* Stats overlay */}
                <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-xl">
                  <div className="text-2xl font-bold" style={{color: '#00a0ff'}}>5x</div>
                  <div className="text-xs text-gray-600 font-semibold">Growth</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#042E4B] transition-colors">
                  Transformed Donor Experience
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                  Discover how one organization transformed their donor experience with our powerful tools and saw 5x growth.
                </p>
                {/* Testimonial snippet */}
                <div className="mb-5 p-4 rounded-xl" style={{background: 'rgba(246, 110, 123, 0.05)'}}>
                  <p className="text-gray-700 italic text-sm mb-2">"Our donor engagement has never been better. The platform is a game-changer."</p>
                  <p className="text-sm font-semibold text-gray-900">— CEO, Foundation</p>
                </div>
                <Link href="#story3" className="font-bold inline-flex items-center gap-2 text-lg hover:gap-3 transition-all group" style={{color: '#042E4B'}}>
                  Read full story
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Enhanced CTA */}
          <div className="text-center">
            <Link 
              href="#stories" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg bg-white border-2 hover:shadow-xl transition-all transform hover:scale-105"
              style={{borderColor: '#042E4B', color: '#042E4B'}}
            >
              View All Success Stories
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 lg:py-28 text-gray-900 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10" style={{background: 'radial-gradient(circle, #fcc201 0%, transparent 70%)', transform: 'translate(30%, -30%)'}}></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10" style={{background: 'radial-gradient(circle, #00a0ff 0%, transparent 70%)', transform: 'translate(-30%, 30%)'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Fueled by<br />Grassroots Donors
            </h2>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Together, we're building a movement powered by millions of small-dollar contributions that make a big impact.
            </p>
          </div>
          
          {/* Main Highlight - Large Center Card with Image */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl p-10 lg:p-16 max-w-6xl mx-auto border-2 border-gray-200 shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image Section */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-linear-to-r from-[#042E4B]/10 to-transparent z-10"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=80"
                    alt="Grassroots donors and community support"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content Section */}
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-8 shadow-xl" style={{background: 'linear-gradient(135deg, #fcc201 0%, #00a0ff 100%)'}}>
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-7xl lg:text-8xl font-bold mb-4" style={{color: '#fcc201'}}>$2.5B+</div>
                  <p className="text-3xl lg:text-4xl text-gray-900 font-semibold mb-6">Raised through Elite Processing</p>
                  <p className="text-xl text-gray-700">Empowering organizations to make a real difference, one donation at a time.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Grid - 4 Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl hover:border-[#fcc201] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl mb-6" style={{background: 'rgba(252, 194, 1, 0.15)'}}>
                <svg className="w-8 h-8" style={{color: '#fcc201'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-5xl lg:text-6xl font-bold mb-3" style={{color: '#fcc201'}}>$2.5B+</div>
              <p className="text-lg text-gray-900 font-semibold mb-2">Total Raised</p>
              <p className="text-sm text-gray-600">Since 2015</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl hover:border-[#00a0ff] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl mb-6" style={{background: 'rgba(0, 160, 255, 0.15)'}}>
                <svg className="w-8 h-8" style={{color: '#00a0ff'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-5xl lg:text-6xl font-bold mb-3" style={{color: '#00a0ff'}}>50K+</div>
              <p className="text-lg text-gray-900 font-semibold mb-2">Organizations</p>
              <p className="text-sm text-gray-600">Trust Elite Processing</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl hover:border-[#9fdf87] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl mb-6" style={{background: 'rgba(159, 223, 135, 0.15)'}}>
                <svg className="w-8 h-8" style={{color: '#9fdf87'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-5xl lg:text-6xl font-bold mb-3" style={{color: '#9fdf87'}}>10M+</div>
              <p className="text-lg text-gray-900 font-semibold mb-2">Donations</p>
              <p className="text-sm text-gray-600">Processed Successfully</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl hover:border-[#fcc201] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl mb-6" style={{background: 'rgba(252, 194, 1, 0.15)'}}>
                <svg className="w-8 h-8" style={{color: '#fcc201'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-5xl lg:text-6xl font-bold mb-3" style={{color: '#fcc201'}}>99.9%</div>
              <p className="text-lg text-gray-900 font-semibold mb-2">Uptime</p>
              <p className="text-sm text-gray-600">Reliable & Secure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Digital fundraising starts here</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of organizations using Elite Processing to power their fundraising efforts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#start" className="text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg text-center hover:shadow-xl transform hover:scale-105" style={{background: '#9fdf87'}}>
                  Get Started with Elite Processing
                </Link>
                <Link href="#solutions" className="bg-white hover:bg-gray-50 border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all text-center hover:shadow-lg" style={{borderColor: '#042E4B', color: '#042E4B'}}>
                  Explore Our Solutions
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background: 'linear-gradient(135deg, rgba(68, 136, 184, 0.3) 0%, rgba(252, 189, 73, 0.3) 100%)'}}></div>
            <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=700&fit=crop&q=80"
                alt="Team collaboration"
                width={800}
                height={700}
                className="w-full h-auto rounded-3xl shadow-2xl relative z-10 ring-4 ring-white/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Bar */}
      <div className="text-white py-6" style={{background: '#00a0ff'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xl font-semibold">Get started with Elite Processing</p>
          <Link href="#start" className="bg-white hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-md" style={{color: '#042E4B'}}>
            Start Fundraising
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-700 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Quick Links Column */}
            <div className="lg:col-span-1">
              <h4 className="text-gray-900 font-bold text-base mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="#signup" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Sign Up</Link></li>
                <li><Link href="#pricing" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Pricing</Link></li>
                <li><Link href="#faq" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">FAQ</Link></li>
                <li><Link href="#action-pages-gallery" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Action Pages Gallery</Link></li>
                <li><Link href="#customer-stories" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Customer Stories</Link></li>
                <li><Link href="#testimonials" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Testimonials</Link></li>
                <li><Link href="#compare" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Compare</Link></li>
                <li><Link href="#integrations" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Integrations</Link></li>
              </ul>
            </div>

            {/* Features Column */}
            <div className="lg:col-span-1">
              <h4 className="text-gray-900 font-bold text-base mb-6">Features</h4>
              <ul className="space-y-3">
                <li><Link href="#abandoned-actions" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Abandoned Actions</Link></li>
                <li><Link href="#action-pages" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Action Pages</Link></li>
                <li><Link href="#automated-receipts" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Automated Receipts</Link></li>
                <li><Link href="#credit-card-updater" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Credit Card Updater</Link></li>
                <li><Link href="#crm-integrations" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">CRM Integrations</Link></li>
                <li><Link href="#custom-domains" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Custom Domains</Link></li>
                <li><Link href="#data-exporting" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Data Exporting</Link></li>
                <li><Link href="#deposits" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Deposits</Link></li>
                <li><Link href="#donor-covers-fees" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Donor Covers Fees</Link></li>
                
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="lg:col-span-1">
              <h4 className="text-gray-900 font-bold text-base mb-6">Solutions</h4>
              <ul className="space-y-3 mb-6">
                <li><Link href="#nonprofits" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Nonprofits</Link></li>
                <li><Link href="#churches" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Churches and Ministries</Link></li>
                <li><Link href="#political" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Political Campaigns and Committees</Link></li>
                <li><Link href="#schools" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Colleges, Universities, and Schools</Link></li>
              </ul>
              <h5 className="text-gray-900 font-semibold text-sm mb-4 mt-8">Payment Tools</h5>
              <ul className="space-y-3">
                <li><Link href="#recurring-giving" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Recurring Giving</Link></li>
                <li><Link href="#petitions" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Petitions</Link></li>
                <li><Link href="#surveys" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Surveys</Link></li>
               
              </ul>
            </div>

            {/* Support Column */}
            <div className="lg:col-span-1">
              <h4 className="text-gray-900 font-bold text-base mb-6">Support</h4>
              <ul className="space-y-3">
                <li><Link href="#customer-help" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Customer Help Center</Link></li>
                <li><Link href="#customer-support" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Customer Support</Link></li>
                <li><Link href="#donor-help" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Donor Help Center</Link></li>
                <li><Link href="#donor-support" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Donor Support</Link></li>
                <li><Link href="#platform-status" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Platform Status</Link></li>
              </ul>
              
              <h4 className="text-gray-900 font-bold text-base mb-6 mt-8">Company</h4>
              <ul className="space-y-3">
                <li><Link href="#trust" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Trust</Link></li>
                <li><Link href="#careers" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Work Here</Link></li>
                <li><Link href="#contact" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>

            {/* Contact & Resources Column */}
            <div className="lg:col-span-1">
            <h4 className="text-gray-900 font-bold text-base mb-6">Resources</h4>
              <ul className="space-y-3">
                <li><Link href="#blog" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Blog</Link></li>
                <li><Link href="#guides" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Guides and Webinars</Link></li>
                <li><Link href="#learn" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Elite Processing Learn</Link></li>
                <li><Link href="#podcast" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Nonprofit Pulse Podcast</Link></li>
                <li><Link href="#big-ideas" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Big Ideas For Every Org Podcast</Link></li>
                <li><Link href="#glossary" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Nonprofit Glossary</Link></li>
                <li><Link href="#partners" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Content Partners</Link></li>
              </ul>
              <h4 className="text-gray-900 font-bold text-base mt-6 mb-4">Contact Us</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#00a0ff] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600 text-sm">support@eliteprocessing.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#00a0ff] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600 text-sm">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#00a0ff] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600 text-sm">123 Business St, Suite 100<br />New York, NY 10001</span>
                </li>
              </ul>
              
            
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg, #042E4B 0%, #002b5c 100%)'}}>
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-900">Elite Donate</span>
                  <p className="text-sm text-gray-500">© 2024 Elite Processing. All rights reserved.</p>
                </div>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <Link href="#linkedin" className="text-gray-900 hover:text-[#042E4B] transition-colors" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link href="#facebook" className="text-gray-900 hover:text-[#042E4B] transition-colors" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link href="#instagram" className="text-gray-900 hover:text-[#042E4B] transition-colors" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
                <Link href="#twitter" className="text-gray-900 hover:text-[#042E4B] transition-colors" aria-label="Twitter/X">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
                <Link href="#youtube" className="text-gray-900 hover:text-[#042E4B] transition-colors" aria-label="YouTube">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
                <Link href="#spotify" className="text-gray-900 hover:text-[#042E4B] transition-colors" aria-label="Spotify">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.779 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-gray-200">
              <Link href="#terms" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Terms of Service</Link>
              <Link href="#privacy" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Privacy Policy</Link>
              <Link href="#cookies" className="text-gray-600 hover:text-[#042E4B] transition-colors text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
