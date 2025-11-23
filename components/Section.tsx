import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  bgColor?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  bgColor = 'bg-white', 
  children 
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgColor} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export const SectionTitle: React.FC<{ 
  title: string; 
  subtitle?: string; 
  align?: 'left' | 'center' 
}> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#234568] mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#6DA89B] rounded-full opacity-70"></span>
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};