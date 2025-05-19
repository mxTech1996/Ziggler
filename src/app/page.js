'use client';

import Benefits from '@/components/organisms/Benefits';
import Footer from '@/components/organisms/Footer';
import HeroSection from '@/components/organisms/Hero';
import IntroSection from '@/components/organisms/Intro';
import Navbar from '@/components/organisms/Navbar';
import ShopSection from '@/components/organisms/Products';
import ServicesCarousel from '@/components/organisms/Services';
import ConsultingSolutions from '@/components/organisms/Solutions';
import TestimonialsCarousel from '@/components/organisms/Testimonials';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <ServicesCarousel />
      <ConsultingSolutions />
      <Benefits />
      <ShopSection />
      <TestimonialsCarousel />
      <Footer />
    </main>
  );
}
