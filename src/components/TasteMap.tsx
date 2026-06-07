/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CITIES, PRODUCTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowRight, ShieldCheck, ShoppingCart } from 'lucide-react';

export const TasteMap: React.FC = () => {
  const { language, addToCart, t } = useApp();
  const [selectedCityId, setSelectedCityId] = useState<string>('gariyadhar');

  const selectedCity = CITIES[selectedCityId] || CITIES.gariyadhar;
  
  // Find products associated with the actively selected city
  const cityProducts = PRODUCTS.filter((p) => p.origin === selectedCityId);

  return (
    <section id="map" className="py-24 bg-cream/30 dark:bg-neutral-900 border-y border-saffron/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-12 left-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-saffron/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-saffron dark:text-gold uppercase tracking-[0.25em] font-sans text-xs font-bold block">
            {language === 'gu' ? 'પરંપરાગત સ્વાદ સંશોધન' : language === 'hi' ? 'परंपरागत स्वाद अन्वेषण' : 'INTERACTIVE GASTRONOMY MAP'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 dark:text-cream">
            {t('tasteMapTitle')}
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 font-sans text-sm sm:text-base font-medium">
            {t('tasteMapSub')}
          </p>
          <div className="w-16 h-1 bg-saffron dark:bg-gold mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Map Column (7 grids) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-cream/50 dark:bg-neutral-900/60 rounded-3xl p-6 sm:p-8 border border-saffron/10 relative shadow-sm">
            
            {/* Quick Helper Indicator */}
            <div className="absolute top-4 left-4 bg-white/80 dark:bg-neutral-800/85 px-3 py-1.5 rounded-full border border-saffron/10 flex items-center gap-1.5 z-10">
              <span className="w-2.5 h-2.5 rounded-full bg-saffron animate-pulse" />
              <span className="text-[10px] font-sans font-bold uppercase text-neutral-600 dark:text-neutral-300">
                {language === 'gu' ? 'શહેર પર ક્લિક કરો' : language === 'hi' ? 'शहर पर क्लिक करें' : 'Click a marker to explore'}
              </span>
            </div>

            {/* Artistic Custom SVG Map Container */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center my-6">
              
              {/* Minimalist stylistic rendering of Gujarat's geometry */}
              <svg
                viewBox="0 0 500 375"
                className="absolute inset-0 w-full h-full text-beige dark:text-neutral-800 opacity-80"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              >
                {/* Saurashtra Contours (S) */}
                <path d="M 280 200 C 230 200, 160 210, 140 250 C 130 280, 180 320, 240 320 C 310 320, 310 250, 320 220 Z" className="text-beige/65 dark:text-neutral-800/70" />
                {/* Kutch Contours (NW) */}
                <path d="M 120 120 C 70 120, 50 170, 100 180 C 140 190, 220 160, 240 150 C 250 140, 200 120, 120 120 Z" className="text-beige/40 dark:text-neutral-800/50" strokeDasharray="3 3"/>
                {/* Central / East & North Gujarat (N & E) */}
                <path d="M 240 150 C 280 130, 320 80, 380 90 C 430 100, 410 180, 420 210 C 430 240, 360 260, 330 270 C 310 240, 280 200, 240 150 Z" className="text-beige/80 dark:text-neutral-800/80" />
                {/* South Gujarat (SE) */}
                <path d="M 330 270 C 350 280, 380 300, 390 350 C 340 360, 310 300, 330 270 Z" className="text-beige/50 dark:text-neutral-800/60" />
                
                {/* Coastlines & Gulf boundaries */}
                <path d="M 100 180 C 140 180, 150 210, 160 220 C 170 230, 220 230, 230 220" fill="none" stroke="#C65D00" strokeWidth="1" strokeDasharray="4 4" className="opacity-30" />
                <path d="M 310 250 C 290 280, 320 300, 330 270" fill="none" stroke="#C65D00" strokeWidth="1" strokeDasharray="4 4" className="opacity-30" />
              </svg>

              {/* Plotted Interactive Cities */}
              {Object.values(CITIES).map((city) => {
                const isActive = city.id === selectedCityId;
                return (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCityId(city.id)}
                    className="absolute z-20 group -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                    style={{ left: `${city.x}%`, top: `${city.y}%` }}
                  >
                    {/* Ring Pulse for active city */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-saffron animate-[ping_2s_infinite]" style={{ margin: '-8px' }} />
                    )}

                    {/* Node Dot */}
                    <div
                      className={`relative w-4.5 h-4.5 rounded-full border-2 shadow-md transition-all duration-300 ${
                        isActive
                          ? 'bg-saffron border-white scale-125 dark:bg-gold dark:border-neutral-900'
                          : 'bg-white border-saffron dark:bg-neutral-900 hover:scale-115'
                      }`}
                    >
                      {/* Inner gold core */}
                      <div className={`w-1.5 h-1.5 rounded-full m-auto absolute inset-0 ${isActive ? 'bg-white dark:bg-neutral-900' : 'bg-saffron/80'}`} />
                    </div>

                    {/* Custom Glowing pin label */}
                    <span
                      className={`absolute left-6 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md text-[10px] font-sans font-bold whitespace-nowrap border transition-all ${
                        isActive
                          ? 'bg-neutral-900 text-white border-neutral-900 opacity-100 scale-100'
                          : 'bg-white/90 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 border-saffron/10 opacity-0 group-hover:opacity-100 scale-95'
                      }`}
                    >
                      {city.name[language]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Legend tags */}
            <div className="flex flex-wrap gap-4 items-center justify-center pt-4 border-t border-saffron/10 text-[11px] font-sans font-semibold text-neutral-600 dark:text-neutral-305">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-beige border border-saffron/10" />
                <span>{language === 'gu' ? 'કચ્છ વિસ્તાર' : language === 'hi' ? 'कच्छ' : 'Kutch'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-beige/65 border border-saffron/10" />
                <span>{language === 'gu' ? 'સૌરાષ્ટ્ર સદ્ગુણી પ્રદેશ' : language === 'hi' ? 'सौराष्ट्र' : 'Saurashtra'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-beige/80 border border-saffron/10" />
                <span>{language === 'gu' ? 'મધ્ય / ઉત્તર ગુજરાત' : language === 'hi' ? 'मध्य/उत्तर गुजरात' : 'North-Central'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-beige/50 border border-saffron/10" />
                <span>{language === 'gu' ? 'દક્ષિણ ગુજરાત પટ્ટો' : language === 'hi' ? 'दक्षिण गुजरात' : 'South Gujarat'}</span>
              </div>
            </div>

          </div>

          {/* Lore/Product Column (5 grids) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-saffron/10 shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCity.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 flex-grow flex flex-col justify-between"
              >
                <div>
                  {/* City Ribbon */}
                  <div className="flex items-center gap-2 text-saffron dark:text-gold mb-2">
                    <MapPin className="w-5 h-5 flex-shrink-0 animate-bounce" />
                    <span className="font-serif text-xl font-bold tracking-wide">
                      {selectedCity.name[language]}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-saffron/10 dark:bg-gold/10 text-saffron dark:text-gold font-bold font-sans">
                      {language === 'gu' ? 'ધરોહર કેન્દ્ર' : language === 'hi' ? 'विरासत केंद्र' : 'Heritage Cell'}
                    </span>
                  </div>

                  {/* Regional lore story */}
                  <p className="font-sans text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed italic mb-6 border-l-2 border-saffron/40 pl-3">
                    {selectedCity.story[language]}
                  </p>

                  <div className="w-full h-[1px] bg-neutral-100 dark:bg-neutral-800 my-4" />

                  {/* Signature products heading */}
                  <span className="block text-xs font-bold text-neutral-600 dark:text-neutral-400 font-sans uppercase tracking-[0.15em] mb-4">
                    {language === 'gu' ? 'સ્થાનિક સ્પેશિયાલિટી ઉત્પાદન' : language === 'hi' ? 'स्थानीय विशिष्ट उत्पाद' : 'SIGNATURE LOCAL PRODUCTS'}
                  </span>

                  {/* Products Grid */}
                  <div className="space-y-4">
                    {cityProducts.map((prod) => (
                      <div
                        key={prod.id}
                        className="p-4 rounded-2xl bg-cream/30 dark:bg-neutral-900 border border-saffron/5 hover:border-saffron/20 transition-all flex gap-4 items-center"
                      >
                        {/* Elegant Branded Initials Text Badge */}
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-saffron/10 to-gold/5 dark:from-neutral-950 dark:to-neutral-900 flex-shrink-0 border border-saffron/10 flex flex-col items-center justify-center p-1.5 font-serif text-center relative select-none">
                          <span className="text-[10px] font-sans font-bold text-saffron dark:text-gold leading-none tracking-tighter scale-90">
                            પીરસો
                          </span>
                          <span className="text-xs font-black text-neutral-800 dark:text-cream leading-tight mt-0.5 line-clamp-2 uppercase">
                            {prod.name[language].slice(0, 3)}
                          </span>
                        </div>

                        {/* Product simple title & story */}
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-serif font-bold text-neutral-900 dark:text-cream text-sm truncate">
                              {prod.name[language]}
                            </h4>
                            <ShieldCheck className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                          </div>
                          <p className="font-sans text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 italic">
                            {prod.story[language]}
                          </p>
                          <span className="font-mono text-saffron dark:text-gold font-bold text-xs">
                            ₹{prod.price} <span className="text-[10px] text-neutral-400 font-sans">/ {prod.weight}</span>
                          </span>
                        </div>

                        {/* Add to Thaal quick action */}
                        <button
                          onClick={() => addToCart(prod, 1)}
                          className="p-2 rounded-full bg-saffron dark:bg-gold text-white dark:text-neutral-900 hover:scale-105 transition-transform flex-shrink-0"
                          aria-label="Add to cart"
                        >
                          <ShoppingCart className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    
                    {cityProducts.length === 0 && (
                      <div className="text-center py-6 text-xs font-sans text-neutral-400 italic">
                        {language === 'gu' ? 'આ શહેરની વાનગીઓ કમિંગ સૂન!' : language === 'hi' ? 'इस शहर के उत्पाद जल्द आ रहे हैं!' : 'More varieties arriving shortly!'}
                      </div>
                    )}
                  </div>
                </div>

                {/* Regional footer statement */}
                <div className="pt-6 border-t border-saffron/5 mt-6">
                  <a
                    href="#products"
                    className="inline-flex items-center gap-2 text-xs font-sans font-extrabold text-saffron dark:text-gold hover:underline transition-all"
                  >
                    <span>{language === 'gu' ? 'બધી વાનગીઓની યાદી જુઓ' : language === 'hi' ? 'सभी व्यंजनों की सूची देखें' : 'View full catalog of delicacies'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
