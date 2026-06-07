/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { WhyPiraso } from './components/WhyPiraso';
import { TasteMap } from './components/TasteMap';
import { ProductsSection } from './components/ProductsSection';
import { GlobalGujaratis } from './components/GlobalGujaratis';
import { Testimonials } from './components/Testimonials';
import { FounderStory } from './components/FounderStory';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CartModal } from './components/CartModal';
import { WishlistModal } from './components/WishlistModal';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  return (
    <AppProvider>
      <div className="min-h-screen bg-cream dark:bg-neutral-950 text-neutral-800 dark:text-cream transition-colors duration-300">
        
        {/* Navigation Floating Header */}
        <Navbar
          onOpenCart={() => setIsCartOpen(true)}
          onOpenWishlist={() => setIsWishlistOpen(true)}
        />

        {/* Core Sub-sections */}
        <main className="space-y-0">
          
          {/* Section 1: Hero */}
          <Hero />

          {/* Section 2: Narrative Story */}
          <Story />

          {/* Section 3: Why benefits */}
          <WhyPiraso />

          {/* Section 5: Dynamic Interactive Taste Map */}
          <TasteMap />

          {/* Section 4: Products collection with full search + filters */}
          <ProductsSection />

          {/* Section 6: Diaspora deliveries */}
          <GlobalGujaratis />

          {/* Section 7: Nostalgic reviews */}
          <Testimonials />

          {/* Section 8: Founders */}
          <FounderStory />

          {/* Section 9: Direct Contacts & Forms */}
          <Contact />

        </main>

        {/* Global Footer */}
        <Footer />

        {/* Sliding Cart (Thaal) Panel */}
        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />

        {/* Sliding Wishlist (Favorites) Panel */}
        <WishlistModal
          isOpen={isWishlistOpen}
          onClose={() => setIsWishlistOpen(false)}
        />

      </div>
    </AppProvider>
  );
}
