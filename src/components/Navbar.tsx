
import React, { useState } from 'react';
import { Menu, X, Headset } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ContactDialog } from '@/components/ContactDialog';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center text-2xl font-bold">
          <Headset className="h-6 w-6 text-primary mr-2" />
          <span className="text-accent">Prime<span className="text-primary">EdgeVA</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#benefits" className="text-gray-600 hover:text-primary transition-colors">Benefits</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How It Works</a>
          <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
          <a href="#team" className="text-gray-600 hover:text-primary transition-colors">Our Team</a>
          <ContactDialog />
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="p-2 text-gray-600 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b py-4 px-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            <a 
              href="#benefits" 
              className="text-gray-600 hover:text-primary transition-colors py-2 px-4 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-600 hover:text-primary transition-colors py-2 px-4 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="text-gray-600 hover:text-primary transition-colors py-2 px-4 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#team" 
              className="text-gray-600 hover:text-primary transition-colors py-2 px-4 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Team
            </a>
            <div className="py-2 px-4">
              <ContactDialog />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
