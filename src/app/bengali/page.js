"use client";

import Image from "next/image";
import { FadeIn, ScaleIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";

export default function BengaliPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="primary-bg text-white py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-2xl">ইউকে ভিসা হেল্প কনসালট্যান্টস</div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-gray-300">English</a>
            <a href="/urdu" className="hover:text-gray-300">Urdu</a>
            <a href="/punjabi" className="hover:text-gray-300">Punjabi</a>
            <a href="/hindi" className="hover:text-gray-300">Hindi</a>
            <a href="/farsi" className="hover:text-gray-300">Farsi</a>
            <a href="/dari" className="hover:text-gray-300">Dari</a>
            <a href="/free-review" className="hover:text-gray-300">Free Review</a>
            <a href="#services" className="hover:text-gray-300">সেবাসমূহ</a>
            <a href="#how-we-work" className="hover:text-gray-300">আমরা কীভাবে কাজ করি</a>
            <a href="#contact" className="hover:text-gray-300">যোগাযোগ</a>
          </nav>
        </div>
      </header>
      
      <div className="primary-bg text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <FadeIn direction="right" className="md:w-1/2">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">ইউকে ভিসা হেল্প কনসালট্যান্টস</h1>
              <p className="text-xl mb-8">সকল ধরনের যুক্তরাজ্য ভিসা ও অভিবাসন আবেদনের জন্য বিশেষজ্ঞ পরামর্শ</p>
              <motion.a 
                href="#services" 
                className="inline-block bg-white text-[#003D6E] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >আমাদের সেবাসমূহ</motion.a>
            </FadeIn>
            {/* Hero Image Placeholder */}
            <div className="hidden md:block md:w-1/2">
              <div className="bg-gray-200 rounded-lg w-full h-[350px] flex items-center justify-center">
                <p className="text-gray-500">Hero Image (600x400px)</p>
              </div>
            </div>
            <FadeIn direction="left" className="md:w-1/2 bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-[#003D6E] text-2xl font-bold mb-4">ফ্রি কনসালটেশন পান</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="আপনার প্রথম নাম" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="আপনার শেষ নাম" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                      required
                    />
                  </div>
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="আপনার ইমেইল ঠিকানা" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="ফোন নম্বর" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="আপনি কোন দেশে আছেন" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                    required
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="বিস্তারিতভাবে বর্ণনা করুন" 
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
                    জমা দিন
                  </motion.button>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
      
      <main>
        <section className="py-16 container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <FadeIn direction="up" delay={0.2} className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[#003D6E]">আমাদের <span className="text-black">সম্পর্কে</span></h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
              <p className="mb-4 text-gray-700">
                ইউকে ভিসা হেল্প কনসালট্যান্টস হল যুক্তরাজ্যভিত্তিক অন্যতম শীর্ষস্থানীয় ভিসা পরামর্শদাতা প্রতিষ্ঠান, যেখানে ইউকে ভিসা ও সেটেলমেন্ট আবেদন সংক্রান্ত বিশেষজ্ঞ পরামর্শদাতাদের একটি দক্ষ প্যানেল রয়েছে। আমাদের দলটি গঠিত হয়েছে বিশেষভাবে প্রশিক্ষিত অ্যাডভাইজার, কনসালট্যান্ট এবং অভিজ্ঞ প্রসেসিং টিমের মাধ্যমে, যারা ক্লায়েন্ট কেয়ারে সর্বোচ্চ গুরুত্ব দিয়ে কাজ করেন।
              </p>
              <p className="mb-6 text-gray-700">
                ইউকে ভিসা হেল্প কনসালট্যান্টস অভিবাসনের সব স্তরে দক্ষ এবং আমাদের মূল লক্ষ্য হল আপনাকে সর্বোত্তম সহায়তা প্রদান করা। আপনি যদি ইউকে-তে ভ্রমণ, বসবাস অথবা থাকার মেয়াদ বাড়াতে চান, তাহলে আমাদের বিশেষজ্ঞ পরামর্শদাতারা আপনাকে ও আপনার পরিবারকে ব্যক্তিগতকৃত অভিবাসন পরামর্শ দিয়ে সহায়তা করতে প্রস্তুত।
              </p>
              <motion.a 
                href="#contact" 
                className="inline-block bg-[#003D6E] text-white font-bold py-2 px-6 rounded hover:bg-[#004d8a] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >যোগাযোগ করুন</motion.a>
            </FadeIn>
            <FadeIn direction="up" delay={0.4} className="md:w-1/2 bg-gray-100 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-[#003D6E]">কেন ক্লায়েন্টরা ইউকে ভিসা হেল্প কনসালট্যান্টস বেছে নেন?</h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
              <div className="mb-4 flex justify-center">
                <div className="bg-gray-200 rounded-lg w-[200px] h-[200px] flex items-center justify-center mb-4">
                  <p className="text-gray-500">Team Image (200x200px)</p>
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                অনেক ক্লায়েন্ট আমাদের অসাধারণ সেবা ও সাফল্যের ইতিহাসের কারণে আমাদের বেছে নেন। তবে আমরা মনে করি, আমাদের সবচেয়ে বড় শক্তি এবং যা আমাদের সত্যিকারের আলাদা করে, তা হল আমাদের ছোট কিন্তু নিবেদিত একটি দল যারা একান্ত ব্যক্তিগতভাবে সেবা প্রদান করে। আমরা আমাদের কাজকে ভালোবাসি, এবং আমাদের দল ক্লায়েন্টদের জীবনে ইতিবাচক পরিবর্তন আনতে পেরে গর্বিত।
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
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">আমাদের <span className="text-black">সেবাসমূহ</span></h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                আমরা আবেদনকারীদের প্রয়োজন অনুযায়ী সম্পূর্ণ ভিসা ও অভিবাসন সমাধান প্রদান করি।
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <ScaleIn delay={0.2} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 w-full h-[120px] rounded-md mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Service Image 1 (120x120px)</p>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">ব্যক্তিগত ও পারিবারিক</h3>
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
              
              <ScaleIn delay={0.4} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 w-full h-[120px] rounded-md mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Service Image 2 (120x120px)</p>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">কাজ ও ব্যবসা</h3>
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
              
              <ScaleIn delay={0.6} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 w-full h-[120px] rounded-md mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Service Image 3 (120x120px)</p>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">ছাত্র ও গ্র্যাজুয়েট</h3>
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
            
            <FadeIn direction="up" delay={0.2} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#003D6E]">অতিরিক্ত সেবাসমূহ:</h3>
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
            <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">আমরা কীভাবে <span className="text-black">কাজ করি</span></h2>
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
              >১</motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">তথ্য জমা দিন</h3>
                <p className="text-gray-700 text-center">
                  আমাদের সহজ অনলাইন ফর্মে আপনার তথ্য ও ভিসা প্রয়োজনীয়তা পূরণ করুন
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
                transition={{ type: "spring", stiffness: 200, duration: 0.5, delay: 0.2 }}
              >২</motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">বিশেষজ্ঞ পর্যালোচনা</h3>
                <p className="text-gray-700 text-center">
                  আমরা আপনার তথ্য পর্যালোচনা করে আমাদের বিশেষজ্ঞ কনসালট্যান্টের কাছে পাঠাবো
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
                transition={{ type: "spring", stiffness: 200, duration: 0.5, delay: 0.4 }}
              >৩</motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">ব্যক্তিগত সমাধান</h3>
                <p className="text-gray-700 text-center">
                  আমাদের কনসালট্যান্ট আপনার ভিসা প্রয়োজনের জন্য একটি উপযুক্ত সমাধান নিয়ে আপনার সাথে যোগাযোগ করবেন
                </p>
              </div>
            </motion.div>
          </StaggerContainer>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <FadeIn direction="right" className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">ফ্রি <span className="text-black">মূল্যায়ন</span></h2>
                <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
                <div className="bg-gray-200 rounded-lg w-full h-[200px] flex items-center justify-center mb-6">
                  <p className="text-gray-500">Assessment Image (400x300px)</p>
                </div>
                <p className="mb-4 text-gray-700">
                  যদি আপনার কোনো অভিবাসন সম্পর্কিত সমস্যা থাকে, আপনি আমাদের পেশাদারদের সঙ্গে একটি মূল্যায়ন করতে পারেন। আমরা আপনাকে আপনার কেস সম্পর্কে সঠিক সিদ্ধান্ত নিতে প্রয়োজনীয় সব তথ্য দেব।
                </p>
                <p className="mb-4 text-gray-700">
                  আমরা অভিবাসন বিষয়ক আইনগত পরামর্শ দিয়ে থাকি। আমাদের আইনজীবীরা অভিজ্ঞ এবং বিচারক, সালিশি বা মধ্যস্থতায় ক্লায়েন্টদের প্রতিনিধিত্ব করতে দক্ষ।
                </p>
                <p className="mb-4 text-gray-700">
                  যদি আপনি একটি অপ্রামাণিক অভিবাসী হয়ে থাকেন, তবে অভিবাসন প্রক্রিয়া আপনার জন্য জটিল হতে পারে। আমরা আপনাকে ওয়ার্ক পারমিট পেতে সহায়তা করতে পারি এবং ওয়ার্ক পারমিট নবায়নেও সাহায্য করি।
                </p>
                <motion.a 
                  href="#contact" 
                  className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 mt-4 rounded hover:bg-[#004d8a] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >ফ্রি মূল্যায়ন পান</motion.a>
              </FadeIn>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <ScaleIn delay={0.2} className="bg-white p-5 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">৯৯% সাফল্যের হার</h3>
                  <p className="text-sm text-gray-600">আমাদের সফল ভিসা আবেদনের একটি প্রমাণিত ট্র্যাক রেকর্ড রয়েছে</p>
                </ScaleIn>
                <ScaleIn delay={0.3} className="bg-white p-5 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">দ্রুত প্রক্রিয়াকরণ</h3>
                  <p className="text-sm text-gray-600">আমরা আপনার আবেদন যত দ্রুত সম্ভব প্রক্রিয়া করার নিশ্চয়তা দিই</p>
                </ScaleIn>
                <ScaleIn delay={0.4} className="bg-white p-5 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">বিশেষজ্ঞ পরামর্শ</h3>
                  <p className="text-sm text-gray-600">যুক্তরাজ্য অভিবাসন আইনের বিশেষজ্ঞদের থেকে পরামর্শ পান</p>
                </ScaleIn>
                <ScaleIn delay={0.5} className="bg-white p-5 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">ব্যক্তিগত সহায়তা</h3>
                  <p className="text-sm text-gray-600">আপনার আবেদন প্রক্রিয়া চলাকালীন নিবেদিত কনসালট্যান্ট</p>
                </ScaleIn>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">যোগাযোগ <span className="text-black">করুন</span></h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                আজ আমরা কীভাবে আপনার সহায়তা করতে পারি? নিচের যেকোনো মাধ্যমে আমাদের সাথে যোগাযোগ করুন।
              </p>
            </FadeIn>
            
            <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={staggerItem(0.2)} className="bg-white p-6 rounded-lg shadow-md text-center" whileHover={{ y: -5 }}>
                <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">ফোন</h3>
                <p className="text-gray-600">+44 123 456 7890</p>
              </motion.div>
              
              <motion.div variants={staggerItem(0.4)} className="bg-white p-6 rounded-lg shadow-md text-center" whileHover={{ y: -5 }}>
                <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">ইমেইল</h3>
                <p className="text-gray-600">info@ukvisahelp.com</p>
              </motion.div>
              
              <motion.div variants={staggerItem(0.6)} className="bg-white p-6 rounded-lg shadow-md text-center" whileHover={{ y: -5 }}>
                <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">অফিস</h3>
                <p className="text-gray-600">লন্ডন, যুক্তরাজ্য</p>
              </motion.div>
            </StaggerContainer>
          </div>
        </section>
      </main>
      
      <footer className="bg-[#003D6E] text-white py-12">
        <FadeIn direction="up" className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="bg-gray-700 w-[150px] h-[80px] rounded flex items-center justify-center mb-4">
                <p className="text-gray-300">Logo (150x80px)</p>
              </div>
              <h3 className="font-bold text-lg mb-4">ইউকে ভিসা হেল্প কনসালট্যান্টস</h3>
              <p className="text-gray-300 text-sm">
                যুক্তরাজ্যে অন্যতম শীর্ষস্থানীয় ভিসা পরামর্শদাতা প্রতিষ্ঠান, যেখানে ইউকে ভিসা ও সেটেলমেন্ট আবেদনের জন্য বিশেষজ্ঞ পরামর্শদাতাদের একটি দক্ষ প্যানেল রয়েছে।
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">দ্রুত লিঙ্কসমূহ</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="/" className="hover:text-white">ইংরেজি</a></li>
                <li><a href="/urdu" className="hover:text-white">উর্দু</a></li>
                <li><a href="#services" className="hover:text-white">সেবাসমূহ</a></li>
                <li><a href="#how-we-work" className="hover:text-white">আমরা কীভাবে কাজ করি</a></li>
                <li><a href="#contact" className="hover:text-white">যোগাযোগ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">সেবাসমূহ</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#services" className="hover:text-white">পারিবারিক ভিসা</a></li>
                <li><a href="#services" className="hover:text-white">কাজের ভিসা</a></li>
                <li><a href="#services" className="hover:text-white">ছাত্র ভিসা</a></li>
                <li><a href="#services" className="hover:text-white">সেটেলমেন্ট আবেদন</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">যোগাযোগ করুন</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>লন্ডন, যুক্তরাজ্য</li>
                <li>ফোন: +44 123 456 7890</li>
                <li>ইমেইল: info@ukvisahelp.com</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-700 text-center text-gray-300 text-sm">
            <p>&copy; {new Date().getFullYear()} ইউকে ভিসা হেল্প কনসালট্যান্টস। সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        </FadeIn>
      </footer>
    </div>
  );
}