import { Heart, Star, Camera, Users, MapPin, Utensils, Music, CalendarHeart } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: Heart, title: "Full Wedding Planning", desc: "Complete end-to-end wedding management from concept to execution. We handle every detail so you can focus on enjoying your special day.", features: ["Budget management", "Timeline creation", "Vendor selection", "Day-of coordination"] },
  { icon: Star, title: "Wedding Decoration", desc: "Transform your venue into a magical wonderland with stunning floral arrangements, lighting, and thematic décor.", features: ["Floral arrangements", "Stage decoration", "Lighting design", "Theme conceptualization"] },
  { icon: CalendarHeart, title: "Bengali Wedding Planning", desc: "Authentic Bengali wedding ceremonies planned with cultural expertise. From Aai Buro Bhaat to Bou Bhaat, every ritual is honored.", features: ["Traditional rituals", "Cultural coordination", "Priest arrangement", "Ceremony management"] },
  { icon: MapPin, title: "Destination Weddings", desc: "Plan your dream destination wedding near Kolkata. Beautiful locations in West Bengal and beyond.", features: ["Location scouting", "Travel arrangements", "Accommodation", "Local coordination"] },
  { icon: MapPin, title: "Venue Selection", desc: "Access to the finest wedding venues in Kolkata. From heritage palaces to luxury hotels, we find the perfect setting.", features: ["Venue shortlisting", "Site visits", "Contract negotiation", "Capacity planning"] },
  { icon: Camera, title: "Photography & Videography", desc: "Capture every precious moment with top wedding photographers and cinematographers in Kolkata.", features: ["Pre-wedding shoots", "Ceremony coverage", "Cinematic videos", "Photo albums"] },
  { icon: Users, title: "Guest Management", desc: "Seamless hospitality for your guests. From invitations to accommodations, we ensure everyone is taken care of.", features: ["Invitation design", "RSVP management", "Accommodation", "Transportation"] },
  { icon: Utensils, title: "Catering Management", desc: "Exquisite Bengali and multi-cuisine catering for your wedding. From menu planning to service management.", features: ["Menu curation", "Tasting sessions", "Service staff", "Bar setup"] },
];

const Services = () => (
  <div className="pt-20">
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 text-center">
        <p className="text-deep-rose font-medium tracking-widest uppercase text-sm mb-3">What We Offer</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Wedding Planning Services</h1>
        <div className="section-divider mb-4" />
        <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive wedding services tailored to make your Kolkata wedding extraordinary</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        {services.map((s) => (
          <div key={s.title} className="card-romantic rounded-2xl p-8 hover:shadow-romantic transition-shadow">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 shrink-0 rounded-full bg-primary/30 flex items-center justify-center">
                <s.icon className="w-6 h-6 text-deep-rose" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-sm text-foreground">
                      <Heart className="w-3 h-3 text-deep-rose fill-deep-rose" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-20 romantic-gradient text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Need a Custom Wedding Package?</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Every wedding is unique. Let us create a custom plan tailored to your needs and budget.</p>
        <Link to="/contact" className="inline-block px-8 py-3.5 rounded-full bg-deep-rose text-card font-medium hover:opacity-90 transition-opacity">
          Get Custom Quote
        </Link>
      </div>
    </section>
  </div>
);

export default Services;
