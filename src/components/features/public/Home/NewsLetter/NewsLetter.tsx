"use client";

import type React from "react";
import { useState, useTransition } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { subscribeNewsletter } from "@/actions/newsLetter/newsLetter";

export default function NewsletterCTA() {
  const [isPending, startTransition] = useTransition();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitted(false);

    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await subscribeNewsletter(formData);

      if (result.success) {
        setIsSubmitted(true);
        setErrorMessage(null);
        (document.getElementById("news-letter") as HTMLFormElement)?.reset();

        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setErrorMessage(result.message);
      }
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="container relative mx-auto">
        <div className="bg-white/80 backdrop-blur-sm border border-[#02590F]/10 rounded-2xl p-8 sm:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#02590F]/10 rounded-full mb-4">
              <Mail className="w-6 h-6 text-[#02590F]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, case studies,
              and industry trends delivered directly to your inbox.
            </p>
          </div>

          <form
            id="news-letter"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              disabled={isSubmitted || isPending}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#02590F] focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={isSubmitted || isPending}
              className="px-6 py-3 bg-[#02590F] text-white font-semibold rounded-lg hover:bg-[#01420a] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Subscribed!</span>
                </>
              ) : isPending ? (
                <span>Subscribing...</span>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>

          {isSubmitted && (
            <p className="text-center text-sm text-[#02590F] mt-4 animate-fade-in">
              Thank you for subscribing! Check your email for confirmation.
            </p>
          )}

          {errorMessage && (
            <p className="text-center text-sm text-red-600 mt-4 animate-fade-in">
              {errorMessage}
            </p>
          )}

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600 mb-4">
              Join thousands of people receiving weekly insights
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#02590F] rounded-full" />
                <span>No spam</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#02590F] rounded-full" />
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#02590F] rounded-full" />
                <span>Weekly digest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
