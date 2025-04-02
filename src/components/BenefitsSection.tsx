import React from 'react';
import { Calendar, BarChart, Shield, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Hire in 2 Weeks",
      description: "Your talent starts with a one-week trial and is ready to join in just two weeks."
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Lower Costs",
      description: "Unlock Amazon growth! $500 setup includes account, PPC, & bookkeeping. FREE 2-week trial. Just $5/hour to continue."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "100% Satisfaction Guarantee",
      description: "We find you the perfect team member until you're completely satisfied."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Cancel at Any Time",
      description: "Hire a remote team member, pay week-to-week, and cancel anytime."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Everything you need to succeed
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 flex-grow">{benefit.description}</p>
              <div className="mt-6">
                <Button variant="default" className="w-full bg-primary/10 text-primary hover:bg-primary/20 border-0">
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
