import Image from "next/image";
import { Flag, Building2, MapPin, Heart } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main className="pt-18">
        {/* Banner with image */}
        <section className="relative py-16 lg:py-20 min-h-[280px] flex items-center">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-darkSoft/85" aria-hidden />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Solutions
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Purpose-built fundraising for federal campaigns, political organizations, state & local races, and nonprofits.
            </p>
          </div>
        </section>

        {/* Our Solutions - 4 cards, Federal highlighted (same design as home) */}
        <section className="py-16 lg:py-16 bg-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 lg:mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">Purpose-built for every organization</h2>
              <p className="text-lg text-textMuted max-w-2xl">
                Get started in minutes with our purpose-built solutions for every type of organization.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Federal Campaigns - primary card, darker on hover */}
              <div className="group bg-primary rounded-2xl p-8 text-center shadow-card transition-all duration-200 hover:bg-primary-dark hover:shadow-lg">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-5">
                  <Flag className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white mb-3">Federal Campaigns</h2>
                <p className="text-white/90 text-sm leading-relaxed">
                  Comprehensive tools for federal political campaigns and PACs.
                </p>
              </div>

              {/* Political Organizations - light card, primary on hover */}
              <div className="group bg-white rounded-2xl p-8 lg:p-10 text-center shadow-card border border-gray-200/60 transition-all duration-200 hover:shadow-lg hover:bg-primary hover:border-primary">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-6 transition-colors">
                  <Building2 className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-xl font-bold text-dark group-hover:text-white mb-3 transition-colors">Political Organizations</h2>
                <p className="text-textMuted group-hover:text-white/90 text-sm leading-relaxed transition-colors">
                  501(c)(4) organizations and political action committees.
                </p>
              </div>

              {/* State & Local */}
              <div className="group bg-white rounded-2xl p-8 lg:p-10 text-center shadow-card border border-gray-200/60 transition-all duration-200 hover:shadow-lg hover:bg-primary hover:border-primary">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-6 transition-colors">
                  <MapPin className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-xl font-bold text-dark group-hover:text-white mb-3 transition-colors">State & Local</h2>
                <p className="text-textMuted group-hover:text-white/90 text-sm leading-relaxed transition-colors">
                  State and local campaign fundraising solutions.
                </p>
              </div>

              {/* Nonprofits */}
              <div className="group bg-white rounded-2xl p-8 lg:p-10 text-center shadow-card border border-gray-200/60 transition-all duration-200 hover:shadow-lg hover:bg-primary hover:border-primary">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-6 transition-colors">
                  <Heart className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-xl font-bold text-dark group-hover:text-white mb-3 transition-colors">Nonprofits</h2>
                <p className="text-textMuted group-hover:text-white/90 text-sm leading-relaxed transition-colors">
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
