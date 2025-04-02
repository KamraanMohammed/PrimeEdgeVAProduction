import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const steps = [
    {
      number: "1",
      title: "Get Started:",
      description: "Hop on a discovery call with our team so we can assess what you need.",
      image: "/lovable-uploads/discover-call.png"
    },
    {
      number: "2",
      title: "Review Candidates:",
      description: "We'll match you with pre-vetted talent that fits your requirements.",
      image: "/lovable-uploads/review-canidates.png"
    },
    {
      number: "3",
      title: "Start Trial:",
      description: "Begin with a one-week trial to ensure it's the perfect match.",
      image: "/lovable-uploads/start-trail.png"
    },
    {
      number: "4",
      title: "Subscribe to a Plan:",
      description: "Choose a flexible monthly plan that works for your business.",
      image: "/lovable-uploads/e5d19d9f-8ceb-4174-9b06-917e5532175b.png"
    },
    {
      number: "5",
      title: "100% Satisfaction Guarantee:",
      description: "We ensure you're completely happy with your virtual assistant.",
      image: "/lovable-uploads/c02279ee-14dc-4be2-bce4-65dfed7caba4.png"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px',
        threshold: 0.5
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    stepRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <section id="how-it-works" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          How <span className="text-accent">Prime</span><span className="text-primary">EdgeVA</span> works:
        </h2>
        <p className="text-xl text-center mb-16 text-gray-600">Hire for any position and pay week-to-week</p>
        
        <div className="grid md:grid-cols-7 gap-6 items-start">
          {/* Left side - Steps */}
          <div className="md:col-span-3 space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => stepRefs.current[index] = el}
                className={`flex step-item cursor-pointer transition-all duration-500 ${
                  activeStep === index ? 'scale-105 opacity-100' : 'opacity-50'
                }`}
                onClick={() => handleStepClick(index)}
              >
                <div className="mr-4">
                  <div className={`flex items-center justify-center h-12 w-12 rounded-full ${
                    activeStep === index ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
                  } font-semibold transition-colors duration-500`}>
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    activeStep === index ? 'text-primary' : 'text-gray-800'
                  }`}>{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {activeStep === index && (
                    <Button className="mt-4 animate-fade-in">
                      Get Started
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Middle - Connecting dots */}
          <div className="hidden md:flex md:col-span-1 items-start justify-center sticky top-20" style={{ height: '400px' }}>
            <div className="flex flex-col items-center space-y-2 h-full justify-center">
              {[0,1,2,3,4].map((_, i) => (
                <React.Fragment key={i}>
                  <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${activeStep >= i ? 'bg-primary' : 'bg-gray-300'}`}></div>
                  {i < 4 && <div className={`w-0.5 h-20 transition-colors duration-500 ${activeStep >= i ? 'bg-primary' : 'bg-gray-300'}`}></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="md:col-span-3 sticky top-20" style={{ height: '400px' }}>
            <div className="bg-primary/10 p-6 rounded-lg shadow-lg h-full flex items-center justify-center">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`transition-all duration-500 absolute inset-6 ${
                    activeStep === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <img 
                    src={step.image} 
                    alt={`Step ${step.number} visualization`} 
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
