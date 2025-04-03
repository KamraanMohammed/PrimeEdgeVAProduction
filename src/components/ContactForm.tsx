import React from 'react';
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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Contact Us</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Send us a message and we'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form 
          action="https://formsubmit.co/kamraan.mohammed@gmail.com" 
          method="POST" 
          className="space-y-4"
        >
          <input type="hidden" name="_subject" value="New Contact Form Submission!" />
          <input type="hidden" name="_next" value="https://primeedgeva.com/thank-you" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="true" />
          
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
      </DialogContent>
    </Dialog>
  );
} 