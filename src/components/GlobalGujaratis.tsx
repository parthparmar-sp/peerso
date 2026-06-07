/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../context/AppContext';
import { GLOBAL_ROUTES } from '../data';
import { motion } from 'motion/react';
import { Box, Send, Clock, UserCheck } from 'lucide-react';

export const GlobalGujaratis: React.FC = () => {
  const { language, t } = useApp();

  return (
    <section className="py-24 bg-cream/30 dark:bg-neutral-900 overflow-hidden relative border-t border-saffron/10">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-saffron/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-saffron dark:text-gold uppercase tracking-[0.25em] font-sans text-xs font-bold block">
              {language === 'gu' ? 'વૈશ્વિક અસ્મિતા' : language === 'hi' ? 'वैश्विक अस्मिता' : 'DIASPORA DELIVERY NETWORK'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 dark:text-cream leading-tight">
              {t('worldHeadline')}
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 font-sans text-sm sm:text-base font-medium max-w-2xl">
              {t('worldSub')}
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-end">
            {/* Quick stats board */}
            <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-saffron/15 shadow-md text-center">
              <span className="block text-4xl font-mono font-bold text-saffron dark:text-gold">૧,૪૨,૦૦૦+</span>
              <span className="text-xs font-sans text-neutral-500 dark:text-neutral-400 font-extrabold uppercase mt-1 block">
                {language === 'gu' ? 'પેકેટો સપ્લાય કર્યા' : 'Packages Delivered Safely'}
              </span>
            </div>
          </div>
        </div>

        {/* Global Maps Representation */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: World Outline visualization using CSS & styled maps */}
          <div className="lg:col-span-5 bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-3xl border border-saffron/10 shadow-lg space-y-6">
            <span className="text-xs font-bold text-neutral-600 dark:text-neutral-400 font-sans uppercase tracking-[0.15em] block">
              {language === 'gu' ? 'રૂટ્સ ટ્રેકિંગ વિગતો' : 'DIASPORA CONCERN STATS'}
            </span>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-sans font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  <span>{language === 'gu' ? 'ઉત્તર અમેરિકા (USA & Canada)' : 'North America (USA & Canada)'}</span>
                  <span className="text-saffron dark:text-gold">44%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-neutral-100 dark:bg-neutral-800">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '44%' }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="h-full rounded-full bg-saffron dark:bg-gold" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-sans font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  <span>{language === 'gu' ? 'યુનાઇટેડ કિંગડમ (UK)' : 'United Kingdom (UK)'}</span>
                  <span className="text-saffron dark:text-gold">28%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-neutral-100 dark:bg-neutral-800">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '28%' }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="h-full rounded-full bg-saffron dark:bg-gold" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-sans font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  <span>{language === 'gu' ? 'મધ્ય પૂર્વ (UAE & GCC)' : 'Middle East (UAE & GCC)'}</span>
                  <span className="text-saffron dark:text-gold">16%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-neutral-100 dark:bg-neutral-800">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '16%' }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="h-full rounded-full bg-saffron dark:bg-gold" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-sans font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  <span>{language === 'gu' ? 'ઓસ્ટ્રેલિયા અને પ્રશાંત દેશો' : 'Australia & East Asia'}</span>
                  <span className="text-saffron dark:text-gold">12%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-neutral-100 dark:bg-neutral-800">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '12%' }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="h-full rounded-full bg-saffron dark:bg-gold" />
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-orange-50 dark:bg-neutral-900/60 font-sans text-xs text-neutral-600 dark:text-neutral-400 space-y-2 border border-saffron/10 mb-4">
              <p className="font-bold text-saffron dark:text-gold">✈️ Customs & Duty Handled Directly:</p>
              <p>{language === 'gu' ? 'તમામ વિદેશી ઓર્ડર્સ સંપૂર્ણ ડ્યુટી-પેડ અને એન્ટિ-ભેજ બોક્સ પેકીંગમાં સલામત મોકલવામાં આવે છે.' : 'All goods ship with pre-cleared custom sheets, complete vacuum sealing, and fully insulated food containers.'}</p>
            </div>
          </div>

          {/* Right panel: Route Lists */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {GLOBAL_ROUTES.map((route, idx) => (
              <motion.div
                key={route.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-5 sm:p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-saffron/5 hover:border-saffron/20 transition-all shadow-sm flex items-start gap-4"
              >
                <span className="text-3xl select-none" role="img" aria-label={route.country}>
                  {route.flag}
                </span>

                <div className="space-y-2 flex-grow">
                  <div className="flex justify-between items-center">
                    <h3 className="font-serif font-bold text-sm sm:text-base text-neutral-900 dark:text-cream">
                      {route.country}
                    </h3>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-saffron dark:text-gold bg-saffron/5 dark:bg-gold/5 px-2.5 py-0.5 rounded-full border border-saffron/5">
                      {route.deliveryTime}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-sans text-neutral-500 dark:text-neutral-400">
                    <div className="flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5 text-saffron/60 dark:text-gold/60 flex-shrink-0" />
                      <span>{route.customers}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Send className="w-3.5 h-3.5 text-saffron/60 dark:text-gold/60 flex-shrink-0" />
                      <span className="truncate">{route.port.split(',')[0]}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
