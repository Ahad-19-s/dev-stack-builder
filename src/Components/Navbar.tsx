import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4">
        {/* Desktop Navbar */}
        <div className="hidden items-center justify-between md:flex">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <img
                src={Logo}
                alt="Dev Stack Logo"
                className="h-12 w-21 object-contain "
              />
            </div>
          </div> 

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-medium text-gray-700 transition hover:text-pink-500"
            >
              Home
            </a>

            <a
              href="#"
              className="font-medium text-gray-700 transition hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#"
              className="font-medium text-gray-700 transition hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#"
              className="font-medium text-gray-700 transition hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#"
              className="font-medium text-gray-700 transition hover:text-pink-500"
            >
              Contact
            </a>
          </div>

          {/* Authentication Buttons */}
          <div className="flex items-center gap-4">
            <button className="font-medium text-gray-700 transition hover:text-pink-500">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 font-medium text-white transition hover:opacity-90">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex items-center justify-between md:hidden">
          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-gray-800"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Mobile Logo + Brand */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-sm font-bold text-white">
              D
            </div>

            <span className="font-bold text-gray-900">Dev Stack</span>
          </div>

          {/* Mobile Auth Buttons */}
          <div className="flex items-center gap-2">
            <button className="text-sm font-medium text-gray-700">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-1.5 text-sm font-medium text-white">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 flex flex-col gap-4 border-t border-gray-200 pt-4 md:hidden">
            <a
              href="#"
              className="font-medium text-gray-700 transition hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#"
              className="font-medium text-gray-700 transition hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Technologies
            </a>

            <a
              href="#"
              className="font-medium text-gray-700 transition hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="#"
              className="font-medium text-gray-700 transition hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#"
              className="font-medium text-gray-700 transition hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;