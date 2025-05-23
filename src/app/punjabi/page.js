"use client";

import Image from "next/image";
import { FadeIn, ScaleIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function PunjabiPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Head>
        <title>
          ਯੂਕੇ ਵੀਜ਼ਾ ਹੈਲਪ ਕੰਸਲਟੈਂਟਸ - ਯੂਕੇ ਵੀਜ਼ਾ ਅਤੇ ਇਮੀਗ੍ਰੇਸ਼ਨ ਮਾਹਿਰ
        </title>
        <meta
          name="description"
          content="ਯੂਕੇ ਵੀਜ਼ਾ ਹੈਲਪ ਕੰਸਲਟੈਂਟਸ ਹਰ ਕਿਸਮ ਦੇ ਯੂਕੇ ਵੀਜ਼ਾ ਅਤੇ ਇਮੀਗ੍ਰੇਸ਼ਨ ਅਰਜ਼ੀਆਂ ਲਈ ਮਾਹਰ ਸਲਾਹ ਅਤੇ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਨ। ਮੁਫ਼ਤ ਸਲਾਹ ਲਈ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।"
        />
        <meta
          name="keywords"
          content="ਯੂਕੇ ਵੀਜ਼ਾ, ਇਮੀਗ੍ਰੇਸ਼ਨ, ਵੀਜ਼ਾ ਸਲਾਹਕਾਰ, ਯੂਕੇ ਇਮੀਗ੍ਰੇਸ਼ਨ ਸੇਵਾਵਾਂ, ਮੁਫ਼ਤ ਵੀਜ਼ਾ ਸਲਾਹ, ਯੂਕੇ ਵੀਜ਼ਾ ਮਦਦ"
        />
      </Head>
      <Navigation
        title="ਯੂਕੇ ਵੀਜ਼ਾ ਹੈਲਪ ਕੰਸਲਟੈਂਟਸ"
        menuItems={[
          { href: "#services", label: "ਸੇਵਾਵਾਂ" },
          { href: "#how-we-work", label: "ਅਸੀਂ ਕਿਵੇਂ ਕੰਮ ਕਰਦੇ ਹਾਂ" },
          { href: "#contact", label: "ਸੰਪਰਕ" },
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
                ਯੂਕੇ ਵੀਜ਼ਾ ਅਤੇ ਇਮੀਗ੍ਰੇਸ਼ਨ ਮਾਹਿਰ
              </h1>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-200">
                ਸਾਰੇ ਪ੍ਰਕਾਰ ਦੇ ਯੂਕੇ ਵੀਜ਼ਾ ਅਤੇ ਇਮੀਗ੍ਰੇਸ਼ਨ ਅਰਜ਼ੀਆਂ ਲਈ ਮਾਹਿਰ ਸਲਾਹ
              </p>
              <motion.a
                href="#services"
                className="inline-block bg-white text-[#003D6E] font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ
              </motion.a>
            </FadeIn>
            <FadeIn direction="left" className="md:w-1/2 w-full">
              <div className="bg-white bg-opacity-95 p-4 md:p-6 rounded-lg shadow-lg">
                <ContactForm
                  labels={{
                    heading: "ਮੁਫ਼ਤ ਸਲਾਹ ਪ੍ਰਾਪਤ ਕਰੋ",
                    subheading:
                      "ਅਸੀਂ ਅੱਜ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦੇ ਹਾਂ? ਹੇਠਾਂ ਦਿੱਤਾ ਫਾਰਮ ਭਰੋ ਅਤੇ ਸਾਡਾ ਕੋਈ ਮਾਹਿਰ ਜਲਦੀ ਹੀ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੇਗਾ।",
                    firstName: "ਤੁਹਾਡਾ ਪਹਿਲਾਂ ਨਾਂ",
                    lastName: "ਤੁਹਾਡਾ ਆਖਰੀ ਨਾਮ",
                    email: "ਆਪਣਾ ਈਮੇਲ ਪਤਾ ਦਰਜ ਕਰੋ",
                    phone: "ਆਪਣਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ",
                    country: "ਤੁਸੀਂ ਕਿਸ ਦੇਸ਼ ਵਿੱਚ ਹੋ",
                    details: "ਵਧੇਰੇ ਵੇਰਵੇ ਨਾਲ ਦੱਸੋ",
                    submit: "ਬੇਨਤੀ ਭੇਜੋ",
                    success:
                      "ਧੰਨਵਾਦ! ਤੁਹਾਡੀ ਬੇਨਤੀ ਸਫਲਤਾਪੂਰਵਕ ਜਮ੍ਹਾਂ ਕਰ ਦਿੱਤੀ ਗਈ ਹੈ।",
                    error:
                      "ਫਾਰਮ ਜਮ੍ਹਾਂ ਕਰਨ ਵਿੱਚ ਅਸਫਲ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
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
                ਸਾਡੇ <span className="text-black">ਬਾਰੇ</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
              <p className="mb-4 text-gray-700">
                UK Visa Help Consultants ਯੂਕੇ ਵਿੱਚ ਵੀਜ਼ਾ ਅਤੇ ਸੈਟਲਮੈਂਟ ਅਰਜ਼ੀਆਂ ਲਈ
                ਮਾਹਰ ਸਲਾਹਕਾਰਾਂ ਦੇ ਪੈਨਲ ਨਾਲ ਇੱਕ ਪ੍ਰਮੁੱਖ ਯੂਕੇ ਵੀਜ਼ਾ ਕੰਸਲਟੈਂਸੀ ਹੈ।
                ਟੀਮ ਵਿੱਚ ਵਿਸ਼ੇਸ਼ ਤੌਰ &apos;ਤੇ ਪ੍ਰਸ਼ਿਕ੍਷ਤ ਸਲਾਹਕਾਰ, ਕਨਸਲਟੈਂਟ ਅਤੇ
                ਅਨੁਭਵੀ ਪ੍ਰੋਸੈਸਿੰਗ ਟੀਮਾਂ ਸ਼ਾਮਲ ਹਨ ਜੋ ਗ੍ਰਾਹਕ ਦੀ ਦੇਖਭਾਲ &apos;ਤੇ
                ਜੋਰ ਦਿੰਦੀਆਂ ਹਨ।
              </p>
              <p className="mb-6 text-gray-700">
                UK Visa Help Consultants ਨੂੰ ਇਮੀਗ੍ਰੇਸ਼ਨ ਦੇ ਹਰ ਪੱਧਰ &apos;ਤੇ
                ਮਹਾਰਤ ਹਾਸਲ ਹੈ ਅਤੇ ਸਾਡਾ ਧਿਆਨ ਤੁਹਾਨੂੰ ਸਭ ਤੋਂ ਵਧੀਆ ਮਦਦ ਪ੍ਰਦਾਨ ਕਰਨ
                &apos;ਤੇ ਹੈ। ਜੇ ਤੁਸੀਂ ਯੂਕੇ ਯਾਤਰਾ ਕਰਨ, ਰਹਿਣ ਜਾਂ ਆਪਣੇ ਰਹਿਣ ਦੀ ਮਿਆਦ
                ਵਧਾਉਣ ਦੀ ਯੋਜਨਾ ਬਣਾ ਰਹੇ ਹੋ, ਤਾਂ ਸਾਡੇ ਮਾਹਰ ਸਲਾਹਕਾਰ ਤੁਹਾਡੇ ਅਤੇ
                ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਦੀ ਮਦਦ ਕਰਨ ਲਈ ਹਮੇਸ਼ਾਂ ਤਿਆਰ ਹਨ।
              </p>
              <motion.a
                href="#contact"
                className="inline-block bg-[#003D6E] text-white font-bold py-2 px-6 rounded hover:bg-[#004d8a] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ਸੰਪਰਕ ਕਰੋ
              </motion.a>
            </FadeIn>
            <FadeIn
              direction="up"
              delay={0.4}
              className="md:w-1/2 bg-gray-100 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#003D6E]">
                ਕਿਉਂ ਗ੍ਰਾਹਕ UK Visa Help Consultants ਨੂੰ ਚੁਣਦੇ ਹਨ?
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
              <div className="mb-4 flex justify-center">
                <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/31946118/pexels-photo-31946118/free-photo-of-bustling-london-city-street-with-historic-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="ਲੰਡਨ ਦੀ ਇਤਿਹਾਸਕ ਆਰਕੀਟੈਕਚਰ"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                ਕਈ ਗ੍ਰਾਹਕ ਸਾਡੀ ਸ਼ਾਨਦਾਰ ਸੇਵਾ ਅਤੇ ਕਾਮਯਾਬੀ ਦੇ ਇਤਿਹਾਸ ਕਾਰਨ ਸਾਨੂੰ
                ਚੁਣਦੇ ਹਨ। ਹਾਲਾਂਕਿ, ਸਾਡੀ ਸਭ ਤੋਂ ਵੱਡੀ ਤਾਕਤ ਅਤੇ ਜੋ ਸਾਨੂੰ ਵਿਲੱਖਣ
                ਬਣਾਉਂਦਾ ਹੈ, ਉਹ ਹੈ ਸਾਡੀ ਛੋਟੀ ਪਰ ਸਮਰਪਿਤ ਟੀਮ ਜੋ ਵਿਅਕਤੀਗਤ ਸੇਵਾ ਦਿੰਦੀ
                ਹੈ। ਅਸੀਂ ਜੋ ਕਰਦੇ ਹਾਂ ਉਹ ਸੱਚਮੁੱਚ ਪਸੰਦ ਕਰਦੇ ਹਾਂ ਅਤੇ ਸਾਡੀ ਟੀਮ
                ਗ੍ਰਾਹਕਾਂ ਦੀ ਜ਼ਿੰਦਗੀ ਵਿੱਚ ਫਰਕ ਪਾਉਣ ਨੂੰ ਲੈ ਕੇ ਉਤਸ਼ਾਹਿਤ ਹੈ।
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>ਮਾਹਰ ਸਲਾਹਕਾਰ</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>ਵਿਅਕਤੀਗਤ ਸੇਵਾ</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>ਉੱਚ ਸਫਲਤਾ ਦਰ</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>ਤੇਜ਼ ਪ੍ਰੋਸੈਸਿੰਗ</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
                ਸਾਡੀਆਂ <span className="text-black">ਸੇਵਾਵਾਂ</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                ਅਸੀਂ ਅਰਜ਼ੀਕਾਰਾਂ ਦੀ ਲੋੜ ਅਨੁਸਾਰ ਪੂਰਾ ਵੀਜ਼ਾ ਅਤੇ ਇਮੀਗ੍ਰੇਸ਼ਨ ਹੱਲ
                ਦਿੰਦੇ ਹਾਂ।
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
                    alt="ਨਿੱਜੀ ਅਤੇ ਪਰਿਵਾਰਕ ਵੀਜ਼ਾ ਸੇਵਾਵਾਂ"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  ਨਿੱਜੀ ਅਤੇ ਪਰਿਵਾਰਕ
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਜੀਵਨ ਸਾਥੀ ਅਤੇ ਮੰਗਣੀ ਵੀਜ਼ਾ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਅਣਸ਼ਰਤ ਰਹਿਣ ਦੀ ਇਜਾਜ਼ਤ (ILR)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>EEA ਸੈਟਲਡ ਸਟੇਟਸ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਬ੍ਰਿਟਿਸ਼ ਪਾਸਪੋਰਟ ਅਰਜ਼ੀਆਂ</span>
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
                    alt="ਕੰਮ ਅਤੇ ਕਾਰੋਬਾਰ ਵੀਜ਼ਾ ਸੇਵਾਵਾਂ"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  ਕੰਮ ਅਤੇ ਕਾਰੋਬਾਰ
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਕੰਮ ਵੀਜ਼ਾ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਸੀਨੀਅਰ/ਵਿਸ਼ੇਸ਼ ਕਾਮੇ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਕਾਰੋਬਾਰੀ ਵੀਜ਼ੇ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਵੀਜ਼ਾ ਵਾਧਾ</span>
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
                    alt="ਵਿਦਿਆਰਥੀ ਅਤੇ ਗ੍ਰੈਜੂਏਟ ਵੀਜ਼ਾ ਸੇਵਾਵਾਂ"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  ਵਿਦਿਆਰਥੀ ਅਤੇ ਗ੍ਰੈਜੂਏਟ
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਵਿਦਿਆਰਥੀ ਵੀਜ਼ਾ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਗ੍ਰੈਜੂਏਟ ਵੀਜ਼ਾ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਗ੍ਰੈਜੂਏਟ ਡਿਪੈਂਡੈਂਟ ਵੀਜ਼ਾ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਛੋਟੀ-ਮਿਆਦ ਦਾ ਸਟੱਡੀ ਵੀਜ਼ਾ</span>
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
                ਹੋਰ ਸੇਵਾਵਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹਨ:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਯੂਕੇ ਟ੍ਰੈਵਲ ਡੌਕੂਮੈਂਟ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਈ-ਵੀਜ਼ਾ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਵਿਆਹ ਯਾਤਰੀ ਵੀਜ਼ਾ</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਡਿਪੈਂਡੈਂਸੀ ਵੀਜ਼ਾ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਅਪੀਲਾਂ ਅਤੇ ਇਨਕਾਰ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਸ਼ਰਨਾਰਥੀ ਅਰਜ਼ੀ</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ARAP ਸਕੀਮ ਅਰਜ਼ੀਆਂ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ਹੋਰ ਪਰਿਵਾਰਕ ਮੈਂਬਰ</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="how-we-work" className="py-16 container mx-auto px-6">
          <FadeIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
              ਅਸੀਂ ਕਿਵੇਂ <span className="text-black">ਕੰਮ ਕਰਦੇ ਹਾਂ</span>
            </h2>
            <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              ਸਾਡੀ ਸਰਲ ਪ੍ਰਕਿਰਿਆ ਵੀਜ਼ਾ ਸਹਾਇਤਾ ਪ੍ਰਾਪਤ ਕਰਨਾ ਆਸਾਨ ਬਣਾਉਂਦੀ ਹੈ
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
                  ਆਪਣੀ ਜਾਣਕਾਰੀ ਭਰੋ
                </h3>
                <p className="text-gray-700 text-center">
                  ਆਪਣੀ ਜਾਣਕਾਰੀ ਅਤੇ ਵੀਜ਼ਾ ਦੀ ਲੋੜ ਬਾਰੇ ਸਾਡੇ ਆਸਾਨ ਆਨਲਾਈਨ ਫਾਰਮ ਭਰੋ
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
                  ਮਾਹਰ ਸਮੀਖਿਆ
                </h3>
                <p className="text-gray-700 text-center">
                  ਅਸੀਂ ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਦੀ ਸੰਭਾਲ ਨਾਲ ਸਮੀਖਿਆ ਕਰਾਂਗੇ ਅਤੇ ਆਪਣੇ ਮਾਹਰ
                  ਕੋਲ ਭੇਜਾਂਗੇ
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
                  ਵਿਅਕਤੀਗਤ ਹੱਲ
                </h3>
                <p className="text-gray-700 text-center">
                  ਸਾਡਾ ਭਰੋਸੇਯੋਗ ਮਾਹਰ ਤੁਹਾਨੂੰ ਸਭ ਤੋਂ ਵਧੀਆ ਹੱਲ ਦੇਣ ਲਈ ਸੰਪਰਕ ਕਰੇਗਾ
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
                  ਮੁਫ਼ਤ <span className="text-black">ਸਮੀਖਿਆ</span>
                </h2>
                <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
                <div className="w-full h-[200px] relative rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="ਪੇਸ਼ੇਵਰ ਵੀਜ਼ਾ ਸਲਾਹ ਅਤੇ ਮੁਲਾਂਕਣ"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="mb-4 text-gray-700">
                  ਜੇ ਤੁਹਾਡੇ ਕੋਲ ਕੋਈ ਇਮੀਗ੍ਰੇਸ਼ਨ-ਸਬੰਧਤ ਸਥਿਤੀ ਹੈ, ਤਾਂ ਤੁਸੀਂ ਸਾਡੇ
                  ਪੇਸ਼ੇਵਰ ਨਾਲ ਮੁਲਾਂਕਣ ਕਰਵਾ ਸਕਦੇ ਹੋ। ਅਸੀਂ ਤੁਹਾਨੂੰ ਤੁਹਾਡੇ ਮਾਮਲੇ
                  ਬਾਰੇ ਸਭ ਤੋਂ ਵਧੀਆ ਫੈਸਲਾ ਲੈਣ ਲਈ ਲੋੜੀਂਦੀ ਸਾਰੀ ਜਾਣਕਾਰੀ ਦੇਵਾਂਗੇ।
                </p>
                <motion.a
                  href="#contact"
                  className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 mt-4 rounded hover:bg-[#004d8a] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ਮੁਫ਼ਤ ਸਮੀਖਿਆ ਲਵੋ
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
                  <h3 className="font-bold mb-2">ਫ਼ੋਨ</h3>
                  <a
                    href="tel:02035761165"
                    className="text-gray-600 hover:text-[#003D6E] hover:underline"
                  >
                    02035761165
                  </a>
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
                  <h3 className="font-bold mb-2">ਈਮੇਲ</h3>
                  <a
                    href="mailto:info@ukvisahelpconsultants.co.uk"
                    className="text-gray-600 hover:text-[#003D6E] hover:underline"
                  >
                    info@ukvisahelpconsultants.co.uk
                  </a>
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
                  <h3 className="font-bold mb-2">ਮਾਹਰ ਮਾਰਗਦਰਸ਼ਨ</h3>
                  <p className="text-sm text-gray-600">
                    ਯੂਕੇ ਇਮੀਗ੍ਰੇਸ਼ਨ ਕਾਨੂੰਨ ਦੇ ਮਾਹਰਾਂ ਤੋਂ ਸਲਾਹ ਪ੍ਰਾਪਤ ਕਰੋ
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
                  <h3 className="font-bold mb-2">ਵਿਅਕਤੀਗਤ ਸਹਾਇਤਾ</h3>
                  <p className="text-sm text-gray-600">
                    ਤੁਹਾਡੀ ਅਰਜ਼ੀ ਪ੍ਰਕਿਰਿਆ ਦੌਰਾਨ ਇੱਕ ਸਮਰਪਿਤ ਮਾਹਰ
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
                ਸਾਡੇ ਨਾਲ <span className="text-black">ਸੰਪਰਕ ਕਰੋ</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                ਅਸੀਂ ਅੱਜ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦੇ ਹਾਂ? ਹੇਠਾਂ ਦਿੱਤੇ ਕਿਸੇ ਵੀ ਤਰੀਕੇ
                ਰਾਹੀਂ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।
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
                <h3 className="font-bold mb-2">ਫ਼ੋਨ</h3>
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
                <h3 className="font-bold mb-2">ਈਮੇਲ</h3>
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
                <h3 className="font-bold mb-2">ਦਫ਼ਤਰ</h3>
                <p className="text-gray-600">
                  Tower Bridge Business Centre, 46-48 East Smithfield, London
                  E1W 1AW
                </p>
              </motion.div>
            </StaggerContainer>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}