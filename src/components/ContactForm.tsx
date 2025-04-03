import React, { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isExploding, setIsExploding] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/primescopevirtual@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });
      
      if (response.ok) {
        setShowThankYou(true);
        setIsExploding(true);
        // Reset form
        e.currentTarget.reset();
        // Hide thank you message after 5 seconds
        setTimeout(() => {
          setShowThankYou(false);
          setIsExploding(false);
          setIsOpen(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Contact Us</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {!showThankYou ? (
          <>
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>
              <DialogDescription>
                Send us a message and we'll get back to you as soon as possible.
              </DialogDescription>
            </DialogHeader>
            <form 
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid w-full items-center gap-2">
                <Input type="text" name="name" placeholder="Your Name" required />
              </div>
              
              <div className="grid w-full items-center gap-2">
                <Input type="email" name="email" placeholder="Your Email" required />
              </div>
              
              <div className="grid w-full items-center gap-2">
                <Input type="tel" name="phone" placeholder="Phone Number (Optional)" />
              </div>
              
              <div className="grid w-full items-center gap-2">
                <Textarea name="message" placeholder="Your Message" required />
              </div>
              
              <div className="flex justify-end">
                <Button type="submit">Send Message</Button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-12 text-center relative">
            {isExploding && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ConfettiExplosion />
              </div>
            )}
            <h2 className="text-2xl font-bold text-primary mb-4">Thank You!</h2>
            <p className="text-gray-600">
              We've received your message and will get back to you soon.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
} 