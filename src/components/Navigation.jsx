"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { FadeIn } from "./animations";

export default function Navigation({
  title = "UK Visa Help Consultants",
  titleStyle = {},
  menuItems = [
    { href: "#services", label: "Services" },
    { href: "#how-we-work", label: "How We Work" },
    { href: "/contact", label: "Contact" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
  menuItemStyle = {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Filter menu items based on current page
  const filteredMenuItems = menuItems.filter((item) => {
    if (
      !isHomePage &&
      (item.href === "/#services" || item.href === "/#how-we-work")
    ) {
      return false;
    }
    return true;
  });

  const languageLinks = [
    { href: "/", label: "English" },
    { href: "/hindi", label: "Hindi" },
    { href: "/urdu", label: "Urdu" },
    { href: "/farsi", label: "Farsi" },
    { href: "/punjabi", label: "Punjabi" },
    { href: "/dari", label: "Dari" },
    { href: "/pashto", label: "Pashto" },
    { href: "/bengali", label: "Bengali" },
    { href: "/arabic", label: "Arabic" },
  ];

  return (
    <header className="bg-[#003D6E] text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-bold text-xl md:text-2xl"
            style={titleStyle}
          >
            {title}
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {filteredMenuItems.map((item, index) => (
              <Link
                key={`menu-${index}`}
                href={item.href}
                className="hover:text-gray-300 transition-colors"
                style={menuItemStyle}
              >
                {item.label}
              </Link>
            ))}

            <div className="relative group">
              <button
                className="hover:text-gray-300 transition-colors py-2"
                style={menuItemStyle}
              >
                Languages ▼
              </button>
              <div className="absolute right-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white rounded-md shadow-lg py-1">
                  {languageLinks.map((link, index) => (
                    <Link
                      key={`lang-${index}`}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003D6E]"
                      style={menuItemStyle}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <FadeIn className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {filteredMenuItems.map((item, index) => (
                <Link
                  key={`mobile-menu-${index}`}
                  href={item.href}
                  className="text-gray-700 hover:text-[#003D6E] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="border-t border-white/20 pt-4">
                <p className="text-sm text-gray-300 mb-2" style={menuItemStyle}>
                  Languages
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {languageLinks.map((link, index) => (
                    <Link
                      key={`mobile-lang-${index}`}
                      href={link.href}
                      className="text-sm hover:text-gray-300 transition-colors"
                      style={menuItemStyle}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </header>
  );
}