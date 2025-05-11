"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer({ 
  logoText = "UK Visa Help Consultants",
  logoTextStyle = {},
  tagline = "Leading UK visa consultancy with a panel of expert advisors specializing in visa and settlement applications",
  taglineStyle = {},
  quickLinksTitle = "Quick Links",
  quickLinksTitleStyle = {},
  servicesTitle = "Services",
  servicesTitleStyle = {},
  contactTitle = "Contact Us",
  contactTitleStyle = {},
  footerStyle = {},
  copyrightStyle = {},
  quickLinks = [
    { href: "/", label: "English" },
    { href: "/bengali", label: "Bengali" },
    { href: "/urdu", label: "Urdu" },
    { href: "/punjabi", label: "Punjabi" },
    { href: "/hindi", label: "Hindi" },
    { href: "/farsi", label: "Farsi" },
    { href: "/dari", label: "Dari" }
  ],
  serviceLinks = [
    { href: "#services", label: "Family Visas" },
    { href: "#services", label: "Work Visas" },
    { href: "#services", label: "Student Visas" },
    { href: "#services", label: "Settlement Applications" }
  ],
  contactInfo = [
    "London, United Kingdom",
    "Phone: +44 123 456 7890",
    "Email: info@ukvisahelp.com"
  ],
  copyright = "UK Visa Help Consultants. All rights reserved."
}) {
  return (
    <footer className="bg-[#003D6E] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div style={footerStyle}>
            <div className="bg-gray-700 w-[150px] h-[80px] rounded flex items-center justify-center mb-4">
              <p className="text-gray-300">Logo (150x80px)</p>
            </div>
            <h3 className="font-bold text-lg mb-4" style={logoTextStyle}>{logoText}</h3>
            <p className="text-gray-300 text-sm" style={taglineStyle}>
              {tagline}
            </p>
          </div>
          
          <div style={footerStyle}>
            <h3 className="font-bold text-lg mb-4" style={quickLinksTitleStyle}>{quickLinksTitle}</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div style={footerStyle}>
            <h3 className="font-bold text-lg mb-4" style={servicesTitleStyle}>{servicesTitle}</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div style={footerStyle}>
            <h3 className="font-bold text-lg mb-4" style={contactTitleStyle}>{contactTitle}</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {contactInfo.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-300 text-sm">
          <p style={copyrightStyle}>&copy; {new Date().getFullYear()} {copyright}</p>
        </div>
      </div>
    </footer>
  );
}