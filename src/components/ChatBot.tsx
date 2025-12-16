import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load Vapi widget script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen && (window as any).vapiSDK) {
      // Initialize Vapi when chat is opened
      (window as any).vapiSDK.run({
        apiKey: "b03f1c67-af88-4007-888c-bf9787ddc1fd",
        assistant: "b2c9f1e7-4a28-4938-9c3a-deb79252bbc5",
        config: {
          position: "bottom-right",
          offset: "80px",
        },
      });
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Button
      onClick={handleToggle}
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
  );
};
