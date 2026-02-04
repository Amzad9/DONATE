import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main className="pt-18">
        {/* Banner with image */}
        <section className="relative py-16 lg:py-20 min-h-[280px] flex items-center">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80"
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
              Pricing
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              No monthly fees, no contracts. Your success is our success—we only charge a small processing cost on donations.
            </p>
          </div>
        </section>

        {/* Pricing - 1 col mobile, 2 col tablet, 3 col desktop */}
        <section className="py-16 lg:py-16 bg-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 lg:mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
                Choose the plan that fits
              </h2>
              <p className="text-lg text-textMuted max-w-2xl">
                Our pricing structure is simple. We only charge a small processing cost on donations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Why Teams Choose Donate Money Now */}
              <div className="group bg-white rounded-2xl p-8 lg:p-10 shadow-card border border-gray-200/60 flex flex-col transition-all duration-200 hover:shadow-lg hover:border-primary/20">
                <h2 className="text-lg sm:text-xl font-bold text-dark mb-4 sm:mb-6">Why Teams Choose Donate Money Now</h2>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
                  {["No hidden fees", "No monthly fees", "Free text to give", "Quick and easy setup", "Fast and friendly support team"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-textMuted text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className="inline-flex justify-center items-center px-5 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base bg-primary hover:bg-primary-dark text-white transition-colors w-full"
                >
                  Send us a message!
                </Link>
              </div>

              {/* Starter - highlighted blue #1410F9 */}
              <div className="rounded-2xl p-8 lg:p-10 flex flex-col shadow-card bg-primary">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-2">Starter</h2>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">$0 <span className="text-base sm:text-lg font-normal text-white/80">/ month</span></p>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
                  {["Credit/debit cards", "Apple Pay", "Google Pay", "PayPal: 3.3% + 30¢", "Bitcoin: 1.0%", "ACH/bank draft: 0.3% + 30¢"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-white shrink-0" />
                      <span className="text-white/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#start"
                  className="inline-flex justify-center items-center px-5 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base bg-white text-primary hover:bg-gray-100 transition-colors w-full"
                >
                  Get Started
                </Link>
              </div>

              {/* Standard */}
              <div className="group bg-white rounded-2xl p-8 lg:p-10 shadow-card border border-gray-200/60 flex flex-col sm:col-span-2 lg:col-span-1 transition-all duration-200 hover:shadow-lg hover:border-primary/20">
                <h2 className="text-lg sm:text-xl font-bold text-dark mb-2">Standard</h2>
                <p className="text-3xl sm:text-4xl font-bold text-dark mb-4 sm:mb-6">$0 <span className="text-base sm:text-lg font-normal text-textMuted">/ month</span></p>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
                  {["Credit/debit cards", "Apple Pay", "Google Pay", "PayPal", "Bitcoin: 1.0%", "ACH/bank draft: 4.0% + 30¢"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-textMuted text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#start"
                  className="inline-flex justify-center items-center px-5 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base bg-primary hover:bg-primary-dark text-white transition-colors w-full"
                >
                  Start Fundraising
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
