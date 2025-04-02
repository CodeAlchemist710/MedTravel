import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LuxuryScape Adventure</h3>
            <p className="mb-4">
              Transforming healthcare journeys with world-class medical treatments combined with
              rejuvenating Costa Rican vacation experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#treatments" className="hover:text-accent transition-colors">Medical Treatments</Link>
              </li>
              <li>
                <Link href="#destinations" className="hover:text-accent transition-colors">Destinations</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-accent transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Medical Treatments */}
          <div>
            <h3 className="text-xl font-bold mb-4">Medical Treatments</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#dental" className="hover:text-accent transition-colors">Dental Procedures</Link>
              </li>
              <li>
                <Link href="#cosmetic" className="hover:text-accent transition-colors">Cosmetic Surgery</Link>
              </li>
              <li>
                <Link href="#wellness" className="hover:text-accent transition-colors">Wellness Retreats</Link>
              </li>
              <li>
                <Link href="#orthopedic" className="hover:text-accent transition-colors">Orthopedic Treatments</Link>
              </li>
              <li>
                <Link href="#medical-checkup" className="hover:text-accent transition-colors">Medical Check-ups</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>San José, Costa Rica</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>+506 2222-3333</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />
                <span>info@luxuryscapeadventure.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} LuxuryScape Adventure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
