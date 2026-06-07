/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../context/AppContext';
import { WHY_ITEMS } from '../data';
import { ShieldCheck, Store, PackageCheck, Globe, Heart, Users } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap: Record<string, any> = {
  ShieldCheck: ShieldCheck,
  Store: Store,
  PackageCheck: PackageCheck,
  Globe: Globe,
  Heart: Heart,
  Users: Users,
};

export const WhyPiraso: React.FC = () => {
  const { language, t } = useApp();

  return (
    <section id="why-us" className="py-24 bg-cream/5 lg:py-32 relative overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-saffron dark:text-gold uppercase tracking-[0.25em] font-sans text-xs font-bold block">
            {language === 'gu' ? 'ગુણવત્તા અને આસ્થા' : language === 'hi' ? 'गुणवत्ता और आस्था' : 'TRUST & CONSERVATION'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 dark:text-cream leading-tight">
            {t('whyTitle')}
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-base sm:text-lg font-sans font-medium">
            {t('whySubtitle')}
          </p>
          <div className="w-16 h-1 bg-saffron dark:bg-gold mx-auto rounded-full mt-6" />
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_ITEMS.map((item, idx) => {
            const IconComponent = iconMap[item.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative p-8 rounded-3xl bg-white dark:bg-neutral-900 bg-gradient-to-br from-white to-cream/20 dark:from-neutral-800 dark:to-neutral-900 border border-saffron/5 dark:border-neutral-800 hover:border-saffron/20 dark:hover:border-gold/30 hover:shadow-xl dark:shadow-neutral-950/40 transition-all duration-300"
              >
                {/* Accent Corner Sparkle */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-saffron/10 to-transparent dark:from-gold/10 rounded-tr-3xl transition-opacity opacity-0 group-hover:opacity-100" />

                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-saffron/10 dark:bg-gold/10 flex items-center justify-center text-saffron dark:text-gold mb-6 group-hover:bg-saffron group-hover:text-white dark:group-hover:bg-gold dark:group-hover:text-neutral-950 transition-colors duration-300">
                  {IconComponent && <IconComponent className="w-6 h-6 stroke-[1.75]" />}
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-cream mb-4 group-hover:text-saffron dark:group-hover:text-gold transition-colors">
                  {item.title[language]}
                </h3>
                <p className="font-sans text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed font-semibold">
                  {item.desc[language]}
                </p>
                
                {/* Underline check indicator */}
                <div className="mt-6 flex items-center gap-1.5 text-xs text-saffron dark:text-gold font-bold font-sans tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>✓ {language === 'gu' ? 'પ્રમાણિત વારસો' : language === 'hi' ? 'प्रमाणित' : 'Verified Standard'}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};
