"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen) {
        const target = e.target as HTMLElement;
        if (!target.closest("#navbar-menu")) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="bg-gray-800 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-violet-500">
            <Link href="/">MyPortfolio</Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/About" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/Project" className="text-gray-300 hover:text-white">
              Projects
            </Link>
            <Link href="/Contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              id="menu-toggle"
              className="text-gray-300 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
            >
              <svg
                className={`w-6 h-6 transform transition-transform duration-300  ${
                  isOpen ? "rotate-60" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
       
      <div
        id="navbar-menu"
        className={`absolute top-16 left-0 w-full bg-gray-800 text-gray-200 overflow-hidden shadow-md transition-all duration-300 ease-in-out transform ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <Link
          href="#about"
          className="block px-4 py-2 text-gray-300 hover:text-white"
        >
          About
        </Link>
        <Link
          href="#skills"
          className="block px-4 py-2 text-gray-300 hover:text-white"
        >
          Skills
        </Link>
        <Link
          href="#experience"
          className="block px-4 py-2 text-gray-300 hover:text-white"
        >
          Experience
        </Link>
        <Link
          href="#projects"
          className="block px-4 py-2 text-gray-300 hover:text-white"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="block px-4 py-2 text-gray-300 hover:text-white"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
