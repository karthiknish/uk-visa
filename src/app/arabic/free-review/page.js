"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { FadeIn, ScaleIn } from "@/components/animations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function FreeReviewArabic() {
  const formRef = useRef(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("scroll") === "form" && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

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

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-12">
                <ScaleIn>
                  <div className="w-full h-[300px] relative rounded-lg overflow-hidden mb-8">
                    <Image
                      src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="خدمات استشارات وتقييم التأشيرات المهنية"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </ScaleIn>

                <FadeIn>
                  <p className="text-lg mb-6">
                    إذا كانت لديك أي مشكلة متعلقة بالهجرة، يمكنك الحصول على
                    تقييم من أحد خبرائنا. سنزودك بجميع المعلومات التي تحتاجها
                    لاتخاذ القرار الأمثل بشأن قضيتك.
                  </p>

                  <p className="text-lg mb-6">
                    نقدم استشارات قانونية في قضايا الهجرة. يتمتع محامونا بخبرة
                    واسعة ومهارة في تمثيل العملاء أمام القضاة وفي إجراءات
                    التحكيم والوساطة.
                  </p>

                  <p className="text-lg mb-6">
                    إذا كنت مهاجرًا غير موثق، فقد يصعب عليك نظام الهجرة الحصول
                    على الحماية القانونية التي تحتاجها. يمكننا مساعدتك في الحصول
                    على تصريح عمل. كما يمكننا مساعدتك في تجديد تصريح عملك.
                  </p>

                  <div className="mt-12 text-center">
                    <Link
                      href="/arabic/contact"
                      className="inline-block bg-[#003D6E] text-white px-8 py-3 rounded-lg hover:bg-[#002D4E] transition-colors"
                    >
                      احصل على تقييمك المجاني
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
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
