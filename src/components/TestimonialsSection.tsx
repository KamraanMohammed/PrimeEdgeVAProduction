import React from 'react';
import { TestimonialsSection as TestimonialsMarquee } from './blocks/testimonials-with-marquee';

const testimonials = [
  {
    author: {
      name: "Sarah Johnson",
      handle: "Amazon Seller",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23F97316'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='20'%3ESJ%3C/text%3E%3C/svg%3E"
    },
    text: "PrimeEdgeVA has been instrumental in scaling our Amazon business. Their virtual assistants are knowledgeable, professional, and incredibly efficient. We've seen a 40% increase in productivity since partnering with them."
  },
  {
    author: {
      name: "Michael Chen",
      handle: "E-commerce Entrepreneur",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23F97316'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='20'%3EMC%3C/text%3E%3C/svg%3E"
    },
    text: "The bookkeeping services from PrimeEdgeVA have transformed how we manage our finances. Their attention to detail and prompt communication make them an invaluable partner for any online business."
  },
  {
    author: {
      name: "Emily Rodriguez",
      handle: "Walmart Marketplace Seller",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23F97316'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='20'%3EER%3C/text%3E%3C/svg%3E"
    },
    text: "Their product research expertise helped us identify profitable niches and expand our product line. The ROI we've seen working with PrimeEdgeVA has been exceptional."
  },
  {
    author: {
      name: "David Thompson",
      handle: "Digital Business Owner",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23F97316'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='20'%3EDT%3C/text%3E%3C/svg%3E"
    },
    text: "What sets PrimeEdgeVA apart is their deep understanding of e-commerce platforms. Their VAs don't just follow instructions - they bring valuable insights and suggestions to improve operations."
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <TestimonialsMarquee
      title="Trusted by E-commerce Leaders"
      description="See what our clients say about working with PrimeEdgeVA's virtual assistants"
      testimonials={testimonials}
      className="bg-gray-50"
    />
  );
};

export default TestimonialsSection; 