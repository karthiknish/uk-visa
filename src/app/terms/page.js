"use client";

import { FadeIn } from "@/components/animations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsPage() {
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
              Terms and Conditions
            </h1>
            <div className="h-1 w-20 bg-[#003D6E] mb-8"></div>

            <div className="prose max-w-4xl">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  These terms and conditions outline the rules and regulations
                  for the use of UK Visa Help Consultants&apos; services and
                  website.
                </p>
                <p className="text-gray-700 mb-4">
                  By accessing this website and using our services, we assume
                  you accept these terms and conditions in full. Do not continue
                  to use UK Visa Help Consultants&apos; website or services if
                  you do not accept all of the terms and conditions stated on
                  this page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
                <p className="text-gray-700 mb-4">
                  UK Visa Help Consultants provides visa and immigration
                  consultation services. Our services include but are not
                  limited to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Visa application assistance</li>
                  <li>Immigration consultation</li>
                  <li>Document review and preparation</li>
                  <li>Appeal support</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  3. Fees and Payment
                </h2>
                <p className="text-gray-700 mb-4">
                  Our fees vary depending on the type of service required. All
                  fees will be clearly communicated before any service begins.
                  Payment terms and methods will be provided upon engagement of
                  our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  4. Confidentiality
                </h2>
                <p className="text-gray-700 mb-4">
                  We maintain strict confidentiality of all client information.
                  Your personal data will be processed in accordance with our
                  Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Disclaimer</h2>
                <p className="text-gray-700 mb-4">
                  While we strive to provide accurate and up-to-date
                  information, we cannot guarantee the outcome of any visa
                  application. Success depends on various factors, including but
                  not limited to individual circumstances and immigration policy
                  changes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  6. Contact Information
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms and Conditions,
                  please contact us:
                </p>
                <ul className="list-none text-gray-700">
                  <li>Email: info@ukvisahelpconsultants.co.uk</li>
                  <li>Phone: 02035761165</li>
                  <li>
                    Address: Tower Bridge Business Centre, 46-48 East
                    Smithfield, London E1W 1AW
                  </li>
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

