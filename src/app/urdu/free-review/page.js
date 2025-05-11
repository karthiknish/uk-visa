"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, ScaleIn } from "@/components/animations";

export default function FreeReviewUrdu() {
  return (
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
              مفت جائزہ
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
                    alt="پیشہ ورانہ ویزا مشاورت اور تشخیص خدمات"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </ScaleIn>

              <FadeIn>
                <p className="text-lg mb-6">
                  اگر آپ کسی امیگریشن مسئلے کا سامنا کر رہے ہیں تو ہم آپ کو
                  ابتدائی مشورہ فراہم کرتے ہیں تاکہ آپ اپنے معاملے میں بہتر
                  فیصلہ کر سکیں۔
                </p>

                <p className="text-lg mb-6">
                  ہم امیگریشن کے معاملات پر قانونی مشورہ فراہم کرتے ہیں. ہمارے
                  وکلاء کے پاس بہت زیادہ تجربہ ہے اور وہ ججوں کے سامنے اور ثالثی
                  اور ثالثی کی کارروائیوں میں مؤکلوں کی نمائندگی کرنے میں ماہر
                  ہیں۔
                </p>

                <p className="text-lg mb-6">
                  اگر آپ کے پاس قانونی دستاویزات نہیں ہیں، تب بھی ہم آپ کو ورک
                  پرمٹ حاصل کرنے یا اس کی تجدید میں مدد دے سکتے ہیں۔
                </p>

                <div className="mt-12 text-center">
                  <Link
                    href="/urdu/contact"
                    className="inline-block bg-[#003D6E] text-white px-8 py-3 rounded-lg hover:bg-[#002D4E] transition-colors"
                  >
                    مفت تشخیص حاصل کریں
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
