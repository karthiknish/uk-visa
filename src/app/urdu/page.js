"use client";

import Image from "next/image";
import { FadeIn, ScaleIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function UrduPage() {
  return (
    <div
      className="min-h-screen font-[family-name:var(--font-geist-sans)]"
      dir="rtl"
    >
      <Navigation
        title="یوکے ویزا ہیلپ کنسلٹنٹس"
        menuItems={[
          { href: "/urdu", label: "ہوم" },
          { href: "/urdu/#services", label: "خدمات" },
          { href: "/urdu/#how-we-work", label: "ہم کیسے کام کرتے ہیں" },
          { href: "/urdu/free-review?scroll=form", label: "مفت جائزہ" },
          { href: "/urdu/#contact", label: "رابطہ" },
        ]}
      />

      <div
        className="relative min-h-[90vh] flex items-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <FadeIn direction="right" className="md:w-1/2">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                یوکے ویزا اور امیگریشن کے ماہرین
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                تمام قسم کے یوکے ویزا اور امیگریشن درخواستوں کے لیے ماہرانہ
                مشاورت
              </p>
              <motion.a
                href="#services"
                className="inline-block bg-white text-[#003D6E] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ہماری خدمات
              </motion.a>
            </FadeIn>
            <FadeIn direction="left" className="md:w-1/2">
              <div className="bg-white bg-opacity-95 p-8 rounded-lg shadow-lg">
                <ContactForm
                  labels={{
                    heading: "مفت مشاورت حاصل کریں",
                    firstName: "آپ کا پہلا نام",
                    lastName: "آپ کا آخری نام",
                    email: "آپ کا ای میل ایڈریس",
                    country: "آپ کس ملک میں ہیں",
                    details: "مزید تفصیل سے بتائیں",
                    submit: "درخواست جمع کریں",
                    success: "شکریہ! آپ کا پیغام کامیابی سے جمع کر لیا گیا ہے۔",
                    error:
                      "فارم جمع کرنے میں ناکام۔ براہ کرم دوبارہ کوشش کریں۔",
                  }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <main>
        <section className="py-16 container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <FadeIn direction="up" delay={0.2} className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[#003D6E]">
                ہمارے <span className="text-black">بارے میں</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
              <p className="mb-4 text-gray-700">
                یوکے ویزا ہیلپ کنسلٹنٹس یونائیٹڈ کنگڈم کے امیگریشن اور سیٹلمنٹ
                درخواستوں کے لیے ماہر مشیروں کی ٹیم کے ساتھ سرکردہ یوکے ویزا
                کنسلٹنسیوں میں سے ایک ہے۔ ہماری ٹیم میں خصوصی تربیت یافتہ مشیر،
                مشاورتی اور تجربہ کار پروسیسنگ ٹیمیں شامل ہیں جو کسٹمر کیئر پر
                زور دیتی ہیں۔
              </p>
              <motion.a
                href="#contact"
                className="inline-block bg-[#003D6E] text-white font-bold py-2 px-6 rounded hover:bg-[#004d8a] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                رابطہ کریں
              </motion.a>
            </FadeIn>
            <FadeIn
              direction="up"
              delay={0.4}
              className="md:w-1/2 bg-gray-100 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#003D6E]">
                گاہک ہمیں کیوں منتخب کرتے ہیں؟
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
              <div className="mb-4 flex justify-center">
                <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/31946118/pexels-photo-31946118/free-photo-of-bustling-london-city-street-with-historic-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="تاریخی فن تعمیر کے ساتھ لندن شہر کی سڑک"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                بہت سے گاہک ہماری بہترین خدمات اور کامیابی کی تاریخ کی وجہ سے
                ہمیں منتخب کرتے ہیں۔ تاہم، ہم مانتے ہیں کہ ہماری سب سے بڑی طاقت
                اور جو ہمیں منفرد بناتی ہے، وہ ہے ہماری چھوٹی لیکن وقف شدہ ٹیم
                جو ذاتی خدمت فراہم کرتی ہے۔
              </p>
            </FadeIn>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
                ہماری <span className="text-black">خدمات</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                ہم درخواست گزاروں کی ضروریات کے مطابق مکمل ویزا اور امیگریشن حل
                فراہم کرتے ہیں۔
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <ScaleIn
                delay={0.2}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-[120px] relative rounded-md mb-4 overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1914982/pexels-photo-1914982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="ذاتی اور خاندانی ویزا خدمات"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  ذاتی اور خاندانی
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>شریک حیات اور منگیتر ویزا</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>غیر معینہ مدت کی رہائش</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>EEA سیٹلڈ سٹیٹس</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>برطانوی پاسپورٹ کی درخواستیں</span>
                  </li>
                </ul>
              </ScaleIn>

              <ScaleIn
                delay={0.4}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-[120px] relative rounded-md mb-4 overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/5717325/pexels-photo-5717325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="کاروباری سفر اور کارپوریٹ ویزا خدمات"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  کام اور کاروبار
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>کام کا ویزا</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>سینئر/ماہر ملازمین</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>کاروباری ویزا</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزا توسیع</span>
                  </li>
                </ul>
              </ScaleIn>

              <ScaleIn
                delay={0.6}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-[120px] relative rounded-md mb-4 overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3799832/pexels-photo-3799832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="طلبہ اور گریجویٹ ویزا خدمات"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  طلبہ اور گریجویٹس
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>طالب علم ویزا</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>گریجویٹ ویزا</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>گریجویٹ منحصر ویزا</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>مختصر مدتی تعلیمی ویزا</span>
                  </li>
                </ul>
              </ScaleIn>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <FadeIn direction="right" className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
                  مفت <span className="text-black">جائزہ</span>
                </h2>
                <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
                <div className="w-full h-[200px] relative rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="پیشہ ورانہ ویزا مشاورت اور تشخیص"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="mb-4 text-gray-700">
                  اگر آپ کو کوئی امیگریشن مسئلہ درپیش ہے، تو آپ ہمارے ماہر سے
                  مفت تشخیص کروا سکتے ہیں۔ ہم آپ کو اپنے معاملے کے بارے میں درست
                  فیصلہ کرنے کے لیے تمام ضروری معلومات فراہم کریں گے۔
                </p>
              </FadeIn>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <ScaleIn
                  delay={0.2}
                  className="bg-white p-5 rounded-lg shadow-md"
                >
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">99% کامیابی کی شرح</h3>
                  <p className="text-sm text-gray-600">
                    ہمارے پاس کامیاب ویزا درخواستوں کا ثابت شدہ ٹریک ریکارڈ ہے
                  </p>
                </ScaleIn>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        logoText="یوکے ویزا ہیلپ کنسلٹنٹس"
        logoTextStyle={{ direction: "rtl" }}
        tagline="یوکے میں ویزا اور سیٹلمنٹ درخواستوں کے لیے ماہر مشیروں کے پینل کے ساتھ سرکردہ یوکے ویزا کنسلٹنسی۔"
        taglineStyle={{ direction: "rtl" }}
        quickLinksTitle="فوری روابط"
        quickLinksTitleStyle={{ direction: "rtl" }}
        quickLinks={[
          { href: "/", label: "انگریزی" },
          { href: "/bengali", label: "بنگالی" },
          { href: "/urdu", label: "اردو" },
          { href: "/punjabi", label: "پنجابی" },
          { href: "/hindi", label: "ہندی" },
          { href: "/farsi", label: "فارسی" },
          { href: "/dari", label: "دری" },
          { href: "/arabic", label: "عربی" },
        ]}
        servicesTitle="خدمات"
        servicesTitleStyle={{ direction: "rtl" }}
        serviceLinks={[
          { href: "#services", label: "خاندانی ویزا" },
          { href: "#services", label: "کام کا ویزا" },
          { href: "#services", label: "طالب علم ویزا" },
          { href: "#services", label: "سیٹلمنٹ درخواستیں" },
        ]}
        contactTitle="رابطہ کریں"
        contactTitleStyle={{ direction: "rtl" }}
        contactInfo={[
          "لندن، یونائیٹڈ کنگڈم",
          "فون: +44 123 456 7890",
          "ای میل: info@ukvisahelp.com",
        ]}
        copyright="یوکے ویزا ہیلپ کنسلٹنٹس۔ جملہ حقوق محفوظ ہیں۔"
        copyrightStyle={{ direction: "rtl" }}
        footerStyle={{ direction: "rtl" }}
      />
    </div>
  );
}