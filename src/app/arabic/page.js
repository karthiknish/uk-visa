"use client";

import Image from "next/image";
import { FadeIn, ScaleIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ArabicPage() {
  return (
    <div
      className="min-h-screen font-[family-name:var(--font-geist-sans)]"
      dir="rtl"
    >
      <Navigation
        title="مستشارو تأشيرات المملكة المتحدة"
        menuItems={[
          { href: "/arabic", label: "الرئيسية" },
          { href: "/arabic/#services", label: "خدماتنا" },
          { href: "/arabic/#how-we-work", label: "كيف نعمل" },
          { href: "/arabic/free-review?scroll=form", label: "مراجعة مجانية" },
          { href: "/arabic/#contact", label: "اتصل بنا" },
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
                متخصصون في التأشيرات والهجرة إلى المملكة المتحدة
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                استشارات متخصصة لجميع أنواع التأشيرات وطلبات الهجرة إلى المملكة
                المتحدة
              </p>
              <motion.a
                href="#services"
                className="inline-block bg-white text-[#003D6E] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                خدماتنا
              </motion.a>
            </FadeIn>
            <FadeIn direction="left" className="md:w-1/2">
              <div className="bg-white bg-opacity-95 p-8 rounded-lg shadow-lg">
                <ContactForm
                  labels={{
                    heading: "احصل على استشارة مجانية",
                    firstName: "الاسم الأول",
                    lastName: "اسم العائلة",
                    email: "البريد الإلكتروني",
                    phone: "أدخل رقم هاتفك المحمول",
                    country: "في أي بلد أنت متواجد",
                    details: "اشرح بمزيد من التفصيل",
                    submit: "إرسال الطلب",
                    success: "شكراً لك! تم إرسال رسالتك بنجاح.",
                    error: "فشل في إرسال النموذج. يرجى المحاولة مرة أخرى.",
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
        <section className="py-16 container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <FadeIn
              direction="up"
              delay={0.2}
              className="md:w-1/2"
              style={{ direction: "rtl", textAlign: "right" }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#003D6E]">
                نبذة <span className="text-black">عنا</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6 mr-0"></div>
              <p className="mb-4 text-gray-700">
                شركة UK Visa Help Consultants هي إحدى شركات استشارات تأشيرات
                المملكة المتحدة الرائدة، وتضم فريقًا من الاستشاريين المتخصصين في
                طلبات تأشيرات الفيزا للمملكه المتحدة والإقامة. يتألف فريقنا من
                مستشارين وخبراء مدربين تدريبًا خاصًا، ليعطي اهتمامًا بالغًا
                لرعاية العملاء.
              </p>
              <p className="mb-6 text-gray-700">
                تتمتع UK Visa Help Consultants بخبراء في جميع مستويات شؤون
                الهجرة، ونركز على تقديم أفضل مساعدة ممكنة لكم. إذا كنتم تخططون
                للسفر أو الإقامة أو تمديد إقامتكم في المملكة المتحدة، فإن
                مستشارينا على أهبة الاستعداد لمساعدتكم أنتم وعائلتكم من خلال
                خدماتنا الاستشارية المخصصة في مجال الهجرة.
              </p>
              <motion.a
                href="#contact"
                className="inline-block bg-[#003D6E] text-white font-bold py-2 px-6 rounded hover:bg-[#004d8a] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                اتصل بنا
              </motion.a>
            </FadeIn>
            <FadeIn
              direction="up"
              delay={0.4}
              className="md:w-1/2 bg-gray-100 rounded-lg p-8"
              style={{ direction: "rtl", textAlign: "right" }}
            >
              <h2 className="text-2xl font-bold mb-4 text-[#003D6E]">
                لماذا يختار عملاؤنا UK Visa Help Consultants؟
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6 mr-0"></div>
              <div className="mb-4 flex justify-center">
                <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/31946118/pexels-photo-31946118/free-photo-of-bustling-london-city-street-with-historic-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="شارع مدينة لندن التاريخي مع العمارة الجميلة"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                يختار العديد من العملاء UK Visa Help Consultants لتاريخنا الحافل
                بالخدمات الممتازة وسجلنا الحافل بالنجاحات. إلا اننا، نؤمن بأن
                أعظم نقاط قوتنا، وما يميزنا حقًا، هو فريقنا الصغير المتخصص الذي
                يقدم خدمات مخصصه للأفراد حسب حاله كل شخص. نحن نحب عملنا حقًا،
                ويسعد فريقنا بإحداث فرق في حياة عملائنا.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>مستشارين متخصصين</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>خدمة مخصصة</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>معدل نجاح عالي</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>معالجة سريعة</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center mb-12">
              <h2
                className="text-3xl font-bold mb-4 text-[#003D6E]"
                style={{ direction: "rtl", textAlign: "right" }}
              >
                خدماتنا <span className="text-black"></span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p
                className="max-w-2xl mx-auto text-gray-700"
                style={{ direction: "rtl", textAlign: "right" }}
              >
                نقدم مجموعة متكاملة من حلول التأشيرات والهجرة بناءً على احتياجات
                المتقدمين.
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
                    alt="خدمات الأسرة والأفراد"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  الأسرة والأفراد
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>تأشيرة الزوج/ة والخطوبة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>الإقامة الدائمة (ILR)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>وضع الإقامة المستقرة EEA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>طلب جواز سفر بريطاني</span>
                  </li>
                </ul>
              </ScaleIn>

              <ScaleIn
                delay={0.4}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                style={{ direction: "rtl", textAlign: "right" }}
              >
                <div className="w-full h-[120px] relative rounded-md mb-4 overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/5717325/pexels-photo-5717325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="خدمات تأشيرات السفر التجاري والشركات"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  العمل والأعمال
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>تأشيرة العمل</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>العمال المتخصصين/كبار الموظفين</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>تأشيرات العمل</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>تمديد التأشيرة</span>
                  </li>
                </ul>
              </ScaleIn>

              <ScaleIn
                delay={0.6}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                style={{ direction: "rtl", textAlign: "right" }}
              >
                <div className="w-full h-[120px] relative rounded-md mb-4 overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3799832/pexels-photo-3799832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="خدمات تأشيرات الطلاب والخريجين"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  الطلاب والخريجين
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>تأشيرة طالب</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>تأشيرة خريج</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>تأشيرة تابعة للخريجين</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>تأشيرة دراسة قصيرة المدى</span>
                  </li>
                </ul>
              </ScaleIn>
            </div>

            <FadeIn
              direction="up"
              delay={0.2}
              className="bg-white p-6 rounded-lg shadow"
              style={{ direction: "rtl", textAlign: "right" }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#003D6E]">
                خدمات أخرى تشمل:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>وثيقة سفر بريطانية</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>تأشيرات إلكترونية</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>تأشيرة زيارة زواج</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>تأشيرة تابعة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>الطعون والرفض</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>طلب اللجوء</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>طلبات برنامج ARAP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>أفراد عائلة إضافيون</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="how-we-work" className="py-16 container mx-auto px-6">
          <FadeIn direction="up" className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4 text-[#003D6E]"
              style={{ direction: "rtl", textAlign: "right" }}
            >
              طريقة <span className="text-black">عملنا</span>
            </h2>
            <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
            <p
              className="max-w-2xl mx-auto text-gray-700"
              style={{ direction: "rtl", textAlign: "right" }}
            >
              كيف نعمل في ثلاث خطوات بسيطة
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={staggerItem(0.2)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
              style={{ direction: "rtl", textAlign: "right" }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="bg-[#003D6E] text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 text-2xl font-bold absolute -top-8 left-1/2 transform -translate-x-1/2"
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 10 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, duration: 0.5 }}
              >
                ١
              </motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">
                  أرسل بياناتك عبر الإنترنت
                </h3>
                <p className="text-gray-700 text-center">
                  قم بإدخال معلوماتك عبر نموذجنا الإلكتروني
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem(0.4)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
              style={{ direction: "rtl", textAlign: "right" }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="bg-[#003D6E] text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 text-2xl font-bold absolute -top-8 left-1/2 transform -translate-x-1/2"
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
                ٢
              </motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">
                  مراجعة من قبل الخبراء
                </h3>
                <p className="text-gray-700 text-center">
                  سنراجع بياناتك بعناية ونرسلها إلى مستشارينا
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem(0.6)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
              style={{ direction: "rtl", textAlign: "right" }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="bg-[#003D6E] text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 text-2xl font-bold absolute -top-8 left-1/2 transform -translate-x-1/2"
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
                ٣
              </motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">
                  حلول مخصصة
                </h3>
                <p className="text-gray-700 text-center">
                  سيتواصل معك أحد مستشارينا الموصى بهم لتقديم أفضل الحلول
                </p>
              </div>
            </motion.div>
          </StaggerContainer>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <FadeIn
                direction="right"
                className="md:w-1/2"
                style={{ direction: "rtl", textAlign: "right" }}
              >
                <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
                  مراجعة <span className="text-black">مجانية</span>
                </h2>
                <div className="h-1 w-20 bg-[#003D6E] mb-6 mr-0"></div>
                <div className="w-full h-[200px] relative rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="استشارة وتقييم مهني للتأشيرات"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="mb-4 text-gray-700">
                  إذا كانت لديك أي مشكلة متعلقة بالهجرة، يمكنك الحصول على تقييم
                  من أحد خبرائنا. سنزودك بجميع المعلومات التي تحتاجها لاتخاذ
                  القرار الأمثل بشأن قضيتك.
                </p>
                <motion.a
                  href="#contact"
                  className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 mt-4 rounded hover:bg-[#004d8a] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  احصل على مراجعة مجانية
                </motion.a>
              </FadeIn>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <ScaleIn
                  delay={0.2}
                  className="bg-white p-5 rounded-lg shadow-md"
                  style={{ direction: "rtl", textAlign: "right" }}
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
                  <h3 className="font-bold mb-2">نسبة نجاح ٩٩٪</h3>
                  <p className="text-sm text-gray-600">
                    لدينا سجل حافل من طلبات التأشيرات الناجحة
                  </p>
                </ScaleIn>
                <ScaleIn
                  delay={0.3}
                  className="bg-white p-5 rounded-lg shadow-md"
                  style={{ direction: "rtl", textAlign: "right" }}
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">معالجة سريعة</h3>
                  <p className="text-sm text-gray-600">
                    نضمن معالجة طلبك بأسرع وقت ممكن
                  </p>
                </ScaleIn>
                <ScaleIn
                  delay={0.4}
                  className="bg-white p-5 rounded-lg shadow-md"
                  style={{ direction: "rtl", textAlign: "right" }}
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">إرشاد متخصص</h3>
                  <p className="text-sm text-gray-600">
                    احصل على استشارة من خبراء قانون الهجرة البريطاني
                  </p>
                </ScaleIn>
                <ScaleIn
                  delay={0.5}
                  className="bg-white p-5 rounded-lg shadow-md"
                  style={{ direction: "rtl", textAlign: "right" }}
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
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">دعم شخصي</h3>
                  <p className="text-sm text-gray-600">
                    مستشار مخصص خلال عملية تقديم طلبك
                  </p>
                </ScaleIn>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
                تواصل <span className="text-black">معنا</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                كيف يمكننا مساعدتك اليوم؟ تواصل معنا عبر أي من الطرق الموضحة
                أدناه.
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
                <h3 className="font-bold mb-2">الهاتف</h3>
                <a
                  href="tel:02035761165"
                  className="text-gray-600 hover:text-[#003D6E] hover:underline"
                >
                  02035761165
                </a>
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
                <h3 className="font-bold mb-2">البريد الإلكتروني</h3>
                <a
                  href="mailto:info@ukvisahelpconsultants.co.uk"
                  className="text-gray-600 hover:text-[#003D6E] hover:underline"
                >
                  info@ukvisahelpconsultants.co.uk
                </a>
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
                <h3 className="font-bold mb-2">المكتب</h3>
                <p className="text-gray-600">
                  Tower Bridge Business Centre, 46-48 East Smithfield, London
                  E1W 1AW
                </p>
              </motion.div>
            </StaggerContainer>
          </div>
        </section>
      </main>

      <Footer
        logoText="UK Visa Help Consultants"
        logoTextStyle={{ direction: "rtl", textAlign: "right" }}
        tagline="شركة رائدة في مجال استشارات تأشيرات المملكة المتحدة مع فريق من المستشارين المتخصصين في طلبات التأشيرات والإقامة"
        taglineStyle={{ direction: "rtl", textAlign: "right" }}
        quickLinksTitle="روابط سريعة"
        quickLinksTitleStyle={{ direction: "rtl", textAlign: "right" }}
        quickLinks={[
          { href: "/", label: "الإنجليزية" },
          { href: "/bengali", label: "البنغالية" },
          { href: "/urdu", label: "الأردية" },
          { href: "/punjabi", label: "البنجابية" },
          { href: "/hindi", label: "الهندية" },
          { href: "/farsi", label: "الفارسية" },
          { href: "/dari", label: "الدارية" },
          { href: "/arabic", label: "العربية" },
        ]}
        servicesTitle="الخدمات"
        servicesTitleStyle={{ direction: "rtl", textAlign: "right" }}
        serviceLinks={[
          { href: "#services", label: "تأشيرات العائلة" },
          { href: "#services", label: "تأشيرات العمل" },
          { href: "#services", label: "تأشيرات الطلاب" },
          { href: "#services", label: "طلبات الإقامة" },
        ]}
        contactTitle="اتصل بنا"
        contactTitleStyle={{ direction: "rtl", textAlign: "right" }}
        contactInfo={[
          "Tower Bridge Business Centre, 46-48 East Smithfield, London E1W 1AW",
          "هاتف: 02035761165",
          "بريد إلكتروني: info@ukvisahelpconsultants.co.uk",
        ]}
        copyright="UK Visa Help Consultants. جميع الحقوق محفوظة."
        copyrightStyle={{ direction: "rtl", textAlign: "center" }}
        footerStyle={{ direction: "rtl", textAlign: "right" }}
      />
    </div>
  );
}