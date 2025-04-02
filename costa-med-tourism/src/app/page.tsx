import Hero from '@/components/home/Hero';
import Benefits from '@/components/home/Benefits';
import About from '@/components/home/About';
import Treatments from '@/components/home/Treatments';
import Packages from '@/components/home/Packages';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <About />
      <Treatments />
      <Packages />
      <Testimonials />
      <Contact />
    </>
  );
}
