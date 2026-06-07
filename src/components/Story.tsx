/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const Story: React.FC = () => {
  const { language } = useApp();

  return (
    <section id="story" className="py-24 bg-cream/30 dark:bg-neutral-900/60 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-earth/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Section Illustrated Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800">
              <img
                src="/images/traditional_gujarati_kitchen_1780821639422.png"
                alt="Nostalgic traditional Gujarati village kitchen with warm mornings"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Overlay Quote Badge */}
            <div className="absolute -bottom-6 -right-6 bg-saffron text-white p-6 rounded-2xl shadow-xl max-w-xs border-2 border-cream flex gap-3">
              <Quote className="w-8 h-8 text-gold flex-shrink-0" />
              <p className="font-serif italic text-sm text-cream leading-relaxed">
                {language === 'gu'
                  ? '“બપોરની થાળીમાં વતનના ગાંઠિયાનો એક કટકો, સાત સમંદર પારના ઘરને પણ ગુજરાત બનાવી દે છે.”'
                  : language === 'hi'
                  ? '“थाली में वतन के गांठिया का एक टुकड़ा, सात समंदर पार भी मन को हमेशा गुजरात में रखता है।”'
                  : '“A tiny crumb of authentic home farsan can shorten a distance of ten thousand miles in an instant.”'}
              </p>
            </div>
          </motion.div>

          {/* Core Story text with translations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-saffron dark:text-gold uppercase tracking-[0.2em] font-sans text-xs font-bold block">
                {language === 'gu' ? 'ઓરિજિન કનેક્ટ' : language === 'hi' ? 'मूल से जुड़ाव' : 'THE PIRASO INCEPTION'}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 dark:text-cream">
                {language === 'gu' ? 'એક વિચારથી શરૂઆત...' : language === 'hi' ? 'एक विचार से शुरुआत...' : 'It All Started with a Vision...'}
              </h2>
            </div>

            <div className="font-sans text-neutral-700 dark:text-neutral-300 space-y-6 text-base sm:text-lg leading-relaxed font-medium">
              {language === 'gu' ? (
                <>
                  <p className="border-l-4 border-saffron pl-4 italic text-neutral-800 dark:text-neutral-200">
                    "એક સવારે, ગારિયાધારની અસલ મીઠી કાળીનો આસ્વાદ માણતી વખતે મનમાં એક સવાલ ઉઠ્યો:"
                  </p>
                  <p className="font-serif text-xl sm:text-2xl text-earth dark:text-gold font-bold py-2">
                    વતનથી દૂર વસતા ગુજરાતીઓએ સ્વાદ અને શુદ્ધતા સાથે શા માટે બાંધછોડ કરવી પડે?
                  </p>
                  <p>
                    જો લંડનમાં બેઠેલા કોઈ ભાઈને રંઘોળાની ફૂલવડી ખાવી હોય... જો ટોરોન્ટોમાં કોઈ સ્નેહીને ભાવનગરના જીવંત ગાંઠિયા યાદ આવતા હોય... જો સિડનીમાં કોઈ બહેન ખંભાતના અસલ હલવાસન માટે ઝૂરતા હોય...
                  </p>
                  <p className="font-bold text-saffron dark:text-cream">
                    તો તેમને સ્થાનિક બજારોમાં મળતા સામાન્ય અથવા ડુપ્લિકેટ પેકેટોથી શા માટે સંતોષ માનવો પડે?
                  </p>
                  <p>
                    બસ, એ જ ક્ષણે <strong>પીરસો</strong>નો જન્મ થયો. આજે પીરસો ગુજરાતના નાના કસ્બાઓના અસલ પરંપરાગત પેઢી દર પેઢીના બળવાન કારીગરોને સીધા જ વૈશ્વિક ગુજરાતીઓ સાથે જોડે છે. અસલ સ્વાદ સીધો જ આપના થાળ સુધી.
                  </p>
                </>
              ) : language === 'hi' ? (
                <>
                  <p className="border-l-4 border-saffron pl-4 italic text-neutral-800 dark:text-neutral-200">
                    "एक सुबह, गारियाधार की असली मीठी काली का स्वाद लेते हुए मन में एक सवाल उठा:"
                  </p>
                  <p className="font-serif text-xl sm:text-2xl text-earth dark:text-gold font-bold py-2">
                    वतन से दूर रहने वाले गुजरातियों को स्वाद और शुद्धता के साथ समझौता क्यों करना पड़े?
                  </p>
                  <p>
                    यदि लंदन में बैठे किसी भाई को रंगहोला की चटपटी फुलवड़ी याद आए... टोरंटो में किसी को भावनगरी गांठिया की याद सताए... या सिडनी में कोई खंभात के असली हलवासन के लिए तरसे...
                  </p>
                  <p className="font-bold text-saffron dark:text-cream">
                    तो उन्हें रसायनों से भरे साधारण या नकली पैकेटों से संतोष क्यों करना पड़े?
                  </p>
                  <p>
                    बस, उसी पल <strong>पिरासो</strong> का विचार मन में आया। आज पिरासो गुजरात के छोटे कस्बों के असली और प्रामाणिक कारीगरों को पूरी दुनिया में फैले गुजरातियों से जोड़ता है।
                  </p>
                </>
              ) : (
                <>
                  <p className="border-l-4 border-saffron pl-4 italic text-neutral-800 dark:text-neutral-200">
                    "One morning, while enjoying authentic Kali sweet from Gariyadhar village, a central question emerged:"
                  </p>
                  <p className="font-serif text-xl sm:text-2xl text-earth dark:text-gold font-bold py-2">
                    Why should Gujaratis living far from home have to compromise on true heritage, taste, and purity?
                  </p>
                  <p>
                    If someone in London misses Ranghola’s crunchy spicy Fulwadi... if a family in Toronto longs for soft, warm Bhavnagar Ganthiya... if a student in Sydney craves authentic Khambhat Halvasan...
                  </p>
                  <p className="font-bold text-saffron dark:text-cream">
                    Why should they settle for dull, chemical-filled imitations from generic local supermarkets?
                  </p>
                  <p>
                    That longing became the foundation of <strong>Piraso</strong>. Today, we connect ancient rural artisans and women-run cottage cooperatives with food lovers across the globe, preserving original micro-regional taste lineages.
                  </p>
                </>
              )}
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-saffron/10">
              <div>
                <span className="block text-3xl font-serif font-bold text-saffron dark:text-gold">૧૭+</span>
                <span className="text-xs font-sans text-neutral-500 dark:text-neutral-400 font-semibold uppercase">
                  {language === 'gu' ? 'પ્રખ્યાત તાલુકા' : language === 'hi' ? 'प्रसिद्ध कस्बे' : 'Historical Towns'}
                </span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-saffron dark:text-gold">૧૫૦+</span>
                <span className="text-xs font-sans text-neutral-500 dark:text-neutral-400 font-semibold uppercase">
                  {language === 'gu' ? 'લોકલ સખી-મંડળ' : language === 'hi' ? 'स्थानीय महिला सखियां' : 'Artisan Partners'}
                </span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-saffron dark:text-gold">૭ કરોડ+</span>
                <span className="text-xs font-sans text-neutral-500 dark:text-neutral-400 font-semibold uppercase">
                  {language === 'gu' ? 'આશીર્વાદ' : language === 'hi' ? 'प्यारे ग्राहक' : 'Gujaratis Worldwide'}
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
