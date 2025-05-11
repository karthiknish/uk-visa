// app/arabic/free-review/page.js (or your equivalent path)
"use client"; // Keep this if other parts of FreeReviewArabic need to be client components (like Navigation or Footer if they have client-side interactivity not managed by their own "use client")
// However, the page itself can often be a Server Component if the only client part is what's inside Suspense.
// For this specific fix, we are focusing on the component using useSearchParams.

import React, { Suspense } from "react"; // Import Suspense
// Remove useEffect, useRef, useSearchParams from here if they are solely used by FreeReviewContent
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image"; // Keep if used directly in FreeReviewArabic
// import Link from "next/link"; // Keep if used directly in FreeReviewArabic
import { FadeIn } from "@/components/animations"; // Keep if used directly

// Import the new component
import FreeReviewContent from "@/components/FreeReviewContent"; // Adjust path as needed

export default function FreeReviewArabic() {
  // const formRef = useRef(null); // This ref might need to be passed down to FreeReviewContent if it's the target
  // const searchParams = useSearchParams(); // REMOVE THIS LINE

  // useEffect(() => { // REMOVE THIS EFFECT
  //   if (searchParams.get("scroll") === "form" && formRef.current) {
  //     formRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [searchParams]);

  return (
    <div
      className="min-h-screen font-[family-name:var(--font-geist-sans)]"
      dir="rtl"
    >
      <Navigation
        title="مستشارو تأشيرات المملكة المتحدة"
        menuItems={[
          { href: "/arabic", label: "الرئيسية" },
          { href: "/arabic/free-review?scroll=form", label: "مراجعة مجانية" },
          { href: "/arabic/#contact", label: "اتصل بنا" },
        ]}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section
          className="relative min-h-[50vh] flex items-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
                مراجعة مجانية
              </h1>
              <div className="h-1 w-20 bg-white mx-auto mb-8"></div>
            </FadeIn>
          </div>
        </section>

        {/* Main Content wrapped in Suspense */}
        <Suspense
          fallback={<div className="text-center py-16">جار التحميل...</div>}
        >
          <FreeReviewContent />
        </Suspense>
      </main>

      <Footer
        logoText="مستشارو تأشيرات المملكة المتحدة"
        tagline="شركة استشارات رائدة في مجال تأشيرات المملكة المتحدة مع فريق من المستشارين الخبراء لطلبات التأشيرات والإقامة."
        quickLinksTitle="روابط سريعة"
        quickLinks={[
          { href: "/arabic", label: "الرئيسية" },
          { href: "/arabic/#services", label: "خدماتنا" },
          { href: "/arabic/#how-we-work", label: "كيف نعمل" },
          { href: "/arabic/free-review", label: "مراجعة مجانية" },
          { href: "/arabic/#contact", label: "اتصل بنا" },
          { href: "/arabic/terms", label: "الشروط والأحكام" },
          { href: "/arabic/privacy", label: "سياسة الخصوصية" },
        ]}
        serviceLinks={[
          { href: "/arabic/#services", label: "تأشيرات العائلة" },
          { href: "/arabic/#services", label: "تأشيرات العمل" },
          { href: "/arabic/#services", label: "تأشيرات الطلاب" },
          { href: "/arabic/#services", label: "طلبات الإقامة" },
        ]}
        copyright="جميع الحقوق محفوظة لمستشاري تأشيرات المملكة المتحدة."
      />
    </div>
  );
}
