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
        <section className="relative py-16 lg:py-20 min-h-[280px] flex items-center bg-[url('/banner/p2.png')] bg-cover bg-center">
       
          <div className="absolute inset-0 bg-darkSoft/85" aria-hidden />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Just $20/month — donors can choose to cover both card and ACH fees so you keep 100% of every gift.
            </p>
          </div>
        </section>

  {/* Pricing Section */}
<section className="py-16 bg-light">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="mb-12 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
        Simple, Transparent Pricing
      </h2>
      <p className="text-lg text-textMuted max-w-2xl mx-auto">
        Just $20/month — donors can choose to cover both card and ACH fees so you keep 100% of every gift.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

      <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-200/60 flex flex-col">
        <h3 className="text-xl font-bold text-dark mb-2">
          Credit & Debit Cards
        </h3>

        <p className="text-2xl font-bold text-primary mb-5">
          $10/month
        </p>

        <ul className="space-y-3 text-textMuted flex-1 text-sm sm:text-base mb-6">
          <li className="flex gap-2">
            <Check className="w-5 h-5 text-primary mt-0.5" />
            <span>Just $20/month — flat, predictable cost with no hidden fees or setup charges.</span>
          </li>

          <li className="flex gap-2">
            <Check className="w-5 h-5 text-primary mt-0.5" />
            <span>Processing fees? Effectively free — donors voluntarily choose to cover them at checkout, so you receive the full gift amount every time.</span>
          </li>

          <li className="flex gap-2">
            <Check className="w-5 h-5 text-primary mt-0.5" />
            <span>Donor-centered & transparent — clear, optional prompt with no pre-checked boxes or surprises.</span>
          </li>

          <li className="flex gap-2">
            <Check className="w-5 h-5 text-primary mt-0.5" />
            <span>You keep 100% of the intended donation — no percentage deducted from your funds.</span>
          </li>

          <li className="flex gap-2">
            <Check className="w-5 h-5 text-primary mt-0.5" />
            <span>Builds trust & stronger giving — donors feel empowered knowing their gift goes further.</span>
          </li>

          <li className="flex gap-2">
            <Check className="w-5 h-5 text-primary mt-0.5" />
            <span>Fully tax-deductible — including any fee coverage for credit/debit cards.</span>
          </li>

          <li className="flex gap-2">
            <Check className="w-5 h-5 text-primary mt-0.5" />
            <span>Dedicated nonprofit support — real experts who understand your world, not generic chatbots.</span>
          </li>

          <li className="flex gap-2">
            <Check className="w-5 h-5 text-primary mt-0.5" />
            <span>No contracts, no surprises — simple, fair pricing designed for mission-focused organizations.</span>
          </li>
        </ul>

        <Link
          href="/#start"
          className="mt-auto inline-flex justify-center px-6 py-3 rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark transition"
        >
          Get Started
        </Link>
      </div>

      {/* ACH / Bank Transfers */}
      <div className="bg-primary text-white rounded-2xl p-8 shadow-card flex flex-col">
        <h3 className="text-xl font-bold mb-2">
          ACH / Bank Transfers (eChecks)
        </h3>

        <p className="text-2xl font-bold mb-5">
          $20/month
        </p>

        <ul className="space-y-3 text-white/90 flex-1 text-sm sm:text-base mb-6">

          <li className="flex gap-2">
            <Check className="w-5 h-5 text-white mt-0.5" />
            <span>ACH support included — offer donors the low-cost option of direct bank transfers (eChecks) alongside cards.</span>
          </li>

          <li className="flex gap-2">
            <Check className="w-5 h-5 text-white mt-0.5" />
            <span>When donors opt to cover ACH fees, your nonprofit keeps 100% without any deduction.</span>
          </li>

          <li className="flex gap-2">
            <Check className="w-5 h-5 text-white mt-0.5" />
            <span>Lower-fee ACH options encourage larger and recurring donations.</span>
          </li>

          <li className="flex gap-2">
            <Check className="w-5 h-5 text-white mt-0.5" />
            <span>Donor-centered & transparent — donors clearly see how covering ACH fees maximizes impact.</span>
          </li>

          <li className="flex gap-2">
            <Check className="w-5 h-5 text-white mt-0.5" />
            <span>True merchant account in your name — secure, direct control over all payments, including ACH.</span>
          </li>

          <li className="flex gap-2">
            <Check className="w-5 h-5 text-white mt-0.5" />
            <span>Fully tax-deductible — including any fee coverage for ACH bank transfers.</span>
          </li>

          <li className="flex gap-2">
            <Check className="w-5 h-5 text-white mt-0.5" />
            <span>Dedicated nonprofit support — real experts who understand your world, not generic chatbots.</span>
          </li>

          <li className="flex gap-2">
            <Check className="w-5 h-5 text-white mt-0.5" />
            <span>No contracts, no surprises — simple, fair pricing designed for mission-focused organizations.</span>
          </li>

        </ul>

        <Link
          href="/#start"
          className="mt-auto inline-flex justify-center px-6 py-3 rounded-lg font-semibold bg-white text-primary hover:bg-gray-100 transition"
        >
          Get Started
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
