"use client";

import Image from "next/image";
import { FadeIn, ScaleIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function HindiPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Head>
        <title>
          यूके वीज़ा हेल्प कंसल्टेंट्स - यूके वीज़ा और इमिग्रेशन विशेषज्ञ
        </title>
        <meta
          name="description"
          content="यूके वीज़ा हेल्प कंसल्टेंट्स सभी प्रकार के यूके वीज़ा और आव्रजन आवेदनों के लिए विशेषज्ञ सलाह और सहायता प्रदान करते हैं। निःशुल्क परामर्श के लिए हमसे संपर्क करें।"
        />
        <meta
          name="keywords"
          content="यूके वीज़ा, आव्रजन, वीज़ा सलाहकार, यूके आव्रजन सेवाएं, मुफ्त वीज़ा परामर्श, यूके वीज़ा मदद"
        />
      </Head>
      <Navigation
        title="यूके वीज़ा हेल्प कंसल्टेंट्स"
        menuItems={[
          { href: "/hindi", label: "होम" },
          { href: "/hindi/#services", label: "सेवाएं" },
          { href: "/hindi/#how-we-work", label: "हम कैसे काम करते हैं" },
          { href: "/hindi/free-review?scroll=form", label: "निःशुल्क समीक्षा" },
          { href: "/hindi/#contact", label: "संपर्क करें" },
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
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <FadeIn direction="right" className="md:w-1/2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
                यूके वीज़ा और इमिग्रेशन विशेषज्ञ
              </h1>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-200">
                सभी प्रकार के यूके वीज़ा और इमिग्रेशन आवेदनों के लिए विशेषज्ञ
                परामर्श
              </p>
              <motion.a
                href="#services"
                className="inline-block bg-white text-[#003D6E] font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                हमारी सेवाएं
              </motion.a>
            </FadeIn>
            <FadeIn direction="left" className="md:w-1/2 w-full">
              <div className="bg-white bg-opacity-95 p-4 md:p-6 rounded-lg shadow-lg">
                <ContactForm
                  labels={{
                    heading: "निःशुल्क परामर्श प्राप्त करें",
                    firstName: "आपका पहला नाम",
                    lastName: "आपका अंतिम नाम",
                    email: "आपका ईमेल पता",
                    phone: "अपना मोबाइल संख्या दर्ज करे",
                    country: "आप किस देश में हैं",
                    details: "अधिक विस्तार से बताएं",
                    submit: "अनुरोध जमा करें",
                    success:
                      "धन्यवाद! आपका संदेश सफलतापूर्वक जमा कर दिया गया है।",
                    error: "फॉर्म जमा करने में विफल। कृपया पुनः प्रयास करें।",
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
            <FadeIn direction="up" delay={0.2} className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[#003D6E]">
                हमारे <span className="text-black">बारे में</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
              <p className="mb-4 text-gray-700">
                यूके वीज़ा हेल्प कंसल्टेंट्स यूनाइटेड किंगडम के आव्रजन और बसने
                के आवेदनों के लिए विशेषज्ञ सलाहकारों की टीम के साथ अग्रणी यूके
                वीज़ा कंसल्टेंसियों में से एक है। हमारी टीम में विशेष रूप से
                प्रशिक्षित सलाहकार, परामर्शदाता और अनुभवी प्रोसेसिंग टीमें शामिल
                हैं जो ग्राहक देखभाल पर जोर देती हैं।
              </p>
              <p className="mb-6 text-gray-700">
                यूके वीज़ा हेल्प कंसल्टेंट्स को आव्रजन के हर स्तर पर विशेषज्ञता
                है और हमारा फोकस आपको सर्वोत्तम सहायता प्रदान करने पर है। यदि आप
                यूके में यात्रा करने, रहने या अपने प्रवास का विस्तार करने की
                योजना बना रहे हैं, तो हमारे विशेषज्ञ सलाहकार आपकी और आपके परिवार
                की मदद के लिए तैयार हैं।
              </p>
              <motion.a
                href="#contact"
                className="inline-block bg-[#003D6E] text-white font-bold py-2 px-6 rounded hover:bg-[#004d8a] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                संपर्क करें
              </motion.a>
            </FadeIn>
            <FadeIn
              direction="up"
              delay={0.4}
              className="md:w-1/2 bg-gray-100 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#003D6E]">
                ग्राहक हमें क्यों चुनते हैं?
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
              <div className="mb-4 flex justify-center">
                <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/31946118/pexels-photo-31946118/free-photo-of-bustling-london-city-street-with-historic-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="ऐतिहासिक वास्तुकला के साथ लंदन शहर की सड़क"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                कई ग्राहक हमारी उत्कृष्ट सेवा और सफलता के इतिहास के कारण हमें
                चुनते हैं। हालांकि, हम मानते हैं कि हमारी सबसे बड़ी ताकत और जो
                हमें अद्वितीय बनाती है, वह है हमारी छोटी लेकिन समर्पित टीम जो
                व्यक्तिगत सेवा प्रदान करती है। हम अपने काम से प्यार करते हैं और
                हमारी टीम ग्राहकों के जीवन में बदलाव लाने में आनंद लेती है।
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>विशेषज्ञ सलाहकार</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>व्यक्तिगत सेवा</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>उच्च सफलता दर</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>तेज़ प्रक्रिया</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
                हमारी <span className="text-black">सेवाएं</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                हम आवेदकों की आवश्यकताओं के अनुसार वीज़ा और आव्रजन समाधानों का
                एक पूरा सेट प्रदान करते हैं।
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
                    alt="व्यक्तिगत और पारिवारिक वीज़ा सेवाएं"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  व्यक्तिगत और पारिवारिक
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>पति/पत्नी और मंगनी वीज़ा</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>अनिश्चितकालीन रहने की अनुमति (ILR)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>EEA सेटल्ड स्टेटस</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ब्रिटिश पासपोर्ट आवेदन</span>
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
                    alt="व्यावसायिक यात्रा और कॉर्पोरेट वीज़ा सेवाएं"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  कार्य और व्यापार
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>कार्य वीज़ा</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>वरिष्ठ/विशेषज्ञ कर्मचारी</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>व्यापार वीज़ा</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>वीज़ा विस्तार</span>
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
                    alt="छात्र और स्नातक वीज़ा सेवाएं"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  छात्र और स्नातक
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>छात्र वीज़ा</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>स्नातक वीज़ा</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>स्नातक आश्रित वीज़ा</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>अल्पकालिक अध्ययन वीज़ा</span>
                  </li>
                </ul>
              </ScaleIn>
            </div>

            <FadeIn
              direction="up"
              delay={0.2}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#003D6E]">
                अन्य सेवाओं में शामिल हैं:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>यूके यात्रा दस्तावेज़</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ई-वीज़ा</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>विवाह आगंतुक वीज़ा</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>आश्रित वीज़ा</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>अपील और अस्वीकृति</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>शरणार्थी आवेदन</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ARAP योजना आवेदन</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>अतिरिक्त परिवार के सदस्य</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="how-we-work" className="py-16 container mx-auto px-6">
          <FadeIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
              हमारी <span className="text-black">कार्यप्रणाली</span>
            </h2>
            <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              हमारी सरल प्रक्रिया - केवल 3 आसान चरण
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                1
              </motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">
                  ऑनलाइन विवरण भरें
                </h3>
                <p className="text-gray-700 text-center">
                  अपनी जानकारी हमारे ऑनलाइन फॉर्म में भरें
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem(0.4)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
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
                2
              </motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">
                  विशेषज्ञ समीक्षा
                </h3>
                <p className="text-gray-700 text-center">
                  हम आपकी जानकारी की ध्यानपूर्वक समीक्षा करेंगे और अपने किसी
                  विशेषज्ञ को भेजेंगे
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem(0.6)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
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
                3
              </motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">
                  व्यक्तिगत समाधान
                </h3>
                <p className="text-gray-700 text-center">
                  हमारे अनुशंसित परामर्शदाता द्वारा आपको सर्वोत्तम समाधान दिया
                  जाएगा
                </p>
              </div>
            </motion.div>
          </StaggerContainer>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <FadeIn direction="right" className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
                  निःशुल्क <span className="text-black">समीक्षा</span>
                </h2>
                <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
                <div className="w-full h-[200px] relative rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="पेशेवर वीज़ा परामर्श और मूल्यांकन"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="mb-4 text-gray-700">
                  यदि आपके पास कोई आव्रजन संबंधी समस्या है, तो आप हमारे विशेषज्ञ
                  के साथ एक मुफ्त मूल्यांकन करा सकते हैं। हम आपको अपने मामले के
                  बारे में सही निर्णय लेने के लिए सभी आवश्यक जानकारी प्रदान
                  करेंगे।
                </p>
                <motion.a
                  href="#contact"
                  className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 mt-4 rounded hover:bg-[#004d8a] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  मुफ्त समीक्षा प्राप्त करें
                </motion.a>
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
                  <h3 className="font-bold mb-2">99% सफलता दर</h3>
                  <p className="text-sm text-gray-600">
                    हमारे पास सफल वीज़ा आवेदनों का एक सिद्ध ट्रैक रिकॉर्ड है
                  </p>
                </ScaleIn>
                <ScaleIn
                  delay={0.3}
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">तेज़ प्रोसेसिंग</h3>
                  <p className="text-sm text-gray-600">
                    हम आपके आवेदन को जल्द से जल्द प्रोसेस करने की गारंटी देते
                    हैं
                  </p>
                </ScaleIn>
                <ScaleIn
                  delay={0.4}
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">विशेषज्ञ मार्गदर्शन</h3>
                  <p className="text-sm text-gray-600">
                    यूके आव्रजन कानून के विशेषज्ञों से सलाह प्राप्त करें
                  </p>
                </ScaleIn>
                <ScaleIn
                  delay={0.5}
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
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">व्यक्तिगत सहायता</h3>
                  <p className="text-sm text-gray-600">
                    आपके आवेदन प्रक्रिया के दौरान एक समर्पित विशेषज्ञ
                  </p>
                </ScaleIn>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <FadeIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
              हमसे <span className="text-black">संपर्क करें</span>
            </h2>
            <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              आज हम आपकी कैसे मदद कर सकते हैं? नीचे दिए गए किसी भी तरीके से हमसे
              संपर्क करें।
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
              <h3 className="font-bold mb-2">फ़ोन</h3>
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
              <h3 className="font-bold mb-2">ईमेल</h3>
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
              <h3 className="font-bold mb-2">कार्यालय</h3>
              <p className="text-gray-600">
                Tower Bridge Business Centre, 46-48 East Smithfield, London E1W
                1AW
              </p>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>

      <Footer
        logoText="यूके वीज़ा हेल्प कंसल्टेंट्स"
        logoTextStyle={{ direction: "ltr" }}
        tagline="यूके में वीज़ा और बसने के आवेदनों के लिए विशेषज्ञ सलाहकारों के पैनल के साथ अग्रणी यूके वीज़ा कंसल्टेंसी।"
        taglineStyle={{ direction: "ltr" }}
        quickLinksTitle="त्वरित लिंक"
        quickLinksTitleStyle={{ direction: "ltr" }}
        quickLinks={[
          { href: "/", label: "इंग्लिश" },
          { href: "/bengali", label: "बंगाली" },
          { href: "/urdu", label: "उर्दू" },
          { href: "/punjabi", label: "पंजाबी" },
          { href: "/farsi", label: "फारसी" },
          { href: "/dari", label: "दरी" },
          { href: "/arabic", label: "अरबी" },
        ]}
        servicesTitle="सेवाएं"
        servicesTitleStyle={{ direction: "ltr" }}
        serviceLinks={[
          { href: "#services", label: "पारिवारिक वीज़ा" },
          { href: "#services", label: "कार्य वीज़ा" },
          { href: "#services", label: "छात्र वीज़ा" },
          { href: "#services", label: "बसने के आवेदन" },
        ]}
        contactTitle="संपर्क करें"
        contactTitleStyle={{ direction: "ltr" }}
        contactInfo={[
          "Tower Bridge Business Centre, 46-48 East Smithfield, London E1W 1AW",
          "फोन: 02035761165",
          "ईमेल: info@ukvisahelpconsultants.co.uk",
        ]}
        copyright="यूके वीज़ा हेल्प कंसल्टेंट्स। सर्वाधिकार सुरक्षित।"
        copyrightStyle={{ direction: "ltr" }}
      />
    </div>
  );
}