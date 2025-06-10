import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const navigate = useNavigate();
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