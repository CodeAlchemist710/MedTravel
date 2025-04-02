import React from 'react';
import Image from 'next/image';
import Section from '../ui/Section';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  location: string;
  treatment: string;
  imageSrc?: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  name,
  location,
  treatment,
  imageSrc,
  rating,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
      <div className="flex mb-4 text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < rating ? "currentColor" : "none"}
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>

      <blockquote className="flex-grow">
        <p className="text-gray-700 italic mb-6">&ldquo;{quote}&rdquo;</p>
      </blockquote>

      <div className="flex items-center mt-4">
        {imageSrc && imageSrc.length > 0 && (
          <div className="mr-4 relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-bold">{name}</h4>
          <div className="text-sm text-gray-500">
            <span>{location} • </span>
            <span className="text-primary">{treatment}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I saved over $15,000 on my dental work compared to quotes from my hometown dentist. The clinic in Costa Rica was modern, clean, and the doctors were extremely professional. I got to recover on beautiful beaches!",
      name: "Sarah Johnson",
      location: "Toronto, Canada",
      treatment: "Full Dental Restoration",
      imageSrc: "",
      rating: 5
    },
    {
      quote: "Combining my facelift with a vacation in Costa Rica was the best decision. The medical facilities were state-of-the-art, and the post-surgery recovery in a private villa made the experience so much better than it would have been at home.",
      name: "Robert Miller",
      location: "San Diego, CA",
      treatment: "Facelift & Neck Lift",
      imageSrc: "",
      rating: 5
    },
    {
      quote: "I was hesitant about medical tourism, but CostaMedTravel made everything seamless. From airport pickup to all appointments, every detail was handled. The wellness retreat helped me recover from burnout completely.",
      name: "Emma Thompson",
      location: "Chicago, IL",
      treatment: "Wellness Retreat",
      imageSrc: "",
      rating: 5
    },
    {
      quote: "The quality of care I received for my knee replacement was exceptional. The surgeon was U.S. trained, and the hospital was actually nicer than many I've seen in the States. The cost savings were remarkable.",
      name: "David Wilson",
      location: "Seattle, WA",
      treatment: "Knee Replacement",
      imageSrc: "",
      rating: 5
    },
    {
      quote: "The dental work I had done was top-notch, and I loved being able to explore Costa Rica during my recovery days. The entire experience was stress-free thanks to the excellent coordination by the team.",
      name: "Jennifer Adams",
      location: "Vancouver, Canada",
      treatment: "Dental Implants",
      imageSrc: "",
      rating: 5
    },
    {
      quote: "My medical check-up package was comprehensive and discovered issues my doctor at home had missed. The staff was caring and thorough, and I got to enjoy a beautiful vacation at the same time.",
      name: "Michael Reed",
      location: "Boston, MA",
      treatment: "Executive Health Check",
      imageSrc: "",
      rating: 4
    }
  ];

  return (
    <Section
      id="testimonials"
      title="What Our Clients Say"
      subtitle="Hear from people who transformed their health while enjoying the beauty of Costa Rica."
      centered={true}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            name={testimonial.name}
            location={testimonial.location}
            treatment={testimonial.treatment}
            imageSrc={testimonial.imageSrc}
            rating={testimonial.rating}
          />
        ))}
      </div>

      <div className="mt-16 bg-primary/5 rounded-xl p-8 border border-primary/20">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-3">Trusted by Thousands</h3>
          <p className="text-gray-600">
            Join the growing number of satisfied patients who chose Costa Rica for their medical needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
            <div className="text-sm text-gray-600">Satisfied Patients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-gray-600">Partner Clinics</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">12+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
