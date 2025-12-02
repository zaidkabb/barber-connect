import { Star } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Premium Barbershop Interior" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-2xl">
          <p className="text-accent text-sm font-inter tracking-wider uppercase mb-6 animate-fade-in">
            Seit 1987
          </p>
          
          <h1 className="font-playfair text-5xl md:text-7xl mb-8 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="italic">"Handwerk, das</span><br />
            <span className="font-bold">Stil definiert"</span>
          </h1>

          <p className="text-muted-foreground text-lg mb-10 leading-relaxed animate-fade-in font-inter" style={{ animationDelay: "0.2s" }}>
            Bei Meisterschnitt verbinden wir traditionelles Barbier-Handwerk mit modernem Stil. 
            Jeder Besuch ist ein Erlebnis von Präzision, Eleganz und Entspannung.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-foreground">
              <span className="text-2xl font-semibold">4,9</span>
              <span className="text-muted-foreground ml-2 text-sm">(1.847 Bewertungen)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
