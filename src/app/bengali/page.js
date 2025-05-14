"use client";

import Image from "next/image";
import { FadeIn, ScaleIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function BengaliPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navigation
        title="ইউকে ভিসা হেল্প কনসালট্যান্টস"
        menuItems={[
          { href: "#services", label: "সেবাসমূহ" },
          { href: "#how-we-work", label: "আমরা কীভাবে কাজ করি" },
          { href: "#contact", label: "যোগাযোগ" },
        ]}
      />

      <main>
        {/* Hero Section */}
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  <span>ইউকে ভিসা</span> পরামর্শ
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  আপনার ইউকে ভিসা আবেদনের জন্য বিশেষজ্ঞ পরামর্শ এবং সহায়তা।
                </p>
                <motion.a
                  href="#services"
                  className="inline-block bg-white text-[#003D6E] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  সেবাসমূহ
                </motion.a>
              </FadeIn>

              <FadeIn direction="left" className="md:w-1/2">
                <div className="bg-white bg-opacity-95 p-8 rounded-lg shadow-lg">
                  <ContactForm
                    labels={{
                      heading: "বিনামূল্যে পরামর্শ নিন",
                      subheading: "আমরা আজ কীভাবে আপনাকে সাহায্য করতে পারি?",
                      firstName: "আপনার প্রথম নাম",
                      lastName: "আপনার শেষ নাম",
                      email: "আপনার ইমেইল ঠিকানা",
                      phone: "তোমার মোবাইল নম্বর লিখো",
                      country: "আপনি কোন দেশে আছেন",
                      details: "আরও বিস্তারিত বর্ণনা করুন",
                      submit: "জমা দিন",
                      success: "ধন্যবাদ! আপনার বার্তা সফলভাবে জমা হয়েছে।",
                      error:
                        "ফর্ম জমা দিতে ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
                    }}
                    endpoint="/api/contact"
                    thankYouPage="/thank-you"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        <section className="py-16 container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <FadeIn direction="up" delay={0.2} className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[#003D6E]">
                আমাদের <span className="text-black">সম্পর্কে</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
              <p className="mb-4 text-gray-700">
                ইউকে ভিসা হেল্প কনসালট্যান্টস হল যুক্তরাজ্যভিত্তিক অন্যতম
                শীর্ষস্থানীয় ভিসা পরামর্শদাতা প্রতিষ্ঠান, যেখানে ইউকে ভিসা ও
                সেটেলমেন্ট আবেদন সংক্রান্ত বিশেষজ্ঞ পরামর্শদাতাদের একটি দক্ষ
                প্যানেল রয়েছে। আমাদের দলটি গঠিত হয়েছে বিশেষভাবে প্রশিক্ষিত
                অ্যাডভাইজার, কনসালট্যান্ট এবং অভিজ্ঞ প্রসেসিং টিমের মাধ্যমে,
                যারা ক্লায়েন্ট কেয়ারে সর্বোচ্চ গুরুত্ব দিয়ে কাজ করেন।
              </p>
              <p className="mb-6 text-gray-700">
                ইউকে ভিসা হেল্প কনসালট্যান্টস অভিবাসনের সব স্তরে দক্ষ এবং আমাদের
                মূল লক্ষ্য হল আপনাকে সর্বোত্তম সহায়তা প্রদান করা। আপনি যদি
                ইউকে-তে ভ্রমণ, বসবাস অথবা থাকার মেয়াদ বাড়াতে চান, তাহলে আমাদের
                বিশেষজ্ঞ পরামর্শদাতারা আপনাকে ও আপনার পরিবারকে ব্যক্তিগতকৃত
                অভিবাসন পরামর্শ দিয়ে সহায়তা করতে প্রস্তুত।
              </p>
              <motion.a
                href="#contact"
                className="inline-block bg-[#003D6E] text-white font-bold py-2 px-6 rounded hover:bg-[#004d8a] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                যোগাযোগ করুন
              </motion.a>
            </FadeIn>
            <FadeIn
              direction="up"
              delay={0.4}
              className="md:w-1/2 bg-gray-100 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#003D6E]">
                কেন ক্লায়েন্টরা ইউকে ভিসা হেল্প কনসালট্যান্টস বেছে নেন?
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
              <div className="mb-4 flex justify-center">
                <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/31946118/pexels-photo-31946118/free-photo-of-bustling-london-city-street-with-historic-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="লন্ডনের ঐতিহাসিক স্থাপত্য"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                অনেক ক্লায়েন্ট আমাদের অসাধারণ সেবা ও সাফল্যের ইতিহাসের কারণে
                আমাদের বেছে নেন। তবে আমরা মনে করি, আমাদের সবচেয়ে বড় শক্তি এবং
                যা আমাদের সত্যিকারের আলাদা করে, তা হল আমাদের ছোট কিন্তু নিবেদিত
                একটি দল যারা একান্ত ব্যক্তিগতভাবে সেবা প্রদান করে। আমরা আমাদের
                কাজকে ভালোবাসি, এবং আমাদের দল ক্লায়েন্টদের জীবনে ইতিবাচক
                পরিবর্তন আনতে পেরে গর্বিত।
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>বিশেষজ্ঞ পরামর্শদাতা</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>ব্যক্তিগত সেবা</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>উচ্চ সাফল্যের হার</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>দ্রুত প্রক্রিয়াকরণ</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
                আমাদের <span className="text-black">সেবাসমূহ</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                আমরা আবেদনকারীদের প্রয়োজন অনুযায়ী সম্পূর্ণ ভিসা ও অভিবাসন
                সমাধান প্রদান করি।
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
                    alt="ব্যক্তিগত ও পারিবারিক ভিসা সেবা"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  ব্যক্তিগত ও পারিবারিক
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>স্বামী/স্ত্রী ও বাগদান ভিসা</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>অনির্দিষ্টকালের অনুমতি (ILR)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>EEA সেটেলড স্ট্যাটাস</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ব্রিটিশ পাসপোর্ট আবেদন</span>
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
                    alt="কাজ ও ব্যবসা সংক্রান্ত ভিসা সেবা"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  কাজ ও ব্যবসা
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>কর্মসংস্থান ভিসা</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>বিশেষজ্ঞ কর্মী ভিসা</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ব্যবসায়িক ভিসা</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ভিসার মেয়াদ বাড়ানো</span>
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
                    alt="শিক্ষার্থী ও স্নাতক ভিসা সেবা"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  ছাত্র ও গ্র্যাজুয়েট
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ছাত্র ভিসা</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>গ্র্যাজুয়েট ভিসা</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>গ্র্যাজুয়েট নির্ভরশীল ভিসা</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>স্বল্প-মেয়াদী অধ্যয়ন ভিসা</span>
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
                অতিরিক্ত সেবাসমূহ:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ইউকে ট্রাভেল ডকুমেন্ট</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ই-ভিসা</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>বিয়ের ভিজিটর ভিসা</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>নির্ভরশীল ভিসা</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>আপিল ও প্রত্যাখ্যান</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>আশ্রয় আবেদন</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ARAP স্কিম আবেদন</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>অতিরিক্ত পরিবারের সদস্য</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="how-we-work" className="py-16 container mx-auto px-6">
          <FadeIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">
              আমরা কীভাবে <span className="text-black">কাজ করি</span>
            </h2>
            <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              আমাদের সহজ প্রক্রিয়া আপনার ভিসা সহায়তা পাওয়া সহজ করে তুলেছে
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
                ১
              </motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">
                  তথ্য জমা দিন
                </h3>
                <p className="text-gray-700 text-center">
                  আমাদের সহজ অনলাইন ফর্মে আপনার তথ্য ও ভিসা প্রয়োজনীয়তা পূরণ
                  করুন
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
                ২
              </motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">
                  বিশেষজ্ঞ পর্যালোচনা
                </h3>
                <p className="text-gray-700 text-center">
                  আমরা আপনার তথ্য পর্যালোচনা করে আমাদের বিশেষজ্ঞ কনসালট্যান্টের
                  কাছে পাঠাবো
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
                ৩
              </motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">
                  ব্যক্তিগত সমাধান
                </h3>
                <p className="text-gray-700 text-center">
                  আমাদের কনসালট্যান্ট আপনার ভিসা প্রয়োজনের জন্য একটি উপযুক্ত
                  সমাধান নিয়ে আপনার সাথে যোগাযোগ করবেন
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
                  ফ্রি <span className="text-black">মূল্যায়ন</span>
                </h2>
                <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
                <div className="w-full h-[200px] relative rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="পেশাদার ভিসা পরামর্শ ও মূল্যায়ন"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="mb-4 text-gray-700">
                  যদি আপনার কোনো অভিবাসন সম্পর্কিত সমস্যা থাকে, আপনি আমাদের
                  পেশাদারদের সঙ্গে একটি মূল্যায়ন করতে পারেন। আমরা আপনাকে আপনার
                  কেস সম্পর্কে সঠিক সিদ্ধান্ত নিতে প্রয়োজনীয় সব তথ্য দেব।
                </p>
                <p className="mb-4 text-gray-700">
                  আমরা অভিবাসন বিষয়ক আইনগত পরামর্শ দিয়ে থাকি। আমাদের আইনজীবীরা
                  অভিজ্ঞ এবং বিচারক, সালিশি বা মধ্যস্থতায় ক্লায়েন্টদের
                  প্রতিনিধিত্ব করতে দক্ষ।
                </p>
                <p className="mb-4 text-gray-700">
                  যদি আপনি একটি অপ্রামাণিক অভিবাসী হয়ে থাকেন, তবে অভিবাসন
                  প্রক্রিয়া আপনার জন্য জটিল হতে পারে। আমরা আপনাকে ওয়ার্ক
                  পারমিট পেতে সহায়তা করতে পারি এবং ওয়ার্ক পারমিট নবায়নেও
                  সাহায্য করি।
                </p>
                <motion.a
                  href="#contact"
                  className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 mt-4 rounded hover:bg-[#004d8a] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ফ্রি মূল্যায়ন পান
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
                  <h3 className="font-bold mb-2">৯৯% সাফল্যের হার</h3>
                  <p className="text-sm text-gray-600">
                    আমাদের সফল ভিসা আবেদনের একটি প্রমাণিত ট্র্যাক রেকর্ড রয়েছে
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
                  <h3 className="font-bold mb-2">দ্রুত প্রক্রিয়াকরণ</h3>
                  <p className="text-sm text-gray-600">
                    আমরা আপনার আবেদন যত দ্রুত সম্ভব প্রক্রিয়া করার নিশ্চয়তা
                    দিই
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
                  <h3 className="font-bold mb-2">বিশেষজ্ঞ পরামর্শ</h3>
                  <p className="text-sm text-gray-600">
                    যুক্তরাজ্য অভিবাসন আইনের বিশেষজ্ঞদের থেকে পরামর্শ পান
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
                  <h3 className="font-bold mb-2">ব্যক্তিগত সহায়তা</h3>
                  <p className="text-sm text-gray-600">
                    আপনার আবেদন প্রক্রিয়া চলাকালীন নিবেদিত কনসালট্যান্ট
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
                যোগাযোগ <span className="text-black">করুন</span>
              </h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                আজ আমরা কীভাবে আপনার সহায়তা করতে পারি? নিচের যেকোনো মাধ্যমে
                আমাদের সাথে যোগাযোগ করুন।
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
                <h3 className="font-bold mb-2">ফোন</h3>
                <p className="text-gray-600">+44 123 456 7890</p>
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
                <h3 className="font-bold mb-2">ইমেইল</h3>
                <p className="text-gray-600">info@ukvisahelp.com</p>
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
                <h3 className="font-bold mb-2">অফিস</h3>
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