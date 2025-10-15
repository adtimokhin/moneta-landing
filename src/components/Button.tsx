import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}
export const Button = ({
  children,
  href,
  className = '',
  variant = 'primary'
}: ButtonProps) => {
  const baseStyles = 'inline-block px-6 py-3 rounded-md font-medium transition-all duration-300 text-center';
  const variantStyles = {
    primary: 'bg-dark-100 hover:bg-dark-200 text-light-300 hover:text-light-100 border border-dark-300 shadow-sm',
    secondary: 'bg-dark-300 hover:bg-dark-200 text-light-300 hover:text-light-100 border border-dark-200 shadow-sm',
    outline: 'border border-light-600 text-light-500 hover:text-light-300 hover:border-light-400'
  };
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;
  return href ? <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
      {children}
    </a> : <button className={buttonClasses}>{children}</button>;
};