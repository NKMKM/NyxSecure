import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { ProductSuite } from './components/ProductSuite';
import { UseCases } from './components/UseCases';
import { DashboardPreview } from './components/DashboardPreview';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';
export function App() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden font-light">
      <ParticleBackground scrollY={scrollY} />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <HowItWorks />
          <ProductSuite />
          <UseCases />
          <DashboardPreview />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>;
}