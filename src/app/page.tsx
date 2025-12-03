'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import MenuTabs from '@/components/MenuTabs/MenuTabs';
import OfferBanner from '@/components/OfferBanner/OfferBanner';
import ContactSection from '@/components/ContactSection/ContactSection';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuTabs />
        <OfferBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
