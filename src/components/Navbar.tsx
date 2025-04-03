import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Headset } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from "./ContactForm";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <a href="#team" className="text-gray-600 hover:text-primary transition-colors">Our Team</a>
          <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
          <ContactForm />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col">
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
                href="#team" 
                className="text-gray-600 hover:text-primary transition-colors py-2 px-4 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Team
              </a>
              <a 
                href="#pricing" 
                className="text-gray-600 hover:text-primary transition-colors py-2 px-4 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="py-2 px-4">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
