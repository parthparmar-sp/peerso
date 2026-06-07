/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../context/AppContext';

export const Logo: React.FC<{ className?: string; iconOnly?: boolean }> = ({
  className = '',
  iconOnly = false,
}) => {
  const { language } = useApp();

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Premium Platter / Thaal Icon */}
      <div className="relative flex items-center justify-center w-10 h-10">
        {/* Outer platter rim */}
        <div className="absolute inset-0 rounded-full border border-gold/60 dark:border-gold/80 animate-[spin_50s_linear_infinite]" />
        
        {/* Inner traditional flower divider inside platter */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-1.5 text-saffron dark:text-gold fill-none stroke-current stroke-[3]"
        >
          {/* Circular platter pattern */}
          <circle cx="50" cy="50" r="42" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="32" />
          {/* Traditional Thali Bowls (Katoris) or Petals representating 6 tastes */}
          <path d="M 50 18 A 6 6 0 1 1 50 18.1 Z" className="fill-saffron dark:fill-gold" />
          <path d="M 78 34 A 6 6 0 1 1 78 34.1 Z" className="fill-saffron dark:fill-gold" />
          <path d="M 78 66 A 6 6 0 1 1 78 66.1 Z" className="fill-saffron dark:fill-gold" />
          <path d="M 50 82 A 6 6 0 1 1 50 82.1 Z" className="fill-saffron dark:fill-gold" />
          <path d="M 22 66 A 6 6 0 1 1 22 66.1 Z" className="fill-saffron dark:fill-gold" />
          <path d="M 22 34 A 6 6 0 1 1 22 34.1 Z" className="fill-saffron dark:fill-gold" />
          {/* Sweet grain in center */}
          <path d="M 50 42 C 53 47, 53 53, 50 58 C 47 53, 47 47, 50 42" className="fill-saffron dark:fill-gold stroke-none" />
        </svg>

        {/* Center premium gold dot */}
        <div className="w-1.5 h-1.5 rounded-full bg-gold dark:bg-cream" />
      </div>

      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-bold tracking-wider text-saffron dark:text-cream">
            PIRASO
          </span>
          <span className="font-sans text-[9px] tracking-[0.25em] text-earth dark:text-gold font-semibold uppercase">
            {language === 'gu' ? 'અસલ સ્વાદ' : language === 'hi' ? 'असली स्वाद' : 'HERITAGE'}
          </span>
        </div>
      )}
    </div>
  );
};
