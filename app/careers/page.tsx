"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CareersPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Replace with your API or form handler (e.g. formspree, backend endpoint)
    setTimeout(() => setStatus("sent"), 800);
  }

  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main className="pt-18">
        <section className="relative py-16 lg:py-20 min-h-[240px] flex items-center bg-darkSoft">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Careers
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join the team. Submit your details and resume below and we’ll get back to you.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-card border border-gray-200/60">
              <h2 className="text-xl font-bold text-dark mb-2">Apply with us</h2>
              <p className="text-textMuted text-sm mb-6">
                Fill out the form and attach your resume. We typically respond within one business day.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="career-name" className="block text-sm font-medium text-dark mb-2">
                      Name
                    </label>
                    <input
                      id="career-name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-dark placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="career-email" className="block text-sm font-medium text-dark mb-2">
                      Email
                    </label>
                    <input
                      id="career-email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-dark placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="career-message" className="block text-sm font-medium text-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="career-message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-dark placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y min-h-[100px]"
                    placeholder="Tell us about yourself and the role you’re interested in..."
                  />
                </div>
                <div>
                  <label htmlFor="career-resume" className="block text-sm font-medium text-dark mb-2">
                    Resume <span className="text-textMuted font-normal">(optional)</span>
                  </label>
                  <input
                    id="career-resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-dark file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/15 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <p className="text-xs text-textMuted mt-1">PDF or Word, max 10MB</p>
                </div>
                {status === "sent" && (
                  <p className="text-sm font-medium text-green-600">
                    Thanks! Your application has been submitted. We’ll be in touch soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm font-medium text-primary">Something went wrong. Please try again.</p>
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
                      Submit application
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
