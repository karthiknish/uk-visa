"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm({ 
  labels = {
    heading: "Get in Touch",
    subheading: "How can we help you today?",
    firstName: "Your First Name",
    lastName: "Your Last Name",
    email: "Enter Your Email Address",
    country: "What country are you in",
    details: "Describe In More Detail",
    submit: "Submit"
  }
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          country: "",
          message: ""
        });
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been submitted successfully.' });
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Failed to submit form. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#003D6E]">{labels.heading.split(' ')[0]} <span className="text-black">{labels.heading.split(' ')[1]}</span></h2>
          <div className="h-1 w-20 bg-[#003D6E] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            {labels.subheading}
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <div className="mb-4 flex justify-center">
            <div className="bg-gray-200 rounded-lg w-full max-w-md h-[120px] flex items-center justify-center mb-4">
              <p className="text-gray-500">Contact Form Image (400x120px)</p>
            </div>
          </div>
          
          <form className="max-w-xl mx-auto space-y-4" onSubmit={handleSubmit}>
            {submitStatus && (
              <div className={`p-4 mb-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={labels.firstName} 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                  required
                />
              </div>
              <div>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={labels.lastName} 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                  required
                />
              </div>
            </div>
            <div>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={labels.email} 
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                required
              />
            </div>
            <div>
              <input 
                type="text" 
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder={labels.country} 
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                required
              />
            </div>
            <div>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={labels.details} 
                className="w-full p-3 border border-gray-300 rounded-md h-24 focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                required
              ></textarea>
            </div>
            <div className="pt-2">
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#003D6E] text-white py-3 px-8 rounded-md hover:bg-[#004d8a] transition-colors font-medium w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? 'Submitting...' : labels.submit}
              </motion.button>
            </div>
          </form>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="bg-white p-6 rounded-lg shadow-md text-center" whileHover={{ y: -5 }}>
            <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">Phone</h3>
            <p className="text-gray-600">+44 123 456 7890</p>
          </motion.div>
          
          <motion.div className="bg-white p-6 rounded-lg shadow-md text-center" whileHover={{ y: -5 }}>
            <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-gray-600">info@ukvisahelp.com</p>
          </motion.div>
          
          <motion.div className="bg-white p-6 rounded-lg shadow-md text-center" whileHover={{ y: -5 }}>
            <div className="w-12 h-12 bg-[#003D6E] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">Office</h3>
            <p className="text-gray-600">London, United Kingdom</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}