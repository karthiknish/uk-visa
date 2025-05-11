"use client";

import Image from "next/image";
import { FadeIn, ScaleIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navigation 
        title="UK Visa Help Consultants"
        menuItems={[
          { href: "#", label: "Home" },
          { href: "#services", label: "Services" },
          { href: "#how-we-work", label: "How We Work" },
          { href: "/free-review", label: "Free Review" },
          { href: "#contact", label: "Contact" }
        ]}
      />
      
      <div className="primary-bg text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <FadeIn direction="right" className="md:w-1/2">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">UK Visa & Immigration Specialists</h1>
              <p className="text-xl mb-8">Expert consultation for all types of UK visas and immigration applications</p>
              <motion.a 
                href="#services" 
                className="inline-block bg-white text-[#003D6E] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >Our Services</motion.a>
            </FadeIn>
            {/* Hero Image Placeholder */}
            <div className="hidden md:block md:w-1/2">
              <div className="bg-gray-200 rounded-lg w-full h-[350px] flex items-center justify-center">
                <p className="text-gray-500">Hero Image (600x400px)</p>
              </div>
            </div>
            <FadeIn direction="left" className="md:w-1/2 bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-[#003D6E] text-2xl font-bold mb-4">Get Free Consultation</h2>
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
                    type="text" 
                    placeholder="What country are you in" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                    required
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Describe In More Detail" 
                    className="w-full p-3 border border-gray-300 rounded-md h-24 focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                    required
                  ></textarea>
                </div>
                <div className="pt-2">
                  <button 
                    type="submit"
                    className="bg-[#003D6E] text-white py-3 px-8 rounded-md hover:bg-[#004d8a] transition-colors font-medium w-full"
                  >
                    Submit Request
                  </button>
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
              <h2 className="text-3xl font-bold mb-6 text-[#003D6E]">About <span className="text-black">Us</span></h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
              <p className="mb-4 text-gray-700">
                UK Visa Help Consultants is one of the leading UK Visa Consultancies with a panel of specialist consultants for UK Visa and settlement applications. The team is made up of specially trained advisors, consultants, and experienced processing teams who place great emphasis on client care.
              </p>
              <p className="mb-6 text-gray-700">
                UK Visa Help Consultants has expertise at all levels of immigration and our focus is on providing you with the best assistance we possibly can. If you are planning to travel, reside or extend your stay in the UK, our expert advisors are on hand to help you and your family with our customised immigration advice services.
              </p>
              <motion.a 
                href="#contact" 
                className="inline-block bg-[#003D6E] text-white font-bold py-2 px-6 rounded hover:bg-[#004d8a] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >Contact Us</motion.a>
            </FadeIn>
            <FadeIn direction="up" delay={0.4} className="md:w-1/2 bg-gray-100 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-[#003D6E]">Why Clients Choose UK Visa Help Consultants?</h2>
              <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
              <div className="mb-4 flex justify-center">
                <div className="bg-gray-200 rounded-lg w-[200px] h-[200px] flex items-center justify-center mb-4">
                  <p className="text-gray-500">Team Image (200x200px)</p>
                </div>
              </div>
              <p className="mb-4 text-gray-700">
                Many clients choose UK Visa Help Consultants for our history of excellent service and track record of success. However, we feel our greatest strength, and what makes us truly unique, is our small dedicated team that offers a truly personalised service. We genuinely love what we do, and our team relishes making a difference to the lives of our clients.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>Expert Advisors</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>Personalized Service</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>High Success Rate</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#003D6E] font-bold">✓</div>
                  <div>Timely Processing</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">Our <span className="text-black">Services</span></h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                We provide a complete set of visa and immigration solutions based on the needs of applicants.
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <ScaleIn delay={0.2} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 w-full h-[120px] rounded-md mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Service Image 1 (120x120px)</p>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Personal & Family</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>Spouse & Fiancé Visas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>Indefinite Leave to Remain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>EEA Settled Status</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>British Passport Applications</span>
                  </li>
                </ul>
              </ScaleIn>
              
              <ScaleIn delay={0.4} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 w-full h-[120px] rounded-md mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Service Image 2 (120x120px)</p>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Work & Business</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>Work Visas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>Senior/Specialist Worker</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>Business Visas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>Visa Extensions</span>
                  </li>
                </ul>
              </ScaleIn>
              
              <ScaleIn delay={0.6} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 w-full h-[120px] rounded-md mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Service Image 3 (120x120px)</p>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Student & Graduate</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>Student Visas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>Graduate Visas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>Graduate Dependent Visas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>Short-term Study Visas</span>
                  </li>
                </ul>
              </ScaleIn>
            </div>
            
            <FadeIn direction="up" delay={0.2} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#003D6E]">Additional services include:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>UK Travel Documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>E-Visas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>Marriage Visitor Visas</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>Dependency Visas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>Appeals and Refusals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>Asylum Applications</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>ARAP Scheme Applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#003D6E] mr-2">•</span>
                    <span>Additional Family Members</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="how-we-work" className="py-16 container mx-auto px-6">
          <FadeIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">How We <span className="text-black">Work</span></h2>
            <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              Our streamlined process makes getting visa assistance quick and easy
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
              >1</motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">Submit Details</h3>
                <p className="text-gray-700 text-center">
                  Fill out our simple online form with your information and visa requirements
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
              >2</motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">Expert Review</h3>
                <p className="text-gray-700 text-center">
                  We review your details carefully and forward them to our specialist consultant
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
              >3</motion.div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center mt-4">Personalized Solution</h3>
                <p className="text-gray-700 text-center">
                  Our consultant will contact you with a tailored solution for your visa needs
                </p>
              </div>
            </motion.div>
          </StaggerContainer>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <FadeIn direction="right" className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">Free <span className="text-black">Assessment</span></h2>
                <div className="h-1 w-20 bg-[#003D6E] mb-6"></div>
                <div className="bg-gray-200 rounded-lg w-full h-[200px] flex items-center justify-center mb-6">
                  <p className="text-gray-500">Assessment Image (400x300px)</p>
                </div>
                <p className="mb-4 text-gray-700">
                  If you have an immigration-related situation, you can have an assessment with our professional. We will give you all the information you need to make the best decision about your case.
                </p>
                <p className="mb-4 text-gray-700">
                  We provide legal advice on immigration matters. Our lawyers have a wealth of experience and are skilled at representing clients before judges and in arbitration and mediation proceedings.
                </p>
                <p className="mb-4 text-gray-700">
                  If you are an undocumented immigrant, the immigration system can make it difficult for you to obtain the legal protection you need. We can help you obtain a work permit. We can also assist you in renewing your work permit.
                </p>
                <a href="#contact" className="inline-block bg-[#003D6E] text-white font-bold py-3 px-8 mt-4 rounded hover:bg-[#004d8a] transition-colors">Get Free Assessment</a>
              </FadeIn>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <ScaleIn delay={0.2} className="bg-white p-5 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">99% Success Rate</h3>
                  <p className="text-sm text-gray-600">We have a proven track record of successful visa applications</p>
                </ScaleIn>
                <ScaleIn delay={0.3} className="bg-white p-5 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Fast Processing</h3>
                  <p className="text-sm text-gray-600">We ensure the quickest possible processing of your application</p>
                </ScaleIn>
                <ScaleIn delay={0.4} className="bg-white p-5 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Expert Guidance</h3>
                  <p className="text-sm text-gray-600">Receive advice from specialists in UK immigration law</p>
                </ScaleIn>
                <ScaleIn delay={0.5} className="bg-white p-5 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Personal Support</h3>
                  <p className="text-sm text-gray-600">Dedicated consultant throughout your entire application process</p>
                </ScaleIn>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">Get in <span className="text-black">Touch</span></h2>
              <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                How can we help you today? Contact us through any of the methods below.
              </p>
            </FadeIn>
            
            <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={staggerItem(0.2)} className="bg-white p-6 rounded-lg shadow-md text-center" whileHover={{ y: -5 }}>
                <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-gray-600">+44 123 456 7890</p>
              </motion.div>
              
              <motion.div variants={staggerItem(0.4)} className="bg-white p-6 rounded-lg shadow-md text-center" whileHover={{ y: -5 }}>
                <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600">info@ukvisahelp.com</p>
              </motion.div>
              
              <motion.div variants={staggerItem(0.6)} className="bg-white p-6 rounded-lg shadow-md text-center" whileHover={{ y: -5 }}>
                <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Office</h3>
                <p className="text-gray-600">London, United Kingdom</p>
              </motion.div>
            </StaggerContainer>
          </div>
        </section>
      </main>
      
      <Footer 
        logoText="UK Visa Help Consultants"
        tagline="Leading UK visa consultancy with a panel of expert advisors for visa and settlement applications."
        quickLinksTitle="Quick Links"
        quickLinks={[
          { href: "/", label: "Home" },
          { href: "#services", label: "Services" },
          { href: "#how-we-work", label: "How We Work" },
          { href: "/free-review", label: "Free Review" },
          { href: "#contact", label: "Contact" },
          { href: "/bengali", label: "Bengali" },
          { href: "/urdu", label: "Urdu" },
          { href: "/punjabi", label: "Punjabi" },
          { href: "/hindi", label: "Hindi" },
          { href: "/farsi", label: "Farsi" },
          { href: "/dari", label: "Dari" },
          { href: "/arabic", label: "Arabic" }
        ]}
        serviceLinks={[
          { href: "#services", label: "Family Visas" },
          { href: "#services", label: "Work Visas" },
          { href: "#services", label: "Student Visas" },
          { href: "#services", label: "Settlement Applications" }
        ]}
        copyright="UK Visa Help Consultants. All rights reserved."
      />
    </div>
  );
}
