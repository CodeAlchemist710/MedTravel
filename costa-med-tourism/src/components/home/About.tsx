'use client';

import React from 'react';
import Image from 'next/image';
import Section from '../ui/Section';
import { Button } from '../ui/Button';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <Section
      id="about"
      title="About LuxuryScape Adventure"
      subtitle="Your trusted partner for medical tourism in Costa Rica since 2011."
      background="light"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-lg overflow-hidden h-[400px] lg:h-[500px] shadow-lg">
          <Image
            src="/images/tropical-sunset.jpg"
            alt="Costa Rica beach sunset"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
          <p className="text-gray-600 mb-6">
            LuxuryScape Adventure is a premier medical tourism agency based in San José, Costa Rica,
            specializing in connecting international patients with top-rated healthcare providers
            while offering unforgettable vacation experiences.
          </p>

          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-600 mb-6">
            Our mission is to make high-quality healthcare accessible and affordable to everyone
            by leveraging Costa Rica&apos;s world-class medical facilities and natural beauty. We
            believe that healing happens best when the mind, body, and spirit are nurtured in
            a beautiful, relaxing environment.
          </p>

          <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
              <span>Personalized care and tailored treatment plans for each patient</span>
            </li>
            <li className="flex">
              <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
              <span>Partnerships with JCI-accredited hospitals and clinics</span>
            </li>
            <li className="flex">
              <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
              <span>Full-service concierge to handle all travel and accommodation details</span>
            </li>
            <li className="flex">
              <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
              <span>Bilingual staff and medical translators to ensure clear communication</span>
            </li>
            <li className="flex">
              <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
              <span>Post-treatment follow-up and support after you return home</span>
            </li>
          </ul>

          <Button href="#contact" variant="default">
            Start Your Journey Today
          </Button>
        </div>
      </div>

      <div className="mt-16 p-8 bg-primary text-white rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold mb-2">12+</h3>
            <p>Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">50+</h3>
            <p>Medical Specialists</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">20+</h3>
            <p>Partner Facilities</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
