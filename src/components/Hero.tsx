/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language, t } = useApp();

  // Floating elements to represent spices / gold elements
  const floatingSpices = [
    { name: 'Saffron Thread', color: 'bg-saffron', size: 'w-1 h-8 rounded-full', top: '15%', left: '10%', delay: 0, duration: 12, rotate: 45 },
    { name: 'Saffron Thread 2', color: 'bg-saffron', size: 'w-1.5 h-6 rounded-full', top: '45%', left: '85%', delay: 1, duration: 15, rotate: -30 },
    { name: 'Fennel Seed', color: 'bg-emerald-600/30', size: 'w-2 h-4 rounded-xl', top: '75%', left: '15%', delay: 3, duration: 18, rotate: 90 },
    { name: 'Cardamom', color: 'bg-yellow-600/25', size: 'w-4 h-6 rounded-full', top: '25%', left: '75%', delay: 2, duration: 14, rotate: 15 },
    { name: 'Gold Flake', color: 'bg-gold/40', size: 'w-3 h-3 rotate-45', top: '60%', left: '8%', delay: 4, duration: 10, rotate: 60 },
    { name: 'Gold Flake 2', color: 'bg-gold/30', size: 'w-2 h-2 rounded-full', top: '80%', left: '80%', delay: 0.5, duration: 11, rotate: 0 },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream dark:bg-neutral-950 pt-20"
    >
      {/* Cinematic Hero Image Overlay Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/piraso_hero_banner_1780821456695.png"
          alt="Piraso traditional food thali styling"
          className="w-full h-full object-cover object-right opacity-90 dark:opacity-75"
          referrerPolicy="no-referrer"
        />
        {/* Subtle, luxury gradients to fade image cleanly into text content */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent dark:from-neutral-950 dark:via-neutral-950/80 dark:to-transparent lg:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/90 to-cream dark:from-neutral-950/40 dark:via-neutral-950/90 dark:to-neutral-950 lg:hidden block" />
      </div>

      {/* Floating Spices Animation Container */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {floatingSpices.map((spice, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${spice.color} ${spice.size} backdrop-blur-xs`}
            style={{ top: spice.top, left: spice.left, rotate: `${spice.rotate}deg` }}
            animate={{
              y: [0, -25, 25, 0],
              x: [0, 15, -15, 0],
              rotate: [spice.rotate, spice.rotate + 360],
            }}
            transition={{
              duration: spice.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: spice.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-24">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Saffron Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-saffron/15 dark:bg-gold/15 border border-saffron/20 dark:border-gold/35 mb-6"
          >
            <Sparkles className="w-4 h-4 text-saffron dark:text-gold" />
            <span className="text-xs font-bold text-saffron dark:text-gold uppercase tracking-[0.16em] font-sans">
              "અસલ જગ્યાએથી, આપના થાળ સુધી."
            </span>
          </motion.div>

          {/* Core Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-neutral-900 dark:text-cream leading-[1.20] sm:leading-[1.15] mb-6"
          >
            {language === 'gu' ? (
              <>
                ગુજરાતના ખૂણે ખૂણેથી,
                <br />
                <span className="text-saffron dark:text-gold">અસલ સ્વાદ</span> હવે આપના ઘરે.
              </>
            ) : language === 'hi' ? (
              <>
                गुजरात के कोने-कोने से,
                <br />
                <span className="text-saffron dark:text-gold">असली स्वाद</span> अब आपके घर।
              </>
            ) : (
              <>
                From Every Corner,
                <br />
                <span className="text-saffron dark:text-gold">Authentic Taste</span> Direct to You.
              </>
            )}
          </motion.h1>

          {/* Subheadline description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-10 font-sans font-medium"
          >
            {t('heroSubheadline')}
          </motion.p>

          {/* Action trigger tags */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            {/* Primary explore btn */}
            <button
              onClick={(e) => handleScrollTo(e, '#products')}
              className="px-8 py-4 rounded-xl bg-saffron hover:bg-saffron/90 dark:bg-gold dark:text-neutral-950 dark:hover:bg-gold/90 text-white font-sans font-bold text-base transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-saffron/10 cursor-pointer"
            >
              {t('exploreProducts')}
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary story btn */}
            <button
              onClick={(e) => handleScrollTo(e, '#story')}
              className="px-8 py-4 rounded-xl bg-white/20 dark:bg-white/5 border-2 border-saffron/30 dark:border-neutral-700/50 hover:bg-saffron/5 dark:hover:bg-white/10 text-neutral-800 dark:text-cream font-sans font-bold text-base transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              {t('ourStory')}
            </button>
          </motion.div>

          {/* Delivery quick banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-saffron/20 dark:border-neutral-800"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 font-sans">
                {language === 'gu' ? 'મુખ્ય જિલ્લાઓ પ્રમાણિત' : language === 'hi' ? 'मुख्य जिले प्रमाणित' : 'Pure Origin Certified'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 font-sans">
                {language === 'gu' ? 'વૈશ્વિક ૨૪૦+ શહેરો કાર્યરત' : language === 'hi' ? 'वैश्विक २४०+ शहर' : 'Global Express Shipping'}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
