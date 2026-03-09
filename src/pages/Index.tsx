import { Link } from "react-router-dom";
import { Heart, Star, MapPin, ChevronRight, Sparkles, PartyPopper, Baby, Users, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-wedding.jpg";
import decorImg from "@/assets/wedding-decor.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";

const services = [
  { icon: Heart, title: "Weddings", desc: "Complete wedding planning & coordination" },
  { icon: PartyPopper, title: "Birthdays", desc: "Memorable birthday celebrations" },
  { icon: Sparkles, title: "Engagements", desc: "Elegant engagement ceremonies" },
  { icon: Calendar, title: "Anniversaries", desc: "Special milestone celebrations" },
  { icon: Baby, title: "Baby Showers", desc: "Joyful baby shower events" },
  { icon: Users, title: "Family Reunions", desc: "Bringing families together" },
  { icon: Star, title: "Pujas", desc: "Sacred and traditional puja arrangements" },
  { icon: MapPin, title: "Venue Booking", desc: "Best venues across Kolkata" },
];

const process = [
  { step: "01", title: "Consultation", desc: "Share your vision and event details with us" },
  { step: "02", title: "Planning", desc: "We craft a detailed event plan" },
  { step: "03", title: "Coordination", desc: "Managing every vendor and detail" },
  { step: "04", title: "Celebration", desc: "Your perfect event unfolds flawlessly" },
];

const portfolioImages = [p1, p2, p3, p4];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <img src={heroImg} alt="Premium event setup with floral decorations in Kolkata" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in-up">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Premium Event Management</p>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-card mb-6 leading-tight">
            Luxury Wedding Planner & Event Management
          </h1>
          <p className="text-card/80 text-lg md:text-xl mb-8 font-light">
            Utsaav creates unforgettable events — weddings, birthdays, pujas, engagements, and more — filled with elegance and tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-3.5 rounded-full bg-deep-rose text-card font-medium hover:opacity-90 transition-opacity">
              Book Consultation
            </Link>
            <Link to="/gallery" className="px-8 py-3.5 rounded-full border border-card/40 text-card font-medium hover:bg-card/10 transition-colors">
              View Our Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-blush">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="About Utsaav" className="text-left md:text-left [&_.section-divider]:mx-0" />
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Utsaav is a premium event management service in Kolkata specializing in weddings, birthdays, engagements, pujas, anniversaries, baby showers, and family reunions. With years of experience crafting luxurious celebrations at iconic venues, we bring your event dreams to life.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              From intimate gatherings to grand celebrations at The Oberoi Grand, Taj Bengal, and beyond — we create timeless moments that you and your loved ones will cherish forever.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-deep-rose font-medium hover:gap-3 transition-all">
              Learn More <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <img src={decorImg} alt="Luxury event decoration in Kolkata" className="rounded-2xl shadow-romantic w-full" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 romantic-gradient rounded-full opacity-50 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Services" subtitle="Comprehensive event management services tailored for every occasion in Kolkata" />
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

      {/* Gallery Preview */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Gallery" subtitle="A glimpse into the beautiful events we've crafted" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioImages.map((img, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square">
                <img src={img} alt={`Event gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                  <Heart className="w-8 h-8 text-card opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-deep-rose text-card font-medium hover:opacity-90 transition-opacity">
              View Full Gallery <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Event Planning Process" subtitle="A seamless journey from consultation to celebration" />
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Plan Your Dream Event?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Let Utsaav create the celebration you've always imagined. Book a free consultation today.</p>
          <Link to="/contact" className="inline-block px-8 py-3.5 rounded-full bg-deep-rose text-card font-medium hover:opacity-90 transition-opacity">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
