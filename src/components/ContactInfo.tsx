import { MapPin, Phone, Mail, Clock } from "lucide-react";

const openingHours = [
  { day: "Montag", hours: "Geschlossen" },
  { day: "Dienstag", hours: "10:00 - 19:00" },
  { day: "Mittwoch", hours: "10:00 - 19:00" },
  { day: "Donnerstag", hours: "10:00 - 19:00" },
  { day: "Freitag", hours: "10:00 - 20:00" },
  { day: "Sa - So", hours: "09:00 - 18:00" },
];

export const ContactInfo = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div className="space-y-12 animate-fade-in">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8">
                Besuchen Sie uns
              </h2>
              <p className="text-muted-foreground text-lg font-inter leading-relaxed">
                Wir freuen uns darauf, Sie in unserem Barbershop begrüßen zu dürfen. 
                Vereinbaren Sie einen Termin oder kommen Sie spontan vorbei.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                  <p className="text-muted-foreground font-inter">
                    Königstraße 45<br />
                    70173 Stuttgart<br />
                    Deutschland
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                  <a 
                    href="tel:+4971123456789" 
                    className="text-muted-foreground hover:text-primary transition-colors font-inter"
                  >
                    +49 711 234 567 89
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">E-Mail</h3>
                  <a 
                    href="mailto:info@meisterschnitt.de" 
                    className="text-muted-foreground hover:text-primary transition-colors font-inter"
                  >
                    info@meisterschnitt.de
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-card border border-border rounded-lg p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-8 h-8 text-primary" />
              <h3 className="font-playfair text-3xl font-bold">Öffnungszeiten</h3>
            </div>

            <div className="space-y-4">
              {openingHours.map((schedule) => (
                <div 
                  key={schedule.day}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <span className="font-inter text-foreground font-medium">
                    {schedule.day}
                  </span>
                  <span className={`font-inter ${
                    schedule.hours === "Geschlossen" 
                      ? "text-muted-foreground" 
                      : "text-accent font-semibold"
                  }`}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-foreground font-inter">
                <strong className="text-primary">Tipp:</strong> Termine am Wochenende sind besonders 
                beliebt. Buchen Sie frühzeitig!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
