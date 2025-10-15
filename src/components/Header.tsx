import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-400/90 backdrop-blur-sm shadow-lg shadow-dark-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Moneta Financial
          </span>
        </div>
        <div className="hidden md:flex space-x-10">
          <a
            href="#advantages"
            className="text-light-500 hover:text-light-300 font-medium transition-colors duration-300"
          >
            Why Moneta
          </a>
          <a
            href="#features"
            className="text-light-500 hover:text-light-300 font-medium transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="https://calendly.com/moneta/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-dark-200 text-light-300 hover:text-light-100 rounded-md hover:bg-dark-300 border border-dark-100 transition-colors"
          >
            Book a Demo
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-light-400"
          >
            {mobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-300 shadow-lg shadow-dark-900/20 border-t border-dark-200">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a
              href="#advantages"
              className="text-light-500 hover:text-light-300 font-medium py-2 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Moneta
            </a>
            <a
              href="#features"
              className="text-light-500 text-center hover:text-light-300 font-medium py-2 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="https://calendly.com/moneta/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-center bg-dark-200 text-light-300 hover:text-light-100 rounded-md hover:bg-dark-300 border border-dark-100 transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};