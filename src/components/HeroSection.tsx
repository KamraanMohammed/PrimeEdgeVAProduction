import React from 'react';
import { ArrowRight } from 'lucide-react';
import CalendlyDialog from './CalendlyDialog';
import OrangeDotsBg from '@/components/OrangeDotsBg';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <OrangeDotsBg />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90 z-[1]" />
      <div className="container mx-auto text-center relative z-10">
        <div className="inline-block animate-fade-in">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Virtual Assistants for Marketplace Success
          </span>
        </div>
        <h1 className="mt-8 text-5xl md:text-6xl font-bold text-gray-900 animate-fade-up">
          Get Talent with US Marketplace Experience.
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-up">
          Professional virtual assistance for Amazon and Walmart marketplace sellers. Optimize your operations and scale your business with our expert team.
        </p>
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-lg text-gray-700">Hire remote, pay week-to-week, for 1/4 the cost</p>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <CalendlyDialog 
            buttonText="Get Started"
            className="bg-primary hover:bg-primary-dark text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
