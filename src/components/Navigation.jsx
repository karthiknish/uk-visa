"use client";

import Link from "next/link";

export default function Navigation({ 
  title, 
  titleStyle, 
  menuItems = [
    { href: "#services", label: "Services" },
    { href: "#how-we-work", label: "How We Work" },
    { href: "#contact", label: "Contact" }
  ],
  menuItemStyle
}) {
  const languageLinks = [
    { href: "/", label: "English" },
    { href: "/bengali", label: "Bengali" },
    { href: "/urdu", label: "Urdu" },
    { href: "/punjabi", label: "Punjabi" },
    { href: "/hindi", label: "Hindi" },
    { href: "/farsi", label: "Farsi" },
    { href: "/dari", label: "Dari" },
    { href: "/arabic", label: "Arabic" }
  ];

  return (
    <header className="primary-bg text-white py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="font-bold text-2xl" style={titleStyle}>{title}</div>
        <nav className="hidden md:flex space-x-6">
          {languageLinks.map((link, index) => (
            <Link 
              key={`lang-${index}`} 
              href={link.href} 
              className="hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
          {menuItems.map((item, index) => (
            <Link 
              key={`menu-${index}`} 
              href={item.href} 
              className="hover:text-gray-300"
              style={menuItemStyle}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}