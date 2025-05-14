"use client";

import Image from "next/image";
import { FadeIn, ScaleIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DariPage() {
  return (
    <div
      className="min-h-screen font-[family-name:var(--font-geist-sans)]"
      dir="rtl"
    >
      <Navigation
        title="مشاوران کمک ویزای بریتانیا"
        titleStyle={{ direction: "rtl", textAlign: "right" }}
        menuItems={[
          { href: "/dari", label: "صفحه اصلی" },
          { href: "/dari/#services", label: "خدمات" },
          { href: "/dari/#how-we-work", label: "روش کار" },
          { href: "/dari/#free-assessment", label: "بررسی رایگان" },
          { href: "/dari/#contact", label: "تماس با ما" },
        ]}
        menuItemStyle={{ direction: "rtl", textAlign: "right" }}
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
            <FadeIn direction="right" className="md:w-1/2 text-right">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                متخصصان ویزا و مهاجرت به بریتانیا
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                مشاوره تخصصی برای انواع ویزا و درخواست‌های اقامت در بریتانیا
              </p>
              <motion.a
                href="#services"
                className="inline-block bg-white text-[#003D6E] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                خدمات ما
              </motion.a>
            </FadeIn>
            <FadeIn direction="left" className="md:w-1/2">
              <div className="bg-white bg-opacity-95 p-8 rounded-lg shadow-lg text-right">
                <ContactForm
                  labels={{
                    heading: "مشاوره رایگان دریافت کنید",
                    firstName: "نام",
                    lastName: "نام خانوادگی",
                    email: "آدرس ایمیل خود را وارد کنید",
                    phone: "شماره موبایل خود را وارد کنید",
                    country: "در کدام کشور هستید",
                    details: "با جزئیات بیشتر توضیح دهید",
                    submit: "ارسال درخواست",
                    success: "تشکر! پیام شما با موفقیت ارسال شد.",
                    error: "خطا در ارسال فورم. لطفاً دوباره تلاش کنید.",
                  }}
                  endpoint="/api/contact"
                  thankYouPage="/thank-you"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <main>
        <section className="py-16 container mx-auto px-6 text-right">
          <div className="flex flex-col md:flex-row gap-12">
            <FadeIn direction="up" delay={0.2} className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[#003D6E]">
                درباره <span className="text-black">ما</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6 ml-auto"></div>
              <p className="mb-4 text-gray-700">
                مشاوران کمک ویزای بریتانیا (UK Visa Help Consultants) یکی از
                پیشگامان عرصهٔ خدمات مشاوره‌ای ویزا و اقامت بریتانیا است. این
                نهاد دارای هیأتی از مشاوران متخصص در امور ویزا و درخواست‌های
                اقامت می‌باشد. تیم ما متشکل از مشاوران آموزش‌دیده، کارشناسان
                مجرب و گروه‌های کارآزمودهٔ روند مهاجرتی هستند که به رضایت و رفاه
                مراجعین توجه خاص دارند.
              </p>
              <p className="mb-6 text-gray-700">
                مشاوران کمک ویزای بریتانیا در تمام سطوح امور مهاجرتی تخصص دارند
                و تمرکز ما بر این است که بهترین خدمات ممکن را به شما ارائه کنیم.
                اگر در نظر دارید به بریتانیا سفر کنید، در بریتانیا اقامت گزینید
                یا مدت اقامت ‌تان را تمدید نمایید، مشاوران ما آماده‌اند تا با
                ارائهٔ مشوره‌های مهاجرتیِ شخصی‌سازی‌شده، به شما و خانواده‌تان
                کمک نمایند.
              </p>
              <motion.a
                href="#contact"
                className="inline-block bg-[#003D6E] text-white font-bold py-2 px-6 rounded hover:bg-[#004d8a] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                تماس با ما
              </motion.a>
            </FadeIn>
            <FadeIn
              direction="up"
              delay={0.4}
              className="md:w-1/2 bg-gray-100 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#003D6E]">
                چرا مشتریان ما را انتخاب می‌کنند؟
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6 ml-auto"></div>
              <div className="mb-4 flex justify-center">
                <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/31946118/pexels-photo-31946118/free-photo-of-bustling-london-city-street-with-historic-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="خیابان شلوغ شهر لندن با معماری تاریخی"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                بسیاری از مشتریان به خاطر سابقهٔ درخشان خدمات و نتایج موفق، ما
                را انتخاب می‌کنند. با این حال، آنچه ما را واقعاً متمایز می‌سازد،
                تیم کوچک اما متعهد ما است که خدماتی کاملاً شخصی‌شده ارائه
                می‌دهد. ما واقعاً به کاری که انجام می‌دهیم علاقه‌مند هستیم و از
                اینکه بتوانیم در زندگی مشتریان خود تفاوت ایجاد کنیم، خرسندیم.
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

        <section id="services" className="py-16 bg-gray-50 text-right">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
                خدمات <span className="text-black">ما</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                ما مجموعهٔ کاملی از خدمات ویزا و مهاجرت را متناسب با نیازهای هر
                متقاضی ارائه می‌نماییم.
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
                    alt="خدمات ویزای شخصی و خانوادگی"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  شخصی و خانوادگی
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>ویزای همسر و نامزدی</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>اقامت دائم (ILR)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>وضعیت سکونت EEA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>درخواست پاسپورت بریتانیا</span>
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
                    alt="خدمات ویزای کار و تجارت"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  کار و تجارت
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>ویزای کاری</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>کارمند ارشد/متخصص</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>ویزاهای تجارتی</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>تمدید ویزا</span>
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
                    alt="خدمات ویزای دانشجویی و فارغ‌التحصیلی"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  دانشجویی و فارغ‌التحصیلی
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>ویزای تحصیلی</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>ویزای فارغ‌التحصیلی</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>ویزای بستگان فارغ‌التحصیل</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>ویزای تحصیلی کوتاه‌مدت</span>
                  </li>
                </ul>
              </ScaleIn>
            </div>

            <FadeIn
              direction="up"
              delay={0.2}
              className="bg-white p-6 rounded-lg shadow text-right"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#003D6E]">
                خدمات دیگر ما شامل:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>سند سفر بریتانیا</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>ویزاهای الکترونیکی</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>ویزای ازدواج (بازدیدکننده)</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>ویزای بستگان</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>استیناف و رد درخواست</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>درخواست پناهندگی</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>درخواست‌های ARAP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] ml-2">•</span>
                    <span>اعضای خانواده</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        <section
          id="how-we-work"
          className="py-16 container mx-auto px-6 text-right"
        >
          <FadeIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
              روش <span className="text-black">کار ما</span>
            </h2>
            <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              شیوهٔ کاری ما در سه مرحلهٔ ساده
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={staggerItem(0.2)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative text-right"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="bg-[#003D6E] text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 text-2xl font-bold absolute -top-8 right-1/2 transform translate-x-1/2"
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 10 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, duration: 0.5 }}
              >
                ۱
              </motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">
                  ثبت معلومات آنلاین
                </h3>
                <p className="text-gray-700 text-center">
                  معلومات خود را به‌صورت آنلاین در فرم ما ثبت کنید
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem(0.4)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative text-right"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="bg-[#003D6E] text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 text-2xl font-bold absolute -top-8 right-1/2 transform translate-x-1/2"
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 10 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  duration: 0.5,
                  delay: 0.2,
                }}
              >
                ۲
              </motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">
                  بررسی متخصص
                </h3>
                <p className="text-gray-700 text-center">
                  معلومات شما به‌دقت بررسی شده و به یکی از مشاوران ما ارجاع
                  می‌شود
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem(0.6)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative text-right"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="bg-[#003D6E] text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 text-2xl font-bold absolute -top-8 right-1/2 transform translate-x-1/2"
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 10 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  duration: 0.5,
                  delay: 0.4,
                }}
              >
                ۳
              </motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">
                  راه حل شخصی
                </h3>
                <p className="text-gray-700 text-center">
                  یکی از مشاوران ما با راه‌حل‌های ممکن با شما تماس خواهد گرفت
                </p>
              </div>
            </motion.div>
          </StaggerContainer>
        </section>

        <section id="free-assessment" className="py-16 bg-gray-50 text-right">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <FadeIn direction="right" className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
                  بررسی <span className="text-black">رایگان</span>
                </h2>
                <div className="h-1 w-20 bg-[#003D6E] mb-6 ml-auto"></div>
                <div className="w-full h-[200px] relative rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="مشاوره و ارزیابی تخصصی ویزا"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="mb-4 text-gray-700">
                  اگر در زمینهٔ مهاجرت با مشکلی مواجه هستید، می‌توانید با یکی از
                  مشاوران حرفه‌ای ما ارزیابی اولیه انجام دهید. ما تمام اطلاعات
                  لازم را در اختیار شما قرار می‌دهیم تا تصمیمی آگاهانه و مناسب
                  بگیرید.
                </p>
                <motion.a
                  href="#contact"
                  className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 mt-4 rounded hover:bg-[#004d8a] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  دریافت بررسی رایگان
                </motion.a>
              </FadeIn>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <ScaleIn
                  delay={0.2}
                  className="bg-white p-5 rounded-lg shadow-md text-right"
                >
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3 mx-auto">
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
                  <h3 className="font-bold mb-2 text-center">۹۹٪ نرخ موفقیت</h3>
                  <p className="text-sm text-gray-600 text-center">
                    ما سابقهٔ موفقیت‌آمیزی در درخواست‌های ویزا داریم
                  </p>
                </ScaleIn>
                <ScaleIn
                  delay={0.3}
                  className="bg-white p-5 rounded-lg shadow-md text-right"
                >
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3 mx-auto">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2 text-center">پردازش سریع</h3>
                  <p className="text-sm text-gray-600 text-center">
                    ما تضمین می‌کنیم که درخواست شما در اسرع وقت پردازش شود
                  </p>
                </ScaleIn>
                <ScaleIn
                  delay={0.4}
                  className="bg-white p-5 rounded-lg shadow-md text-right"
                >
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3 mx-auto">
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2 text-center">راهنمایی تخصصی</h3>
                  <p className="text-sm text-gray-600 text-center">
                    از متخصصان قوانین مهاجرتی بریتانیا مشاوره دریافت کنید
                  </p>
                </ScaleIn>
                <ScaleIn
                  delay={0.5}
                  className="bg-white p-5 rounded-lg shadow-md text-right"
                >
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3 mx-auto">
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
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2 text-center">پشتیبانی شخصی</h3>
                  <p className="text-sm text-gray-600 text-center">
                    یک مشاور اختصاصی در طول فرایند درخواست شما
                  </p>
                </ScaleIn>
              </div>
            </div>

            <FadeIn
              direction="up"
              delay={0.3}
              className="bg-white p-6 rounded-lg shadow text-right mt-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#003D6E]">
                حمایت از شهروندان افغانستان
              </h3>
              <p className="mb-4 text-gray-700">
                ما خدمات مشاوره و کمک در تکمیل درخواست‌ها برای موارد زیر را
                ارائه می‌دهیم:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[#003D6E] ml-2">•</span>
                  <span>برنامه جابجایی و کمک به شهروندان افغانستان (ARAP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#003D6E] ml-2">•</span>
                  <span>ویزای بشردوستانه برازیل</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#003D6E] ml-2">•</span>
                  <span>
                    ویزای ETA پاکستان (برای دارندگان پاسپورت افغانستان و خارجی)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#003D6E] ml-2">•</span>
                  <span>
                    ویزاهای گردشگری (توریستی) و درمانی (مدیکل) ۳ ماهه و ۶ ماهه
                  </span>
                </li>
              </ul>

              <h4 className="text-lg font-semibold mb-3 text-[#003D6E]">
                خدمات فعال ویزای گردشگری (توریستی):
              </h4>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[#003D6E] ml-2">•</span>
                  <span>ایران – ویزای گردشگری(تورستی)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#003D6E] ml-2">•</span>
                  <span>مالزیا – ویزای گردشگری(تورستی)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#003D6E] ml-2">•</span>
                  <span>ویتنام – ویزای گردشگری(تورستی)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#003D6E] ml-2">•</span>
                  <span>مراکش – ویزای گردشگری(تورستی)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#003D6E] ml-2">•</span>
                  <span>
                    امارات متحده عربی (دبی) – ویزای بازدید، تمدید ومشاوره
                  </span>
                </li>
              </ul>

              <h4 className="text-lg font-semibold mb-3 text-[#003D6E]">
                فرصت‌های آموزشی
              </h4>
              <p className="text-gray-700">
                مشاوران ویزای بریتانیا (UK Visa Help Consultants) در حال همکاری
                و گفت‌وگو با دانشگاه‌های بریتانیا، ایالات متحده آمریکا، آلمان،
                فرانسه، اتریش، استرالیا و دیگر کشورها هستند تا مسیرهای قانونی و
                قابل دسترسی برای دانشجویان افغانستان جهت ادامه تحصیل در خارج از
                کشور فراهم سازند.
              </p>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer
        logoText="مشاوران کمک ویزای بریتانیا"
        logoTextStyle={{ direction: "rtl", textAlign: "right" }}
        tagline="یکی از پیشگامان مشاوره ویزا و اقامت در بریتانیا با تیمی از متخصصان در امور ویزا و درخواست‌های اقامت"
        taglineStyle={{ direction: "rtl", textAlign: "right" }}
        quickLinksTitle="لینک‌های سریع"
        quickLinksTitleStyle={{ direction: "rtl", textAlign: "right" }}
        quickLinks={[
          { href: "/", label: "انگلیسی" },
          { href: "/dari", label: "دری" },
          { href: "/pashto", label: "پشتو" },
          { href: "/bengali", label: "بنگالی" },
          { href: "/urdu", label: "اردو" },
          { href: "/punjabi", label: "پنجابی" },
          { href: "/hindi", label: "هندی" },
          { href: "/farsi", label: "فارسی" },
          { href: "/arabic", label: "عربی" },
        ]}
        servicesTitle="خدمات"
        servicesTitleStyle={{ direction: "rtl", textAlign: "right" }}
        serviceLinks={[
          { href: "/dari/#services", label: "ویزاهای خانوادگی" },
          { href: "/dari/#services", label: "ویزاهای کاری" },
          { href: "/dari/#services", label: "ویزاهای تحصیلی" },
          { href: "/dari/#services", label: "درخواست‌های اقامت" },
        ]}
        contactTitle="تماس با ما"
        contactTitleStyle={{ direction: "rtl", textAlign: "right" }}
        contactInfo={[
          "آدرس: پل برج مرکز تجاری، ۴۶-۴۸ ایست اسمیت‌فیلد، لندن E1W 1AW",
          "تلفن: +44 123 456 7890",
          "ایمیل: info@ukvisahelp.com",
        ]}
        copyright="© ۲۰۲۴ مشاوران کمک ویزای بریتانیا. تمام حقوق محفوظ است."
        copyrightStyle={{ direction: "rtl", textAlign: "center" }}
        footerStyle={{ direction: "rtl", textAlign: "right" }}
      />
    </div>
  );
}