'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] max-h-[800px] overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-beach.jpg"
          alt="Costa Rica tropical beach"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              Experience LuxuryScape Adventure in Paradise
            </h1>
            <p className="text-xl text-white mb-8 md:text-2xl leading-relaxed drop-shadow-md font-medium">
              Combine affordable, high-quality medical treatments with a rejuvenating
              tropical vacation in beautiful Costa Rica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="#treatments"
                variant="default"
                size="lg"
                className="font-semibold"
              >
                Explore Treatments
              </Button>
              <Button
                href="#contact"
                variant="outline"
                size="lg"
                className="bg-white/20 border-white text-white hover:bg-white hover:text-primary font-semibold"
              >
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-12">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                <span className="text-accent font-bold mr-2 text-xl">★</span>
                <p className="text-white text-sm md:text-base font-medium">
                  Save up to 70% compared to U.S. healthcare costs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
