import { Scissors, Sparkles, Brush } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import haircutImage from "@/assets/service-haircut.jpg";
import beardImage from "@/assets/service-beard.jpg";
import shaveImage from "@/assets/service-shave.jpg";

const services = [
  {
    title: "Klassischer Haarschnitt",
    description: "Präzise Schnitte nach Ihren Wünschen. Von klassisch bis modern – unser Team beherrscht alle Techniken.",
    price: "ab 45€",
    duration: "45 Min",
    image: haircutImage,
    icon: Scissors,
  },
  {
    title: "Bartpflege & Styling",
    description: "Professionelle Bartpflege mit Konturenschnitt, Styling und hochwertigen Pflegeprodukten.",
    price: "ab 35€",
    duration: "30 Min",
    image: beardImage,
    icon: Sparkles,
  },
  {
    title: "Traditionelle Rasur",
    description: "Heißtuch-Rasur mit Rasiermesser – das ultimative Entspannungserlebnis für den modernen Gentleman.",
    price: "ab 55€",
    duration: "50 Min",
    image: shaveImage,
    icon: Brush,
  },
];

export const Services = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-inter tracking-wider uppercase mb-4">
            Unsere Leistungen
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Meisterhafte Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-inter">
            Jede Behandlung wird mit höchster Sorgfalt und Liebe zum Detail durchgeführt
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-500 bg-card hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <service.icon className="w-8 h-8 text-primary mb-2" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 font-inter leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-primary font-semibold text-xl">{service.price}</span>
                  <span className="text-muted-foreground text-sm">{service.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
