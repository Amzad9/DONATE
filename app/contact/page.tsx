"use client";

import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Simulate submit; replace with your API or form handler
    setTimeout(() => setStatus("sent"), 800);
  }

  return (
    <div className="min-h-screen bg-[var(--light-bg)]">
      <Header />
      <main className="pt-12 lg:pt-18 pb-20">
        {/* Hero / Title - same as Final CTA style */}
        <section className="py-16 lg:py-20 bg-[var(--navy)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Get in touch
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Have questions about Elite Donate or ready to start fundraising? We’re here to help.
            </p>
          </div>
        </section>

        {/* Contact content: form + info */}
        <section className="py-16 lg:py-24 bg-[var(--light-bg)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 max-w-5xl mx-auto">
              {/* Contact form - 2 cols */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[var(--shadow-card)] border border-gray-200/60">
                  <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#1A1A1A] placeholder-[var(--gray-500)] focus:outline-none focus:ring-2 focus:ring-[var(--red)] focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#1A1A1A] placeholder-[var(--gray-500)] focus:outline-none focus:ring-2 focus:ring-[var(--red)] focus:border-transparent"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#1A1A1A] placeholder-[var(--gray-500)] focus:outline-none focus:ring-2 focus:ring-[var(--red)] focus:border-transparent"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#1A1A1A] placeholder-[var(--gray-500)] focus:outline-none focus:ring-2 focus:ring-[var(--red)] focus:border-transparent resize-y min-h-[120px]"
                        placeholder="Tell us about your campaign or organization..."
                      />
                    </div>
                    {status === "sent" && (
                      <p className="text-sm font-medium text-green-600">
                        Thanks! Your message has been sent. We’ll get back to you soon.
                      </p>
                    )}
                    {status === "error" && (
                      <p className="text-sm font-medium text-[var(--red)]">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex justify-center items-center gap-2 px-8 py-3 rounded-lg font-semibold text-base bg-[var(--red)] hover:bg-[var(--red-dark)] text-white transition-colors shadow-[var(--shadow-card)] disabled:opacity-70"
                    >
                      {status === "sending" ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact info card - 1 col */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] border border-gray-200/60 sticky top-28">
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-6">Contact info</h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--red)]/10 text-[var(--red)]">
                        <Mail className="w-5 h-5" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-[var(--gray-600)]">Email</p>
                        <a
                          href="mailto:hello@elitedonate.com"
                          className="text-[#1A1A1A] font-medium hover:text-[var(--red)] transition-colors"
                        >
                          hello@elitedonate.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--red)]/10 text-[var(--red)]">
                        <Phone className="w-5 h-5" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-[var(--gray-600)]">Phone</p>
                        <a
                          href="tel:+18005551234"
                          className="text-[#1A1A1A] font-medium hover:text-[var(--red)] transition-colors"
                        >
                          +1 (800) 555-1234
                        </a>
                      </div>
                    </li>
                  </ul>
                  <p className="text-sm text-[var(--gray-600)] mt-6 leading-relaxed">
                    We typically respond within one business day. For FEC or compliance questions, mention that in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
