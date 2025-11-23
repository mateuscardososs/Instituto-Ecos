import React from 'react';
import { COLORS } from '../constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  style,
  ...props 
}) => {
  
  let baseStyle = `px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed ${fullWidth ? 'w-full' : ''}`;
  let variantStyle = '';

  // Utilizing style prop for dynamic colors from constants where Tailwind classes are insufficient for specific hexes
  const customStyles: React.CSSProperties = { ...style };

  switch (variant) {
    case 'primary':
      customStyles.backgroundColor = COLORS.deepBlue;
      customStyles.color = 'white';
      break;
    case 'secondary':
      customStyles.backgroundColor = COLORS.greenMedium;
      customStyles.color = 'white';
      break;
    case 'outline':
      customStyles.border = `2px solid ${COLORS.deepBlue}`;
      customStyles.color = COLORS.deepBlue;
      customStyles.backgroundColor = 'transparent';
      break;
  }

  return (
    <button 
      className={`${baseStyle} ${className} hover:shadow-md`} 
      style={customStyles}
      {...props}
    >
      {children}
    </button>
  );
};