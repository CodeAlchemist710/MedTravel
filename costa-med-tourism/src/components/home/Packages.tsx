'use client';

import React from 'react';
import Image from 'next/image';
import Section from '../ui/Section';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

interface PackageProps {
  title: string;
  price: string;
  duration: string;
  description: string;
  imageSrc: string;
  features: string[];
}

const PackageCard: React.FC<PackageProps> = ({
  title,
  price,
  duration,
  description,
  imageSrc,
  features,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="relative md:w-2/5 h-64 md:h-auto">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 md:w-3/5 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-2xl font-bold text-neutral-dark">{title}</h3>
            <div className="text-right">
              <span className="block text-accent-dark font-bold text-xl">${price}</span>
              <span className="text-sm text-gray-500">{duration}</span>
            </div>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Package includes:</h4>
            <ul className="grid grid-cols-1 gap-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm">
                  <span className="mr-2 text-primary">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Button
          href="#contact"
          variant="default"
          className="mt-2 self-start"
        >
          Book this Package <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const Packages = () => {
  const packages = [
    {
      title: "Dental Vacation Package",
      price: "1,999",
      duration: "7 Days / 6 Nights",
      description: "Perfect for those seeking dental work in a relaxing setting. Includes comprehensive dental care and plenty of time to enjoy Costa Rica's beauty.",
      imageSrc: "/images/dental-tourism.jpg",
      features: [
        "Complete dental evaluation and treatment plan",
        "Up to 3 dental procedures (cleanings, fillings, or extractions)",
        "Luxury hotel accommodation",
        "Daily breakfast and select meals",
        "Guided tour of rainforest & beach excursion",
        "Airport transfers and local transportation"
      ]
    },
    {
      title: "Wellness Retreat & Spa Package",
      price: "3,499",
      duration: "10 Days / 9 Nights",
      description: "Rejuvenate your body and soul with our comprehensive wellness retreat, combining medical check-ups with relaxation and natural healing.",
      imageSrc: "/images/spa-treatment.jpg",
      features: [
        "Full medical check-up and wellness assessment",
        "5 spa treatments (massage, body wraps, facials)",
        "Personalized nutrition consultation",
        "Daily yoga and meditation sessions",
        "Luxury eco-resort accommodation",
        "Three organic meals daily",
        "Guided nature hikes and hot springs visit"
      ]
    },
    {
      title: "Cosmetic Surgery Recovery",
      price: "4,999",
      duration: "14 Days / 13 Nights",
      description: "Combine your desired cosmetic procedure with a peaceful recovery in a private luxury villa, surrounded by tropical beauty and attentive care.",
      imageSrc: "/images/infinity-pool.jpg",
      features: [
        "Pre-op consultation and customized treatment plan",
        "Selected cosmetic procedure with board-certified surgeon",
        "Post-operative care and follow-up appointments",
        "Private luxury villa accommodation",
        "Personal nurse visits during recovery",
        "Healthy meals designed for optimal healing",
        "Transportation to/from all appointments"
      ]
    }
  ];

  return (
    <Section
      id="destinations"
      title="All-Inclusive Medical Vacation Packages"
      subtitle="Our carefully crafted packages combine top-quality medical treatments with unforgettable Costa Rican experiences."
      background="light"
    >
      <div className="flex flex-col space-y-10">
        {packages.map((pkg, index) => (
          <PackageCard
            key={index}
            title={pkg.title}
            price={pkg.price}
            duration={pkg.duration}
            description={pkg.description}
            imageSrc={pkg.imageSrc}
            features={pkg.features}
          />
        ))}
      </div>

      <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-sm">
        <h3 className="text-2xl font-bold mb-4">Custom Package</h3>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Don&apos;t see exactly what you&apos;re looking for? We specialize in creating personalized medical
          tourism packages tailored to your specific needs, budget, and interests.
        </p>
        <Button href="#contact" variant="default" size="lg">
          Request a Custom Package
        </Button>
      </div>
    </Section>
  );
};

export default Packages;
