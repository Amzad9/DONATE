import Image from "next/image";
import { Flag, Building2, MapPin, LayoutDashboard, Share2, CreditCard, BarChart3 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main className="pt-18">
        <section className="relative py-16 lg:py-20 min-h-[280px] flex items-center bg-[url('/banner/political.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-darkSoft/85" aria-hidden />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Political Campaigns
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Purpose-built fundraising for federal campaigns, political organizations, and state & local races.
            </p>
          </div>
        </section>
      
        <section className="py-16 lg:py-16 bg-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 lg:mb-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">Purpose-built for political campaigns</h2>
              <p className="text-lg text-textMuted">
                Get started in minutes with solutions built for federal, state, local, and organizational political fundraising.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="group bg-primary rounded-2xl p-8 text-center shadow-card transition-all duration-200 hover:bg-primary-dark hover:shadow-lg">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-5">
                  <Flag className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white mb-3">Federal Campaigns</h2>
                <p className="text-white/90 text-sm leading-relaxed">
                  Comprehensive tools for federal political campaigns and PACs.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 lg:p-10 text-center shadow-card border border-gray-200/60 transition-all duration-200 hover:shadow-lg hover:bg-primary hover:border-primary">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-6 transition-colors">
                  <Building2 className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-xl font-bold text-dark group-hover:text-white mb-3 transition-colors">Organizations</h2>
                <p className="text-textMuted group-hover:text-white/90 text-sm leading-relaxed transition-colors">
                  501(c)(4) organizations and political action committees.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 lg:p-10 text-center shadow-card border border-gray-200/60 transition-all duration-200 hover:shadow-lg hover:bg-primary hover:border-primary">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-6 transition-colors">
                  <MapPin className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-xl font-bold text-dark group-hover:text-white mb-3 transition-colors">State & Local</h2>
                <p className="text-textMuted group-hover:text-white/90 text-sm leading-relaxed transition-colors">
                  State and local campaign fundraising solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
                How Donate Money Now Works
              </h2>
              <p className="text-lg text-textMuted max-w-2xl mx-auto leading-relaxed">
                Start accepting donations in minutes. From setup to reporting—everything you need for political fundraising in one place.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-[72px] left-0 right-0 h-0.5 bg-gray-200/80 max-w-4xl mx-auto" style={{ width: "calc(100% - 4rem)" }} aria-hidden />
              <div className="grid md:grid-cols-4 gap-6 lg:gap-8 relative">
                {[
                  { id: 1, title: "Create Your Page", desc: "Set up a donation page tailored to your campaign. Custom branding, FEC-compliant fields, and contribution limits built in.", icon: LayoutDashboard },
                  { id: 2, title: "Share & Promote", desc: "Share your link via email, social, or QR codes. Embed on your site or use text-to-donate—donors give from anywhere.", icon: Share2 },
                  { id: 3, title: "Receive Donations", desc: "Accept secure payments: cards, Apple Pay, Google Pay, and ACH. PCI compliant with bank-level encryption.", icon: CreditCard },
                  { id: 4, title: "Track & Grow", desc: "One dashboard for donors, reports, and FEC filing. Track limits, export data, and grow your grassroots support.", icon: BarChart3 },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="group relative bg-white p-8 lg:p-10 rounded-2xl shadow-card border border-gray-200/60 text-center transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
                  >
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-6 transition-colors duration-300">
                        <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                     
                      <h3 className="text-lg font-bold text-dark mb-3">{item.title}</h3>
                      <p className="text-sm text-textMuted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
