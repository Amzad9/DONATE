'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Palette, Sliders, Zap, BarChart3, RefreshCw, Shield, TrendingUp } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const WHAT_WE_DELIVER_TABS = [
  { id: "intelligence", label: "Political Intelligence", content: { title: "Political Intelligence", body: "Potomac is a media buying tool built for political with specialized automation, integrations, fast electronic ordering and more all in one unified platform — spend time on what matters." } },
  { id: "media", label: "Political Media Buying", content: { title: "Political Media Buying", body: "Reach voters across TV, digital, and streaming with data-driven planning and execution. Manage budgets, track performance, and optimize in real time." } },
  { id: "trends", label: "Media Trends", content: { title: "Media Trends", body: "Stay ahead with insights on viewership, ad spend, and competitive intelligence. Make informed decisions with up-to-date market data." } },
  { id: "insights", label: "Detailed Local Insights", content: { title: "Detailed Local Insights", body: "Hyper-local data and analytics for state and local campaigns. Understand your districts and target with precision." } },
] as const;

export default function Home() {
  const [activeDeliverTab, setActiveDeliverTab] = useState<string>("intelligence");

  return (
    <div className="">
      <Header />
      <section
        className="relative mt-18 min-h-[55vh] sm:min-h-[65vh] md:min-h-[75vh] lg:min-h-[80vh] py-12 sm:py-16 lg:py-20 flex items-center"
        style={{ backgroundImage: "url('/hero4.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full mx-auto">
            <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-4 sm:mb-6">
                donate money now.
                <br />
                <span className="text-primary capitalize">fueling impact</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 lg:mb-10 font-medium px-0">
                Powerful Fundraising Software for Campaigns, Churches, & Non-Profits
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  href="#learn"
                  className="inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold text-sm sm:text-base border-2 border-primary text-primary hover:bg-primary/10 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  href="#demo"
                  className="inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold text-sm sm:text-base bg-primary hover:bg-primary-dark text-white transition-colors"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
            <div className="hidden lg:block order-1 lg:order-2 min-h-70" aria-hidden />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-16 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-12">
            <div className="group bg-white rounded-2xl p-8 lg:p-10 shadow-card border border-gray-200/60 text-center transition-all duration-200 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/15">
                <svg className="w-9 h-9 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-1.5">Political Campaigns</h3>
              <p className="text-base text-textMuted">Mobilize Your Base</p>
            </div>
            <div className="group bg-white rounded-2xl p-8 lg:p-10 shadow-card border border-gray-200/60 text-center transition-all duration-200 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/15">
                <svg className="w-9 h-9 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-1.5">Churches & Non-Profits</h3>
              <p className="text-base text-textMuted">Grow Your Community</p>
            </div>
            <div className="group bg-white rounded-2xl p-8 lg:p-10 shadow-card border border-gray-200/60 text-center transition-all duration-200 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/15">
                <svg className="w-9 h-9 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-1.5">Secure & Easy</h3>
              <p className="text-base text-textMuted">Process Donations</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-card aspect-4/3 lg:aspect-auto lg:min-h-[320px]">
              <Image
                src="https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Diverse team of professionals collaborating in an office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="bg-darkSoft rounded-2xl p-8 lg:p-10 shadow-card flex flex-col justify-center">
              <h2 className="text-xl lg:text-2xl font-bold text-white capitalize tracking-tight mb-4">
              our commitment to transparency
              </h2>
              <p className="text-white/85 text-base lg:text-lg leading-relaxed mb-8">
                We believe every donation should be handled with integrity. Our platform is built for full transparency—from real-time reporting to FEC-compliant records. We give you the tools to build trust with your donors and run your campaigns with confidence.
              </p>
              <Link
                href="/#story"
                className="inline-flex justify-center items-center px-8 py-4 rounded-lg font-semibold text-base bg-primary hover:bg-primary-dark text-white transition-colors w-fit"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-darkSoft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Finance</h2>
            <p className="text-white/90 text-lg max-w-2xl">
              Track your donations, manage your donors, and reconcile your finances with ease. Donate Money Now provides detailed reports and integrations to streamline your accounting.
            </p>
          </div>
          {/* Lighter blue line above cards */}
          <div className=" mb-0 pt-0" aria-hidden />
          <div className="grid md:grid-cols-3 gap-6 -mt-px">
            <div className="bg-white rounded-2xl p-8 shadow-shadow-soft text-center">
              <div className="w-16 h-16 rounded-full bg-light flex items-center justify-center mx-auto mb-5">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Reporting</h3>
              <p className="text-textMuted text-sm leading-relaxed">
                Access detailed reports on donations, donors, and campaigns with real-time analytics.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-card text-center">
              <div className="w-16 h-16 rounded-full bg-light flex items-center justify-center mx-auto mb-5">
                <RefreshCw className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Reconciliation</h3>
              <p className="text-textMuted text-sm leading-relaxed">
                Easily reconcile your finances with bank statements and accounting software integrations.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-card text-center">
              <div className="w-16 h-16 rounded-full bg-light flex items-center justify-center mx-auto mb-5">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Security</h3>
              <p className="text-textMuted text-sm leading-relaxed">
                Protect donor data with industry-leading security measures and compliance standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver - white section with tabs + 2-column content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">What We Deliver</h2>
            <p className="text-lg text-textMuted max-w-2xl">
              Donate Money Now provides all the tools you need to receive online donations, manage your donors, and track your fundraising progress, all in one place.
            </p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex flex-wrap gap-1 -mb-px" aria-label="What we deliver tabs">
              {WHAT_WE_DELIVER_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveDeliverTab(tab.id)}
                  className={`px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors ${
                    activeDeliverTab === tab.id
                      ? "text-primary border-b-2 border-primary"
                      : "text-textMuted hover:text-dark border-b-2 border-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Two-column content */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-card aspect-video lg:min-h-[320px]">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Analytics and data dashboard"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div>
              {WHAT_WE_DELIVER_TABS.map((tab) =>
                activeDeliverTab === tab.id ? (
                  <div key={tab.id}>
                    <h3 className="text-2xl font-bold text-dark mb-4">{tab.content.title}</h3>
                    <p className="text-textMuted text-lg leading-relaxed">
                      {tab.content.body}
                    </p>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Fueled by Grassroots Donors - 2 columns: copy + metric callout */}
      <section className="py-16 lg:py-16 bg-darkSoft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary leading-tight mb-6">
                Fueled by Grassroots Donors
              </h2>
              <p className="text-lg text-light leading-relaxed mb-8">
                People-powered movements aren&apos;t just inspiring; they&apos;re effective. We know that democracy functions best when more people participate and when campaigns, organizations, and nonprofits are powered by the people they serve.
              </p>
              <Link
                href="#learn"
                className="inline-flex justify-center items-center px-8 py-4 rounded-lg font-semibold text-base border-2 border-primary text-primary hover:bg-primary/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative rounded-2xl p-10 shadow-card border border-darkSoft text-center min-w-[300px] max-w-sm overflow-hidden">
                {/* Subtle accent gradient at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-dark" aria-hidden />
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">$2.5B+</p>
                <p className="text-textMuted text-base font-medium mb-6">Raised through Donate Money Now</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">Trusted by 10,000+ campaigns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="py-20 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-1">
                Trusted by campaigns and nonprofits
              </h2>
              <p className="text-lg text-textMuted max-w-2xl mx-auto leading-relaxed">
                Real results from real campaigns. See how our platform helps achieve fundraising goals and FEC compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group bg-white rounded-2xl p-8 lg:p-10 text-center shadow-card border border-gray-200/60 transition-all duration-200 hover:shadow-lg hover:bg-primary hover:border-primary">
                <p className="text-textMuted group-hover:text-white/90 leading-relaxed mb-6 text-base">
                  &ldquo;Donate transformed our campaign fundraising. FEC reporting is automatic, and we raised 300% more than our previous cycle. The platform is built for political campaigns.&rdquo;
                </p>
                <p className="font-semibold text-dark group-hover:text-white mb-1 transition-colors">Campaign Manager</p>
                <p className="text-textMuted group-hover:text-white/90 text-sm">Federal Senate Campaign, Texas</p>
              </div>

              <div className="group bg-white rounded-2xl p-8 lg:p-10 text-center shadow-card border border-gray-200/60 transition-all duration-200 hover:shadow-lg hover:bg-primary hover:border-primary">
                <p className="text-textMuted group-hover:text-white/90 leading-relaxed mb-6 text-base">
                  &ldquo;The FEC compliance features saved us countless hours. Contribution limits are automatically tracked, and reporting is seamless. Highly recommend for any political campaign.&rdquo;
                </p>
                <p className="font-semibold text-dark group-hover:text-white mb-1 transition-colors">Finance Director</p>
                <p className="text-textMuted group-hover:text-white/90 text-sm">State House Campaign, California</p>
              </div>

              <div className="group bg-white rounded-2xl p-8 lg:p-10 text-center shadow-card border border-gray-200/60 transition-all duration-200 hover:shadow-lg hover:bg-primary hover:border-primary">
                <p className="text-textMuted group-hover:text-white/90 leading-relaxed mb-6 text-base">
                  &ldquo;Our nonprofit saw a 5x increase in recurring donations. The donor management tools are excellent, and the support team understands our compliance needs.&rdquo;
                </p>
                <p className="font-semibold text-dark group-hover:text-white mb-1 transition-colors">Executive Director</p>
                <p className="text-textMuted group-hover:text-white/90 text-sm">501(c)(3) Advocacy Organization</p>
              </div>
            </div>
          </div>
        </section>
         {/* Trust badges / logos - scrolling stripe (theme: navy + red) */}
         <section className="py-12 bg-darkSoft overflow-hidden">
        <p className="text-center text-sm font-medium text-white/90 uppercase tracking-wider mb-6">
          Trusted by campaigns and organizations nationwide
        </p>
        <div className="relative w-full overflow-hidden">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-darkSoft to-transparent z-10 pointer-events-none" aria-hidden />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-darkSoft to-transparent z-10 pointer-events-none" aria-hidden />
          <div className="flex animate-stripe gap-10 whitespace-nowrap py-3" style={{ width: "max-content" }}>
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-10 items-center shrink-0">
                {["Political Campaigns", "PACs & Committees", "501(c)(3) Nonprofits", "501(c)(4) Organizations", "Advocacy Groups", "PCI DSS Compliant", "Bank-level encryption", "FEC Compliant"].map((label) => (
                  <span key={`${setIndex}-${label}`} className="flex items-center gap-10 text-base font-semibold text-white">
                    <span>{label}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/85">
            <span className="flex items-center gap-2 font-medium">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              PCI DSS Compliant
            </span>
            <span className="flex items-center gap-2 font-medium">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Bank-level encryption
            </span>
            <span className="flex items-center gap-2 font-medium">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              FEC Compliant
            </span>
          </div>
        </div>
      </section>
      {/* See how organizations succeed - 3 case study cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              See how organizations succeed with Donate Money Now
            </h2>
            <p className="text-lg text-textMuted">
              Our pricing structure is simple. We only charge a small processing cost on donations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "How Houston Campaign Streamlined Fundraising", desc: "Learn how a local campaign increased donations by 300% using Donate Money Now tools.", img: "https://images.unsplash.com/photo-1540914124281-342587941389?w=600&q=80" },
              { title: "How Superior Donor Support Made a Real Impact For ICAN", desc: "Learn how a local campaign increased donations by 300% using Donate Money Now tools.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" },
              { title: "How XO Marriage Transformed Donor Experience with Donate Money Now", desc: "Learn how a local campaign increased donations by 300% using Donate Money Now tools.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" },
            ].map((card) => (
              <article key={card.title} className="bg-white rounded-2xl overflow-hidden shadow-card flex flex-col">
                <div className="relative aspect-video w-full">
                  <Image src={card.img} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-dark mb-2">{card.title}</h3>
                  <p className="text-textMuted text-sm leading-relaxed mb-4 flex-1">{card.desc}</p>
                  <Link href="#stories" className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1">
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

   
      

      {/* Who We Serve */}
      {/* <section id="solutions" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-textMuted max-w-2xl mx-auto leading-relaxed">
              Purpose-built fundraising solutions for political campaigns, nonprofits, and advocacy organizations. Launch in minutes and raise more.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-graySoft rounded-2xl p-10 shadow-card border border-gray-200/60 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-darkSoft flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Political Campaigns</h3>
              <p className="text-textMuted leading-relaxed text-base mb-4">
                Federal, state, and local campaigns. FEC compliant reporting, contribution limits, and donor management built for political fundraising.
              </p>
              <ul className="space-y-2 text-sm text-textMuted">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Federal campaigns & PACs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>State & local races</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>FEC compliance tools</span>
                </li>
              </ul>
            </div>
            <div className="bg-graySoft rounded-2xl p-10 shadow-card border border-gray-200/60 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-darkSoft flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Nonprofits</h3>
              <p className="text-textMuted leading-relaxed text-base mb-4">
                501(c)(3) and 501(c)(4) organizations. Donor management, recurring giving, and compliance reporting for mission-driven fundraising.
              </p>
              <ul className="space-y-2 text-sm text-textMuted">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>501(c)(3) charities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>501(c)(4) advocacy groups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Donor management tools</span>
                </li>
              </ul>
            </div>
            <div className="bg-graySoft rounded-2xl p-10 shadow-card border border-gray-200/60 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-darkSoft flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Advocacy</h3>
              <p className="text-textMuted leading-relaxed text-base mb-4">
                Issue advocacy, ballot initiatives, and grassroots movements. Powerful tools to mobilize supporters and raise funds for your cause.
              </p>
              <ul className="space-y-2 text-sm text-textMuted">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Ballot initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Issue advocacy campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Grassroots organizing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

  
  

      {/* Final CTA */}
      <section id="contact" className="py-16  bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to start fundraising?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of campaigns and nonprofits using Donate Money Now. FEC compliant. Secure. Trusted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#start"
              className="inline-flex justify-center items-center px-10 py-4 rounded-lg font-semibold text-lg bg-darkSoft hover:bg-darkSoft text-white transition-colors shadow-card"
            >
              Get Started with Donate Money Now
            </Link>
            <Link
              href="#solutions"
              className="inline-flex justify-center items-center px-10 py-4 rounded-lg font-semibold text-lg bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
