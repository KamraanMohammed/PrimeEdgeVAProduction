import React from 'react';
import { Check } from 'lucide-react';
import StripePaymentDialog from './StripePaymentDialog';

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
              <h3 className="text-2xl font-bold mb-4">Product Research</h3>
              <p className="text-gray-700 mb-4">
                Great English, Neutral Accent, Remote Work Experience, High Potential
              </p>
            </div>
            
            <div className="bg-primary text-white p-8 mt-auto">
              <div className="flex items-end">
                <span className="text-lg">from</span>
                <span className="text-6xl font-bold ml-2">$5</span>
                <span className="text-xl ml-1">/ hour</span>
              </div>
              <div className="mt-4 text-sm space-y-1">
                <div><b>Initial payment:</b> $235 ($117.50 upfront to begin).</div>
                <div><b>Weeks 1 & 2:</b> Free service.</div>
                <div><b>Week 3:</b> $96/week (24hr part-time) or $160/week (40hr full-time), continuing until canceled.</div>
                <div><b>Week 4:</b> Weekly rate + remaining $117.50 initial fee.</div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="font-bold mb-4">Common Responsibilities:</p>
              <p className="italic text-gray-700 mb-6">Essential Support</p>
              
              <ul className="space-y-3">
                {[
                  "Market research",
                  "Data entry and file management",
                  "Travel planning and booking",
                  "Supplier research",
                  "Keyword and SEO research",
                  "Social media research"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <StripePaymentDialog 
                  buttonText="Get Started"
                  className="w-full bg-primary hover:bg-primary-dark text-white"
                  planId="price_1RLzEe2aGo9uNEdkG70uc0wf"
                  planName="Product Research"
                  amount={5}
                />
              </div>
            </div>
          </div>
          
          {/* Advanced Plan */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col relative transform md:scale-105 z-10">
            <div className="absolute top-0 inset-x-0 bg-black text-center py-2 font-bold text-white">
              MOST POPULAR
            </div>
            <div className="p-8 pt-12">
              <h3 className="text-2xl font-bold mb-4">Account Management</h3>
              <p className="text-gray-700 mb-4">
                Good US Accent, Can Create Processes, Can Lead Teams, Autonomous
              </p>
            </div>
            
            <div className="bg-primary p-8 mt-auto">
              <div className="flex items-end">
                <span className="text-lg text-white">from</span>
                <span className="text-6xl font-bold ml-2 text-white">$7</span>
                <span className="text-xl ml-1 text-white">/ hour</span>
              </div>
              <div className="mt-4 text-sm text-white space-y-1">
                <div><b>Initial payment:</b> $235 ($117.50 upfront to begin).</div>
                <div><b>Weeks 1 & 2:</b> Free service.</div>
                <div><b>Week 3:</b> $120/week (24hr part-time) or $200/week (40hr full-time), continuing until canceled.</div>
                <div><b>Week 4:</b> Weekly rate + remaining $117.50 initial fee.</div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="font-bold mb-4">Common Responsibilities:</p>
              <p className="italic text-gray-700 mb-6">Starter + Advanced Administrative And Strategic Support</p>
              
              <ul className="space-y-3">
                {[
                  "Create & Upload Listings",
                  "Optimize Listings",
                  "Monitor Orders",
                  "Inventory Tracking",
                  "Respond to Buyer Messages",
                  "Account Health Monitoring"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <StripePaymentDialog 
                  buttonText="Get Started"
                  className="w-full bg-primary hover:bg-primary-dark text-white"
                  planId="price_1RZM8o2aGo9uNEdkdjEl1qmV"
                  planName="Account Management"
                  amount={7}
                />
              </div>
            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Bookkeeping</h3>
              <p className="text-gray-700 mb-4">
                Perfect US Accent, Extensive Industry Experience, High-touch Client Engagement
              </p>
            </div>
            
            <div className="bg-primary text-white p-8 mt-auto">
              <div className="flex items-end">
                <span className="text-lg">from</span>
                <span className="text-6xl font-bold ml-2">10</span>
                <span className="text-xl ml-1">/ hour</span>
              </div>
              <div className="mt-4 text-sm space-y-1">
                <div><b>Initial payment:</b> $235 ($117.50 upfront to begin).</div>
                <div><b>Weeks 1 & 2:</b> Free service.</div>
                <div><b>Week 3:</b> $96/week (24hr part-time) or $160/week (40hr full-time), continuing until canceled.</div>
                <div><b>Week 4:</b> Weekly rate + remaining $117.50 initial fee.</div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="font-bold mb-4">Common Responsibilities:</p>
              <p className="italic text-gray-700 mb-6">Advanced + Executive-Level And Specialist Support</p>
              
              <ul className="space-y-3">
                {[
                  "Record Daily Transactions",
                  "Upload Receipts & Invoices",
                  "Prepare Monthly Reports",
                  "Budget Tracking",
                  "Track Invoices",
                  "Manage Vendor Bills"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <StripePaymentDialog 
                  buttonText="Get Started"
                  className="w-full bg-primary hover:bg-primary-dark text-white"
                  planId="price_1RZM9K2aGo9uNEdkLyLUzjf6"
                  planName="Bookkeeping"
                  amount={10}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
