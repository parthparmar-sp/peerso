/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const {
    language,
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    t,
  } = useApp();

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [address, setAddress] = useState({ name: '', phone: '', city: '', note: '' });

  const totalAmount = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
    setTimeout(() => {
      clearCart();
      setCheckoutStep('cart');
      onClose();
    }, 4500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 cursor-pointer"
          />

          {/* Sliding panel content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white dark:bg-neutral-900 shadow-2xl z-50 flex flex-col justify-between overflow-hidden border-l border-saffron/10 font-sans"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-saffron/10 flex items-center justify-between bg-cream/10 dark:bg-neutral-950/20">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-saffron dark:text-gold" />
                <h2 className="font-serif font-bold text-lg text-neutral-900 dark:text-cream">
                  {checkoutStep === 'success' ? t('feedbackSuccess') : t('cartTitle')}
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

            {/* Modal Body with multi-stage checkout steps */}
            <div className="flex-grow overflow-y-auto p-6 scrollbar-thin">
              <AnimatePresence mode="wait">
                {checkoutStep === 'cart' && (
                  <motion.div
                    key="cart-step"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {cart.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex gap-4 p-4.5 rounded-2xl bg-cream/20 dark:bg-neutral-900/50 border border-saffron/5 group items-center"
                      >
                        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-saffron/10 to-gold/5 dark:from-neutral-950 dark:to-neutral-900 flex-shrink-0 border border-saffron/10 flex flex-col items-center justify-center p-2 font-serif text-center select-none">
                          <span className="text-[9px] font-sans font-bold text-saffron dark:text-gold uppercase leading-none scale-90">
                            પીરસો
                          </span>
                          <span className="text-xs font-black text-neutral-800 dark:text-cream leading-tight mt-1 line-clamp-2 uppercase">
                            {item.product.name[language].slice(0, 3)}
                          </span>
                        </div>

                        <div className="flex-grow min-w-0 space-y-1">
                          <h4 className="font-serif font-bold text-neutral-900 dark:text-cream text-sm truncate">
                            {item.product.name[language]}
                          </h4>
                          <span className="text-xs font-sans font-semibold text-neutral-400 block uppercase">
                            {item.product.originName[language]}
                          </span>
                          <span className="font-mono text-saffron dark:text-gold font-bold text-xs">
                            ₹{item.product.price}
                          </span>
                        </div>

                        {/* Increment / Decrement actions */}
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex items-center border border-saffron/20 rounded-lg p-0.5 bg-white dark:bg-neutral-800 text-xs">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 hover:text-saffron"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-2 font-mono font-bold text-neutral-800 dark:text-cream">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 hover:text-saffron"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Delete from basket button */}
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-neutral-400 hover:text-red-500 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}

                    {cart.length === 0 && (
                      <div className="text-center py-20 space-y-4">
                        <div className="w-14 h-14 rounded-full bg-saffron/5 mx-auto flex items-center justify-center text-saffron/60">
                          <ShoppingBag className="w-6 h-6" />
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-300 text-sm font-sans font-medium px-4">
                          {t('cartEmpty')}
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}

                {checkoutStep === 'checkout' && (
                  <motion.form
                    key="checkout-step"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleCheckout}
                    className="space-y-4"
                  >
                    <span className="text-[11px] font-sans font-bold text-neutral-400 uppercase tracking-widest block">
                      {language === 'gu' ? 'કૃપા કરીને શિપિંગ સરનામું પૂર્ણ કરો' : 'DELIVERY SHIPMENT ADVICE'}
                    </span>

                    <div className="space-y-4 font-sans">
                      <div>
                        <label className="text-xs font-bold text-neutral-500 block mb-1">Customer Full Name</label>
                        <input
                          type="text"
                          required
                          value={address.name}
                          onChange={(e) => setAddress({ ...address, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-saffron/15 dark:bg-neutral-800 dark:border-neutral-700 text-sm"
                          placeholder="e.g. Parth Parmar"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-neutral-500 block mb-1">Mobile Helpline number</label>
                        <input
                          type="tel"
                          required
                          value={address.phone}
                          onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-saffron/15 dark:bg-neutral-800 dark:border-neutral-700 text-sm"
                          placeholder="e.g. +91 81409 00625"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-neutral-500 block mb-1">Destination Location & Zip</label>
                        <input
                          type="text"
                          required
                          value={address.city}
                          onChange={(e) => setAddress({ ...address, city: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-saffron/15 dark:bg-neutral-800 dark:border-neutral-700 text-sm"
                          placeholder="e.g. Chicago, USA-60601"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-neutral-500 block mb-1">Delivery Instruction Notes (Optional)</label>
                        <textarea
                          rows={2}
                          value={address.note}
                          onChange={(e) => setAddress({ ...address, note: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-saffron/15 dark:bg-neutral-800 dark:border-neutral-700 text-sm"
                          placeholder="Please nitrogen seal properly..."
                        />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-saffron/5 dark:bg-gold/5 border border-saffron/10 mt-6 text-xs text-neutral-500 leading-normal">
                      💳 <span className="font-bold text-saffron dark:text-gold">Simultaneous Cod / Inter-Bank Transfer:</span> All inter-bank custom duties and gateway charges are covered. Simply confirm order!
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-saffron text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wider block cursor-pointer"
                    >
                      {language === 'gu' ? 'કન્ફર્મ કરો અને ઓર્ડર બુક કરો' : 'Confirm & Dispatch Thaal'}
                    </button>
                  </motion.form>
                )}

                {checkoutStep === 'success' && (
                  <motion.div
                    key="success-step"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8 animate-[bounce_1s]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif font-extrabold text-2xl text-neutral-900 dark:text-cream leading-snug">
                        {language === 'gu' ? 'થાળ બુક થઈ ગયો છે!' : 'Thaal Dispatched Safely!'}
                      </h3>
                      <p className="font-sans text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm px-6">
                        {language === 'gu'
                          ? 'આપનો ઓર્ડર સાદરે સ્વીકારવામાં આવ્યો છે. વતનના અસલ સ્વાદ પત્રો ટૂંક સમયમાં આપના ઘરે પહોંચશે.'
                          : 'Your traditional shipment has passed checking and is queued for custom air delivery. Order ID: #PIR-' + Math.floor(Math.random() * 1000000)}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-dashed border-emerald-500/20 bg-emerald-500/5 text-left font-mono text-[11px] text-neutral-600 dark:text-neutral-400 space-y-1 mx-auto max-w-sm">
                      <p className="text-emerald-600 dark:text-emerald-400 font-bold uppercase">✓ Live Order Receipt</p>
                      <p>Recipient: {address.name || 'Parth Parmar'}</p>
                      <p>Delivery: {address.city || 'Toronto, Canada'}</p>
                      <p>Sum Amount: INR ₹{totalAmount}</p>
                      <p>Status: Dispatched via Air Cargo</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Modal Footer (only visible in cart/checkout) */}
            {checkoutStep !== 'success' && cart.length > 0 && (
              <div className="p-6 border-t border-saffron/10 bg-cream/10 dark:bg-neutral-950/25 space-y-4">
                <div className="flex items-center justify-between font-sans text-neutral-800 dark:text-neutral-200">
                  <span className="text-sm font-semibold">{t('total')}</span>
                  <span className="text-xl font-mono font-bold text-neutral-950 dark:text-cream">
                    ₹{totalAmount}
                  </span>
                </div>

                {checkoutStep === 'cart' ? (
                  <button
                    onClick={() => setCheckoutStep('checkout')}
                    className="w-full py-4 bg-saffron hover:bg-saffron/95 dark:bg-gold dark:text-neutral-950 dark:hover:bg-gold/90 text-white font-sans font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t('checkout')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setCheckoutStep('cart')}
                    className="w-full py-3.5 border border-saffron/20 hover:bg-saffron/5 outline-none rounded-xl text-xs sm:text-sm font-sans font-extrabold text-neutral-700 dark:text-neutral-300"
                  >
                    Back to Thaal Edit
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
