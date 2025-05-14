"use client";

import Image from "next/image";
import {
  FadeIn,
  ScaleIn,
  StaggerContainer,
  staggerItem,
} from "@/components/animations";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function PashtoPage() {
  return (
    <div
      className="min-h-screen font-[family-name:var(--font-geist-sans)]"
      dir="rtl"
      lang="ps"
    >
      <Navigation
        title="د برېتانیا ویزې مرستې"
        menuItems={[
          { href: "/pashto", label: "کورپاڼه" },
          { href: "/pashto/#services", label: "خدمتونه" },
          { href: "/pashto/#how-we-work", label: "موږ څنګه کار کوو" },
          { href: "/pashto/free-review?scroll=form", label: "وړیا کتنه" },
          { href: "/pashto/#contact", label: "اړیکه" },
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
            <FadeIn
              direction="right"
              className="md:w-1/2 text-center md:text-right"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                د برېتانیا ویزې او مهاجرت متخصصین
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                د برېتانیا د هر ډول ویزو او مهاجرت غوښتنلیکونو لپاره مسلکي مشوره
              </p>
              <motion.a
                href="#services"
                className="inline-block bg-white text-[#003D6E] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                زموږ خدمتونه
              </motion.a>
            </FadeIn>
            <FadeIn direction="left" className="md:w-1/2">
              <div className="bg-white bg-opacity-95 p-6 md:p-8 rounded-lg shadow-lg">
                <ContactForm
                  labels={{
                    heading: "وړیا مشوره ترلاسه کړئ",
                    firstName: "نوم",
                    lastName: "تخلص",
                    email: "د برېښنالیک پته",
                    phone: "د موبایل شمېره",
                    country: "د استوګنې هېواد",
                    details: "نور توضیحات",
                    submit: "استول",
                    success: "مننه! ستاسو پیغام په بریالیتوب سره استول شوی دی.",
                    error:
                      "د فورم په استولو کې ناکامي وشوه. مهرباني وکړئ بیا هڅه وکړئ.",
                  }}
                  endpoint="/api/contact"
                  thankYouPage="/pashto/thank-you"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <main>
        <section className="py-12 md:py-16 container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <FadeIn direction="up" delay={0.2} className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[#003D6E]">
                زموږ <span className="text-black">په اړه</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
              <p className="mb-4 text-gray-700">
                د برېتانیا ویزې مرستې مشاورین د ویزې او استوګنې مشورې خدماتو په
                برخه کې یو له مخکښو ادارو څخه دي. دا اداره د ویزې او استوګنې
                چارو کې د متخصصو مشاورینو یوه ډله لري.
              </p>
              <p className="mb-6 text-gray-700">
                موږ د مهاجرتي چارو په ټولو برخو کې تخصص لرو او موخه مو دا ده چې
                تاسو ته غوره ممکنه خدمات وړاندې کړو. زموږ ټیم ژمن دی چې تاسو سره
                ستاسو د ویزې په سفر کې مرسته وکړي.
              </p>
              <motion.a
                href="#contact"
                className="inline-block bg-[#003D6E] text-white font-bold py-2 px-6 rounded hover:bg-[#004d8a] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                له موږ سره اړیکه
              </motion.a>
            </FadeIn>
            <FadeIn
              direction="up"
              delay={0.4}
              className="md:w-1/2 bg-gray-100 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#003D6E] text-center md:text-right">
                پیرودونکي موږ ولې غوره کوي؟
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6 mx-auto md:mx-0"></div>
              <div className="mb-4 flex justify-center">
                <div className="w-full h-[250px] md:h-[300px] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="زموږ ټیم په کار بوخت دی"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <p className="mb-4 text-gray-700 text-center md:text-right">
                پښتو متن دلته ولیکئ: زموږ د پیرودونکو رضایت زموږ لومړیتوب دی.
                موږ شخصي پاملرنه او د متخصصینو مشوره وړاندې کوو.
              </p>
            </FadeIn>
          </div>
        </section>

        <section id="services" className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
                زموږ <span className="text-black">خدمتونه</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                پښتو متن دلته ولیکئ: موږ د غوښتونکو اړتیاوو سره سم د ویزې او
                مهاجرت بشپړ حلونه وړاندې کوو.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <ScaleIn
                delay={0.2}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-right"
              >
                <div className="w-full h-[150px] relative rounded-md mb-4 overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1914982/pexels-photo-1914982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="شخصي او کورنۍ ویزې"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  شخصي او کورنۍ
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start justify-end">
                    <span className="ml-2 text-[#003D6E]"> •</span>
                    <span>د میړه یا مېرمنې ویزه</span>
                  </li>
                  <li className="flex items-start justify-end">
                    <span className="ml-2 text-[#003D6E]"> •</span>
                    <span>د نامزدي ویزه</span>
                  </li>
                  <li className="flex items-start justify-end">
                    <span className="ml-2 text-[#003D6E]"> •</span>
                    <span>دایمي استوګنه</span>
                  </li>
                  <li className="flex items-start justify-end">
                    <span className="ml-2 text-[#003D6E]"> •</span>
                    <span>د برېتانیا پاسپورټ غوښتنه</span>
                  </li>
                </ul>
              </ScaleIn>
              <ScaleIn
                delay={0.4}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-right"
              >
                <div className="w-full h-[150px] relative rounded-md mb-4 overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/5717325/pexels-photo-5717325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="کار او سوداګري ویزې"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  کار او سوداګري
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start justify-end">
                    <span className="ml-2 text-[#003D6E]"> •</span>
                    <span>د کار ویزه</span>
                  </li>
                  <li className="flex items-start justify-end">
                    <span className="ml-2 text-[#003D6E]"> •</span>
                    <span>د ماهرو کارګرانو ویزه</span>
                  </li>
                  <li className="flex items-start justify-end">
                    <span className="ml-2 text-[#003D6E]"> •</span>
                    <span>تجارتي ویزې</span>
                  </li>
                  <li className="flex items-start justify-end">
                    <span className="ml-2 text-[#003D6E]"> •</span>
                    <span>د ویزې غځول</span>
                  </li>
                </ul>
              </ScaleIn>
              <ScaleIn
                delay={0.6}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-right"
              >
                <div className="w-full h-[150px] relative rounded-md mb-4 overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3799832/pexels-photo-3799832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="زده‌کړې او فراغت ویزې"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  زده‌کړې او فراغت
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start justify-end">
                    <span className="ml-2 text-[#003D6E]"> •</span>
                    <span>د زده‌کړې ویزه</span>
                  </li>
                  <li className="flex items-start justify-end">
                    <span className="ml-2 text-[#003D6E]"> •</span>
                    <span>د فارغ‌التحصیلۍ ویزه</span>
                  </li>
                  <li className="flex items-start justify-end">
                    <span className="ml-2 text-[#003D6E]"> •</span>
                    <span>د فارغ‌التحصیلۍ پورې تړلې ویزه</span>
                  </li>
                  <li className="flex items-start justify-end">
                    <span className="ml-2 text-[#003D6E]"> •</span>
                    <span>د سفر سند</span>
                  </li>
                </ul>
              </ScaleIn>
            </div>
          </div>
        </section>

        <section
          id="how-we-work"
          className="py-12 md:py-16 container mx-auto px-6"
        >
          <FadeIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
              موږ <span className="text-black">څنګه کار کوو</span>
            </h2>
            <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              پښتو متن دلته ولیکئ: زموږ د کار پروسه ساده او روښانه ده، ترڅو تاسو
              ته غوره پایلې وړاندې کړو.
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              variants={staggerItem(0.2)}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-4xl text-[#003D6E] mb-4">۱</div>
              <h3 className="text-xl font-bold mb-2">لومړی ګام: وړیا کتنه</h3>
              <p className="text-gray-600">
                پښتو متن دلته ولیکئ: موږ ستاسو قضیه په تفصیل سره څیړو.
              </p>
            </motion.div>
            <motion.div
              variants={staggerItem(0.4)}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-4xl text-[#003D6E] mb-4">۲</div>
              <h3 className="text-xl font-bold mb-2">
                دوهم ګام: د اسنادو چمتو کول
              </h3>
              <p className="text-gray-600">
                پښتو متن دلته ولیکئ: موږ تاسو سره د اړینو اسنادو په راټولولو کې
                مرسته کوو.
              </p>
            </motion.div>
            <motion.div
              variants={staggerItem(0.6)}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-4xl text-[#003D6E] mb-4">۳</div>
              <h3 className="text-xl font-bold mb-2">
                دریم ګام: د غوښتنلیک سپارل
              </h3>
              <p className="text-gray-600">
                پښتو متن دلته ولیکئ: موږ ستاسو غوښتنلیک په دقت سره سپارو.
              </p>
            </motion.div>
          </StaggerContainer>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-6 text-right">
            <FadeIn direction="up" className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E] text-center">
                د <span className="text-black">افغان وګړو لپاره ملاتړ</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-gray-700 text-center">
                موږ د لاندې پروګرامونو لپاره د غوښتنلیکونو ډکولو کې مرسته او
                مشوره وړاندې کوو:
              </p>
            </FadeIn>
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-3 text-gray-700 list-disc list-inside">
                <li>د افغانستان د وګړو د انتقال او مرستې پروګرام (ARAP)</li>
                <li>د برازیل بشردوستانه وېزه</li>
                <li>د پاکستان ETA وېزه (د افغان او بهرنیو پاسپورټونو لپاره)</li>
                <li>درې میاشتنۍ او شپږ میاشتنۍ سیاحتي او درملنیزې وېزې</li>
                <li>
                  فعال سیاحتي ویزې خدمتونه:
                  <ul className="mr-5 mt-1 space-y-1 list-[arabic-indic] list-inside">
                    <li>ایران – سیاحتي ویزه</li>
                    <li>مالیزیا – سیاحتي ویزه او راجستریشن</li>
                    <li>ویتنام – سیاحتي ویزه</li>
                    <li>مراکش – سیاحتي ویزه</li>
                    <li>
                      متحده عربي امارات (دوبۍ) – د لیدنې ویزه، غځول، او لارښوونه
                    </li>
                  </ul>
                </li>
              </ul>
              <h4 className="text-xl font-semibold mt-6 mb-2 text-[#003D6E]">
                تعلیمي فرصتونه
              </h4>
              <p className="text-gray-700">
                پښتو متن دلته ولیکئ: د برتانیا ویزې مرستې مشاورین په فعاله توګه
                د برتانیا، امریکا، جرمني، فرانسې، اتریش، استرالیا او نورو
                هیوادونو له پوهنتونونو سره په خبرو بوخت دي ترڅو د افغان محصلینو
                لپاره چې په بهر کې لوړو زده کړو ته لیواله دي، قانوني او اسانه
                لارې رامنځته کړي.
              </p>
            </div>
          </div>
        </section>

        <section id="free-assessment" className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
                وړیا <span className="text-black">ارزونه ترلاسه کړئ</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                پښتو متن دلته ولیکئ: که تاسو د مهاجرت اړوند وضعیت لرئ، تاسو کولی
                شئ زموږ له مسلکي سره ارزونه وکړئ. موږ به تاسو ته ټول هغه معلومات
                درکړو چې تاسو ورته اړتیا لرئ ترڅو ستاسو د قضیې په اړه غوره
                پریکړه وکړئ.
              </p>
            </FadeIn>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <FadeIn direction="right" className="md:w-1/2">
                <div className="w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="وړیا ارزونې لپاره ټیم"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="left" className="md:w-1/2 text-right">
                <p className="mb-4 text-gray-700">
                  پښتو متن دلته ولیکئ: زموږ متخصصین چمتو دي چې ستاسو پوښتنو ته
                  ځواب ووایي او تاسو ته د ویزې پروسې له لارې لارښوونه وکړي.
                </p>
                <a
                  href="/pashto/#contact"
                  className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 mt-4 rounded hover:bg-[#004d8a] transition-colors"
                >
                  وړیا ارزونه ترلاسه کړئ
                </a>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <section id="contact" className="py-16 text-right">
        <div className="container mx-auto px-6">
          <FadeIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
              له موږ سره <span className="text-black">اړیکه ونیسئ</span>
            </h2>
            <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              نن موږ څنګه مرسته کولی شو؟ لاندې هرې لارې له موږ سره اړیکه ونیسئ.
            </p>
          </FadeIn>

          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={staggerItem(0.2)}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">تلیفون</h3>
              <p className="text-gray-600">02035761165</p>
            </motion.div>

            <motion.div
              variants={staggerItem(0.4)}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">بریښنالیک</h3>
              <p className="text-gray-600">info@ukvisahelpconsultants.co.uk</p>
            </motion.div>

            <motion.div
              variants={staggerItem(0.6)}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">دفتر</h3>
              <p className="text-gray-600">
                Tower Bridge Business Centre, 46-48 East Smithfield, London E1W
                1AW
              </p>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>

      <Footer
        title="د برېتانیا ویزې مرستې"
        footerStyle={{ direction: "rtl" }}
      />
    </div>
  );
}
