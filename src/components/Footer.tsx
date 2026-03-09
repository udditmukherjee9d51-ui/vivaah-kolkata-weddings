import { Link } from "react-router-dom";
import { Heart, MapPin, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-card pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          <h3 className="font-heading text-2xl font-bold mb-4">
            <span className="text-primary">Utsaav</span>
          </h3>
          <p className="text-card/70 text-sm leading-relaxed">
            Creating unforgettable events — weddings, birthdays, pujas, engagements, and more — with love, elegance, and tradition in Kolkata.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "About", path: "/about" },
              { label: "Gallery", path: "/gallery" },
              { label: "Testimonials", path: "/testimonials" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link key={l.label} to={l.path} className="text-card/70 text-sm hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-card/70 text-sm">
            <Link to="/services/venue-booking" className="hover:text-primary transition-colors">Venue Booking</Link>
            <Link to="/services/event-management" className="hover:text-primary transition-colors">Event Management</Link>
            <Link to="/services/pujas" className="hover:text-primary transition-colors">Pujas</Link>
            <Link to="/services/clothing" className="hover:text-primary transition-colors">Clothing</Link>
            <Link to="/services/pre-wedding-shoots" className="hover:text-primary transition-colors">Pre Wedding Shoots</Link>
            <Link to="/services/catering-and-food" className="hover:text-primary transition-colors">Catering and Food</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-card/70 text-sm">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Park Street, Kolkata 700016</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +91 98765 43210</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> hello@utsaav.com</span>
            <span className="flex items-center gap-2"><Instagram className="w-4 h-4 text-primary" /> @utsaav</span>
          </div>
        </div>
      </div>

      <div className="border-t border-card/10 pt-8 text-center text-card/50 text-sm">
        <p className="flex items-center justify-center gap-1">
          © 2026 Utsaav. Made with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> in Kolkata
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
