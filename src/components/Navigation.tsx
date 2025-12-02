import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("hero")}
            className="font-playfair text-2xl font-bold hover:text-primary transition-colors"
          >
            Meisterschnitt
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="font-inter text-sm hover:text-primary transition-colors uppercase tracking-wider"
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-inter text-sm hover:text-primary transition-colors uppercase tracking-wider"
            >
              Kontakt
            </button>
            <Button 
              variant="default"
              className="font-inter"
              onClick={() => scrollToSection("contact")}
            >
              Termin buchen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-border animate-fade-in">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left font-inter text-sm hover:text-primary transition-colors uppercase tracking-wider py-2"
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left font-inter text-sm hover:text-primary transition-colors uppercase tracking-wider py-2"
            >
              Kontakt
            </button>
            <Button 
              variant="default"
              className="w-full font-inter"
              onClick={() => scrollToSection("contact")}
            >
              Termin buchen
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
