import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const serviceLinks = [
  { name: "Venue Booking", path: "/services/venue-booking" },
  { name: "Event Management", path: "/services/event-management" },
  { name: "Pujas", path: "/services/pujas" },
  { name: "Clothing", path: "/services/clothing" },
  { name: "Pre Wedding Shoots", path: "/services/pre-wedding-shoots" },
  { name: "Catering and Food", path: "/services/catering-and-food" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services", dropdown: true },
  { name: "Gallery", path: "/gallery" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Utsaav" className="h-10 md:h-12" />
          <span className="font-heading text-lg md:text-xl font-bold text-foreground">
            <span className="text-deep-rose">Utsaav</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            l.dropdown ? (
              <div key={l.path} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`text-sm font-medium transition-colors hover:text-deep-rose flex items-center gap-1 ${
                    location.pathname.startsWith("/services") ? "text-deep-rose" : "text-foreground"
                  }`}
                >
                  {l.name} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-romantic py-2 animate-fade-in">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-deep-rose transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.path}
                to={l.path}
                className={`text-sm font-medium transition-colors hover:text-deep-rose ${
                  location.pathname === l.path ? "text-deep-rose" : "text-foreground"
                }`}
              >
                {l.name}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-deep-rose text-card text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((l) =>
              l.dropdown ? (
                <div key={l.path}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`text-base font-medium flex items-center gap-1 ${
                      location.pathname.startsWith("/services") ? "text-deep-rose" : "text-foreground"
                    }`}
                  >
                    {l.name} <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-2">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                          className="text-sm text-muted-foreground hover:text-deep-rose"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.path}
                  to={l.path}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium ${
                    location.pathname === l.path ? "text-deep-rose" : "text-foreground"
                  }`}
                >
                  {l.name}
                </Link>
              )
            )}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="px-5 py-2 rounded-full bg-deep-rose text-card text-sm font-medium text-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
