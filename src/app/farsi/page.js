"use client";

import Image from "next/image";
import { FadeIn, ScaleIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";

export default function FarsiPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="primary-bg text-white py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-2xl" style={{ direction: 'rtl', textAlign: 'right' }}>مشاوران کمک ویزای انگلستان</div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-gray-300">English</a>
            <a href="/bengali" className="hover:text-gray-300">Bengali</a>
            <a href="/urdu" className="hover:text-gray-300">Urdu</a>
            <a href="/punjabi" className="hover:text-gray-300">Punjabi</a>
            <a href="/free-review" className="hover:text-gray-300">Free Review</a>
            <a href="#services" className="hover:text-gray-300" style={{ direction: 'rtl', textAlign: 'right' }}>خدمات</a>
            <a href="#how-we-work" className="hover:text-gray-300" style={{ direction: 'rtl', textAlign: 'right' }}>روش کار</a>
            <a href="#contact" className="hover:text-gray-300" style={{ direction: 'rtl', textAlign: 'right' }}>تماس با ما</a>
          </nav>
        </div>
      </header>
      
      <div className="primary-bg text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <FadeIn direction="right" className="md:w-1/2" style={{ direction: 'rtl', textAlign: 'right' }}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">متخصصان ویزا و مهاجرت به انگلستان</h1>
              <p className="text-xl mb-8">مشاوره تخصصی برای انواع ویزا و درخواست‌های مهاجرت به انگلستان</p>
              <motion.a 
                href="#services" 
                className="inline-block bg-white text-[#003D6E] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >خدمات ما</motion.a>
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
        <section className="py-16 container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <FadeIn direction="up" delay={0.2} className="md:w-1/2" style={{ direction: 'rtl', textAlign: 'right' }}>
              <h2 className="text-3xl font-bold mb-6 text-[#003D6E]">درباره <span className="text-black">ما</span></h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6 mr-0"></div>
              <p className="mb-4 text-gray-700">
                مشاوران کمک ویزای انگلستان یکی از پیشروترین مراکز مشاوره ویزای انگلستان است که تیمی متشکل از مشاوران متخصص در زمینه درخواست‌های ویزا و اقامت انگلستان دارد. این تیم شامل مشاوران آموزش‌دیده، کارشناسان و گروه‌های پردازش باتجربه است که توجه ویژه‌ای به مراقبت از مشتریان دارند.
              </p>
              <p className="mb-6 text-gray-700">
                مشاوران کمک ویزای انگلستان در تمام سطوح مهاجرت تخصص دارند و تمرکز ما بر ارائه بهترین کمک ممکن به شماست. اگر قصد سفر، اقامت یا تمدید اقامت در انگلستان را دارید، مشاوران متخصص ما آماده‌اند تا با خدمات مشاوره مهاجرتی سفارشی‌شده، به شما و خانواده‌تان کمک کنند.
              </p>
              <motion.a 
                href="#contact" 
                className="inline-block bg-[#003D6E] text-white font-bold py-2 px-6 rounded hover:bg-[#004d8a] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >تماس با ما</motion.a>
            </FadeIn>
            <FadeIn direction="up" delay={0.4} className="md:w-1/2 bg-gray-100 rounded-lg p-8" style={{ direction: 'rtl', textAlign: 'right' }}>
              <h2 className="text-2xl font-bold mb-4 text-[#003D6E]">چرا مشتریان ما را انتخاب می‌کنند؟</h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6 mr-0"></div>
              <div className="mb-4 flex justify-center">
                <div className="bg-gray-200 rounded-lg w-[200px] h-[200px] flex items-center justify-center mb-4">
                  <p className="text-gray-500">Team Image (200x200px)</p>
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                بسیاری از مشتریان به دلیل سابقه خدمات عالی و موفقیت‌های مستمر، مشاوران کمک ویزای انگلستان را انتخاب می‌کنند. اما ما معتقدیم بزرگ‌ترین نقطه قوت و عامل منحصربه‌فرد ما، تیم کوچک و متعهدی است که خدمات کاملاً شخصی‌سازی شده ارائه می‌دهد. ما عاشق کارمان هستیم و تیم ما از ایجاد تغییر در زندگی مشتریان لذت می‌برد.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>مشاوران متخصص</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>خدمات شخصی‌سازی شده</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>نرخ موفقیت بالا</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>پردازش سریع</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6" style={{ direction: 'rtl', textAlign: 'right' }}>
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">خدمات <span className="text-black">ما</span></h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                ما مجموعه کاملی از راهکارهای ویزا و مهاجرت را متناسب با نیاز متقاضیان ارائه می‌دهیم.
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <ScaleIn delay={0.2} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 w-full h-[120px] rounded-md mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Service Image 1 (120x120px)</p>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">شخصی و خانوادگی</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای همسر و نامزد</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>اقامت دائم</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>وضعیت اقامت اتحادیه اروپا</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>درخواست پاسپورت بریتانیایی</span>
                  </li>
                </ul>
              </ScaleIn>
              
              <ScaleIn delay={0.4} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 w-full h-[120px] rounded-md mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Service Image 2 (120x120px)</p>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">کار و تجارت</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای کار</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>کارگران ارشد/متخصص</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای تجاری</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>تمدید ویزا</span>
                  </li>
                </ul>
              </ScaleIn>
              
              <ScaleIn delay={0.6} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 w-full h-[120px] rounded-md mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Service Image 3 (120x120px)</p>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">دانشجویی و فارغ‌التحصیلی</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای دانشجویی</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای فارغ‌التحصیلی</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای همراه فارغ‌التحصیل</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای تحصیل کوتاه‌مدت</span>
                  </li>
                </ul>
              </ScaleIn>
            </div>
            
            <FadeIn direction="up" delay={0.2} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#003D6E]">سایر خدمات شامل:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>سند مسافرتی انگلستان</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای الکترونیکی</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای بازدید ازدواج</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای همراه</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>اعتراضات و رد درخواست‌ها</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>درخواست پناهندگی</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>درخواست‌های طرح ARAP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>اعضای اضافی خانواده</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="how-we-work" className="py-16 container mx-auto px-6">
          <FadeIn direction="up" className="text-center mb-12" style={{ direction: 'rtl', textAlign: 'right' }}>
            <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">روش <span className="text-black">کار ما</span></h2>
            <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              فرآیند ساده ما دریافت کمک برای ویزا را آسان و سریع می‌کند
            </p>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={staggerItem(0.2)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
              whileHover={{ y: -5 }}
              style={{ direction: 'rtl', textAlign: 'right' }}
            >
              <motion.div 
                className="bg-[#003D6E] text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 text-2xl font-bold absolute -top-8 left-1/2 transform -translate-x-1/2"
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 10 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, duration: 0.5 }}
              >۱</motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">ارسال اطلاعات</h3>
                <p className="text-gray-700 text-center">
                  اطلاعات خود را آنلاین ارسال کنید
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerItem(0.4)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
              whileHover={{ y: -5 }}
              style={{ direction: 'rtl', textAlign: 'right' }}
            >
              <motion.div 
                className="bg-[#003D6E] text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 text-2xl font-bold absolute -top-8 left-1/2 transform -translate-x-1/2"
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 10 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, duration: 0.5, delay: 0.2 }}
              >۲</motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">بررسی تخصصی</h3>
                <p className="text-gray-700 text-center">
                  ما اطلاعات شما را به‌دقت بررسی و به مشاورمان ارجاع می‌دهیم
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerItem(0.6)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
              whileHover={{ y: -5 }}
              style={{ direction: 'rtl', textAlign: 'right' }}
            >
              <motion.div 
                className="bg-[#003D6E] text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 text-2xl font-bold absolute -top-8 left-1/2 transform -translate-x-1/2"
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 10 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, duration: 0.5, delay: 0.4 }}
              >۳</motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">راهکار اختصاصی</h3>
                <p className="text-gray-700 text-center">
                  یکی از مشاوران توصیه‌شده ما با بهترین راهکار به شما پاسخ خواهد داد
                </p>
              </div>
            </motion.div>
          </StaggerContainer>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <FadeIn direction="right" className="md:w-1/2" style={{ direction: 'rtl', textAlign: 'right' }}>
                <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">بررسی <span className="text-black">رایگان</span></h2>
                <div className="h-1 w-20 bg-[#003D6E] mb-6 mr-0"></div>
                <div className="bg-gray-200 rounded-lg w-full h-[200px] flex items-center justify-center mb-6">
                  <p className="text-gray-500">Assessment Image (400x300px)</p>
                </div>
                <p className="mb-4 text-gray-700">
                  اگر با مسئله‌ای مرتبط با مهاجرت مواجه هستید، می‌توانید از یک ارزیابی تخصصی توسط کارشناسان ما بهره‌مند شوید. ما تمام اطلاعات لازم را برای اتخاذ بهترین تصمیم در مورد پرونده شما ارائه می‌دهیم.
                </p>
                <p className="mb-4 text-gray-700">
                  ما <strong>مشاوره حقوقی در امور مهاجرت</strong> ارائه می‌کنیم. وکلای ما تجربه گسترده‌ای دارند و در نمایندگی از موکلان در دادگاه‌ها و جلسات داوری و میانجی‌گری مهارت دارند.
                </p>
                <p className="mb-6 text-gray-700">
                  اگر شما یک مهاجر فاقد مدارک هستید، سیستم مهاجرت ممکن است دریافت حمایت قانونی را برای شما دشوار کند. ما می‌توانیم به شما در <strong>اخذ مجوز کار</strong> کمک کنیم. همچنین در <strong>تمدید مجوز کار</strong> شما را همراهی می‌کنیم.
                </p>
                <motion.a 
                  href="/free-review" 
                  className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 mt-4 rounded hover:bg-[#004d8a] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >بررسی رایگان دریافت کنید</motion.a>
              </FadeIn>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <ScaleIn delay={0.2} className="bg-white p-5 rounded-lg shadow-md" style={{ direction: 'rtl', textAlign: 'right' }}>
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">۹۹٪ نرخ موفقیت</h3>
                  <p className="text-sm text-gray-600">سابقه اثبات‌شده‌ای از درخواست‌های موفق ویزا داریم</p>
                </ScaleIn>
                <ScaleIn delay={0.3} className="bg-white p-5 rounded-lg shadow-md" style={{ direction: 'rtl', textAlign: 'right' }}>
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">پردازش سریع</h3>
                  <p className="text-sm text-gray-600">ما اطمینان می‌دهیم که درخواست شما در سریع‌ترین زمان ممکن پردازش شود</p>
                </ScaleIn>
                <ScaleIn delay={0.4} className="bg-white p-5 rounded-lg shadow-md" style={{ direction: 'rtl', textAlign: 'right' }}>
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">راهنمایی تخصصی</h3>
                  <p className="text-sm text-gray-600">از متخصصان قانون مهاجرت انگلستان مشاوره دریافت کنید</p>
                </ScaleIn>
                <ScaleIn delay={0.5} className="bg-white p-5 rounded-lg shadow-md" style={{ direction: 'rtl', textAlign: 'right' }}>
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">پشتیبانی شخصی</h3>
                  <p className="text-sm text-gray-600">مشاور اختصاصی در تمام مراحل درخواست شما</p>
                </ScaleIn>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center mb-12" style={{ direction: 'rtl', textAlign: 'right' }}>
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">با ما <span className="text-black">در تماس باشید</span></h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                چگونه می‌توانیم امروز به شما کمک کنیم؟ از طریق فرم زیر با ما تماس بگیرید.
              </p>
            </FadeIn>
            
            <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
              <div className="mb-4 flex justify-center">
                <div className="bg-gray-200 rounded-lg w-full max-w-md h-[120px] flex items-center justify-center mb-4">
                  <p className="text-gray-500">Contact Form Image (400x120px)</p>
                </div>
              </div>
              
              <form className="max-w-xl mx-auto space-y-4" style={{ direction: 'rtl', textAlign: 'right' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="نام کوچک شما" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="نام خانوادگی شما" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                      required
                    />
                  </div>
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="آدرس ایمیل شما" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="کشور محل اقامت شما" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                    required
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="توضیحات بیشتر" 
                    className="w-full p-3 border border-gray-300 rounded-md h-24 focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                    required
                  ></textarea>
                </div>
                <div className="pt-2">
                  <motion.button 
                    type="submit"
                    className="bg-[#003D6E] text-white py-3 px-8 rounded-md hover:bg-[#004d8a] transition-colors font-medium w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    ارسال
                  </motion.button>
                </div>
              </form>
            </div>
            
            <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={staggerItem(0.2)} className="bg-white p-6 rounded-lg shadow-md text-center" whileHover={{ y: -5 }} style={{ direction: 'rtl', textAlign: 'right' }}>
                <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">تلفن</h3>
                <p className="text-gray-600">+44 123 456 7890</p>
              </motion.div>
              
              <motion.div variants={staggerItem(0.4)} className="bg-white p-6 rounded-lg shadow-md text-center" whileHover={{ y: -5 }} style={{ direction: 'rtl', textAlign: 'right' }}>
                <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">ایمیل</h3>
                <p className="text-gray-600">info@ukvisahelp.com</p>
              </motion.div>
              
              <motion.div variants={staggerItem(0.6)} className="bg-white p-6 rounded-lg shadow-md text-center" whileHover={{ y: -5 }} style={{ direction: 'rtl', textAlign: 'right' }}>
                <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">دفتر</h3>
                <p className="text-gray-600">لندن، انگلستان</p>
              </motion.div>
            </StaggerContainer>
          </div>
        </section>
      </main>
      
      <footer className="bg-[#003D6E] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8" style={{ direction: 'rtl', textAlign: 'right' }}>
            <div>
              <div className="bg-gray-700 w-[150px] h-[80px] rounded flex items-center justify-center mb-4">
                <p className="text-gray-300">Logo (150x80px)</p>
              </div>
              <h3 className="font-bold text-lg mb-4">مشاوران کمک ویزای انگلستان</h3>
              <p className="text-gray-300 text-sm">
                یکی از پیشروترین مراکز مشاوره ویزای انگلستان با تیمی متشکل از مشاوران متخصص در زمینه درخواست‌های ویزا و اقامت انگلستان.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">لینک‌های سریع</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="/" className="hover:text-white">انگلیسی</a></li>
                <li><a href="/bengali" className="hover:text-white">بنگالی</a></li>
                <li><a href="/urdu" className="hover:text-white">اردو</a></li>
                <li><a href="/punjabi" className="hover:text-white">پنجابی</a></li>
                <li><a href="/free-review" className="hover:text-white">بررسی رایگان</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">خدمات</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#services" className="hover:text-white">ویزای خانوادگی</a></li>
                <li><a href="#services" className="hover:text-white">ویزای کار</a></li>
                <li><a href="#services" className="hover:text-white">ویزای دانشجویی</a></li>
                <li><a href="#services" className="hover:text-white">درخواست‌های اقامت</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">تماس با ما</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>لندن، انگلستان</li>
                <li>تلفن: +44 123 456 7890</li>
                <li>ایمیل: info@ukvisahelp.com</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-700 text-center text-gray-300 text-sm">
            <p>&copy; {new Date().getFullYear()} مشاوران کمک ویزای انگلستان. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}