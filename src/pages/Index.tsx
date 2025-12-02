import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ContactInfo } from "@/components/ContactInfo";
import { ChatBot } from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      
      <main>
        <div id="hero">
          <Hero />
        </div>
        
        <div id="services">
          <Services />
        </div>
        
        <div id="contact">
          <ContactInfo />
        </div>
      </main>

      <footer className="border-t border-border py-8 px-6 lg:px-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm font-inter">
              © 2024 Meisterschnitt. Alle Rechte vorbehalten.
            </p>
            <p className="font-playfair text-lg">
              Tradition seit <span className="text-primary">1987</span>
            </p>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default Index;
