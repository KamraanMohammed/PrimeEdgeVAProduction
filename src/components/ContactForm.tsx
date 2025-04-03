import React, { useState } from 'react';
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
import confetti from 'canvas-confetti';
import { Loader2 } from "lucide-react";

interface ContactFormProps {
  buttonClassName?: string;
  buttonText?: string;
}

export function ContactForm({ buttonClassName, buttonText = "Contact Us" }: ContactFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      await fetch('https://formsubmit.co/ajax/shoveb1@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: 'New Contact Form Submission!',
          _template: 'table',
          _captcha: 'false'
        })
      });

      // Show success state regardless of response
      setShowThankYou(true);
      
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Reset form
      e.currentTarget.reset();
      
      // Close the form dialog after 3 seconds
      setTimeout(() => {
        setShowThankYou(false);
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      // If there's a network error, try the standard form submission
      const form = e.currentTarget;
      form.action = "https://formsubmit.co/shoveb1@gmail.com";
      form.method = "POST";
      
      // Add the hidden fields
      const hiddenFields = {
        _subject: 'New Contact Form Submission!',
        _template: 'table',
        _captcha: 'false',
        _next: window.location.href // Return to the same page
      };
      
      // Add hidden fields to the form
      Object.entries(hiddenFields).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });
      
      // Submit the form normally
      form.submit();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className={buttonClassName}>{buttonText}</Button>
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
            <form onSubmit={handleSubmit} className="space-y-4">
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
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-10 text-center">
            <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
            <p className="text-gray-600">
              We've received your message and will get back to you soon.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
} 