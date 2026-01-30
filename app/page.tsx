'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-3 shadow-lg" style={{background: 'linear-gradient(135deg, #4488B8 0%, #3574a0 100%)'}}>
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Elite Donate</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-700 hover:text-[#4488B8] font-medium transition-colors text-base">Features</Link>
              <Link href="#solutions" className="text-gray-700 hover:text-[#4488B8] font-medium transition-colors text-base">Solutions</Link>
              <Link href="#pricing" className="text-gray-700 hover:text-[#4488B8] font-medium transition-colors text-base">Pricing</Link>
              <Link href="#support" className="text-gray-700 hover:text-[#4488B8] font-medium transition-colors text-base">Support</Link>
              <Link href="#about" className="text-gray-700 hover:text-[#4488B8] font-medium transition-colors text-base">About</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#login" className="text-gray-700 hover:text-[#4488B8] font-medium transition-colors hidden md:block text-base">Log In</Link>
              <Link href="#start" className="text-white px-6 py-2.5 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105" style={{background: 'linear-gradient(135deg, #4488B8 0%, #3574a0 100%)'}}>
                Start Fundraising
              </Link>
            </div>
          </div>
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
        <div className="absolute inset-0 bg-linear-to-r from-[#4488B8]/30 via-transparent to-[#FCBD49]/10"></div>
        
        {/* Lineart Overlay - Left to Right */}
        <div className="absolute inset-0 z-10 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Decorative lines flowing left to right */}
            <path d="M0,200 Q400,100 800,200 T1920,200" stroke="#4488B8" strokeWidth="3" fill="none" opacity="0.6"/>
            <path d="M0,400 Q500,300 1000,400 T1920,400" stroke="#FCBD49" strokeWidth="3" fill="none" opacity="0.5"/>
            <path d="M0,600 Q600,500 1200,600 T1920,600" stroke="#F66E7B" strokeWidth="3" fill="none" opacity="0.4"/>
            <path d="M0,300 Q300,250 600,300 T1920,300" stroke="#4488B8" strokeWidth="2" fill="none" opacity="0.5"/>
            <path d="M0,700 Q700,600 1400,700 T1920,700" stroke="#FCBD49" strokeWidth="2" fill="none" opacity="0.4"/>
            <path d="M0,500 Q400,450 800,500 T1920,500" stroke="#F66E7B" strokeWidth="2" fill="none" opacity="0.3"/>
            
            {/* Additional decorative elements */}
            <circle cx="300" cy="300" r="4" fill="#4488B8" opacity="0.6"/>
            <circle cx="700" cy="500" r="3.5" fill="#FCBD49" opacity="0.5"/>
            <circle cx="1100" cy="700" r="4" fill="#F66E7B" opacity="0.4"/>
            <circle cx="400" cy="800" r="3" fill="#4488B8" opacity="0.5"/>
            <circle cx="1200" cy="900" r="3.5" fill="#FCBD49" opacity="0.4"/>
            
            {/* Connecting lines */}
            <line x1="300" y1="300" x2="700" y2="500" stroke="#4488B8" strokeWidth="1.5" opacity="0.3" strokeDasharray="6,6"/>
            <line x1="700" y1="500" x2="1100" y2="700" stroke="#FCBD49" strokeWidth="1.5" opacity="0.3" strokeDasharray="6,6"/>
            <line x1="400" y1="800" x2="1200" y2="900" stroke="#F66E7B" strokeWidth="1.5" opacity="0.3" strokeDasharray="6,6"/>
          </svg>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10" style={{background: 'radial-gradient(circle, #4488B8 0%, transparent 70%)', transform: 'translate(30%, -30%)'}}></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-10" style={{background: 'radial-gradient(circle, #FCBD49 0%, transparent 70%)', transform: 'translate(-30%, 30%)'}}></div>
        
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
                  style={{background: 'linear-gradient(135deg, #4488B8 0%, #3574a0 100%)'}}
                >
                  Start Accepting Donations
                </Link>
                <Link 
                  href="#demo" 
                  className="bg-white hover:bg-gray-50 border-2 px-10 py-5 rounded-xl font-bold text-xl transition-all text-center hover:shadow-xl transform hover:scale-105" 
                  style={{borderColor: '#4488B8', color: '#4488B8'}}
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
              Launch your fundraising efforts, fast
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes with our purpose-built solutions for every type of organization
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative text-white rounded-3xl p-8 cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden" style={{background: 'linear-gradient(135deg, #4488B8 0%, #3574a0 100%)'}}>
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
            <div className="group relative text-white rounded-3xl p-8 cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden" style={{background: 'linear-gradient(135deg, #FCBD49 0%, #e8a832 100%)'}}>
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
            <div className="group relative text-white rounded-3xl p-8 cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden" style={{background: 'linear-gradient(135deg, #F66E7B 0%, #e55a68 100%)'}}>
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
            <div className="group relative text-white rounded-3xl p-8 cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden" style={{background: 'linear-gradient(135deg, #4488B8 0%, #5a9bc8 100%)'}}>
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
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #4488B8 0%, transparent 70%)', transform: 'translate(-50%, -50%)'}}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #FCBD49 0%, transparent 70%)', transform: 'translate(50%, 50%)'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{background: 'rgba(68, 136, 184, 0.1)', color: '#4488B8'}}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Powerful Features</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Everything you need to receive online giving and donations
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
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #4488B8 0%, transparent 70%)', transform: 'translate(30%, -30%)'}}></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold mb-8 shadow-sm" style={{background: 'linear-gradient(135deg, rgba(68, 136, 184, 0.15) 0%, rgba(68, 136, 184, 0.1) 100%)', color: '#4488B8'}}>
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
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #4488B8 0%, #3574a0 100%)'}}>
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
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #FCBD49 0%, #e8a832 100%)'}}>
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
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #F66E7B 0%, #e55a68 100%)'}}>
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
                  <Link href="#learn-more" className="font-bold inline-flex items-center gap-3 text-lg group transition-all" style={{color: '#4488B8'}}>
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
                    <button className="text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105" style={{background: 'linear-gradient(135deg, #4488B8 0%, #3574a0 100%)'}}>
                      + New Page
                    </button>
                  </div>
                  <div className="space-y-5">
                    <div className="border-2 rounded-2xl p-6 transition-all cursor-pointer group hover:shadow-xl" style={{borderColor: 'rgba(68, 136, 184, 0.2)', background: 'linear-gradient(135deg, rgba(68, 136, 184, 0.02) 0%, rgba(255, 255, 255, 1) 100%)'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = 'rgba(68, 136, 184, 0.4)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(68, 136, 184, 0.05) 0%, rgba(255, 255, 255, 1) 100%)';}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = 'rgba(68, 136, 184, 0.2)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(68, 136, 184, 0.02) 0%, rgba(255, 255, 255, 1) 100%)';}}>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-gray-900 text-lg">Campaign 2024</span>
                        <span className="text-xs px-3 py-1.5 rounded-full font-bold shadow-sm" style={{background: 'rgba(16, 185, 129, 0.1)', color: '#10b981'}}>Active</span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-bold text-gray-900">$12,450</span>
                        <span className="text-sm text-gray-500 font-medium">raised</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full rounded-full transition-all duration-500" style={{width: '75%', background: 'linear-gradient(90deg, #4488B8 0%, #3574a0 100%)'}}></div>
                      </div>
                    </div>
                    <div className="border-2 rounded-2xl p-6 transition-all cursor-pointer group hover:shadow-xl" style={{borderColor: 'rgba(252, 189, 73, 0.2)', background: 'linear-gradient(135deg, rgba(252, 189, 73, 0.02) 0%, rgba(255, 255, 255, 1) 100%)'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = 'rgba(252, 189, 73, 0.4)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(252, 189, 73, 0.05) 0%, rgba(255, 255, 255, 1) 100%)';}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = 'rgba(252, 189, 73, 0.2)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(252, 189, 73, 0.02) 0%, rgba(255, 255, 255, 1) 100%)';}}>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-gray-900 text-lg">Monthly Donors</span>
                        <span className="text-xs px-3 py-1.5 rounded-full font-bold shadow-sm" style={{background: 'rgba(16, 185, 129, 0.1)', color: '#10b981'}}>Active</span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-bold text-gray-900">$8,200</span>
                        <span className="text-sm text-gray-500 font-medium">raised</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full rounded-full transition-all duration-500" style={{width: '60%', background: 'linear-gradient(90deg, #FCBD49 0%, #e8a832 100%)'}}></div>
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
                <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #FCBD49 0%, transparent 70%)', transform: 'translate(-30%, -30%)'}}></div>
                <div className="bg-white rounded-3xl shadow-2xl p-10 w-full border-2 relative z-10" style={{borderColor: 'rgba(252, 189, 73, 0.1)'}}>
                  <div className="flex items-center justify-between mb-8 pb-6 border-b-2" style={{borderColor: 'rgba(252, 189, 73, 0.1)'}}>
                    <div>
                      <h4 className="font-bold text-gray-900 text-2xl mb-2">Financial Overview</h4>
                      <p className="text-sm text-gray-500 font-medium">Last 30 days performance</p>
                    </div>
                    <button className="text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105" style={{background: 'linear-gradient(135deg, #FCBD49 0%, #e8a832 100%)'}}>
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
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'rgba(16, 185, 129, 0.1)'}}>
                          <svg className="w-6 h-6" style={{color: '#10b981'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">$45,230</div>
                      <div className="flex items-center gap-2 text-sm font-bold" style={{color: '#10b981'}}>
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
                          <svg className="w-6 h-6" style={{color: '#4488B8'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">$12,450</div>
                      <div className="flex items-center gap-2 text-sm font-bold" style={{color: '#4488B8'}}>
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
                          <svg className="w-6 h-6" style={{color: '#F66E7B'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">$8,200</div>
                      <div className="flex items-center gap-2 text-sm font-bold" style={{color: '#F66E7B'}}>
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
                <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #FCBD49 0%, transparent 70%)', transform: 'translate(30%, 30%)'}}></div>
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
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #FCBD49 0%, #e8a832 100%)'}}>
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
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #FCBD49 0%, #e8a832 100%)'}}>
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
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #FCBD49 0%, #e8a832 100%)'}}>
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
      <section className="py-24 lg:py-32 text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, #4488B8 0%, #3574a0 100%)'}}>
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{background: 'radial-gradient(circle, #FCBD49 0%, transparent 70%)', transform: 'translate(30%, -30%)'}}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10" style={{background: 'radial-gradient(circle, #F66E7B 0%, transparent 70%)', transform: 'translate(-30%, 30%)'}}></div>
        
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
                <h3 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#FCBD49'}}>
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

              <Link href="#features" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg bg-white text-[#4488B8] hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
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
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl z-20" style={{background: 'linear-gradient(135deg, #FCBD49 0%, #e8a832 100%)'}}>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">+45%</div>
                    <div className="text-xs font-semibold text-white/90">Conversion</div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-xl flex items-center justify-center shadow-2xl z-20" style={{background: 'linear-gradient(135deg, #F66E7B 0%, #e55a68 100%)'}}>
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
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{color: '#FCBD49'}}>45%</div>
              <div className="text-white/80 font-medium">Higher Conversion</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{color: '#FCBD49'}}>3x</div>
              <div className="text-white/80 font-medium">Faster Checkout</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{color: '#FCBD49'}}>98%</div>
              <div className="text-white/80 font-medium">Mobile Optimized</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{color: '#FCBD49'}}>24/7</div>
              <div className="text-white/80 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #4488B8 0%, transparent 70%)', transform: 'translate(30%, -30%)'}}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #FCBD49 0%, transparent 70%)', transform: 'translate(-30%, 30%)'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6" style={{background: 'rgba(68, 136, 184, 0.1)', color: '#4488B8'}}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Integrations</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Power up and connect your tools
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Elite Processing integrates with your favorite tools to streamline your workflow and maximize your impact.
            </p>
          </div>

        

          {/* Integration Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
            {[
              { name: 'Mailchimp', category: 'Marketing' },
              { name: 'Salesforce', category: 'CRM' },
              { name: 'Stripe', category: 'Payment' },
              { name: 'Zapier', category: 'Automation' },
              { name: 'Google Analytics', category: 'Analytics' },
              { name: 'Facebook', category: 'Social' },
              { name: 'QuickBooks', category: 'Accounting' },
              { name: 'HubSpot', category: 'CRM' },
              { name: 'Constant Contact', category: 'Marketing' },
              { name: 'Pipedrive', category: 'CRM' }
            ].map((integration, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer transform hover:-translate-y-2"
                style={{borderColor: 'rgba(68, 136, 184, 0.1)'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(68, 136, 184, 0.3)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(68, 136, 184, 0.02) 0%, rgba(255, 255, 255, 1) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(68, 136, 184, 0.1)';
                  e.currentTarget.style.background = 'white';
                }}
              >
                {/* Icon/Logo placeholder with better styling */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 group-hover:scale-110 transition-transform duration-300 border-2" style={{borderColor: 'rgba(68, 136, 184, 0.1)'}}>
                  <svg className="w-10 h-10" style={{color: '#4488B8'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-center font-bold text-gray-900 mb-2 text-lg leading-tight group-hover:text-[#4488B8] transition-colors">
                  {integration.name}
                </h3>
                <p className="text-center text-sm text-gray-500 font-medium">{integration.category}</p>
                {/* Hover overlay effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" style={{background: 'linear-gradient(135deg, #4488B8 0%, #FCBD49 100%)'}}></div>
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
                style={{background: 'linear-gradient(135deg, #4488B8 0%, #3574a0 100%)'}}
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
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #4488B8 0%, transparent 70%)', transform: 'translate(-30%, -30%)'}}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #FCBD49 0%, transparent 70%)', transform: 'translate(30%, 30%)'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6" style={{background: 'rgba(68, 136, 184, 0.1)', color: '#4488B8'}}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Pricing</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              No monthly fees, no contracts, your success is our success
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Elite Processing offers transparent pricing with no hidden fees. You only pay when you receive a donation.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Pricing Card */}
            <div className="rounded-3xl shadow-2xl p-10 lg:p-16 text-white relative overflow-hidden mb-12" style={{background: 'linear-gradient(135deg, #4488B8 0%, #3574a0 100%)'}}>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{background: 'radial-gradient(circle, #FCBD49 0%, transparent 70%)', transform: 'translate(30%, -30%)'}}></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10" style={{background: 'radial-gradient(circle, #F66E7B 0%, transparent 70%)', transform: 'translate(-30%, 30%)'}}></div>
              
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
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-1.5 rounded-full text-sm font-bold shadow-lg" style={{background: 'linear-gradient(135deg, #FCBD49 0%, #e8a832 100%)', color: 'white'}}>
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
                    style={{color: '#4488B8'}}
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
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #4488B8 0%, transparent 70%)', transform: 'translate(30%, -30%)'}}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #FCBD49 0%, transparent 70%)', transform: 'translate(-30%, 30%)'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6" style={{background: 'rgba(68, 136, 184, 0.1)', color: '#4488B8'}}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span>Success Stories</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              See how organizations succeed with Elite Processing
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
                  <span className="text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg" style={{background: 'linear-gradient(135deg, #4488B8 0%, #3574a0 100%)'}}>Case Study</span>
                </div>
                {/* Stats overlay */}
                <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-xl">
                  <div className="text-2xl font-bold" style={{color: '#4488B8'}}>+300%</div>
                  <div className="text-xs text-gray-600 font-semibold">Donations</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#4488B8] transition-colors">
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
                <Link href="#story1" className="font-bold inline-flex items-center gap-2 text-lg hover:gap-3 transition-all group" style={{color: '#4488B8'}}>
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
                  <span className="text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg" style={{background: 'linear-gradient(135deg, #FCBD49 0%, #e8a832 100%)'}}>Success</span>
                </div>
                {/* Stats overlay */}
                <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-xl">
                  <div className="text-2xl font-bold" style={{color: '#FCBD49'}}>98%</div>
                  <div className="text-xs text-gray-600 font-semibold">Satisfaction</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#4488B8] transition-colors">
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
                <Link href="#story2" className="font-bold inline-flex items-center gap-2 text-lg hover:gap-3 transition-all group" style={{color: '#4488B8'}}>
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
                  <span className="text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg" style={{background: 'linear-gradient(135deg, #F66E7B 0%, #e55a68 100%)'}}>Featured</span>
                </div>
                {/* Stats overlay */}
                <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-xl">
                  <div className="text-2xl font-bold" style={{color: '#F66E7B'}}>5x</div>
                  <div className="text-xs text-gray-600 font-semibold">Growth</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#4488B8] transition-colors">
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
                <Link href="#story3" className="font-bold inline-flex items-center gap-2 text-lg hover:gap-3 transition-all group" style={{color: '#4488B8'}}>
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
              style={{borderColor: '#4488B8', color: '#4488B8'}}
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
      <section className="py-20 text-white" style={{background: 'linear-gradient(135deg, #4488B8 0%, #3574a0 100%)'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Fueled by grassroots donors</h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Together, we're building a movement powered by millions of small-dollar contributions that make a big impact.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-2xl mx-auto">
            <div className="text-6xl lg:text-7xl font-bold mb-4">$2.5B+</div>
            <p className="text-2xl text-white/90">Raised through Elite Processing since 2015</p>
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
                <Link href="#start" className="text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg text-center hover:shadow-xl transform hover:scale-105" style={{background: 'linear-gradient(135deg, #4488B8 0%, #3574a0 100%)'}}>
                  Get Started with Elite Processing
                </Link>
                <Link href="#solutions" className="bg-white hover:bg-gray-50 border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all text-center hover:shadow-lg" style={{borderColor: '#4488B8', color: '#4488B8'}}>
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
      <div className="text-white py-6" style={{background: 'linear-gradient(135deg, #4488B8 0%, #3574a0 100%)'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xl font-semibold">Get started with Elite Processing</p>
          <Link href="#start" className="bg-white hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-md" style={{color: '#4488B8'}}>
            Start Fundraising
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{background: 'linear-gradient(135deg, #4488B8 0%, #3574a0 100%)'}}>
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="text-2xl font-bold text-white">Elite Processing</span>
              </div>
              <p className="text-gray-400">Build Change</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2">
                <li><Link href="#signup" className="hover:text-white transition-colors">Sign Up</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#demo" className="hover:text-white transition-colors">Demo</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><Link href="#action-pages" className="hover:text-white transition-colors">Action Pages</Link></li>
                <li><Link href="#finance" className="hover:text-white transition-colors">Finance</Link></li>
                <li><Link href="#reporting" className="hover:text-white transition-colors">Reporting</Link></li>
                <li><Link href="#integrations" className="hover:text-white transition-colors">Integrations</Link></li>
                <li><Link href="#security" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><Link href="#nonprofits" className="hover:text-white transition-colors">Nonprofits</Link></li>
                <li><Link href="#churches" className="hover:text-white transition-colors">Churches</Link></li>
                <li><Link href="#political" className="hover:text-white transition-colors">Political Campaigns</Link></li>
                <li><Link href="#schools" className="hover:text-white transition-colors">Schools & Universities</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="#help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#contact-support" className="hover:text-white transition-colors">Contact Support</Link></li>
                <li><Link href="#api" className="hover:text-white transition-colors">API Documentation</Link></li>
                <li><Link href="#status" className="hover:text-white transition-colors">Status Page</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">© 2024 Elite Processing. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="#terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
