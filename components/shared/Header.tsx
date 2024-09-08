'use client';
import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="text-white hover:text-gray-300">Vulnerability Alerts</a>
        </div>

        {/* Nav Links (Hidden on small screens) */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-gray-300" aria-current="page">Home</a>
          <a href="/about" className="hover:text-gray-300">About Us</a>
          <a href="/vulnerabilities" className="hover:text-gray-300">Vulnerabilities</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </nav>

        {/* CTA Button */}
        <a
          href="/signup"
          className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Get Alerts
        </a>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none" 
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {!isOpen ? <HiOutlineMenu className="h-8 w-8" /> : <HiOutlineX className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible when open) */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-white p-4 space-y-4">
          <a href="/" className="block hover:text-gray-300">Home</a>
          <a href="/about" className="block hover:text-gray-300">About Us</a>
          <a href="/vulnerabilities" className="block hover:text-gray-300">Vulnerabilities</a>
          <a href="/contact" className="block hover:text-gray-300">Contact</a>
          <a
            href="/signup"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Get Alerts
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
