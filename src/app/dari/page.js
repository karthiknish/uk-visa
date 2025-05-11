"use client";

import Image from "next/image";
import { FadeIn, ScaleIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DariPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navigation 
        title="مشاوران کمک ویزای بریتانیا"
        titleStyle={{ direction: 'rtl', textAlign: 'right' }}
        menuItems={[
          { href: "#services", label: "خدمات" },
          { href: "#how-we-work", label: "روش کار" },
          { href: "#contact", label: "تماس با ما" }
        ]}
        menuItemStyle={{ direction: 'rtl', textAlign: 'right' }}
      />
      
      <div className="primary-bg text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <FadeIn direction="right" className="md:w-1/2" style={{ direction: 'rtl', textAlign: 'right' }}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">متخصصان ویزا و مهاجرت به بریتانیا</h1>
              <p className="text-xl mb-8">مشاوره تخصصی برای انواع ویزا و درخواست‌های اقامت در بریتانیا</p>
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
                مشاوران کمک ویزای بریتانیا (UK Visa Help Consultants) یکی از پیشگامان عرصهٔ خدمات مشاوره‌ای ویزا و اقامت بریتانیا است. این نهاد دارای هیأتی از مشاوران متخصص در امور ویزا و درخواست‌های اقامت می‌باشد. تیم ما متشکل از مشاوران آموزش‌دیده، کارشناسان مجرب و گروه‌های کارآزمودهٔ روند مهاجرتی هستند که به رضایت و رفاه مراجعین توجه خاص دارند.
              </p>
              <p className="mb-6 text-gray-700">
                مشاوران کمک ویزای بریتانیا در تمام سطوح امور مهاجرتی تخصص دارند و تمرکز ما بر این است که بهترین خدمات ممکن را به شما ارائه کنیم. اگر در نظر دارید به بریتانیا سفر کنید، در بریتانیا اقامت گزینید یا مدت اقامت ‌تان را تمدید نمایید، مشاوران ما آماده‌اند تا با ارائهٔ مشوره‌های مهاجرتیِ شخصی‌سازی‌شده، به شما و خانواده‌تان کمک نمایند.
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
                بسیاری از مشتریان به خاطر سابقهٔ درخشان خدمات و نتایج موفق، ما را انتخاب می‌کنند. با این حال، آنچه ما را واقعاً متمایز می‌سازد، تیم کوچک اما متعهد ما است که خدماتی کاملاً شخصی‌شده ارائه می‌دهد. ما واقعاً به کاری که انجام می‌دهیم علاقه‌مند هستیم و از اینکه بتوانیم در زندگی مشتریان خود تفاوت ایجاد کنیم، خرسندیم.
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
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]" style={{ direction: 'rtl', textAlign: 'right' }}>خدمات <span className="text-black">ما</span></h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700" style={{ direction: 'rtl', textAlign: 'right' }}>
                ما مجموعهٔ کاملی از خدمات ویزا و مهاجرت را متناسب با نیازهای هر متقاضی ارائه می‌نماییم.
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <ScaleIn delay={0.2} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" style={{ direction: 'rtl', textAlign: 'right' }}>
                <div className="bg-gray-200 w-full h-[120px] rounded-md mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Service Image 1 (120x120px)</p>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">شخصی و خانوادگی</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای همسر و نامزدی</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>اقامت دائم (ILR)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>وضعیت سکونت EEA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>درخواست پاسپورت بریتانیا</span>
                  </li>
                </ul>
              </ScaleIn>
              
              <ScaleIn delay={0.4} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" style={{ direction: 'rtl', textAlign: 'right' }}>
                <div className="bg-gray-200 w-full h-[120px] rounded-md mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Service Image 2 (120x120px)</p>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">کار و تجارت</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای کاری</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>کارمند ارشد/متخصص</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزاهای تجارتی</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>تمدید ویزا</span>
                  </li>
                </ul>
              </ScaleIn>
              
              <ScaleIn delay={0.6} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" style={{ direction: 'rtl', textAlign: 'right' }}>
                <div className="bg-gray-200 w-full h-[120px] rounded-md mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Service Image 3 (120x120px)</p>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">دانشجویی و فارغ‌التحصیلی</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای تحصیلی</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای فارغ‌التحصیلی</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای بستگان فارغ‌التحصیل</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای تحصیلی کوتاه‌مدت</span>
                  </li>
                </ul>
              </ScaleIn>
            </div>
            
            <FadeIn direction="up" delay={0.2} className="bg-white p-6 rounded-lg shadow" style={{ direction: 'rtl', textAlign: 'right' }}>
              <h3 className="text-xl font-semibold mb-4 text-[#003D6E]">خدمات دیگر ما شامل:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>سند سفر بریتانیا</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزاهای الکترونیکی</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای ازدواج (بازدیدکننده)</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ویزای بستگان</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>استیناف و رد درخواست</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>درخواست پناهندگی</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>درخواست‌های ARAP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>اعضای خانواده</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="how-we-work" className="py-16 container mx-auto px-6">
          <FadeIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#003D6E]" style={{ direction: 'rtl', textAlign: 'right' }}>روش <span className="text-black">کار ما</span></h2>
            <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700" style={{ direction: 'rtl', textAlign: 'right' }}>
              شیوهٔ کاری ما در سه مرحلهٔ ساده
            </p>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={staggerItem(0.2)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative" style={{ direction: 'rtl', textAlign: 'right' }}
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
                <h3 className="text-xl font-bold mb-4 text-center mt-4">ثبت معلومات آنلاین</h3>
                <p className="text-gray-700 text-center">
                  معلومات خود را به‌صورت آنلاین در فرم ما ثبت کنید
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerItem(0.4)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative" style={{ direction: 'rtl', textAlign: 'right' }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="bg-[#003D6E] text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 text-2xl font-bold absolute -top-8 left-1/2 transform -translate-x-1/2"
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 10 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, duration: 0.5, delay: 0.2 }}
              >۲</motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">بررسی متخصص</h3>
                <p className="text-gray-700 text-center">
                  معلومات شما به‌دقت بررسی شده و به یکی از مشاوران ما ارجاع می‌شود
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerItem(0.6)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative" style={{ direction: 'rtl', textAlign: 'right' }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="bg-[#003D6E] text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 text-2xl font-bold absolute -top-8 left-1/2 transform -translate-x-1/2"
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 10 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, duration: 0.5, delay: 0.4 }}
              >۳</motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">راه حل شخصی</h3>
                <p className="text-gray-700 text-center">
                  یکی از مشاوران ما با راه‌حل‌های ممکن با شما تماس خواهد گرفت
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
                  اگر در زمینهٔ مهاجرت با مشکلی مواجه هستید، می‌توانید با یکی از مشاوران حرفه‌ای ما ارزیابی اولیه انجام دهید. ما تمام اطلاعات لازم را در اختیار شما قرار می‌دهیم تا تصمیمی آگاهانه و مناسب بگیرید.
                </p>
                <p className="mb-4 text-gray-700">
                  ما در امور حقوقی مهاجرت مشوره می‌دهیم. وکلای ما تجربهٔ فراوانی در نمایندگی موکلین در محاکم، داوری و پروسه میانجی‌گری دارند.
                </p>
                <p className="mb-4 text-gray-700">
                  اگر مهاجر بدون مدرک هستید، ممکن است سیستم مهاجرت برای دسترسی به حمایت قانونی مانع ایجاد کند. ما می‌توانیم در اخذ اجازهٔ کار و همچنان تمدید آن، به شما کمک کنیم.
                </p>
                <motion.a 
                  href="#contact" 
                  className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 mt-4 rounded hover:bg-[#004d8a] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >دریافت بررسی رایگان</motion.a>
              </FadeIn>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <ScaleIn delay={0.2} className="bg-white p-5 rounded-lg shadow-md" style={{ direction: 'rtl', textAlign: 'right' }}>
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">۹۹٪ نرخ موفقیت</h3>
                  <p className="text-sm text-gray-600">ما سابقهٔ موفقیت‌آمیزی در درخواست‌های ویزا داریم</p>
                </ScaleIn>
                <ScaleIn delay={0.3} className="bg-white p-5 rounded-lg shadow-md" style={{ direction: 'rtl', textAlign: 'right' }}>
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">پردازش سریع</h3>
                  <p className="text-sm text-gray-600">ما تضمین می‌کنیم که درخواست شما در اسرع وقت پردازش شود</p>
                </ScaleIn>
                <ScaleIn delay={0.4} className="bg-white p-5 rounded-lg shadow-md" style={{ direction: 'rtl', textAlign: 'right' }}>
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">راهنمایی تخصصی</h3>
                  <p className="text-sm text-gray-600">از متخصصان قوانین مهاجرتی بریتانیا مشاوره دریافت کنید</p>
                </ScaleIn>
                <ScaleIn delay={0.5} className="bg-white p-5 rounded-lg shadow-md" style={{ direction: 'rtl', textAlign: 'right' }}>
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">پشتیبانی شخصی</h3>
                  <p className="text-sm text-gray-600">یک مشاور اختصاصی در طول فرایند درخواست شما</p>
                </ScaleIn>
              </div>
            </div>
          </div>
        </section>
        
        <div id="contact">
          <ContactForm 
            labels={{
              heading: "با ما در تماس شوید",
              subheading: "چگونه امروز می‌توانیم به شما کمک کنیم؟",
              firstName: "نام",
              lastName: "نام خانوادگی",
              email: "آدرس ایمیل",
              country: "کشور محل اقامت",
              details: "توضیحات بیشتر",
              submit: "ارسال"
            }}
          />
        </div>
      </main>
      
      <Footer 
        logoText="مشاوران کمک ویزای بریتانیا"
        logoTextStyle={{ direction: 'rtl', textAlign: 'right' }}
        tagline="یکی از پیشگامان مشاوره ویزا و اقامت در بریتانیا با تیمی از متخصصان در امور ویزا و درخواست‌های اقامت"
        taglineStyle={{ direction: 'rtl', textAlign: 'right' }}
        quickLinksTitle="لینک‌های سریع"
        quickLinksTitleStyle={{ direction: 'rtl', textAlign: 'right' }}
        quickLinks={[
          { href: "/", label: "انگلیسی" },
          { href: "/bengali", label: "بنگالی" },
          { href: "/urdu", label: "اردو" },
          { href: "/punjabi", label: "پنجابی" },
          { href: "/hindi", label: "هندی" },
          { href: "/farsi", label: "فارسی" },
          { href: "/arabic", label: "عربی" }
        ]}
        servicesTitle="خدمات"
        servicesTitleStyle={{ direction: 'rtl', textAlign: 'right' }}
        serviceLinks={[
          { href: "#services", label: "ویزای خانوادگی" },
          { href: "#services", label: "ویزای کاری" },
          { href: "#services", label: "ویزای تحصیلی" },
          { href: "#services", label: "درخواست‌های اقامت" }
        ]}
        contactTitle="تماس با ما"
        contactTitleStyle={{ direction: 'rtl', textAlign: 'right' }}
        contactInfo={[
          "لندن، بریتانیا",
          "تلفن: 7890 456 123 44+",
          "ایمیل: info@ukvisahelp.com"
        ]}
        copyright="مشاوران کمک ویزای بریتانیا. تمام حقوق محفوظ است."
        copyrightStyle={{ direction: 'rtl', textAlign: 'center' }}
        footerStyle={{ direction: 'rtl', textAlign: 'right' }}
      />
    </div>
  );
}