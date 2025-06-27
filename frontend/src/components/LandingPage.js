import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Services from './Services';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import CTA from './CTA';
import Footer from './Footer';

const LandingPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;