import React from 'react';
import { LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-dark-400 text-light-500 relative overflow-hidden">
      {/* Animated wave pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="wave-pattern"></div>
      </div>
      {/* Line accents */}
      <div className="absolute inset-0 opacity-3">
        <div className="grid-pattern"></div>
      </div>
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Moneta
            </span>
          </div>
          <div className="flex space-x-10">
            <a href="#" className="text-light-500 hover:text-light-300 transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-light-500 hover:text-light-300 transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="text-light-500 hover:text-light-300 transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-dark-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-light-600 mb-6 md:mb-0">
            © {new Date().getFullYear()} Moneta Financial. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-light-600 hover:text-primary-400 transition-colors duration-300">
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .wave-pattern {
          position: absolute;
          width: 200%;
          height: 100%;
          background: rgba(255, 255, 255, 0.03);
          animation: wave 25s linear infinite;
        }
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .grid-pattern {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </footer>;
};