"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Send } from "lucide-react";
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
    <div className="min-h-screen bg-light">
      <Header />
      <main className="pt-18">
        {/* Banner with image */}
        <section className="relative py-16 lg:py-20 min-h-[280px] flex items-center bg-[url('/banner/contact.png')] bg-cover bg-center">
        
          <div className="absolute inset-0 bg-darkSoft/85" aria-hidden />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Get in touch
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Have questions about Donate Money Now or ready to start fundraising? We’re here to help.
            </p>
          </div>
        </section>

        {/* Contact content: form + info */}
        <section className="py-16 lg:py-16 bg-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 lg:mb-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">Send us a message</h2>
              <p className="text-lg text-textMuted max-w-2xl mx-auto">
                We typically respond within one business day. For FEC or compliance questions, mention that in your message.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-12  mx-auto">
              {/* Contact form - 2 cols */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-card border border-gray-200/60 transition-all duration-200 hover:shadow-lg hover:border-primary/20">
                  <h3 className="text-xl font-bold text-dark mb-6">Your message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-dark placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-dark placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-dark mb-2">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-dark placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-dark placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y min-h-[120px]"
                        placeholder="Tell us about your campaign or organization..."
                      />
                    </div>
                    {status === "sent" && (
                      <p className="text-sm font-medium text-green-600">
                        Thanks! Your message has been sent. We’ll get back to you soon.
                      </p>
                    )}
                    {status === "error" && (
                      <p className="text-sm font-medium text-primary">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex justify-center items-center gap-2 px-8 py-3 rounded-lg font-semibold text-base bg-primary hover:bg-primary-dark text-white transition-colors shadow-card disabled:opacity-70"
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
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-card border border-gray-200/60 sticky top-28 transition-all duration-200 hover:shadow-lg hover:border-primary/20">
                  <h3 className="text-lg font-bold text-dark mb-6">Contact info</h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Phone className="w-5 h-5" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-textMuted mb-1">Phone</p>
                        <div className="space-y-1">
                          <div>
                            <span className="text-xs text-textMuted">Local (Hagerstown):</span>
                            <br />
                            <a
                              href="tel:+12403299424"
                              className="text-dark font-medium hover:text-primary transition-colors"
                            >
                              (240) 329-9424
                            </a>
                          </div>
                          <div>
                            <span className="text-xs text-textMuted">Toll-Free:</span>
                            <br />
                            <a
                              href="tel:+18774158627"
                              className="text-dark font-medium hover:text-primary transition-colors"
                            >
                              (877) 415-8627
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-medium text-textMuted mb-1">Visit</p>
                        <span className="text-dark font-medium text-sm leading-relaxed">
                          13701 Maugansville Rd #5
                          <br />
                          Hagerstown, MD 21740
                        </span>
                      </div>
                    </li>
                  </ul>
                  <p className="text-sm text-textMuted mt-6 leading-relaxed">
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
