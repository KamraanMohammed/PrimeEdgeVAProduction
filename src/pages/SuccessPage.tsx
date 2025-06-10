import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function SuccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center">
      <div className="container max-w-lg px-4">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">Payment Successful!</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Thank you for your payment. Your transaction was successful and we will be in touch soon.
        </p>
        <Button onClick={() => navigate("/")}>Return to Homepage</Button>
      </div>
    </div>
  );
} 