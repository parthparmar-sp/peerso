/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../context/AppContext';
import { Logo } from './Logo';
import { Instagram, Facebook, Linkedin, Youtube, Send, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t } = useApp();

  const footerLinks = [
    { name: { gu: 'મુખ્ય પૃષ્ઠ', en: 'Home', hi: 'मुख्य पृष्ठ' }, href: '#hero' },
    { name: { gu: 'અમારી સ્વાદ સફર', en: 'Our Story', hi: 'हमारी कहानी' }, href: '#story' },
    { name: { gu: 'ગુજરાત નકશો', en: 'Taste Map', hi: 'स्वाद मानचित्र' }, href: '#map' },
    { name: { gu: 'અસલ સ્વાદ પેકેટો', en: 'Products', hi: 'उत्पाद भंडार' }, href: '#products' },
    { name: { gu: 'આયોજકો', en: 'Founders', hi: 'संस्थापक' }, href: '#founders' },
    { name: { gu: 'સંપર્ક કરો', en: 'Contact', hi: 'संपर्क' }, href: '#contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-saffron/10 pt-20 pb-12 font-sans relative overflow-hidden">
      
      {/* Visual top border golden bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-saffron via-gold to-earth" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Logo column (5 grids) */}
          <div className="md:col-span-5 space-y-6">
            <Logo />
            
            {/* Tagline quote */}
            <p className="font-serif italic text-base sm:text-lg text-neutral-800 dark:text-neutral-200 font-bold border-l-4 border-saffron pl-4">
              "{t('tagline')}"
            </p>

            <p className="font-sans text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed font-semibold">
              {t('footerText')}
            </p>

            {/* Social media connections */}
            <div className="flex items-center gap-4">
              <a href="#social-insta" className="p-2 w-10 h-10 rounded-full border border-saffron/10 hover:border-saffron hover:bg-saffron/5 hover:scale-105 text-neutral-600 dark:text-neutral-300 hover:text-saffron transition-all flex items-center justify-center">
                <Instagram className="w-5 h-5 stroke-[1.65]" />
              </a>
              <a href="#social-fb" className="p-2 w-10 h-10 rounded-full border border-saffron/10 hover:border-saffron hover:bg-saffron/5 hover:scale-105 text-neutral-600 dark:text-neutral-300 hover:text-saffron transition-all flex items-center justify-center">
                <Facebook className="w-5 h-5 stroke-[1.65]" />
              </a>
              <a href="#social-ln" className="p-2 w-10 h-10 rounded-full border border-saffron/10 hover:border-saffron hover:bg-saffron/5 hover:scale-105 text-neutral-600 dark:text-neutral-300 hover:text-saffron transition-all flex items-center justify-center">
                <Linkedin className="w-5 h-5 stroke-[1.65]" />
              </a>
              <a href="#social-yt" className="p-2 w-10 h-10 rounded-full border border-saffron/10 hover:border-saffron hover:bg-saffron/5 hover:scale-105 text-neutral-600 dark:text-neutral-300 hover:text-saffron transition-all flex items-center justify-center">
                <Youtube className="w-5 h-5 stroke-[1.65]" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 grids) */}
          <div className="md:col-span-3 space-y-5">
            <h3 className="font-serif font-extrabold text-sm sm:text-base text-neutral-900 dark:text-cream uppercase tracking-wider">
              {language === 'gu' ? 'વિભાગો' : language === 'hi' ? 'नेविगेशन' : 'Navigation Links'}
            </h3>
            
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 hover:text-saffron dark:hover:text-gold transition-colors duration-250 font-semibold"
                  >
                    {link.name[language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column (4 grids) */}
          <div className="md:col-span-4 space-y-5">
            <h3 className="font-serif font-extrabold text-sm sm:text-base text-neutral-900 dark:text-cream uppercase tracking-wider">
              {language === 'gu' ? 'વરસોડા ન્યુઝલેટર' : 'SUBSCRIBE TO THE LORE'}
            </h3>
            
            <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-semibold">
              {language === 'gu'
                ? 'જ્યારે તમારા મનપસંદ જિલ્લાની નવી ગરમાગરમ મોસમ અને વાનગીઓ લોંચ થાય, ત્યારે સૌથી પહેલા જાણવા સબ્સ્ક્રાઇબ કરો.'
                : 'Subscribe to be alerted when ancestral recipes are freshly packed from Bhavnagar, Rajkot, and Khambhat.'}
            </p>

            {/* Newsletter input layout */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="noble.gujarati@domain.com"
                className="flex-grow px-4.5 py-2.5 rounded-xl border border-saffron/10 bg-cream/10 dark:bg-neutral-900 text-xs text-neutral-800 dark:text-cream placeholder-neutral-400"
              />
              <button className="p-2.5 rounded-xl bg-saffron dark:bg-gold text-white dark:text-neutral-950 flex items-center justify-center">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Outer bottom copyright panel */}
        <div className="mt-16 pt-8 border-t border-saffron/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-neutral-500 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} Piraso Inc. Sourced globally, crafted lovingly. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Preserving heritage with</span> <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> <span>in Gujarat</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
