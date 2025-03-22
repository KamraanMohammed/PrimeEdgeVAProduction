
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Flexible Hiring,
        </h2>
        <h2 className="text-4xl font-bold text-center mb-16">
          Adjust Your Team Any Time
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <p className="text-gray-700 mb-4">
                Great English, Neutral Accent, Remote Work Experience, High Potential
              </p>
            </div>
            
            <div className="bg-primary text-white p-8 mt-auto">
              <div className="flex items-end">
                <span className="text-lg">from</span>
                <span className="text-6xl font-bold ml-2">$14</span>
                <span className="text-xl ml-1">/ hour</span>
              </div>
            </div>
            
            <div className="p-8">
              <p className="font-bold mb-4">Common Responsibilities:</p>
              <p className="italic text-gray-700 mb-6">Essential Support</p>
              
              <ul className="space-y-3">
                {[
                  "Calendar and email management",
                  "Data entry and file management",
                  "Travel planning and booking",
                  "Content posting and scheduling",
                  "Basic social media management",
                  "Simple analytics tracking"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full mt-8 bg-primary hover:bg-primary-dark text-white">
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Advanced Plan */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col relative transform md:scale-105 z-10">
            <div className="absolute top-0 inset-x-0 bg-black text-center py-2 font-bold text-white">
              MOST POPULAR
            </div>
            <div className="p-8 pt-12">
              <h3 className="text-2xl font-bold mb-4">Advanced</h3>
              <p className="text-gray-700 mb-4">
                Good US Accent, Can Create Processes, Can Lead Teams, Autonomous
              </p>
            </div>
            
            <div className="bg-primary p-8 mt-auto">
              <div className="flex items-end">
                <span className="text-lg text-white">from</span>
                <span className="text-6xl font-bold ml-2 text-white">$16</span>
                <span className="text-xl ml-1 text-white">/ hour</span>
              </div>
            </div>
            
            <div className="p-8">
              <p className="font-bold mb-4">Common Responsibilities:</p>
              <p className="italic text-gray-700 mb-6">Starter + Advanced Administrative And Strategic Support</p>
              
              <ul className="space-y-3">
                {[
                  "Meeting agendas and minutes",
                  "Budget tracking and reporting",
                  "Event planning and coordination",
                  "Client communication",
                  "Executive and personal task support",
                  "Content strategy and calendar planning"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full mt-8 bg-primary hover:bg-primary-dark text-white">
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-gray-700 mb-4">
                Perfect US Accent, Extensive Industry Experience, High-touch Client Engagement
              </p>
            </div>
            
            <div className="bg-primary text-white p-8 mt-auto">
              <div className="flex items-end">
                <span className="text-lg">from</span>
                <span className="text-6xl font-bold ml-2">18+</span>
                <span className="text-xl ml-1">/ hour</span>
              </div>
            </div>
            
            <div className="p-8">
              <p className="font-bold mb-4">Common Responsibilities:</p>
              <p className="italic text-gray-700 mb-6">Advanced + Executive-Level And Specialist Support</p>
              
              <ul className="space-y-3">
                {[
                  "Manage high-level clients",
                  "Collaborations and sponsorships",
                  "Oversee strategic partnerships",
                  "Coordinate networking opportunities",
                  "Lead large-scale projects",
                  "Facilitate core system improvements"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full mt-8 bg-primary hover:bg-primary-dark text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
