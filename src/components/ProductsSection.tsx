/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS, CITIES } from '../data';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, MapPin, Grid, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProductsSection: React.FC = () => {
  const { language, t } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  // Available unique categories from data
  const categories = useMemo(() => [
    { id: 'all', name: t('allCategories') },
    { id: 'farsan', name: t('categoryFarsan') },
    { id: 'sweet', name: t('categorySweet') },
    { id: 'mix', name: t('categoryMix') },
    { id: 'condiment', name: t('categoryCondiment') },
  ], [language]);

  // Unique list of cities represented by existing products
  const origins = useMemo(() => {
    const list = [{ id: 'all', name: t('allCities') }];
    Object.values(CITIES).forEach((city) => {
      // confirm if the city actually has products
      const count = PRODUCTS.filter((p) => p.origin === city.id).length;
      if (count > 0) {
        list.push({ id: city.id, name: city.name[language] });
      }
    });
    return list;
  }, [language]);

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category lock
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      // Origin lock
      const matchesOrigin = selectedOrigin === 'all' || product.origin === selectedOrigin;

      // Title/Origin search query
      const matchesSearch =
        product.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.originName[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.story[language].toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesOrigin && matchesSearch;
    });
  }, [searchQuery, selectedCategory, selectedOrigin, language]);

  return (
    <section id="products" className="py-24 bg-cream/10 dark:bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-saffron dark:text-gold uppercase tracking-[0.25em] font-sans text-xs font-bold block">
            {language === 'gu' ? 'પરંપરાગત ભોજન ભંડાર' : language === 'hi' ? 'परंपरागत भोजन भंडार' : 'HERITAGE COLLECTION'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 dark:text-cream leading-tight">
            {language === 'gu' ? 'અમારા અસલ સ્વાદિષ્ટ પેકેટો' : language === 'hi' ? 'हमारे असली स्वादिष्ट व्यंजन' : 'Explore Ancestral Delicacies'}
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 font-sans text-sm sm:text-base font-medium">
            {language === 'gu'
              ? 'ગુજરાતના ૨૦ અલગ-અલગ શહેરોમાંથી પરંપરાગત પેઢી દર પેઢી દ્વારા બનાવાયેલ શુદ્ધ ફરસાણ અને મીઠાઈઓ.'
              : language === 'hi'
              ? 'गुजरात के २० विभिन्न शहरों से चुनिंदा पीढ़ियों द्वारा तैयार किये गए स्वादिष्ट नमकीन और अमूल्य मीठा व्यंजन।'
              : 'Discover 20 legendary recipes from 17 distinct historical towns, sealed with certified origin freshness.'}
          </p>
          <div className="w-16 h-1 bg-saffron dark:bg-gold mx-auto rounded-full mt-4" />
        </div>

        {/* Search and Filters Bar */}
        <div className="bg-white dark:bg-neutral-900 p-4 border border-saffron/10 sm:p-6 rounded-3xl shadow-md space-y-4 sm:space-y-6 mb-12">
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-5 py-3.5 rounded-2xl bg-cream/10 dark:bg-neutral-905/60 border border-saffron/10 focus:border-saffron text-sm text-neutral-800 dark:text-cream placeholder-neutral-400 transition-all font-sans font-medium"
              />
            </div>

            {/* Quick Toggle or Action pills */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-5 py-3.5 rounded-2xl border text-sm font-sans font-extrabold flex items-center gap-2 transition-colors cursor-pointer ${
                  showFilters || selectedOrigin !== 'all'
                    ? 'border-saffron bg-saffron/5 text-saffron dark:border-gold dark:bg-gold/5 dark:text-gold'
                    : 'border-saffron/10 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                }`}
              >
                <SlidersHorizontal className="w-4.5 h-4.5" />
                <span>{language === 'gu' ? 'ફિલ્ટર્સ કસ્ટમાઇઝ કરો' : 'Filters'}</span>
              </button>
            </div>
          </div>

          {/* Expanded Filters Block */}
          <AnimatePresence>
            {(showFilters || selectedOrigin !== 'all') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden border-t border-neutral-100 dark:border-neutral-800 pt-5 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  
                  {/* Origin City Picker */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-600 dark:text-neutral-400 font-sans flex items-center gap-1 uppercase tracking-wide">
                      <MapPin className="w-4 h-4 text-saffron dark:text-gold" />
                      <span>{language === 'gu' ? 'જન્મસ્થળ સત્વરે પસંદ કરો' : 'Filter by Hometown origin'}</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {origins.map((orig) => (
                        <button
                          key={orig.id}
                          onClick={() => setSelectedOrigin(orig.id)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-sans font-bold transition-all ${
                            selectedOrigin === orig.id
                              ? 'bg-saffron text-white dark:bg-gold dark:text-neutral-950 font-extrabold shadow-sm'
                              : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-saffron/5'
                          }`}
                        >
                          {orig.name}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Categories Horizontal scrolling tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-neutral-50 dark:border-neutral-800 pt-4">
            <Grid className="w-4 h-4 text-saffron/60 dark:text-gold/60 flex-shrink-0" />
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4.5 py-2.5 rounded-2xl text-xs sm:text-sm font-sans font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-saffron text-white dark:bg-gold dark:text-neutral-950 font-extrabold shadow-sm'
                      : 'bg-neutral-50 dark:bg-neutral-900 border border-saffron/5 text-neutral-600 dark:text-neutral-300 hover:bg-saffron/5 dark:hover:bg-neutral-800'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Active Filters Summary block */}
        {(selectedCategory !== 'all' || selectedOrigin !== 'all' || searchQuery) && (
          <div className="flex items-center justify-between gap-4 py-3 px-5 bg-saffron/5 dark:bg-gold/5 rounded-2xl border border-saffron/10 dark:border-gold/20 mb-8">
            <span className="text-xs font-sans font-bold text-saffron dark:text-gold">
              {language === 'gu'
                ? `મળેલા પરિણામો: ${filteredProducts.length} અસલ વાનગીઓ`
                : language === 'hi'
                ? `परिणाम: ${filteredProducts.length} व्यंजन`
                : `Showing ${filteredProducts.length} authentic delicacies matching requirements`}
            </span>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedOrigin('all');
              }}
              className="text-xs font-sans font-extrabold text-neutral-700 dark:text-neutral-200 hover:underline"
            >
              {language === 'gu' ? 'બધું સાફ કરો' : 'Clear All'}
            </button>
          </div>
        )}

        {/* Products Grid Frame */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white dark:bg-neutral-900 border border-dashed border-saffron/20 rounded-3xl space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-saffron/5 mx-auto flex items-center justify-center text-saffron">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-neutral-805 dark:text-cream text-lg">
              {language === 'gu' ? 'કોઈ વાનગી મળી નહીં' : language === 'hi' ? 'कोई व्यंजन नहीं मिला' : 'No delicacies listed'}
            </h3>
            <p className="font-sans text-neutral-500 max-w-sm mx-auto text-xs">
              {language === 'gu'
                ? 'કૃપા કરીને અન્ય નામ અથવા બીજા પ્રાદેશિક જિલ્લા પસંદ કરીને ફરીથી શોધો.'
                : 'Please refine your filters, search terms, or origin criteria.'}
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
};
