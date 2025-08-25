"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="max-w-9xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Reshami Group of Institutions
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-6 items-center">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-gray-300 transition">
            About Us
          </Link>

          <Link href="/about" className="hover:text-gray-300 transition">
            Course
          </Link>

          <Link href="/about" className="hover:text-gray-300 transition">
            Admission
          </Link>

          <Link href="/about" className="hover:text-gray-300 transition">
            Faculty
          </Link>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-1 hover:text-gray-300 transition"
            >
              <span>Facilities</span>
              <FiChevronDown className="text-lg" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
                <Link
                  href="/services"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Library
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Leboratory
                </Link>
                <Link
                  href="/services"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Computer Education
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Sport's
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:text-gray-300 transition">
            Media
          </Link>

          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
