"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { FadeIn } from "@/components/animations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function FreeReviewPage() {
  const formRef = useRef(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("scroll") === "form" && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navigation
        title="UK Visa Help Consultants"
        menuItems={[
          { href: "/", label: "Home" },
          { href: "/free-review?scroll=form", label: "Free Review" },
          { href: "/#contact", label: "Contact" },
        ]}
      />

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#003D6E]">
                Free UK Visa Application Review
              </h1>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-8"></div>
              <p className="max-w-2xl mx-auto text-lg text-gray-700">
                Get a free professional review of your UK visa application. Our
                expert consultants will assess your situation and provide
                valuable insights to increase your chances of success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#003D6E]">
                  What You&apos;ll Get
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Expert evaluation of your visa eligibility
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Document checklist tailored to your case
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Initial consultation with a visa specialist
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#003D6E]">
                  Why Choose Us
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Experienced UK immigration specialists
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      High success rate in visa applications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Personalized attention to your case
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div ref={formRef} className="max-w-2xl mx-auto">
              <ContactForm
                labels={{
                  heading: "Get Your Free Review",
                  subheading:
                    "Fill out the form below and we&apos;ll get back to you within 24 hours with our initial assessment.",
                  firstName: "Your First Name",
                  lastName: "Your Last Name",
                  email: "Your Email Address",
                  country: "Your Current Country",
                  details: "Tell us about your visa requirements",
                  submit: "Request Free Review",
                }}
              />
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
