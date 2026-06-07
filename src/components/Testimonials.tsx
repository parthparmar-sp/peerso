/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../context/AppContext';
import { TESTIMONIALS } from '../data';
import { motion } from 'motion/react';
import { Quote, Heart, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { language } = useApp();

  return (
    <section className="py-24 bg-cream/5 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-earth/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-saffron dark:text-gold uppercase tracking-[0.25em] font-sans text-xs font-bold block">
            {language === 'gu' ? 'મીઠા પ્રતિભાવો' : language === 'hi' ? 'प्यारे संदेश' : 'HEARTWARMING REVIEWS'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 dark:text-cream leading-tight">
            {language === 'gu' ? 'પીરસો પરિવારના પત્રો' : language === 'hi' ? 'पिरासो परिवार के आत्मीय संदेश' : 'Letters From Our Global Family'}
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 font-sans text-sm sm:text-base font-medium">
            {language === 'gu'
              ? 'વતન અને ધૂળથી હજારો કિલોમીટર દૂર બેઠા પછી પણ સાચો સ્વાદ મહેસૂસ કરતા મુક્ત કંઠે પ્રશંસા પત્રો.'
              : 'Nostalgic, tearful, and joyful reviews from families who found the taste of local streets once again.'}
          </p>
          <div className="w-16 h-1 bg-saffron dark:bg-gold mx-auto rounded-full mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-saffron/10 hover:border-saffron/30 dark:hover:border-gold/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-stretch"
            >
              
              {/* Card Header quoting */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-gold gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-saffron/20 dark:text-gold/20" />
                </div>

                {/* Testimonial Quote */}
                <p className="font-sans text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed italic font-medium">
                  "{review.text[language]}"
                </p>
              </div>

              {/* Card Footer profile info */}
              <div className="pt-6 border-t border-saffron/5 mt-6 flex items-center justify-between gap-2">
                <div>
                  <h4 className="font-serif font-extrabold text-neutral-900 dark:text-cream text-base group-hover:text-saffron transition-colors">
                    {review.name}
                  </h4>
                  <span className="text-xs font-sans font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest block">
                    {review.location[language]}
                  </span>
                </div>

                {/* Miniature badge related to the product */}
                <div className="px-3 py-1.5 rounded-lg bg-saffron/5 dark:bg-gold/5 border border-saffron/10 dark:border-gold/25 max-w-[125px]">
                  <span className="text-[10px] font-sans font-bold text-saffron dark:text-gold uppercase block truncate">
                    {review.productName[language]}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Global statement card */}
        <div className="mt-16 text-center max-w-xl mx-auto p-4 rounded-2xl bg-saffron/5 dark:bg-gold/5 border border-saffron/10 border-dashed">
          <p className="font-sans text-xs text-neutral-600 dark:text-neutral-300 font-bold flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>Over 12,000 hand-written postcards received at our headquarters.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
