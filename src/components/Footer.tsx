
import React from 'react';
import { Headset } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Amazon</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Walmart</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Analytics</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Guides</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <div className="flex items-center justify-center mb-4">
            <Headset className="h-5 w-5 text-primary mr-2" />
            <span className="font-bold text-accent">Prime<span className="text-primary">EdgeVA</span></span>
          </div>
          © {new Date().getFullYear()} PrimeEdgeVA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
