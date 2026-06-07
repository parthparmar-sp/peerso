/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Logo } from './Logo';
import { ShoppingBag, Heart, Sun, Moon, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenCart: () => void;
  onOpenWishlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart, onOpenWishlist }) => {
  const {
    language,
    setLanguage,
    cart,
    wishlist,
    darkMode,
    toggleDarkMode,
    t,
  } = useApp();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { name: { gu: 'વાર્તા', en: 'Story', hi: 'कहानी' }, href: '#story' },
    { name: { gu: 'સ્વાદ નકશો', en: 'Taste Map', hi: 'स्वाद मानचित्र' }, href: '#map' },
    { name: { gu: 'વિરાસત', en: 'Why-Us', hi: 'विरासत' }, href: '#why-us' },
    { name: { gu: 'અસલ સ્વાદ', en: 'Products', hi: 'उत्पाद' }, href: '#products' },
    { name: { gu: 'સુકાન', en: 'Founders', hi: 'संस्थापक' }, href: '#founders' },
    { name: { gu: 'સંપર્ક', en: 'Contact', hi: 'संपर्क' }, href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const languages = [
    { code: 'gu', name: 'ગુજરાતી' },
    { code: 'en', name: 'English' },
  ] as const;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 dark:bg-neutral-900/95 backdrop-blur-md shadow-sm border-b border-saffron/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="hover:opacity-90 transition-opacity">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="font-sans text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-saffron dark:hover:text-gold transition-colors duration-200 relative group"
            >
              {link.name[language]}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-saffron dark:bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Utility Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-saffron/5 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
              aria-label="Change Language"
            >
              <Globe className="w-5 h-5" />
              <span className="hidden sm:inline text-xs font-semibold uppercase">{language}</span>
            </button>

            <AnimatePresence>
              {langMenuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setLangMenuOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-36 rounded-xl bg-white dark:bg-neutral-800 shadow-xl border border-saffron/10 p-1 index z-20"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          language === lang.code
                            ? 'bg-saffron/10 text-saffron dark:bg-gold/10 dark:text-gold font-semibold'
                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-saffron/5 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5 text-earth" />}
          </button>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            className="p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-saffron/5 dark:hover:bg-neutral-800 transition-colors relative"
            aria-label="View Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white rounded-full text-[10px] flex items-center justify-center font-bold"
              >
                {wishlist.length}
              </motion.span>
            )}
          </button>

          {/* Cart / Thaal Button */}
          <button
            onClick={onOpenCart}
            className="p-2.5 rounded-full bg-saffron text-white hover:bg-saffron/90 dark:bg-gold dark:text-neutral-950 dark:hover:bg-gold/90 transition-colors relative flex items-center justify-center shadow-md shadow-saffron/10"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-4.5 h-4.5" />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5.5 h-5.5 bg-earth hover:scale-105 transition-transform text-white border-2 border-cream dark:border-neutral-900 rounded-full text-[10px] flex items-center justify-center font-bold"
              >
                {cartCount}
              </motion.span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-saffron/5"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cream dark:bg-neutral-900 border-b border-saffron/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-neutral-700 dark:text-neutral-300 hover:bg-saffron/5 dark:hover:bg-neutral-800 hover:text-saffron transition-all"
                >
                  {link.name[language]}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
