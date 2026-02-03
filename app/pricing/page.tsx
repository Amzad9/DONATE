import Link from "next/link";
import { Check } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 sm:pt-24 lg:pt-18 pb-12 sm:pb-16 lg:pb-20">
        {/* Banner - responsive padding and typography */}
        <section className="py-10 sm:py-14 lg:py-20 bg-[var(--navy)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Pricing
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-0">
              No monthly fees, no contracts. Your success is our success—we only charge a small processing cost on donations.
            </p>
          </div>
        </section>

        {/* Pricing - 1 col mobile, 2 col tablet, 3 col desktop */}
        <section className="py-10 sm:py-14 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-3 sm:mb-4">
                Choose the plan that fits
              </h2>
              <p className="text-base sm:text-lg text-[var(--gray-600)] max-w-2xl">
                Our pricing structure is simple. We only charge a small processing cost on donations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Why Teams Choose Elite Donate */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-card)] border border-gray-200/60 flex flex-col">
                <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">Why Teams Choose Elite Donate</h2>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
                  {["No hidden fees", "No monthly fees", "Free text to give", "Quick and easy setup", "Fast and friendly support team"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[var(--red)] shrink-0" />
                      <span className="text-[var(--gray-600)] text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className="inline-flex justify-center items-center px-5 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base bg-[var(--red)] hover:bg-[var(--red-dark)] text-white transition-colors w-full"
                >
                  Send us a message!
                </Link>
              </div>

              {/* Starter - highlighted blue #1410F9 */}
              <div className="rounded-2xl p-6 sm:p-8 flex flex-col shadow-[var(--shadow-card)] bg-[#1410F9]">
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
                  className="inline-flex justify-center items-center px-5 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base bg-white text-[#1410F9] hover:bg-gray-100 transition-colors w-full"
                >
                  Get Started
                </Link>
              </div>

              {/* Standard */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-card)] border border-gray-200/60 flex flex-col sm:col-span-2 lg:col-span-1">
                <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-2">Standard</h2>
                <p className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4 sm:mb-6">$0 <span className="text-base sm:text-lg font-normal text-[var(--gray-600)]">/ month</span></p>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
                  {["Credit/debit cards", "Apple Pay", "Google Pay", "PayPal", "Bitcoin: 1.0%", "ACH/bank draft: 4.0% + 30¢"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[var(--red)] shrink-0" />
                      <span className="text-[var(--gray-600)] text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#start"
                  className="inline-flex justify-center items-center px-5 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base bg-[var(--red)] hover:bg-[var(--red-dark)] text-white transition-colors w-full"
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
