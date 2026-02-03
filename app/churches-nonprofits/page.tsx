import Link from "next/link";
import Image from "next/image";
import { Heart, Shield, Smartphone, Repeat, Users, CreditCard, DollarSign, Zap, FileCheck, Headphones } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ChurchesNonprofitsPage() {
  return (
    <div className="">
      <Header />
      <main className="pt-24 lg:pt-12">
        {/* Banner - same as home Finance / Contact style */}
        <section className="py-16 lg:py-20 bg-(--navy)">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Churches & Nonprofits
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Grow your community with secure, easy online giving. No monthly fees—just simple processing so more of every gift goes to your mission.
            </p>
          </div>
        </section>

        {/* Who it's for + feature cards - same as Solutions & Transparency (light-bg, 3 cards row) */}
        <section className="py-16 lg:py-24 bg-(--light-bg)">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
                Built for ministries, charities, and 501(c)(3) organizations
              </h2>
              <p className="text-lg text-[var(--gray-600)] leading-relaxed">
                Elite Donate helps churches and nonprofits accept donations online and by text, manage donors, and run recurring giving—with reporting that fits your needs and no monthly contracts.
              </p>
            </div>

            {/* Top row - 3 feature cards (same style as home Solutions & Transparency) */}
            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-[var(--navy)]/10 flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-[var(--navy)]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Online Giving</h3>
                <p className="text-base text-[var(--gray-600)]">
                  Donation pages and forms that work on any device. Accept cards, Apple Pay, Google Pay, and ACH.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-[var(--navy)]/10 flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-[var(--navy)]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Text-to-Give</h3>
                <p className="text-base text-[var(--gray-600)]">
                  Let donors give by text during services or events. Free text-to-give included—no extra fees.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-[var(--navy)]/10 flex items-center justify-center">
                  <Repeat className="w-8 h-8 text-[var(--navy)]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Recurring Donations</h3>
                <p className="text-base text-[var(--gray-600)]">
                  Set up recurring giving so supporters can give monthly or weekly with one click.
                </p>
              </div>
            </div>

            {/* Two-column block: image left, dark panel right (same as home transparency block) */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] aspect-4/3 lg:aspect-auto lg:min-h-[320px]">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                  alt="Community and volunteers at a church or nonprofit event"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="bg-[var(--hero-dark)] rounded-2xl p-8 lg:p-10 shadow-[var(--shadow-card)] flex flex-col justify-center">
                <h2 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-4">
                  Why churches and nonprofits trust Elite
                </h2>
                <p className="text-white/85 text-base lg:text-lg leading-relaxed mb-8">
                  We believe every donation should be handled with integrity. Our platform gives you transparent reporting, secure processing, and tools to grow recurring giving—so you can focus on your mission instead of paperwork.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center px-8 py-4 rounded-lg font-semibold text-base bg-[var(--red)] hover:bg-[var(--red-dark)] text-white transition-colors w-fit"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            {/* Second row of cards - Donor management, Secure, No monthly fees */}
            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mt-10 lg:mt-12">
              <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-[var(--navy)]/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-[var(--navy)]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Donor Management</h3>
                <p className="text-base text-[var(--gray-600)]">
                  Keep donor records in one place. Export for your CRM or accounting when you need it.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-[var(--navy)]/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[var(--navy)]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Secure & Compliant</h3>
                <p className="text-base text-[var(--gray-600)]">
                  PCI DSS compliant processing and bank-level encryption. Donor data stays safe.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-[var(--red)]/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-[var(--red)]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">No Monthly Fees</h3>
                <p className="text-base text-[var(--gray-600)]">
                  Pay only when you receive a donation. No setup fees, no contracts, no surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose - card grid layout */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
                Why churches and nonprofits choose Elite Donate
              </h2>
              <p className="text-lg text-[var(--gray-600)] max-w-2xl mx-auto leading-relaxed">
                Simple setup, transparent pricing, and tools built for ministry and mission-driven fundraising.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: DollarSign, title: "No monthly fees", desc: "No long-term contracts or hidden costs. Pay only when you receive a donation." },
                { icon: Smartphone, title: "Free text-to-give", desc: "Let donors give by text during services or events—included at no extra fee." },
                { icon: Repeat, title: "Recurring giving", desc: "Steady support with monthly or weekly giving. One click for your donors." },
                { icon: Zap, title: "Simple setup", desc: "Start accepting donations fast. Get your page and tools ready in minutes." },
                { icon: Users, title: "Donor management", desc: "One place for donor records. Easy exports for your CRM or accounting." },
                { icon: Shield, title: "PCI DSS compliant", desc: "Bank-level encryption and secure processing. Donor data stays safe." },
                { icon: Headphones, title: "Friendly support", desc: "A team that understands ministry and mission-driven fundraising." },
                { icon: FileCheck, title: "Transparent pricing", desc: "You keep more of every gift. Clear rates, no surprises." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[var(--light-bg)] rounded-2xl p-6 shadow-[var(--shadow-card)] border border-gray-200/60 flex flex-col text-center sm:text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--red)]/10 flex items-center justify-center mb-4 sm:mx-0 mx-auto">
                    <item.icon className="w-6 h-6 text-[var(--red)]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--gray-600)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial - same card style as home testimonials */}
        <section className="py-20 lg:py-24 bg-[var(--light-bg)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
                Trusted by churches and nonprofits
              </h2>
              <p className="text-lg text-[var(--gray-600)] max-w-2xl mx-auto leading-relaxed">
                Real results from ministries and 501(c)(3) organizations using Elite Donate.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-10 shadow-[var(--shadow-card)] border border-gray-200/60">
                <p className="text-[#1A1A1A] leading-relaxed mb-6 text-base">
                  &ldquo;Our church doubled online giving in the first year. Text-to-give is a hit on Sundays, and we love that there are no monthly fees.&rdquo;
                </p>
                <p className="font-semibold text-[#1A1A1A] text-base">Stewardship Director</p>
                <p className="text-[var(--gray-600)] text-sm mt-1">Community Church, Midwest</p>
              </div>
              <div className="bg-white rounded-2xl p-10 shadow-[var(--shadow-card)] border border-gray-200/60">
                <p className="text-[#1A1A1A] leading-relaxed mb-6 text-base">
                  &ldquo;Our nonprofit saw a 5x increase in recurring donations. The donor management tools are excellent, and the support team understands our compliance needs.&rdquo;
                </p>
                <p className="font-semibold text-[#1A1A1A] text-base">Executive Director</p>
                <p className="text-[var(--gray-600)] text-sm mt-1">501(c)(3) Advocacy Organization</p>
              </div>
              <div className="bg-white rounded-2xl p-10 shadow-[var(--shadow-card)] border border-gray-200/60">
                <p className="text-[#1A1A1A] leading-relaxed mb-6 text-base">
                  &ldquo;Setup was quick and our congregation adopted it right away. Reporting is clear and we finally have one place for all our donor data.&rdquo;
                </p>
                <p className="font-semibold text-[#1A1A1A] text-base">Finance Manager</p>
                <p className="text-[var(--gray-600)] text-sm mt-1">Regional Ministry Network</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - same as home */}
        <section className="py-24 lg:py-32 bg-[var(--navy)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to grow your giving?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join churches and nonprofits using Elite Donate. No monthly fees. Secure. Get started in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#start"
                className="inline-flex justify-center items-center px-10 py-4 rounded-lg font-semibold text-lg bg-[var(--red)] hover:bg-[var(--red-dark)] text-white transition-colors shadow-[var(--shadow-card)]"
              >
                Get Started with Elite Donate
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-10 py-4 rounded-lg font-semibold text-lg bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
