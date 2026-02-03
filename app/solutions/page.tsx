import { Flag, Building2, MapPin, Heart } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[var(--light-bg)]">
      <Header />
      <main className="pt-24 lg:pt-18 pb-20">
        {/* Banner - same style as Contact page */}
        <section className="py-16 lg:py-20 bg-[var(--navy)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Solutions
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Purpose-built fundraising for federal campaigns, political organizations, state & local races, and nonprofits.
            </p>
          </div>
        </section>

        {/* Our Solutions - 4 cards, Federal highlighted in red (same design as home) */}
        <section className="py-16 lg:py-24 bg-[var(--light-bg)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-lg text-[var(--gray-600)] max-w-2xl">
                Get started in minutes with our purpose-built solutions for every type of organization.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Federal Campaigns - highlighted red, darker on hover */}
              <div className="group bg-[var(--red)] rounded-2xl p-8 text-center shadow-[var(--shadow-card)] transition-colors hover:bg-[var(--red-dark)]">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-5">
                  <Flag className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white mb-3">Federal Campaigns</h2>
                <p className="text-white/90 text-sm leading-relaxed">
                  Comprehensive tools for federal political campaigns and PACs.
                </p>
              </div>

              {/* Political Organizations - red on hover */}
              <div className="group bg-white rounded-2xl p-8 text-center shadow-[var(--shadow-card)] border border-gray-200/60 transition-colors hover:bg-[var(--red)] hover:border-[var(--red)]">
                <div className="w-16 h-16 rounded-full bg-[var(--light-bg)] group-hover:bg-white/20 flex items-center justify-center mx-auto mb-5 transition-colors">
                  <Building2 className="w-8 h-8 text-[var(--red)] group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-xl font-bold text-[#1A1A1A] group-hover:text-white mb-3 transition-colors">Political Organizations</h2>
                <p className="text-[var(--gray-600)] group-hover:text-white/90 text-sm leading-relaxed transition-colors">
                  501(c)(4) organizations and political action committees.
                </p>
              </div>

              {/* State & Local - red on hover */}
              <div className="group bg-white rounded-2xl p-8 text-center shadow-[var(--shadow-card)] border border-gray-200/60 transition-colors hover:bg-[var(--red)] hover:border-[var(--red)]">
                <div className="w-16 h-16 rounded-full bg-[var(--light-bg)] group-hover:bg-white/20 flex items-center justify-center mx-auto mb-5 transition-colors">
                  <MapPin className="w-8 h-8 text-[var(--red)] group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-xl font-bold text-[#1A1A1A] group-hover:text-white mb-3 transition-colors">State & Local</h2>
                <p className="text-[var(--gray-600)] group-hover:text-white/90 text-sm leading-relaxed transition-colors">
                  State and local campaign fundraising solutions.
                </p>
              </div>

              {/* Nonprofits - red on hover */}
              <div className="group bg-white rounded-2xl p-8 text-center shadow-[var(--shadow-card)] border border-gray-200/60 transition-colors hover:bg-[var(--red)] hover:border-[var(--red)]">
                <div className="w-16 h-16 rounded-full bg-[var(--light-bg)] group-hover:bg-white/20 flex items-center justify-center mx-auto mb-5 transition-colors">
                  <Heart className="w-8 h-8 text-[var(--red)] group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-xl font-bold text-[#1A1A1A] group-hover:text-white mb-3 transition-colors">Nonprofits</h2>
                <p className="text-[var(--gray-600)] group-hover:text-white/90 text-sm leading-relaxed transition-colors">
                  501(c)(3) nonprofit organizations and charities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
