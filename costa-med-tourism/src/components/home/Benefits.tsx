import React from 'react';
import Section from '../ui/Section';
import { DollarSign, Award, HeartPulse, Palmtree, ShieldCheck, Clock } from 'lucide-react';

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm transition-transform hover:shadow-md hover:-translate-y-1">
      <div className="text-primary mb-4 p-3 bg-primary/10 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <DollarSign size={28} />,
      title: 'Cost Savings',
      description: 'Save 40-70% on medical procedures compared to U.S. prices, without compromising on quality.',
    },
    {
      icon: <Award size={28} />,
      title: 'World-Class Healthcare',
      description: 'JCI-accredited facilities with U.S.-trained doctors delivering international standard care.',
    },
    {
      icon: <Palmtree size={28} />,
      title: 'Beautiful Destinations',
      description: 'Recover in paradise with beaches, rainforests, and luxury accommodations.',
    },
    {
      icon: <HeartPulse size={28} />,
      title: 'Personalized Care',
      description: 'Enjoy attentive, one-on-one care with doctors who spend more time with each patient.',
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Safe & Reliable',
      description: 'Costa Rica is politically stable, tourist-friendly, and has a strong healthcare infrastructure.',
    },
    {
      icon: <Clock size={28} />,
      title: 'No Long Wait Times',
      description: 'Schedule your procedures quickly without the months-long waiting periods.',
    },
  ];

  return (
    <Section
      id="benefits"
      title="Why Choose Costa Rica for Medical Tourism?"
      subtitle="Costa Rica offers unique advantages that make it the perfect destination for combining medical care with a dream vacation."
      background="light"
      centered={true}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitItem
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Benefits;
