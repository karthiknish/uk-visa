"use client";

import Image from "next/image";
import { FadeIn, ScaleIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";

export default function UrduPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="primary-bg text-white py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-2xl" style={{ fontFamily: 'Jameel Noori Nastaleeq, Arial, sans-serif', direction: 'rtl' }}>
            یو کے ویزا ہیلپ کنسلٹنٹس
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-gray-300">English</a>
            <a href="/bengali" className="hover:text-gray-300">Bengali</a>
            <a href="/punjabi" className="hover:text-gray-300">Punjabi</a>
            <a href="/farsi" className="hover:text-gray-300">Farsi</a>
            <a href="/free-review" className="hover:text-gray-300">Free Review</a>
            <a href="#services" className="hover:text-gray-300" style={{ fontFamily: 'Jameel Noori Nastaleeq, Arial, sans-serif' }}>خدمات</a>
            <a href="#how-we-work" className="hover:text-gray-300" style={{ fontFamily: 'Jameel Noori Nastaleeq, Arial, sans-serif' }}>ہم کیسے کام کرتے ہیں</a>
            <a href="#contact" className="hover:text-gray-300" style={{ fontFamily: 'Jameel Noori Nastaleeq, Arial, sans-serif' }}>رابطہ کریں</a>
          </nav>
        </div>
      </header>
      
      <div className="primary-bg text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <FadeIn direction="right" className="md:w-1/2" style={{ fontFamily: 'Jameel Noori Nastaleeq, Arial, sans-serif', direction: 'rtl', textAlign: 'right' }}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">یو کے ویزا ہیلپ کنسلٹنٹس</h1>
              <p className="text-xl mb-8">برطانیہ کے تمام ویزا اور امیگریشن کے معاملات میں ماہر مشورہ</p>
              <motion.a 
                href="#services" 
                className="inline-block bg-white text-[#003D6E] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >ہماری خدمات</motion.a>
            </FadeIn>
            
            {/* Hero Image Placeholder */}
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-lg w-full h-[350px] flex items-center justify-center">
                <p className="text-gray-500">Hero Image (600x400px)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <main>
        <section id="services" className="py-16 bg-gray-50" dir="rtl">
          <div className="container mx-auto px-6" style={{ fontFamily: 'Jameel Noori Nastaleeq, Arial, sans-serif' }}>
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">ہماری <span className="text-black">خدمات</span></h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                ہم درخواست گزاروں کی ضروریات کے مطابق مکمل ویزا اور امیگریشن حل فراہم کرتے ہیں۔
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <ScaleIn delay={0.2} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 w-full h-[120px] rounded-md mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Service Image 1 (120x120px)</p>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">شخصی اور خاندانی</h3>
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
            </div>
          </div>
        </section>

        <section id="how-we-work" className="py-16 container mx-auto px-6" dir="rtl">
          <FadeIn direction="up" className="text-center mb-12" style={{ fontFamily: 'Jameel Noori Nastaleeq, Arial, sans-serif' }}>
            <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">ہم کیسے <span className="text-black">کام کرتے ہیں</span></h2>
            <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              ہماری سادہ پروسیس آپ کے لیے ویزا سہولیات حاصل کرنا آسان بناتی ہے
            </p>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ fontFamily: 'Jameel Noori Nastaleeq, Arial, sans-serif' }}>
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
              >۱</motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">معلومات جمع کروائیں</h3>
                <p className="text-gray-700 text-center">
                  آپ اپنی معلومات آن لائن جمع کرواتے ہیں
                </p>
              </div>
            </motion.div>
          </StaggerContainer>
        </section>

        <section id="contact" className="py-16" dir="rtl">
          <div className="container mx-auto px-6" style={{ fontFamily: 'Jameel Noori Nastaleeq, Arial, sans-serif' }}>
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">رابطہ <span className="text-black">کریں</span></h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                ہم آج آپ کی کیسے مدد کر سکتے ہیں؟ ذیل میں دیے گئے کسی بھی طریقے سے ہم سے رابطہ کریں۔
              </p>
            </FadeIn>
            
            <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
              <div className="mb-4 flex justify-center">
                <div className="bg-gray-200 rounded-lg w-full max-w-md h-[120px] flex items-center justify-center mb-4">
                  <p className="text-gray-500">Contact Form Image (400x120px)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-[#003D6E] text-white py-12" dir="rtl">
        <div className="container mx-auto px-6" style={{ fontFamily: 'Jameel Noori Nastaleeq, Arial, sans-serif' }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="bg-gray-700 w-[150px] h-[80px] rounded flex items-center justify-center mb-4">
                <p className="text-gray-300">Logo (150x80px)</p>
              </div>
              <h3 className="font-bold text-lg mb-4">یو کے ویزا ہیلپ کنسلٹنٹس</h3>
              <p className="text-gray-300 text-sm">
                برطانیہ کی ایک معروف ویزا کنسلٹنسی ہے، جو یو کے ویزا اور سیٹلمنٹ درخواستوں کے لیے ماہر مشیروں کی ٹیم پر مشتمل ہے۔
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">فوری لنکس</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="/" className="hover:text-white">انگریزی</a></li>
                <li><a href="/bengali" className="hover:text-white">بنگالی</a></li>
                <li><a href="#services" className="hover:text-white">خدمات</a></li>
                <li><a href="#how-we-work" className="hover:text-white">ہم کیسے کام کرتے ہیں</a></li>
                <li><a href="#contact" className="hover:text-white">رابطہ کریں</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-700 text-center text-gray-300 text-sm">
            <p>&copy; {new Date().getFullYear()} یو کے ویزا ہیلپ کنسلٹنٹس۔ جملہ حقوق محفوظ ہیں۔</p>
          </div>
        </div>
      </footer>
    </div>
  );
}