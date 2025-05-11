"use client";

import { FadeIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navigation
        title="UK Visa Help Consultants"
        menuItems={[
          { href: "/", label: "Home" },
          { href: "/free-review?scroll=form", label: "Free Review" },
          { href: "/contact", label: "Contact" },
        ]}
      />

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#003D6E]">
                Contact Us
              </h1>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-8"></div>
              <p className="max-w-2xl mx-auto text-lg text-gray-700">
                Get in touch with our team of visa specialists. We&apos;re here
                to help you with your UK visa and immigration needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <StaggerContainer className="grid gap-8">
                  <motion.div
                    variants={staggerItem(0.1)}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h2 className="text-xl font-semibold mb-4 text-[#003D6E]">
                      Office Hours
                    </h2>
                    <div className="space-y-2 text-gray-700">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={staggerItem(0.2)}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h2 className="text-xl font-semibold mb-4 text-[#003D6E]">
                      Contact Information
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <svg
                          className="w-6 h-6 text-[#003D6E] mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-700">Phone</p>
                          <a
                            href="tel:+441234567890"
                            className="text-[#003D6E] hover:underline"
                          >
                            +44 123 456 7890
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <svg
                          className="w-6 h-6 text-[#003D6E] mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-700">Email</p>
                          <a
                            href="mailto:info@ukvisahelp.com"
                            className="text-[#003D6E] hover:underline"
                          >
                            info@ukvisahelp.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <svg
                          className="w-6 h-6 text-[#003D6E] mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
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
                        <div>
                          <p className="font-semibold text-gray-700">Address</p>
                          <p className="text-gray-600">
                            123 Immigration Street
                            <br />
                            London, SW1A 1AA
                            <br />
                            United Kingdom
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={staggerItem(0.3)}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h2 className="text-xl font-semibold mb-4 text-[#003D6E]">
                      Emergency Contact
                    </h2>
                    <p className="text-gray-700 mb-3">
                      For urgent matters outside of office hours, please call
                      our emergency hotline:
                    </p>
                    <a
                      href="tel:+441234567899"
                      className="text-[#003D6E] font-semibold hover:underline"
                    >
                      +44 123 456 7899
                    </a>
                  </motion.div>
                </StaggerContainer>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <ContactForm
                  labels={{
                    heading: "Send Us a Message",
                    subheading:
                      "Fill out the form below and we&apos;ll get back to you within 24 hours.",
                    firstName: "Your First Name",
                    lastName: "Your Last Name",
                    email: "Your Email Address",
                    country: "Your Current Country",
                    details: "How can we help you?",
                    submit: "Send Message",
                  }}
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-[#003D6E]">
                Frequently Asked Questions
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">
                    What are your consultation fees?
                  </h3>
                  <p className="text-gray-600">
                    We offer a free initial consultation. Subsequent fees vary
                    depending on the complexity of your case and will be clearly
                    communicated upfront.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">
                    How long does it take to get a response?
                  </h3>
                  <p className="text-gray-600">
                    We aim to respond to all inquiries within 24 hours during
                    business days. For urgent matters, please use our emergency
                    contact number.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">
                    Do you offer online consultations?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer consultations via video call for clients who
                    cannot visit our office in person.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">
                    What documents should I prepare?
                  </h3>
                  <p className="text-gray-600">
                    The required documents vary depending on your visa type.
                    We'll provide a detailed checklist after our initial
                    consultation.
                  </p>
                </div>
              </div>
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
          { href: "/free-review?scroll=form", label: "Free Review" },
          { href: "/contact", label: "Contact" },
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
