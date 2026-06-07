/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { ContactFormInput } from '../types';

export const Contact: React.FC = () => {
  const { language, t } = useApp();

  const [form, setForm] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      setForm({ name: '', email: '', phone: '', country: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-cream/5 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-saffron dark:text-gold uppercase tracking-[0.25em] font-sans text-xs font-bold block">
            {language === 'gu' ? 'પ્રત્યક્ષ જોડાણ' : language === 'hi' ? 'सीधा संपर्क' : 'DIRECT HELPLINES & INQUIRIES'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 dark:text-cream leading-tight">
            {t('contactHeadline')}
          </h2>
          <p className="text-neutral-700 dark:text-neutral-350 font-sans text-sm sm:text-base font-semibold">
            {t('contactSub')}
          </p>
          <div className="w-16 h-1 bg-saffron dark:bg-gold mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left panel: direct contacts & phone details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-3xl border border-saffron/10 shadow-lg space-y-6">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-neutral-900 dark:text-cream">
                {language === 'gu' ? 'મુખ્ય આયોજકોનો સીધો સંપર્ક' : language === 'hi' ? 'संस्थापकों से संपर्क' : 'Direct Co-founder Phone Lines'}
              </h3>

              <div className="space-y-6 pt-2">
                {/* Partner 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-saffron/10 dark:bg-gold/10 flex items-center justify-center text-saffron dark:text-gold flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-sans font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block">
                      Parth Parmar (Founder & CEO)
                    </span>
                    <a href="tel:+918140900625" className="font-mono text-base sm:text-lg font-bold text-neutral-800 dark:text-cream hover:text-saffron dark:hover:text-gold transition-colors block mt-0.5">
                      +91 8140900625
                    </a>
                  </div>
                </div>

                {/* Partner 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-saffron/10 dark:bg-gold/10 flex items-center justify-center text-saffron dark:text-gold flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-sans font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block">
                      Krish Vaghani (Co-Founder & COO)
                    </span>
                    <a href="tel:+919638951012" className="font-mono text-base sm:text-lg font-bold text-neutral-800 dark:text-cream hover:text-saffron dark:hover:text-gold transition-colors block mt-0.5">
                      +91 9638951012
                    </a>
                  </div>
                </div>

                {/* Partner 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-saffron/10 dark:bg-gold/10 flex items-center justify-center text-saffron dark:text-gold flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-sans font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block">
                      Krish Mangukiya (Co-Founder & CGO)
                    </span>
                    <a href="tel:+919081835875" className="font-mono text-base sm:text-lg font-bold text-neutral-800 dark:text-cream hover:text-saffron dark:hover:text-gold transition-colors block mt-0.5">
                      +91 9081835875
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* General headquarters block */}
            <div className="bg-cream/40 dark:bg-neutral-900 border border-saffron/5 p-8 rounded-3xl space-y-4">
              <div className="flex items-center gap-3 text-neutral-800 dark:text-cream">
                <MapPin className="w-5 h-5 text-saffron" />
                <span className="font-serif font-bold text-base">Piraso Head Office</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-semibold">
                {language === 'gu' ? 'બહાદુરપુર, પાલિતાણા, ભાવનગર, ગુજરાત - ૩૬૪૨૭૦.' : 'Bahadurpur, Palitana, Bhavnagar, Gujarat - 364270.'}
              </p>
              <div className="flex items-center gap-3 text-neutral-800 dark:text-cream pt-2">
                <Mail className="w-5 h-5 text-saffron" />
                <a href="mailto:support@piraso.com" className="font-mono text-xs sm:text-sm hover:underline">support@piraso.com</a>
              </div>
            </div>
          </div>

          {/* Right panel: dynamic enquiry form */}
          <div className="lg:col-span-7 bg-white dark:bg-neutral-800 p-6 sm:p-10 rounded-3xl border border-saffron/10 shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16 space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-450 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif font-extrabold text-2xl text-neutral-900 dark:text-cream">
                    {language === 'gu' ? 'પ્રણામ, આપનો આભાર!' : language === 'hi' ? 'प्रणाम, धन्यवाद!' : 'Heartfelt Thanks!'}
                  </h3>
                  <p className="font-sans text-neutral-600 dark:text-neutral-300 text-sm max-w-sm mx-auto leading-relaxed">
                    {t('feedbackSuccess')}
                  </p>
                </motion.div>
              ) : (
                <motion.form onSubmit={handleSubmit} className="space-y-6 font-sans">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider block">
                        {language === 'gu' ? 'આપનું નામ' : language === 'hi' ? 'आपका नाम' : 'Your Noble Name'}
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4.5 py-3 rounded-xl bg-cream/10 dark:bg-neutral-900/60 border border-saffron/10 text-sm text-neutral-800 dark:text-cream placeholder-neutral-400 focus:border-saffron focus:ring-1 focus:ring-saffron transition-all"
                        placeholder="e.g. Parth Parmar"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider block">
                        {language === 'gu' ? 'ઈમેઈલ આઈડી' : language === 'hi' ? 'ईमेल पता' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4.5 py-3 rounded-xl bg-cream/10 dark:bg-neutral-900/60 border border-saffron/10 text-sm text-neutral-800 dark:text-cream placeholder-neutral-400 focus:border-saffron focus:ring-1 focus:ring-saffron transition-all"
                        placeholder="e.g. name@domain.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider block">
                        {language === 'gu' ? 'મોબાઈલ નંબર' : language === 'hi' ? 'मोबाइल नंबर' : 'Phone Number'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4.5 py-3 rounded-xl bg-cream/10 dark:bg-neutral-900/60 border border-saffron/10 text-sm text-neutral-800 dark:text-cream placeholder-neutral-400 focus:border-saffron focus:ring-1 focus:ring-saffron transition-all"
                        placeholder="e.g. +91 96389 51012"
                      />
                    </div>

                    {/* Country */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider block">
                        {language === 'gu' ? 'વસવાટનો દેશ' : language === 'hi' ? 'निवास का देश' : 'Country of Residence'}
                      </label>
                      <input
                        type="text"
                        required
                        value={form.country}
                        onChange={(e) => setForm({ ...form, country: e.target.value })}
                        className="w-full px-4.5 py-3 rounded-xl bg-cream/10 dark:bg-neutral-900/60 border border-saffron/10 text-sm text-neutral-800 dark:text-cream placeholder-neutral-400 focus:border-saffron focus:ring-1 focus:ring-saffron transition-all"
                        placeholder="e.g. Canada, UK, India"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider block">
                      {language === 'gu' ? 'વિશેષ અસ્મિતા સંદેશ' : language === 'hi' ? 'विशेष संदेश' : 'Message or Custom Inquiries'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4.5 py-3 rounded-xl bg-cream/10 dark:bg-neutral-900/60 border border-saffron/10 text-sm text-neutral-800 dark:text-cream placeholder-neutral-400 focus:border-saffron focus:ring-1 focus:ring-saffron transition-all"
                      placeholder={language === 'gu' ? 'કોઈ બલ્ક ઓર્ડર અથવા વિદેશી નિકાસ ઇન્ક્વાયરી માટે અહીં લખો...' : ' festive bulk gifting packs, custom delivery requests, or vendor collaborations...'}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 rounded-xl bg-saffron dark:bg-gold hover:bg-saffron/90 dark:text-neutral-950 font-sans font-bold text-sm tracking-widest text-white flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    {isSending ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span className="uppercase tracking-widest">{language === 'gu' ? 'સંદેશ મોકલો' : 'Submit message'}</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
