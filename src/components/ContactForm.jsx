"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ContactForm({
  labels = {
    heading: "Get in Touch",
    subheading: "How can we help you today?",
    firstName: "Your First Name",
    lastName: "Your Last Name",
    email: "Enter Your Email Address",
    phone: "Enter your mobile number",
    country: "What country are you in",
    details: "Describe In More Detail",
    submit: "Submit",
    success: "Thank you! Your message has been submitted successfully.",
    error: "Failed to submit form. Please try again.",
  },
  formStyle = {},
  endpoint = "/api/contact",
  thankYouPage = "/thank-you",
}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setError("");

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.country ||
      !formData.message ||
      (labels.phone && !formData.phone)
    ) {
      setError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    if (labels.phone && formData.phone) {
      const phoneRegex =
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
      if (!phoneRegex.test(formData.phone)) {
        setError("Please enter a valid phone number.");
        setIsSubmitting(false);
        return;
      }
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || "Failed to submit form");
      }

      setSubmitStatus({ type: "success", message: labels.success });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      });
      setTimeout(() => router.push(thankYouPage), 2000);
    } catch (err) {
      setError(err.message || labels.error);
      setSubmitStatus({ type: "error", message: err.message || labels.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-4 md:py-8 bg-gray-50" style={formStyle}>
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#003D6E]">
            {labels.heading}
          </h2>
          <div className="h-0.5 w-16 bg-[#003D6E] mx-auto mb-2"></div>
          <p className="max-w-xl mx-auto text-gray-700 text-sm">
            {labels.subheading}
          </p>
        </div>

        <div className="bg-white p-3 md:p-4 rounded-lg shadow-md mb-4">
          <form
            className="max-w-lg mx-auto space-y-2 md:space-y-3"
            onSubmit={handleSubmit}
            style={formStyle}
            noValidate
          >
            {submitStatus && (
              <div
                className={`p-2 md:p-3 mb-2 rounded-md text-sm ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            {error && !submitStatus && (
              <div className="bg-red-50 text-red-600 p-2 rounded-md text-sm">
                {error}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={labels.firstName}
                  className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
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
                  className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
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
                className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                required
              />
            </div>
            {labels.phone && (
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={labels.phone}
                  className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                  required
                />
              </div>
            )}
            <div>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder={labels.country}
                className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={labels.details}
                className="w-full p-2 text-sm border border-gray-300 rounded-md h-20 focus:ring-[#003D6E] focus:border-[#003D6E] outline-none text-gray-700"
                required
              ></textarea>
            </div>
            <div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#003D6E] text-white py-2 px-4 rounded-md hover:bg-[#004d8a] transition-colors font-medium w-full text-sm ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? "Submitting..." : labels.submit}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
