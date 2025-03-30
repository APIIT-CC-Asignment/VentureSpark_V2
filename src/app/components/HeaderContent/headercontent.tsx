'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuLink from '../MenuLink/MenuLink';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';

function HeaderContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`
      rounded fixed top-1 left-5 right-5 bg-white/90 backdrop-blur-md shadow-md z-50 border border-gray-200 transition-all duration-300 ease-in-out
      ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-1' : 'bg-white/90 backdrop-blur-md py-1'}
    `}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className="h-8 w-auto md:h-10"
            />
          </motion.a>

          {/* Centered Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <MenuLink />
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a
              href="/booking"
              className="px-4 py-2 rounded-2xl bg-green-600 text-white font-medium hover:bg-green-700 shadow-sm"
              whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(74, 222, 128, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Book a Session
            </motion.a>
            <motion.a
              href="/loginpage"
              className="p-2 rounded-full bg-gray-200 text-green-700 hover:bg-gray-300 shadow-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <FaUser className="h-5 w-5" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Centered Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-4 bg-white border-t border-gray-200">
              <div className="flex flex-col items-center w-full">
                <MenuLink mobile />
                <motion.a
                  href="/booking"
                  className="w-full max-w-xs px-6 py-3 rounded-full bg-green-600 text-white font-medium shadow-sm mt-4 text-center"
                  whileTap={{ scale: 0.98 }}
                >
                  Book a Session
                </motion.a>
                <motion.a
                  href="/login"
                  className="mt-4 p-3 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaUser className="h-6 w-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default HeaderContent;