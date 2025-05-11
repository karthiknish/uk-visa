"use client";

import Image from "next/image";
import { FadeIn, ScaleIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";

export default function FreeReviewPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="primary-bg text-white py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-2xl">UK Visa Help Consultants</div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/bengali" className="hover:text-gray-300">Bengali</a>
            <a href="/urdu" className="hover:text-gray-300">Urdu</a>
            <a href="/punjabi" className="hover:text-gray-300">Punjabi</a>
            <a href="/farsi" className="hover:text-gray-300">Farsi</a>
          </nav>
        </div>
      </header>
      
      <div className="primary-bg text-white py-16">
        <div className="container mx-auto px-6">
          <FadeIn direction="up" className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Free Review</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get a complimentary assessment of your visa or immigration situation from our experts
            </p>
          </FadeIn>
        </div>
      </div>
      
      <main>
        <section className="py-16 container mx-auto px-6">
          <FadeIn direction="up" className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-[#003D6E]">Free Review - English</h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-8"></div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gray-200 rounded-lg w-full h-[250px] flex items-center justify-center">
                    <p className="text-gray-500">Consultation Image (400x250px)</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="mb-4 text-gray-700">
                    If you have an immigration-related situation, you can have an assessment with our professional. We will give you all the information you need to make the best decision about your case.
                  </p>
                  <p className="mb-4 text-gray-700">
                    We provide legal advice on immigration matters. Our lawyers have a wealth of experience and are skilled at representing clients before judges and in arbitration and mediation proceedings.
                  </p>
                  <p className="mb-6 text-gray-700">
                    If you are an undocumented immigrant, the immigration system can make it difficult for you to obtain the legal protection you need. We can help you obtain a work permit. We can also assist you in renewing your work permit.
                  </p>
                  <motion.a 
                    href="/contact" 
                    className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 rounded hover:bg-[#004d8a] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request Free Review
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-[#003D6E]" style={{ direction: 'rtl', textAlign: 'right' }}>بررسی رایگان - Farsi</h2>
              <div className="h-1 w-20 bg-[#003D6E] mr-auto mb-8"></div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gray-200 rounded-lg w-full h-[250px] flex items-center justify-center">
                    <p className="text-gray-500">Consultation Image (400x250px)</p>
                  </div>
                </div>
                <div className="md:w-2/3" style={{ direction: 'rtl', textAlign: 'right' }}>
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
                    href="/contact" 
                    className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 rounded hover:bg-[#004d8a] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    درخواست بررسی رایگان
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3} className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-[#003D6E]">ফ্রি রিভিউ - Bengali</h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-8"></div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gray-200 rounded-lg w-full h-[250px] flex items-center justify-center">
                    <p className="text-gray-500">Consultation Image (400x250px)</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="mb-4 text-gray-700">
                    যদি আপনার কোনো অভিবাসন সম্পর্কিত সমস্যা থাকে, আপনি আমাদের পেশাদারদের সঙ্গে একটি মূল্যায়ন করতে পারেন। আমরা আপনাকে আপনার কেস সম্পর্কে সঠিক সিদ্ধান্ত নিতে প্রয়োজনীয় সব তথ্য দেব।
                  </p>
                  <p className="mb-4 text-gray-700">
                    আমরা অভিবাসন বিষয়ক আইনগত পরামর্শ দিয়ে থাকি। আমাদের আইনজীবীরা অভিজ্ঞ এবং বিচারক, সালিশি বা মধ্যস্থতায় ক্লায়েন্টদের প্রতিনিধিত্ব করতে দক্ষ।
                  </p>
                  <p className="mb-6 text-gray-700">
                    যদি আপনি একটি অপ্রামাণিক অভিবাসী হয়ে থাকেন, তবে অভিবাসন প্রক্রিয়া আপনার জন্য জটিল হতে পারে। আমরা আপনাকে ওয়ার্ক পারমিট পেতে সহায়তা করতে পারি এবং ওয়ার্ক পারমিট নবায়নেও সাহায্য করি।
                  </p>
                  <motion.a 
                    href="/contact" 
                    className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 rounded hover:bg-[#004d8a] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ফ্রি রিভিউ অনুরোধ করুন
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-[#003D6E]" style={{ fontFamily: 'Jameel Noori Nastaleeq, Arial, sans-serif', direction: 'rtl', textAlign: 'right' }}>مفت جائزہ - Urdu</h2>
              <div className="h-1 w-20 bg-[#003D6E] mr-auto mb-8"></div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gray-200 rounded-lg w-full h-[250px] flex items-center justify-center">
                    <p className="text-gray-500">Consultation Image (400x250px)</p>
                  </div>
                </div>
                <div className="md:w-2/3" style={{ fontFamily: 'Jameel Noori Nastaleeq, Arial, sans-serif', direction: 'rtl', textAlign: 'right' }}>
                  <p className="mb-4 text-gray-700">
                    اگر آپ کسی امیگریشن مسئلے کا سامنا کر رہے ہیں تو ہم آپ کو ابتدائی مشورہ فراہم کرتے ہیں تاکہ آپ اپنے معاملے میں بہتر فیصلہ کر سکیں۔
                  </p>
                  <p className="mb-4 text-gray-700">
                    ہم امیگریشن کے معاملات پر قانونی مشورہ فراہم کرتے ہیں. ہمارے وکلاء کے پاس بہت زیادہ تجربہ ہے اور وہ ججوں کے سامنے اور ثالثی اور ثالثی کی کارروائیوں میں مؤکلوں کی نمائندگی کرنے میں ماہر ہیں۔.
                  </p>
                  <p className="mb-6 text-gray-700">
                    اگر آپ کے پاس قانونی دستاویزات نہیں ہیں، تب بھی ہم آپ کو ورک پرمٹ حاصل کرنے یا اس کی تجدید میں مدد دے سکتے ہیں۔
                  </p>
                  <motion.a 
                    href="/contact" 
                    className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 rounded hover:bg-[#004d8a] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    مفت جائزہ کی درخواست کریں
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.5} className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-[#003D6E]" style={{ direction: 'rtl', textAlign: 'right' }}>مراجعة مجانية - Arabic</h2>
              <div className="h-1 w-20 bg-[#003D6E] mr-auto mb-8"></div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gray-200 rounded-lg w-full h-[250px] flex items-center justify-center">
                    <p className="text-gray-500">Consultation Image (400x250px)</p>
                  </div>
                </div>
                <div className="md:w-2/3" style={{ direction: 'rtl', textAlign: 'right' }}>
                  <p className="mb-4 text-gray-700">
                    إذا كانت لديك أي مشكلة متعلقة بالهجرة، يمكنك الحصول على تقييم من أحد خبرائنا. سنزودك بجميع المعلومات التي تحتاجها لاتخاذ القرار الأمثل بشأن قضيتك.
                  </p>
                  <p className="mb-4 text-gray-700">
                    نقدم استشارات قانونية في قضايا الهجرة. يتمتع محامونا بخبرة واسعة ومهارة في تمثيل العملاء أمام القضاة وفي إجراءات التحكيم والوساطة.
                  </p>
                  <p className="mb-6 text-gray-700">
                    إذا كنت مهاجرًا غير موثق، فقد يصعب عليك نظام الهجرة الحصول على الحماية القانونية التي تحتاجها. يمكننا مساعدتك في الحصول على تصريح عمل. كما يمكننا مساعدتك في تجديد تصريح عملك.
                  </p>
                  <motion.a 
                    href="/contact" 
                    className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 rounded hover:bg-[#004d8a] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    طلب مراجعة مجانية
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.6} className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-[#003D6E]">ਮੁਫ਼ਤ ਸਮੀਖਿਆ - Punjabi</h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-8"></div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gray-200 rounded-lg w-full h-[250px] flex items-center justify-center">
                    <p className="text-gray-500">Consultation Image (400x250px)</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="mb-4 text-gray-700">
                    ਜੇ ਤੁਹਾਡੀ ਕੋਈ ਇਮੀਗ੍ਰੇਸ਼ਨ ਸੰਬੰਧੀ ਪਰੇਸ਼ਾਨੀ ਹੈ, ਤਾਂ ਤੁਸੀਂ ਸਾਡੇ ਮਾਹਰ ਨਾਲ ਮੁਫ਼ਤ ਅਸੈੱਸਮੈਂਟ ਲੈ ਸਕਦੇ ਹੋ। ਅਸੀਂ ਤੁਹਾਨੂੰ ਤੁਹਾਡੇ ਕੇਸ ਬਾਰੇ ਸਹੀ ਫੈਸਲਾ ਲੈਣ ਲਈ ਸਾਰੀ ਜ਼ਰੂਰੀ ਜਾਣਕਾਰੀ ਦਿੰਦੇ ਹਾਂ।
                  </p>
                  <p className="mb-4 text-gray-700">
                    ਅਸੀਂ ਇਮੀਗ੍ਰੇਸ਼ਨ ਮਾਮਲਿਆਂ 'ਤੇ ਕਾਨੂੰਨੀ ਸਲਾਹ ਦਿੰਦੇ ਹਾਂ। ਸਾਡੇ ਵਕੀਲਾਂ ਕੋਲ ਵੱਡਾ ਤਜਰਬਾ ਹੈ ਅਤੇ ਉਹ ਨਿਆਂਧੀਸ਼ਾਂ ਅੱਗੇ, ਜਾਂ ਪਛਲੜਾਂ ਅਤੇ ਮੱਧਸਥਤਾ ਵਿੱਚ ਗ੍ਰਾਹਕਾਂ ਦੀ ਨੁਮਾਇندگی ਕਰਦੇ ਹਨ।
                  </p>
                  <p className="mb-6 text-gray-700">
                    ਜੇ ਤੁਸੀਂ ਇੱਕ undocumented immigrant ਹੋ, ਤਾਂ ਇਮੀਗ੍ਰੇਸ਼ਨ ਸਿਸਟਮ ਤੁਹਾਨੂੰ ਕਾਨੂੰਨੀ ਸੁਰੱਖਿਆ ਲੈਣ ਵਿੱਚ ਰੁਕਾਵਟ ਪਾ ਸਕਦਾ ਹੈ। ਅਸੀਂ ਤੁਹਾਡੀ ਮਦਦ ਕਰ ਸਕਦੇ ਹਾਂ ਕਿ ਤੁਸੀਂ ਕੰਮ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਲੈ ਸਕੋ ਜਾਂ ਆਪਣੀ ਇਜਾਜ਼ਤ ਨਵੀਨਤਾ ਕਰਵਾ ਸਕੋ।
                  </p>
                  <motion.a 
                    href="/contact" 
                    className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 rounded hover:bg-[#004d8a] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ਮੁਫ਼ਤ ਸਮੀਖਿਆ ਲਈ ਬੇਨਤੀ ਕਰੋ
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.7} className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-[#003D6E]" style={{ direction: 'rtl', textAlign: 'right' }}>بررسی رایگان - Persian</h2>
              <div className="h-1 w-20 bg-[#003D6E] mr-auto mb-8"></div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gray-200 rounded-lg w-full h-[250px] flex items-center justify-center">
                    <p className="text-gray-500">Consultation Image (400x250px)</p>
                  </div>
                </div>
                <div className="md:w-2/3" style={{ direction: 'rtl', textAlign: 'right' }}>
                  <p className="mb-4 text-gray-700">
                    اگر در زمینهٔ مهاجرت با مشکلی مواجه هستید، می‌توانید با یکی از مشاوران حرفه‌ای ما ارزیابی اولیه انجام دهید. ما تمام اطلاعات لازم را در اختیار شما قرار می‌دهیم تا تصمیمی آگاهانه و مناسب بگیرید.
                  </p>
                  <p className="mb-4 text-gray-700">
                    ما در امور حقوقی مهاجرت مشوره می‌دهیم. وکلای ما تجربهٔ فراوانی در نمایندگی موکلین در محاکم، داوری و پروسه میانجی‌گری دارند.
                  </p>
                  <p className="mb-6 text-gray-700">
                    اگر مهاجر بدون مدرک هستید، ممکن است سیستم مهاجرت برای دسترسی به حمایت قانونی مانع ایجاد کند. ما می‌توانیم در اخذ اجازهٔ کار و همچنان تمدید آن، به شما کمک کنیم.
                  </p>
                  <motion.a 
                    href="/contact" 
                    className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 rounded hover:bg-[#004d8a] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    درخواست بررسی رایگان
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">Get Your Free Assessment Today</h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                Contact us now to schedule your free consultation with one of our immigration experts
              </p>
            </FadeIn>
            
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
              <div className="mb-8 flex justify-center">
                <div className="bg-gray-200 rounded-lg w-full max-w-lg h-[120px] flex items-center justify-center">
                  <p className="text-gray-500">CTA Image (500x120px)</p>
                </div>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your First Name" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Last Name" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                      required
                    />
                  </div>
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Enter Your Email Address" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                    required
                  />
                </div>
                <div>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                    required
                  >
                    <option value="">Select Visa Type</option>
                    <option value="tourist">Tourist Visa</option>
                    <option value="student">Student Visa</option>
                    <option value="work">Work Visa</option>
                    <option value="family">Family Visa</option>
                    <option value="settlement">Settlement Visa</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Please provide details about your situation" 
                    className="w-full p-3 border border-gray-300 rounded-md h-32 focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
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
                    Request Free Assessment
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-[#003D6E] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="bg-gray-700 w-[150px] h-[80px] rounded flex items-center justify-center mb-4">
                <p className="text-gray-300">Logo (150x80px)</p>
              </div>
              <h3 className="font-bold text-lg mb-4">UK Visa Help Consultants</h3>
              <p className="text-gray-300 text-sm">
                One of the leading UK Visa Consultancies with a panel of specialist consultants for UK Visa and settlement applications.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/bengali" className="hover:text-white">Bengali</a></li>
                <li><a href="/urdu" className="hover:text-white">Urdu</a></li>
                <li><a href="/punjabi" className="hover:text-white">Punjabi</a></li>
                <li><a href="/farsi" className="hover:text-white">Farsi</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white">Family Visas</a></li>
                <li><a href="#" className="hover:text-white">Work Visas</a></li>
                <li><a href="#" className="hover:text-white">Student Visas</a></li>
                <li><a href="#" className="hover:text-white">Settlement Applications</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>London, United Kingdom</li>
                <li>Phone: +44 123 456 7890</li>
                <li>Email: info@ukvisahelp.com</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-700 text-center text-gray-300 text-sm">
            <p>&copy; {new Date().getFullYear()} UK Visa Help Consultants. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}