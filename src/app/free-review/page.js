"use client";

import { useEffect, useRef, Suspense } from "react"; // Added Suspense
import { useSearchParams } from "next/navigation";
import { FadeIn, ScaleIn } from "@/components/animations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm"; // This is imported but not used in the original snippet
import Image from "next/image";
import Link from "next/link";

// New component to handle client-side effects like scrolling
function PageEffects({ formRef }) {
  const searchParams = useSearchParams(); // This hook can cause suspension

  useEffect(() => {
    if (searchParams.get("scroll") === "form" && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams, formRef]); // formRef is a prop, include it in dependencies

  return null; // This component does not render any UI itself
}

export default function FreeReviewPage() {
  const formRef = useRef(null); // This ref will be attached below

  return (
    <>
      {/* Wrap the component using useSearchParams in Suspense */}
      <Suspense fallback={null}>
        {" "}
        {/* Fallback can be null or a loader */}
        <PageEffects formRef={formRef} />
      </Suspense>

      <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
        <Navigation
          title="UK Visa Help Consultants"
          menuItems={[
            { href: "/", label: "Home" },
            { href: "/free-review?scroll=form", label: "Free Review" },
            { href: "/#contact", label: "Contact" },
          ]}
        />

        <main className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="relative bg-[#003D6E] text-white py-20">
            <div className="container mx-auto px-4">
              <FadeIn>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                  Free Review
                </h1>
                <div className="h-1 w-20 bg-white mx-auto mb-8"></div>
              </FadeIn>
            </div>
          </section>

          {/* Main Content - Attaching formRef here */}
          {/* If you add the ContactForm component, you might want to attach the ref to it or its container */}
          <section className="py-16" ref={formRef}>
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="mb-12">
                  <ScaleIn>
                    <div className="w-full h-[300px] relative rounded-lg overflow-hidden mb-8">
                      <Image
                        src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Professional visa consultation and assessment"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </ScaleIn>

                  <FadeIn>
                    <p className="text-lg mb-6">
                      If you have an immigration-related situation, you can have
                      an assessment with our professional. We will give you all
                      the information you need to make the best decision about
                      your case.
                    </p>

                    <p className="text-lg mb-6">
                      We provide legal advice on immigration matters. Our
                      lawyers have a wealth of experience and are skilled at
                      representing clients before judges and in arbitration and
                      mediation proceedings.
                    </p>

                    <p className="text-lg mb-6">
                      If you are an undocumented immigrant, the immigration
                      system can make it difficult for you to obtain the legal
                      protection you need. We can help you obtain a work permit.
                      We can also assist you in renewing your work permit.
                    </p>

                    {/* 
                      Note: The ContactForm component is imported but not used.
                      If this page is meant to have a form, you would render <ContactForm /> here,
                      and potentially attach formRef to it if that's the scroll target.
                      Currently, this link directs to a separate contact page.
                    */}
                    <div className="mt-12 text-center">
                      <Link
                        href="/contact"
                        className="inline-block bg-[#003D6E] text-white px-8 py-3 rounded-lg hover:bg-[#002D4E] transition-colors"
                      >
                        Get Your Free Assessment
                      </Link>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>
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
    </>
  );
}
