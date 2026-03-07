import { Link } from "react-router-dom";
import { Heart, MapPin, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-card pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          <h3 className="font-heading text-2xl font-bold mb-4">
            Vivaah <span className="text-primary">Kolkata</span>
          </h3>
          <p className="text-card/70 text-sm leading-relaxed">
            Creating unforgettable weddings filled with love, elegance, and tradition in Kolkata, West Bengal.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "Services", "Portfolio", "Packages", "Contact"].map((l) => (
              <Link key={l} to={`/${l.toLowerCase()}`} className="text-card/70 text-sm hover:text-primary transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-card/70 text-sm">
            <span>Full Wedding Planning</span>
            <span>Bengali Wedding Planning</span>
            <span>Wedding Decoration</span>
            <span>Venue Selection</span>
            <span>Photography & Videography</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-card/70 text-sm">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Park Street, Kolkata 700016</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +91 98765 43210</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> hello@vivaahkolkata.com</span>
            <span className="flex items-center gap-2"><Instagram className="w-4 h-4 text-primary" /> @vivaahkolkata</span>
          </div>
        </div>
      </div>

      <div className="border-t border-card/10 pt-8 text-center text-card/50 text-sm">
        <p className="flex items-center justify-center gap-1">
          © 2026 Vivaah Kolkata. Made with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> in Kolkata
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
