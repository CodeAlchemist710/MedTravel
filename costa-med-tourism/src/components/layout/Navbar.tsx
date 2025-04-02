'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-2xl">Luxury<span className="text-primary font-bold">Scape</span> Adventure</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-neutral-dark hover:text-primary font-medium">
              Home
            </Link>
            <Link href="#treatments" className="text-neutral-dark hover:text-primary font-medium">
              Treatments
            </Link>
            <Link href="#destinations" className="text-neutral-dark hover:text-primary font-medium">
              Destinations
            </Link>
            <Link href="#about" className="text-neutral-dark hover:text-primary font-medium">
              About Us
            </Link>
            <Link href="#testimonials" className="text-neutral-dark hover:text-primary font-medium">
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary-dark transition duration-150"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-neutral-dark hover:bg-primary hover:text-white font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#treatments"
              className="block px-3 py-2 rounded-md text-neutral-dark hover:bg-primary hover:text-white font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Treatments
            </Link>
            <Link
              href="#destinations"
              className="block px-3 py-2 rounded-md text-neutral-dark hover:bg-primary hover:text-white font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 rounded-md text-neutral-dark hover:bg-primary hover:text-white font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-neutral-dark hover:bg-primary hover:text-white font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
