import Link from "next/link";
import Image from "next/image";
import { Heart, Shield, Smartphone, Repeat, Users, CreditCard, DollarSign, Zap, FileCheck, Headphones } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ChurchesNonprofitsPage() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main className="pt-18">
        <section className="relative py-16 lg:py-20 min-h-[280px] flex items-center bg-[url('/banner/Nonprofits.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-darkSoft/85" aria-hidden />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Nonprofits &amp; Churches
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Grow your community with secure, easy online giving. Flat $20/month and donor-covered fees so more of every gift goes to your mission.
            </p>
          </div>
        </section>

        {/* Who it's for + feature cards - same as Solutions & Transparency (light-bg, 3 cards row) */}
        <section className="py-16 lg:py-16 bg-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
                Built for ministries, charities, and 501(c)(3) organizations
              </h2>
              <p className="text-lg text-textMuted leading-relaxed">
                Elite Donate helps churches and nonprofits accept donations online and by text, manage donors, and run recurring giving—with reporting that fits your needs and no monthly contracts.
              </p>
            </div>

            {/* Top row - 3 feature cards (light theme, same as home) */}
            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-12">
              <div className="group bg-white rounded-2xl p-8 lg:p-10 shadow-card border border-gray-200/60 text-center transition-all duration-200 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/15">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-1.5">Online Giving</h3>
                <p className="text-base text-textMuted">
                  Donation pages and forms that work on any device. Accept cards, Apple Pay, Google Pay, and ACH.
                </p>
              </div>
              <div className="group bg-white rounded-2xl p-8 lg:p-10 shadow-card border border-gray-200/60 text-center transition-all duration-200 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/15">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-1.5">Text-to-Give</h3>
                <p className="text-base text-textMuted">
                  Let donors give by text during services or events. Free text-to-give included—no extra fees.
                </p>
              </div>
              <div className="group bg-white rounded-2xl p-8 lg:p-10 shadow-card border border-gray-200/60 text-center transition-all duration-200 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/15">
                  <Repeat className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-1.5">Recurring Donations</h3>
                <p className="text-base text-textMuted">
                  Set up recurring giving so supporters can give monthly or weekly with one click.
                </p>
              </div>
            </div>

            {/* Two-column block: image left, dark panel right (same as home transparency block) */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="relative rounded-2xl overflow-hidden shadow-card aspect-4/3 lg:aspect-auto lg:min-h-[320px]">
                <Image
                  src="/new/p.png"
                  alt="Community and volunteers at a church or nonprofit event"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="bg-darkSoft rounded-2xl p-8 lg:p-10 shadow-card flex flex-col justify-center">
                <h2 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-4">
                  Why churches and nonprofits trust Elite
                </h2>
                <p className="text-white/85 text-base lg:text-lg leading-relaxed mb-8">
                  We believe every donation should be handled with integrity. Our platform gives you transparent reporting, secure processing, and tools to grow recurring giving—so you can focus on your mission instead of paperwork.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center px-8 py-4 rounded-lg font-semibold text-base bg-primary hover:bg-primary-dark text-white transition-colors w-fit"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            {/* Second row of cards - Donor management, Secure, No monthly fees */}
            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mt-10 lg:mt-12">
              <div className="group bg-white rounded-2xl p-8 lg:p-10 shadow-card border border-gray-200/60 text-center transition-all duration-200 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/15">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-1.5">Donor Management</h3>
                <p className="text-base text-textMuted">
                  Keep donor records in one place. Export for your CRM or accounting when you need it.
                </p>
              </div>
              <div className="group bg-white rounded-2xl p-8 lg:p-10 shadow-card border border-gray-200/60 text-center transition-all duration-200 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/15">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-1.5">Secure & Compliant</h3>
                <p className="text-base text-textMuted">
                  PCI DSS compliant processing and bank-level encryption. Donor data stays safe.
                </p>
              </div>
              <div className="group bg-white rounded-2xl p-8 lg:p-10 shadow-card border border-gray-200/60 text-center transition-all duration-200 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/15">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-1.5">No Monthly Fees</h3>
                <p className="text-base text-textMuted">
                  Pay only when you receive a donation. No setup fees, no contracts, no surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose - card grid layout (light theme) */}
        <section className="py-16 lg:py-16 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 lg:mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
                Why churches and nonprofits choose Elite Donate
              </h2>
              <p className="text-lg text-textMuted max-w-2xl mx-auto leading-relaxed">
                Simple setup, transparent pricing, and tools built for ministry and mission-driven fundraising.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
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
                  className="group bg-white rounded-2xl p-6 lg:p-8 shadow-card border border-gray-200/60 flex flex-col text-center sm:text-left transition-all duration-200 hover:shadow-lg hover:border-primary/20"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mx-0 mx-auto transition-colors group-hover:bg-primary/15">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-textMuted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial - same card style as home testimonials */}
        <section className="py-16 lg:py-16 bg-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 lg:mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
                Trusted by churches and nonprofits
              </h2>
              <p className="text-lg text-textMuted max-w-2xl mx-auto leading-relaxed">
                Real results from ministries and 501(c)(3) organizations using Elite Donate.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group bg-white rounded-2xl p-10 shadow-card border border-gray-200/60 transition-all duration-200 hover:bg-primary hover:border-primary hover:shadow-lg">
                <p className="text-dark group-hover:text-white/90 leading-relaxed mb-6 text-base transition-colors">
                  &ldquo;Our church doubled online giving in the first year. Text-to-give is a hit on Sundays, and we love that there are no monthly fees.&rdquo;
                </p>
                <p className="font-semibold text-dark group-hover:text-white text-base transition-colors">Stewardship Director</p>
                <p className="text-textMuted group-hover:text-white/80 text-sm mt-1 transition-colors">Community Church, Midwest</p>
              </div>
              <div className="group bg-white rounded-2xl p-10 shadow-card border border-gray-200/60 transition-all duration-200 hover:bg-primary hover:border-primary hover:shadow-lg">
                <p className="text-dark group-hover:text-white/90 leading-relaxed mb-6 text-base transition-colors">
                  &ldquo;Our nonprofit saw a 5x increase in recurring donations. The donor management tools are excellent, and the support team understands our compliance needs.&rdquo;
                </p>
                <p className="font-semibold text-dark group-hover:text-white text-base transition-colors">Executive Director</p>
                <p className="text-textMuted group-hover:text-white/80 text-sm mt-1 transition-colors">501(c)(3) Advocacy Organization</p>
              </div>
              <div className="group bg-white rounded-2xl p-10 shadow-card border border-gray-200/60 transition-all duration-200 hover:bg-primary hover:border-primary hover:shadow-lg">
                <p className="text-dark group-hover:text-white/90 leading-relaxed mb-6 text-base transition-colors">
                  &ldquo;Setup was quick and our congregation adopted it right away. Reporting is clear and we finally have one place for all our donor data.&rdquo;
                </p>
                <p className="font-semibold text-dark group-hover:text-white text-base transition-colors">Finance Manager</p>
                <p className="text-textMuted group-hover:text-white/80 text-sm mt-1 transition-colors">Regional Ministry Network</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-darkSoft">
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
                className="inline-flex justify-center items-center px-10 py-4 rounded-lg font-semibold text-lg bg-primary hover:bg-primary-dark text-white transition-colors shadow-card"
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
