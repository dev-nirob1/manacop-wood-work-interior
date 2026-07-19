"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <nav className="bg-white w-full shadow-sm relative z-50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="block">
              <Image src="/logo.png" alt="Logo" width={70} height={50} priority />
            </Link>
          </div>
          {/* Center Links - hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-dark font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side: Contact button + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="rounded-sm px-5 py-2 text-white font-medium bg-linear-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>

            {/* Hamburger - mobile only */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-dark text-2xl"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-secondary/30 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-dark font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
