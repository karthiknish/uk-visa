"use client";

import Image from "next/image";
import { FadeIn, ScaleIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function UrduPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navigation
        title="یو کے ویزا ہیلپ کنسلٹنٹس"
        titleStyle={{
          fontFamily: "Jameel Noori Nastaleeq, Arial, sans-serif",
          direction: "rtl",
        }}
        menuItems={[
          { href: "#services", label: "خدمات" },
          { href: "#how-we-work", label: "ہم کیسے کام کرتے ہیں" },
          { href: "#contact", label: "رابطہ کریں" },
        ]}
        menuItemStyle={{
          fontFamily: "Jameel Noori Nastaleeq, Arial, sans-serif",
          direction: "rtl",
        }}
      />

      <div className="primary-bg text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <FadeIn
              direction="right"
              className="md:w-1/2"
              style={{
                fontFamily: "Jameel Noori Nastaleeq, Arial, sans-serif",
                direction: "rtl",
                textAlign: "right",
              }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                یو کے ویزا ہیلپ کنسلٹنٹس
              </h1>
              <p className="text-xl mb-8">
                برطانیہ کے تمام ویزا اور امیگریشن کے معاملات میں ماہر مشورہ
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

            <FadeIn
              direction="left"
              className="md:w-1/2 bg-white rounded-lg shadow-lg p-6"
              style={{
                fontFamily: "Jameel Noori Nastaleeq, Arial, sans-serif",
                direction: "rtl",
                textAlign: "right",
              }}
            >
              <ContactForm
                labels={{
                  heading: "مفت مشاورت حاصل کریں",
                  subheading: "ہم آج آپ کی کیسے مدد کر سکتے ہیں؟",
                  firstName: "آپ کا پہلا نام",
                  lastName: "آپ کا آخری نام",
                  email: "اپنا ای میل ایڈریس درج کریں",
                  country: "آپ کس ملک میں ہیں",
                  details: "مزید تفصیل سے بیان کریں",
                  submit: "درخواست جمع کریں",
                  success: "شکریہ! آپ کی درخواست کامیابی سے جمع کر لی گئی ہے۔",
                  error:
                    "درخواست جمع کرنے میں مشکل پیش آئی۔ براہ کرم دوبارہ کوشش کریں۔",
                }}
                formStyle={{
                  direction: "rtl",
                  textAlign: "right",
                  fontFamily: "Jameel Noori Nastaleeq, Arial, sans-serif",
                }}
              />
            </FadeIn>
          </div>
        </div>
      </div>

      <main>
        <section id="services" className="py-16 bg-gray-50" dir="rtl">
          <div
            className="container mx-auto px-6"
            style={{ fontFamily: "Jameel Noori Nastaleeq, Arial, sans-serif" }}
          >
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
                    src="https://images.pexels.com/photos/5717325/pexels-photo-5717325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="کاروباری سفر اور کارپوریٹ ویزا خدمات"
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
                    <span>طلبہ اور گریجویٹ ویزا</span>
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
            </div>
          </div>
        </section>

        <section
          id="how-we-work"
          className="py-16 container mx-auto px-6"
          dir="rtl"
        >
          <FadeIn
            direction="up"
            className="text-center mb-12"
            style={{ fontFamily: "Jameel Noori Nastaleeq, Arial, sans-serif" }}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
              ہم کیسے <span className="text-black">کام کرتے ہیں</span>
            </h2>
            <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              ہماری سادہ پروسیس آپ کے لیے ویزا سہولیات حاصل کرنا آسان بناتی ہے
            </p>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            style={{ fontFamily: "Jameel Noori Nastaleeq, Arial, sans-serif" }}
          >
            <motion.div
              variants={staggerItem(0.2)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="bg-[#003D6E] text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 text-2xl font-bold absolute -top-8 left-1/2 transform -translate-x-1/2"
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 10 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, duration: 0.5 }}
              >
                ۱
              </motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">
                  معلومات جمع کروائیں
                </h3>
                <p className="text-gray-700 text-center">
                  آپ اپنی معلومات آن لائن جمع کرواتے ہیں
                </p>
              </div>
            </motion.div>
          </StaggerContainer>
        </section>

        <section id="contact" className="py-16" dir="rtl">
          <div
            className="container mx-auto px-6"
            style={{ fontFamily: "Jameel Noori Nastaleeq, Arial, sans-serif" }}
          >
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
                رابطہ <span className="text-black">کریں</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                ہم آج آپ کی کیسے مدد کر سکتے ہیں؟ ذیل میں دیے گئے کسی بھی طریقے
                سے ہم سے رابطہ کریں۔
              </p>
            </FadeIn>

            <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
              <div className="mb-4 flex justify-center">
                <div className="bg-gray-200 rounded-lg w-full max-w-md h-[120px] flex items-center justify-center mb-4">
                  <p className="text-gray-500">
                    Contact Form Image (400x120px)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}