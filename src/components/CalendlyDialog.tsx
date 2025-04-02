import React from 'react';
import { InlineWidget } from "react-calendly";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CalendlyDialogProps {
  buttonText?: string;
  className?: string;
}

const CalendlyDialog: React.FC<CalendlyDialogProps> = ({ 
  buttonText = "Contact Us",
  className = "bg-primary text-white hover:bg-primary/90"
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[85vh]">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-center">Schedule a Meeting</DialogTitle>
        </DialogHeader>
        <div className="h-full min-h-[600px]">
          <InlineWidget 
            url="https://calendly.com/primescopevirtual/30min"
            styles={{
              height: '100%',
              width: '100%',
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyDialog; 