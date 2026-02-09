import React from 'react';
import { Button } from './Button';
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}
export const Hero = ({
  title,
  subtitle,
  ctaText,
  ctaLink
}: HeroProps) => {
  return <section className="relative w-full min-h-[90vh] flex items-center bg-dark-400 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-dark-300/20 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-dark-300/20 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 pt-28 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-light-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <Button href={ctaLink} variant="primary" className="text-lg px-8 py-3">
            {ctaText}
          </Button>
          <div className="mt-20 flex flex-wrap justify-center gap-10">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-dark-300 rounded-full flex items-center justify-center border border-dark-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-400">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-light-600">✦ $680B Market</p>
                <p className="font-medium text-light-400">
                  Only $40B Served
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-dark-300 rounded-full flex items-center justify-center border border-dark-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-400">
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-light-600">$ $200B+ in Stablecoins</p>
                <p className="font-medium text-light-400">
                  Seeking Yield
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};