import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleReservation = () => {
    // This will be connected to your backend
    console.log("Chatbot opened - connect to your backend here");
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={handleReservation}
        size="lg"
        className="fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full shadow-2xl bg-primary hover:bg-primary/90 hover:scale-110 transition-all duration-300 group"
        aria-label="Termin vereinbaren"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="h-6 w-6 text-primary-foreground group-hover:animate-pulse" />
        )}
      </Button>

      {/* Chat Window Placeholder */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 z-40 w-96 h-[500px] bg-card border-2 border-primary rounded-2xl shadow-2xl animate-scale-in overflow-hidden">
          <div className="bg-primary p-6">
            <h3 className="font-playfair text-2xl font-bold text-primary-foreground mb-1">
              Termin vereinbaren
            </h3>
            <p className="text-primary-foreground/80 text-sm font-inter">
              Wir sind für Sie da
            </p>
          </div>
          
          <div className="p-6 h-[calc(100%-180px)] flex items-center justify-center">
            <div className="text-center">
              <MessageCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground font-inter mb-2">
                Chatbot Backend hier verbinden
              </p>
              <p className="text-sm text-muted-foreground/60 font-inter">
                Dieses Fenster ist bereit für Ihre Backend-Integration
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border bg-background">
            <p className="text-xs text-muted-foreground text-center font-inter">
              Verbinden Sie hier Ihr Reservierungssystem
            </p>
          </div>
        </div>
      )}
    </>
  );
};
