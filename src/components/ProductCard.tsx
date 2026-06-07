/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { Heart, ShoppingBag, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language, addToCart, wishlist, toggleWishlist, t } = useApp();
  const [added, setAdded] = useState(false);

  const isFavorite = wishlist.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden border border-saffron/10 hover:border-saffron/30 dark:hover:border-gold/40 hover:shadow-2xl dark:shadow-neutral-950/40 transition-all duration-500 flex flex-col justify-between"
    >
      {/* Visual Header / Typographic Text Box */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-saffron/5 to-gold/5 dark:from-neutral-950 dark:to-neutral-800 flex flex-col items-center justify-center p-6 border-b border-saffron/10 group-hover:from-saffron/10 group-hover:to-gold/10 transition-colors duration-500">
        
        {/* Brand identifier watermark background */}
        <div className="absolute inset-0 flex items-center justify-center select-none opacity-5 pointer-events-none">
          <span className="font-serif font-extrabold text-6xl tracking-widest text-saffron dark:text-gold uppercase leading-none">
            {language === 'gu' ? 'પીરસો' : 'PIRASO'}
          </span>
        </div>

        {/* Product Name Display in large typographic layout */}
        <div className="text-center space-y-2 z-10 transition-transform duration-500 group-hover:scale-105">
          <span className="inline-block text-[10px] font-sans font-bold tracking-[0.2em] text-saffron dark:text-gold uppercase border border-saffron/20 dark:border-gold/30 px-2.5 py-0.5 rounded-full bg-cream/50 dark:bg-neutral-950/40">
            {language === 'gu' ? 'પીરસો સ્પેશ્યલ' : 'PIRASO SPECIAL'}
          </span>
          <h4 className="font-serif font-black text-xl sm:text-2xl text-neutral-900 dark:text-cream leading-tight tracking-tight max-w-[240px] mx-auto">
            {product.name[language]}
          </h4>
          <span className="block text-[11px] font-sans font-bold tracking-widest text-earth dark:text-amber-500 uppercase">
            ✦ {product.originName[language]} ✦
          </span>
        </div>

        {/* Authenticity Floating Badge */}
        {product.isAuthentic && (
          <div className="absolute top-4 left-4 bg-cream/90 dark:bg-neutral-900/90 backdrop-blur-md text-saffron dark:text-gold text-[10px] font-sans font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm border border-saffron/10 flex items-center gap-1 z-10">
            <ShieldCheck className="w-3 h-3" />
            <span>{t('authenticityBadge')}</span>
          </div>
        )}

        {/* Wishlist Floating Toggle Button */}
        <button
          onClick={() => toggleWishlist(product.id)}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md shadow-sm text-neutral-600 dark:text-neutral-300 hover:text-red-500 dark:hover:text-red-400 hover:scale-110 active:scale-90 transition-all z-10 cursor-pointer"
          aria-label="Add to Wishlist"
        >
          <Heart className={`w-4 h-4 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
        </button>

        {/* Rating Floating Tag */}
        <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-xs text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded-md flex items-center gap-1 z-10">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span>{product.rating}</span>
        </div>

        {/* Weight Floating Tag */}
        <span className="absolute bottom-4 right-4 bg-saffron text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm z-10">
          {product.weight}
        </span>
      </div>

      {/* Main Card Content */}
      <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between space-y-4">
        
        <div>
          {/* Delicacy Title */}
          <h3 className="font-serif font-extrabold text-neutral-900 dark:text-cream text-lg sm:text-xl leading-snug tracking-tight group-hover:text-saffron dark:group-hover:text-gold transition-colors">
            {product.name[language]}
          </h3>
          
          {/* Under-title Origin Label */}
          <span className="text-[11px] font-sans tracking-widest text-neutral-600 dark:text-neutral-400 uppercase font-bold block mt-1">
            {language === 'gu' ? 'મૂળ વતન: ' : 'SOURCE ORIGIN: '}
            <span className="text-earth dark:text-gold">{product.originName[language]}</span>
          </span>

          {/* Lore story narrative */}
          <p className="font-sans text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed mt-3 line-clamp-3 italic">
            "{product.story[language]}"
          </p>
        </div>

        {/* Pricing tag & Cart triggers */}
        <div className="pt-4 border-t border-saffron/10 flex items-center justify-between gap-2">
          
          {/* Price display with weight info */}
          <div className="flex flex-col">
            <span className="font-mono text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-cream whitespace-nowrap">
              ₹{product.price}
            </span>
            <span className="text-[11px] font-sans text-neutral-400 font-semibold uppercase">
              {product.weight}
            </span>
          </div>

          {/* Elegant action buy button */}
          <button
            onClick={handleAddToCart}
            className={`flex-grow sm:flex-initial px-4.5 py-3 rounded-xl font-sans font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              added
                ? 'bg-emerald-500 dark:bg-emerald-600 text-white shadow-md'
                : 'bg-saffron text-white hover:bg-saffron/90 dark:bg-gold dark:text-neutral-950 dark:hover:bg-gold/90 shadow-md shadow-saffron/10'
            }`}
          >
            <ShoppingBag className="w-4.5 h-4.5 flex-shrink-0" />
            <span className="whitespace-nowrap">{added ? t('addedToCart') : t('addToCart')}</span>
          </button>

        </div>

      </div>
    </motion.div>
  );
};
