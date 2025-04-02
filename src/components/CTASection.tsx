import React from 'react';
import { ArrowRight } from 'lucide-react';
import CalendlyDialog from './CalendlyDialog';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to scale your marketplace business?
        </h2>
        <p className="text-white/80 mb-10 max-w-2xl mx-auto">
          Join successful marketplace sellers who trust PrimeEdgeVA for their business growth
        </p>
        <CalendlyDialog 
          buttonText="Get Started Now"
          className="bg-white text-primary hover:bg-gray-100"
        />
      </div>
    </section>
  );
};

export default CTASection;
