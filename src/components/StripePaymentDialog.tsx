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

interface StripePaymentDialogProps {
  buttonText: string;
  className?: string;
  planId: string; // Stripe Price ID
  planName: string;
  amount: number;
}

const WORKER_URL = 'https://stripe-checkout.primescopevirtual.workers.dev'; // <-- Replace with your Worker URL

const StripePaymentDialog: React.FC<StripePaymentDialogProps> = ({
  buttonText,
  className,
  planId,
  planName,
  amount,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planId, email }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
      const data = await response.json();
      if (!data.url) {
        throw new Error('No checkout URL returned.');
      }
      window.location.href = data.url;
    } catch (err: any) {
      setError(err.message || 'Payment initiation failed.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={className}>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Subscribe to {planName}</DialogTitle>
          <DialogDescription>
            Enter your email to proceed with payment for the {planName} plan (${amount}/hour).
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-4" onSubmit={handlePayment}>
          <input
            type="email"
            required
            className="border rounded px-3 py-2"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={isLoading}
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <Button type="submit" disabled={isLoading || !email} className="w-full">
            {isLoading ? 'Redirecting...' : 'Proceed to Payment'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default StripePaymentDialog; 