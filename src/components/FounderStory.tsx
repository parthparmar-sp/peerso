/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { Shield, Sparkles, Send } from 'lucide-react';

export const FounderStory: React.FC = () => {
  const { language, t } = useApp();

  const founders = [
    {
      name: 'Parth Parmar',
      role: {
        gu: 'સહ-સ્થાપક અને મુખ્ય કાર્યકારી અધિકારી (CEO)',
        en: 'Co-Founder & CEO',
        hi: 'सह-संस्थापक और मुख्य कार्यकारी अधिकारी',
      },
      desc: {
        gu: 'ગુજરાતના અસલ સ્વાદ વારસાને જીવંત રાખવા અને તેને સમગ્ર વિશ્વમાં વસતા ગુજરાતીઓ સુધી સન્માનપૂર્વક પહોંચાડવાના ધ્યેય સાથે પીરસોનું નેતૃત્વ કરી રહ્યા છે.',
        en: "An energetic young visionary dedicating his career to mapping regional ancestral recipes, supporting local rural families, and creating deep emotional connections with our roots.",
        hi: 'गुजरात की लुप्त होती पारंपरिक पाक विरासत को सहेजने और उसे दुनिया भर में बसे गुजरातियों तक शुद्धता के साथ पहुंचाने के लिए पिरासो का नेतृत्व कर रहे हैं।'
      },
      icon: Sparkles,
      image: '',
    },
    {
      name: 'Krish Vaghani',
      role: {
        gu: 'સહ-સ્થાપક અને મુખ્ય સંચાલન અધિકારી (COO)',
        en: 'Co-Founder & Chief Operations Officer',
        hi: 'सह-संस्थापक और मुख्य परिचालन अधिकारी',
      },
      desc: {
        gu: 'ગુજરાતના તમામ અંતરિયાળ તાલુકાઓમાંથી અસલ કારીગરોની શોધખોળ, ગુણવત્તા નિયંત્રણ, પેકિંગ સિક્યોરિટી અને સમયસર સુરક્ષિત વિદેશી નિકાસનું સંચાલન ખૂબ જ કુશળતાથી સંભાળે છે.',
        en: 'Directs the boots-on-the-ground rural sourcing campaigns, manages strict quality-control protocols, and coordinates global logistics across 150+ countries door-to-door.',
        hi: 'गुजरात के सभी ग्रामीण कस्बों से असली व्यंजनों के पारंपरिक निर्माताओं की खोज, पैकेजिंग सुरक्षा और विश्वभर में सुरक्षित आपूर्ति का कार्य संभाले हुए हैं।'
      },
      icon: Shield,
      image: '',
    },
    {
      name: 'Krish Mangukiya',
      role: {
        gu: 'સહ-સ્થાપક અને મુખ્ય વૃદ્ધિ અધિકારી (CGO)',
        en: 'Co-Founder & Chief Growth Officer',
        hi: 'सह-संस्थापक और मुख्य विकास अधिकारी',
      },
      desc: {
        gu: 'વિશ્વભરની ડાયસ્પોરા ભાગીદારીઓ, ગ્રાહક સુવિધા કલ્યાણ અને પીરસો બ્રાન્ડ મૂલ્યોના વૈશ્વિક વિસ્તરણ માટે સંપૂર્ણ કટિબદ્ધ છે.',
        en: 'Champions international customer relations, local market expansions, community integrations, and ensuring every single package matches the golden warmth of home.',
        hi: 'विश्वभर में बसे प्रवासी गुजरातियों की आवश्यकताओं को समझने, ग्राहक संबंधों को सुदृढ़ बनाने और ब्रांड को नई उचाइयों तक ले जाने के लिए समर्पित हैं।'
      },
      icon: Send,
      image: '',
    }
  ];

  return (
    <section id="founders" className="py-24 bg-cream/30 dark:bg-neutral-950 overflow-hidden relative">
      <div className="absolute top-10 right-10 w-80 h-80 bg-saffron/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 font-sans">
          <span className="text-saffron dark:text-gold uppercase tracking-[0.25em] text-xs font-bold block">
            {language === 'gu' ? 'કુલ-પરંપરા સંચાલકો' : language === 'hi' ? 'कुल-परंपरा प्रबंधक' : 'MEET THE TEAM BEHIND PIRASO'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 dark:text-cream leading-tight">
            {t('foundersHeadline')}
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base font-semibold">
            {t('foundersSub')}
          </p>
          <div className="w-16 h-1 bg-saffron dark:bg-gold mx-auto rounded-full mt-4" />
        </div>

        {/* Founders Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, idx) => {
            const Icon = founder.icon;
            return (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-white dark:bg-neutral-900 rounded-3xl border border-saffron/10 hover:border-saffron/30 dark:hover:border-gold/40 hover:shadow-2xl dark:shadow-neutral-950/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Initials Avatar Header */}
                <div className="p-8 pb-4 flex items-center gap-5">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-saffron to-gold text-white dark:bg-gradient-to-br dark:from-gold dark:to-saffron dark:text-neutral-950 flex flex-col items-center justify-center font-serif flex-shrink-0 border border-saffron/15 shadow-md shadow-saffron/10 select-none">
                    <span className="text-[10px] font-sans font-bold tracking-widest text-[#FFF5E6] dark:text-neutral-900/85 uppercase leading-none scale-90">
                      પીરસો
                    </span>
                    <span className="text-3xl font-black mt-1 uppercase tracking-tight">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif font-extrabold text-xl text-neutral-900 dark:text-cream">
                      {founder.name}
                    </h3>
                    <p className="text-xs font-bold text-saffron dark:text-gold uppercase tracking-wider mt-1">
                      {founder.role[language]}
                    </p>
                  </div>
                </div>

                {/* Narrative Description */}
                <div className="px-8 pb-8 flex-grow flex flex-col justify-between">
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed italic mt-3 font-semibold">
                    "{founder.desc[language]}"
                  </p>

                  <div className="mt-6 flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-bold tracking-wide uppercase pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    <Icon className="w-4 h-4 text-saffron dark:text-gold flex-shrink-0" />
                    <span>{language === 'gu' ? 'સ્થાનિક સહયોગી પ્રમાણિત' : 'Trusted Executive Member'}</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
