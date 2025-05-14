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
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#003D6E] z-50 p-6 md:hidden flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <Link
                  href="/"
                  className="font-bold text-xl text-white"
                  style={titleStyle}
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-300"
                  aria-label="close menu"
                >
                  <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col space-y-6 text-center flex-grow justify-center">
                {filteredMenuItems.map((item, index) => (
                  <Link
                    key={`mobile-menu-${index}`}
                    href={item.href}
                    className="text-2xl text-white hover:text-gray-300 transition-colors py-2"
                    style={menuItemStyle}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="border-t border-white/30 pt-6 mt-6">
                  <p
                    className="text-xl text-gray-200 mb-4"
                    style={menuItemStyle}
                  >
                    Languages
                  </p>
                  <div className="flex flex-col space-y-4 items-center">
                    {languageLinks.map((link, index) => (
                      <Link
                        key={`mobile-lang-${index}`}
                        href={link.href}
                        className="text-lg text-white hover:text-gray-300 transition-colors"
                        style={menuItemStyle}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}