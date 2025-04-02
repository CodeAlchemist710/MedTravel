import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { Button } from '../ui/Button';
import { CheckCircle } from 'lucide-react';

interface TreatmentCardProps {
  title: string;
  description: string;
  imageSrc: string;
  benefits: string[];
  price: string;
  savingsPercent: string;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({
  title,
  description,
  imageSrc,
  benefits,
  price,
  savingsPercent
}) => {
  return (
    <Card
      title={title}
      description={description}
      imageSrc={imageSrc}
      imageAlt={`${title} in Costa Rica`}
      footer={
        <div className="flex justify-between items-center">
          <div>
            <span className="block text-sm text-gray-500">Starting from</span>
            <span className="text-lg font-bold text-primary">${price}</span>
          </div>
          <Button href="#contact" variant="default" size="sm">Learn More</Button>
        </div>
      }
    >
      <div className="mt-2 mb-4">
        <p className="text-sm text-accent-dark font-medium mb-2">Save up to {savingsPercent}% compared to U.S. prices</p>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
              <span className="text-sm text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

const Treatments = () => {
  const treatments = [
    {
      title: "Dental Procedures",
      description: "High-quality dental care at a fraction of the cost you'd pay at home.",
      imageSrc: "/images/dental-clinic.jpg",
      price: "500",
      savingsPercent: "70",
      benefits: [
        "Dental implants, crowns & veneers",
        "Full mouth restoration",
        "Cosmetic dentistry",
        "Includes free consultation & X-rays"
      ]
    },
    {
      title: "Cosmetic Surgery",
      description: "Transform your appearance with safe, affordable cosmetic procedures.",
      imageSrc: "/images/doctor-patient.jpg",
      price: "2,500",
      savingsPercent: "60",
      benefits: [
        "Facelifts & rhinoplasty",
        "Breast augmentation & reduction",
        "Body contouring & tummy tuck",
        "Includes pre & post-op care"
      ]
    },
    {
      title: "Wellness Retreats",
      description: "Rejuvenate your mind, body, and spirit in our wellness sanctuaries.",
      imageSrc: "/images/wellness-retreat.jpg",
      price: "1,200",
      savingsPercent: "50",
      benefits: [
        "Holistic health assessments",
        "Nutrition consultation & plan",
        "Yoga & meditation sessions",
        "Natural healing therapies"
      ]
    }
  ];

  return (
    <Section
      id="treatments"
      title="Medical Treatments & Procedures"
      subtitle="Discover affordable, high-quality medical treatments performed by world-class doctors in state-of-the-art facilities."
      centered={true}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {treatments.map((treatment, index) => (
          <TreatmentCard
            key={index}
            title={treatment.title}
            description={treatment.description}
            imageSrc={treatment.imageSrc}
            benefits={treatment.benefits}
            price={treatment.price}
            savingsPercent={treatment.savingsPercent}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Our network includes JCI-accredited hospitals and clinics with U.S.-trained and board-certified specialists
          providing care that meets or exceeds international standards.
        </p>
        <Button href="#contact" variant="default" size="lg">
          Get a Personalized Treatment Plan
        </Button>
      </div>
    </Section>
  );
};

export default Treatments;
