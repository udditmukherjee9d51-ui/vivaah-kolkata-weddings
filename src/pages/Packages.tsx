import { Heart, Check } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";

const packages = [
  {
    name: "Silver",
    price: "₹2,50,000",
    desc: "Basic wedding planning and decoration for intimate ceremonies.",
    features: ["Basic wedding planning", "Standard venue decoration", "Vendor coordination (up to 5)", "Day-of coordination", "Timeline management", "Basic floral arrangements"],
  },
  {
    name: "Gold",
    price: "₹5,00,000",
    desc: "Venue planning, decoration, photography for a memorable celebration.",
    features: ["Full wedding planning", "Premium venue decoration", "Venue selection assistance", "Photography & videography", "Guest management (up to 300)", "Vendor coordination (up to 10)", "Custom invitation design", "Pre-wedding shoot"],
    popular: true,
  },
  {
    name: "Platinum",
    price: "₹10,00,000",
    desc: "Full luxury wedding planning including catering, guest coordination, décor, and entertainment.",
    features: ["Complete luxury planning", "Luxury décor & floral design", "Catering management", "Full guest coordination (500+)", "Entertainment & DJ", "Photography & cinematography", "Dedicated wedding manager", "Mehendi & Sangeet planning", "Transportation management", "Honeymoon planning assistance"],
  },
];

const Packages = () => (
  <div className="pt-20">
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 text-center">
        <p className="text-deep-rose font-medium tracking-widest uppercase text-sm mb-3">Pricing</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Wedding Packages</h1>
        <div className="section-divider mb-4" />
        <p className="text-muted-foreground max-w-2xl mx-auto">Choose the perfect package for your dream wedding in Kolkata</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 max-w-5xl">
        {packages.map((pkg) => (
          <div key={pkg.name} className={`rounded-2xl p-8 relative ${pkg.popular ? "bg-deep-rose text-card shadow-romantic scale-105" : "card-romantic"}`}>
            {pkg.popular && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gold text-card text-xs font-semibold rounded-full">Most Popular</span>}
            <div className="text-center mb-6">
              <h3 className="font-heading text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-3xl font-bold">{pkg.price}</p>
              <p className={`text-sm mt-1 ${pkg.popular ? "text-card/70" : "text-muted-foreground"}`}>Starting price</p>
            </div>
            <p className={`text-sm mb-6 ${pkg.popular ? "text-card/80" : "text-muted-foreground"}`}>{pkg.desc}</p>
            <ul className="space-y-3 mb-8">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className={`w-4 h-4 mt-0.5 ${pkg.popular ? "text-primary" : "text-deep-rose"}`} /> {f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className={`block py-3 rounded-full font-medium text-sm text-center ${pkg.popular ? "bg-card text-deep-rose" : "bg-deep-rose text-card"}`}>
              Book This Package
            </Link>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Packages;
