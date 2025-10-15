import React from 'react';
import { Button } from './Button';
interface ClosingCTAProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}
export const ClosingCTA = ({
  title,
  subtitle,
  ctaText,
  ctaLink
}: ClosingCTAProps) => {
  return <section className="py-24 bg-dark-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-dark-200"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-dark-200/20 rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-dark-200/20 rounded-full"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-lg text-light-500 mb-12 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button href={ctaLink} variant="primary" className="px-8">
              {ctaText}
            </Button>
            <Button href="#" variant="outline">
              Learn More
            </Button>
          </div>
          
        </div>
      </div>
    </section>;
};