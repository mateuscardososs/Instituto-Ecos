import React from 'react';
import { COLORS } from '../constants';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12 w-12" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Logo Instituto Ecos"
    >
      {/* 
         RECREATING THE LOGO FROM THE IMAGE
         Structure: Circular emblem with interlocking organic and geometric shapes.
      */}

      {/* --- 1. LEAVES (Top Left) --- */}
      
      {/* Dark Green Leaf (Outer Left) */}
      <path 
        d="M50 50 C 35 50, 10 45, 12 25 C 14 15, 30 20, 50 50 Z" 
        fill={COLORS.greenMedium} 
      />
      
      {/* Light Green Leaf (Top) */}
      <path 
        d="M50 50 C 45 40, 30 10, 48 10 C 55 10, 55 35, 50 50 Z" 
        fill={COLORS.greenLight} 
      />

      {/* --- 2. PEOPLE (Top Right) --- */}
      
      {/* Person 1 - Yellow (Top) */}
      <g>
        {/* Body Swoosh */}
        <path d="M50 50 Q 55 30 68 22 C 75 18, 80 25, 50 50" fill={COLORS.yellowOchre} opacity="0.9" />
        {/* Head */}
        <circle cx="68" cy="16" r="4" fill={COLORS.yellowOchre} />
      </g>

      {/* Person 2 - Orange (Middle) */}
      <g>
        {/* Body Swoosh */}
        <path d="M50 50 Q 70 40 82 35 C 88 32, 85 45, 50 50" fill={COLORS.orangeTerra} opacity="0.9" />
        {/* Head */}
        <circle cx="85" cy="30" r="4" fill={COLORS.orangeTerra} />
      </g>

      {/* Person 3 - Teal/Grayish (Bottom Right) */}
      <g>
        {/* Body Swoosh */}
        <path d="M50 50 Q 75 55 82 60 C 85 65, 75 70, 50 50" fill="#7FB5A8" opacity="0.9" />
        {/* Head */}
        <circle cx="86" cy="55" r="4" fill="#7FB5A8" />
      </g>

      {/* --- 3. WAVES (Middle Left) --- */}
      
      {/* Top Wave (Deep Blue) */}
      <path 
        d="M50 50 C 35 55, 15 50, 15 60 C 15 65, 35 60, 50 50" 
        fill={COLORS.navyBlue} 
      />
      
      {/* Bottom Wave (Teal) */}
      <path 
        d="M50 50 C 35 65, 20 65, 20 72 C 20 78, 40 70, 50 50" 
        fill={COLORS.teal} 
      />

      {/* --- 4. TECH BASE (Bottom Center) --- */}
      
      {/* Base Solid Shape */}
      <path 
        d="M25 75 Q 50 65, 75 75 C 75 75, 65 95, 50 98 C 35 95, 25 75, 25 75 Z" 
        fill={COLORS.deepBlue} 
      />

      {/* Circuit / House Icon */}
      <g transform="translate(50, 80)">
        {/* Roof / Arrow */}
        <path d="M-7 0 L 0 -6 L 7 0" stroke={COLORS.orangeTerra} strokeWidth="2" fill="none" strokeLinecap="round" strokeJoin="round" />
        
        {/* Circuit Lines */}
        {/* Center */}
        <line x1="0" y1="-3" x2="0" y2="10" stroke="#4FD1C5" strokeWidth="1.5" />
        <circle cx="0" cy="12" r="1.5" fill="#4FD1C5" />
        
        {/* Left Branch */}
        <path d="M-5 2 L -5 8 L -7 10" stroke="#4FD1C5" strokeWidth="1.5" fill="none" />
        <circle cx="-7" cy="10" r="1.2" fill="#4FD1C5" />

        {/* Right Branch */}
        <path d="M5 2 L 5 8 L 7 10" stroke="#4FD1C5" strokeWidth="1.5" fill="none" />
        <circle cx="7" cy="10" r="1.2" fill="#4FD1C5" />
      </g>

    </svg>
  );
};