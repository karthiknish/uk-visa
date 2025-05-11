"use client";

import { FadeIn } from "@/components/animations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navigation
        title="UK Visa Help Consultants"
        menuItems={[
          { href: "/", label: "Home" },
          { href: "/#services", label: "Services" },
          { href: "/#how-we-work", label: "How We Work" },
          { href: "/free-review", label: "Free Review" },
          { href: "/#contact", label: "Contact" },
        ]}
      />

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <FadeIn direction="up" className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#003D6E]">
              Thank You for Contacting Us
            </h1>
            <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-8"></div>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 mb-8">
                We have received your message and will get back to you shortly.
                One of our visa specialists will review your details and contact
                you within 24 hours.
              </p>
              <p className="text-gray-600 mb-12">
                If you need immediate assistance, please call us at{" "}
                <a
                  href="tel:+441234567890"
                  className="text-[#003D6E] font-semibold hover:underline"
                >
                  +44 123 456 7890
                </a>
              </p>
              <Link
                href="/"
                className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 rounded hover:bg-[#004d8a] transition-colors"
              >
                Return to Homepage
              </Link>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer
        logoText="UK Visa Help Consultants"
        tagline="Leading UK visa consultancy with a panel of expert advisors for visa and settlement applications."
        quickLinksTitle="Quick Links"
        quickLinks={[
          { href: "/", label: "Home" },
          { href: "/#services", label: "Services" },
          { href: "/#how-we-work", label: "How We Work" },
          { href: "/free-review", label: "Free Review" },
          { href: "/#contact", label: "Contact" },
          { href: "/terms", label: "Terms & Conditions" },
          { href: "/privacy", label: "Privacy Policy" },
        ]}
        serviceLinks={[
          { href: "/#services", label: "Family Visas" },
          { href: "/#services", label: "Work Visas" },
          { href: "/#services", label: "Student Visas" },
          { href: "/#services", label: "Settlement Applications" },
        ]}
        copyright="UK Visa Help Consultants. All rights reserved."
      />
    </div>
  );
}
