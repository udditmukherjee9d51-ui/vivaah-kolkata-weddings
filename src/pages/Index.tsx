import { Link } from "react-router-dom";
import { Heart, Star, Camera, Users, MapPin, Utensils, Music, CalendarHeart, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-wedding.jpg";
import decorImg from "@/assets/wedding-decor.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";

const services = [
  { icon: Heart, title: "Full Wedding Planning", desc: "End-to-end wedding management" },
  { icon: Star, title: "Wedding Decoration", desc: "Stunning floral & thematic décor" },
  { icon: CalendarHeart, title: "Bengali Wedding Planning", desc: "Traditional ceremonies with elegance" },
  { icon: MapPin, title: "Venue Selection", desc: "Best venues across Kolkata" },
  { icon: Camera, title: "Photography & Videography", desc: "Capturing every precious moment" },
  { icon: Users, title: "Guest Management", desc: "Seamless hospitality coordination" },
  { icon: Utensils, title: "Catering Management", desc: "Exquisite Bengali & multi-cuisine" },
  { icon: Music, title: "Entertainment", desc: "Live music, DJ & performances" },
];

const testimonials = [
  { name: "Priya & Arjun", text: "Vivaah Kolkata made our dream wedding come true. Every detail was perfect!", location: "The Oberoi Grand" },
  { name: "Sneha & Rahul", text: "The most beautiful Bengali wedding we could have imagined. Absolutely magical!", location: "Taj Bengal" },
  { name: "Ananya & Vikram", text: "Professional, creative, and so caring. They treated our wedding like their own.", location: "ITC Royal Bengal" },
];

const process = [
  { step: "01", title: "Consultation", desc: "Share your vision and dreams with us" },
  { step: "02", title: "Planning", desc: "We craft a detailed wedding plan" },
  { step: "03", title: "Coordination", desc: "Managing every vendor and detail" },
  { step: "04", title: "Celebration", desc: "Your perfect wedding day unfolds" },
];

const portfolioImages = [p1, p2, p3, p4];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <img src={heroImg} alt="Bengali wedding under a floral mandap in Kolkata" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in-up">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Premium Wedding Planning</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-card mb-6 leading-tight">
            Luxury Wedding Planner in Kolkata
          </h1>
          <p className="text-card/80 text-lg md:text-xl mb-8 font-light">
            Vivaah Kolkata creates unforgettable weddings filled with love, elegance, and tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-3.5 rounded-full bg-deep-rose text-card font-medium hover:opacity-90 transition-opacity">
              Book Consultation
            </Link>
            <Link to="/portfolio" className="px-8 py-3.5 rounded-full border border-card/40 text-card font-medium hover:bg-card/10 transition-colors">
              View Wedding Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="About Vivaah Kolkata" className="text-left md:text-left [&_.section-divider]:mx-0" />
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Vivaah Kolkata is a premium wedding planning service specializing in Bengali and destination weddings across Kolkata and West Bengal. With years of experience crafting luxurious celebrations at iconic venues, we bring your wedding dreams to life with elegance and precision.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              From The Oberoi Grand to Taj Bengal, from intimate garden ceremonies to grand palace celebrations — we create timeless moments that you and your family will cherish forever.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-deep-rose font-medium hover:gap-3 transition-all">
              Learn More <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <img src={decorImg} alt="Luxury wedding decoration in Kolkata" className="rounded-2xl shadow-romantic w-full" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 romantic-gradient rounded-full opacity-50 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Wedding Planning Services" subtitle="Comprehensive wedding services tailored to make your Kolkata wedding extraordinary" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-romantic p-6 rounded-2xl text-center hover:shadow-romantic transition-shadow group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6 text-deep-rose" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-blush">
        <div className="container mx-auto px-4">
          <SectionHeading title="Kolkata Wedding Portfolio" subtitle="A glimpse into the beautiful weddings we've crafted" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioImages.map((img, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square">
                <img src={img} alt={`Wedding portfolio ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                  <Heart className="w-8 h-8 text-card opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-deep-rose text-card font-medium hover:opacity-90 transition-opacity">
              View Full Portfolio <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Wedding Packages" subtitle="Choose the perfect package for your dream wedding" />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Silver", price: "₹2,50,000", features: ["Basic wedding planning", "Standard decoration", "Vendor coordination", "Day-of coordination"] },
              { name: "Gold", price: "₹5,00,000", features: ["Venue planning & selection", "Premium decoration", "Photography & videography", "Guest management", "Vendor coordination"], popular: true },
              { name: "Platinum", price: "₹10,00,000", features: ["Full wedding planning", "Luxury décor & florals", "Catering management", "Guest coordination", "Entertainment & DJ", "Photography & videography", "Dedicated wedding manager"] },
            ].map((pkg) => (
              <div key={pkg.name} className={`rounded-2xl p-8 text-center relative ${pkg.popular ? "bg-deep-rose text-card shadow-romantic scale-105" : "card-romantic"}`}>
                {pkg.popular && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gold text-card text-xs font-semibold rounded-full">Most Popular</span>}
                <h3 className="font-heading text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold mb-1">{pkg.price}</p>
                <p className={`text-sm mb-6 ${pkg.popular ? "text-card/70" : "text-muted-foreground"}`}>Starting price</p>
                <ul className="text-left space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Heart className={`w-3.5 h-3.5 ${pkg.popular ? "text-primary" : "text-deep-rose"} fill-current`} /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`block py-3 rounded-full font-medium text-sm ${pkg.popular ? "bg-card text-deep-rose" : "bg-deep-rose text-card"}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <SectionHeading title="Happy Couples" subtitle="Hear from the couples whose dreams we brought to life" />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="card-romantic rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold fill-gold" />)}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">"{t.text}"</p>
                <p className="font-heading font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> {t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Wedding Planning Process" subtitle="A seamless journey from consultation to celebration" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <span className="font-heading text-5xl font-bold text-primary/50">{p.step}</span>
                <h3 className="font-heading text-xl font-semibold mt-2 mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 romantic-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Plan Your Dream Wedding?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Let Vivaah Kolkata create the wedding you've always imagined. Book a free consultation today.</p>
          <Link to="/contact" className="inline-block px-8 py-3.5 rounded-full bg-deep-rose text-card font-medium hover:opacity-90 transition-opacity">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
