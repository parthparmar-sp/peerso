/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, ShoppingBag, ShoppingCart } from 'lucide-react';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({ isOpen, onClose }) => {
  const {
    language,
    wishlist,
    toggleWishlist,
    addToCart,
    t,
  } = useApp();

  // Find all products present in wishlist state
  const favoritedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 cursor-pointer"
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white dark:bg-neutral-900 shadow-2xl z-50 flex flex-col justify-between overflow-hidden border-l border-saffron/10 font-sans"
          >
            {/* Header */}
            <div className="p-6 border-b border-saffron/10 flex items-center justify-between bg-cream/10 dark:bg-neutral-950/20">
              <div className="flex items-center gap-2.5">
                <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                <h2 className="font-serif font-bold text-lg text-neutral-900 dark:text-cream">
                  {t('wishlistTitle')}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-neutral-500" />
              </button>
            </div>

            {/* List Body */}
            <div className="flex-grow overflow-y-auto p-6 scrollbar-thin">
              <div className="space-y-4">
                {favoritedProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="flex gap-4 p-4 rounded-2xl bg-cream/20 dark:bg-neutral-900/50 border border-saffron/5 group items-center relative"
                  >
                    {/* Typographic Text Thumbnail */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-saffron/10 to-gold/5 dark:from-neutral-950 dark:to-neutral-900 flex-shrink-0 border border-saffron/10 flex flex-col items-center justify-center p-1.5 font-serif text-center select-none">
                      <span className="text-[8px] font-sans font-bold text-saffron dark:text-gold uppercase leading-none scale-90">
                        પીરસો
                      </span>
                      <span className="text-xs font-black text-neutral-800 dark:text-cream leading-tight mt-0.5 line-clamp-2 uppercase">
                        {prod.name[language].slice(0, 3)}
                      </span>
                    </div>

                    {/* Product Details info */}
                    <div className="flex-grow min-w-0 space-y-0.5">
                      <h4 className="font-serif font-bold text-neutral-900 dark:text-cream text-sm truncate">
                        {prod.name[language]}
                      </h4>
                      <span className="text-[10px] font-sans font-bold text-neutral-400 uppercase block">
                        {prod.originName[language]}
                      </span>
                      <span className="font-mono text-saffron dark:text-gold font-bold text-xs block">
                        ₹{prod.price}
                      </span>
                    </div>

                    {/* Actions block */}
                    <div className="flex items-center gap-2">
                      {/* Move to basket button */}
                      <button
                        onClick={() => {
                          addToCart(prod, 1);
                          toggleWishlist(prod.id); // clear from favorites easily!
                        }}
                        className="p-2 bg-saffron dark:bg-gold text-white dark:text-neutral-900 rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                        title="Move to Thaal"
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </button>

                      {/* Remove from favorites */}
                      <button
                        onClick={() => toggleWishlist(prod.id)}
                        className="p-2 text-neutral-400 hover:text-red-500 transition-all rounded-lg"
                        title="Clear from favorites"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                ))}

                {favoritedProducts.length === 0 && (
                  <div className="text-center py-20 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-saffron/5 mx-auto flex items-center justify-center text-saffron/60">
                      <Heart className="w-6 h-6 text-neutral-400" />
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm font-sans font-medium px-4 leading-relaxed">
                      {language === 'gu'
                        ? 'આપની કોઈ પસંદગી સંગ્રહિત નથી. ઉત્કૃષ્ટ વાનગીઓ પર હાર્ટ આયકન દબાવીને અહીં સજાવો.'
                        : 'Your Wishlist is waiting. Hover on products in the catalog and click the core heart icon to save them.'}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom info link */}
            <div className="p-6 border-t border-saffron/10 bg-cream/10 dark:bg-neutral-950/25">
              <button
                onClick={onClose}
                className="w-full py-3.5 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-xl text-white text-xs font-sans font-bold uppercase tracking-widest cursor-pointer"
              >
                {language === 'gu' ? 'ચાલુ રાખો' : 'Keep Crafting'}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
