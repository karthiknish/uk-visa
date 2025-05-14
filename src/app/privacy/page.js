"use client";

import { FadeIn } from "@/components/animations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
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
          <FadeIn direction="up">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#003D6E]">
              Privacy Policy
            </h1>
            <div className="h-1 w-20 bg-[#003D6E] mb-8"></div>

            <div className="prose max-w-4xl">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  UK Visa Help Consultants is committed to protecting your
                  privacy. This Privacy Policy explains how we collect, use, and
                  safeguard your personal information when you use our services
                  or visit our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">
                  We collect the following types of information:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>
                    Personal identification information (Name, email address,
                    phone number)
                  </li>
                  <li>Contact information (Address, country of residence)</li>
                  <li>Visa application related documents and information</li>
                  <li>Communication records between you and our team</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>To provide visa consultation services</li>
                  <li>To process your visa applications</li>
                  <li>To communicate with you about our services</li>
                  <li>To improve our services and website</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  4. Data Protection
                </h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your
                  personal information. Your data is stored securely and
                  accessed only by authorized personnel who need it to provide
                  our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  Under data protection laws, you have the following rights:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Right to access your personal data</li>
                  <li>Right to rectification of incorrect data</li>
                  <li>Right to erasure of your data</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Our website uses cookies to enhance your browsing experience.
                  You can control cookie settings through your browser
                  preferences.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our Privacy Policy, please
                  contact us:
                </p>
                <ul className="list-none text-gray-700">
                  <li>Phone: +44 123 456 7890</li>
                  <li>Address: London, United Kingdom</li>
                </ul>
              </section>
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
