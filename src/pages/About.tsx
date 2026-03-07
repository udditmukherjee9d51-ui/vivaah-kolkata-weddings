import SectionHeading from "@/components/SectionHeading";
import decorImg from "@/assets/wedding-decor.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import { Heart, Award, Users, Calendar } from "lucide-react";

const stats = [
  { icon: Heart, value: "500+", label: "Weddings Planned" },
  { icon: Award, value: "12+", label: "Years Experience" },
  { icon: Users, value: "50+", label: "Expert Team" },
  { icon: Calendar, value: "100%", label: "Client Satisfaction" },
];

const About = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="relative py-24 bg-cream">
      <div className="container mx-auto px-4 text-center">
        <p className="text-deep-rose font-medium tracking-widest uppercase text-sm mb-3">Our Story</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">About Vivaah Kolkata</h1>
        <div className="section-divider mb-4" />
        <p className="text-muted-foreground max-w-2xl mx-auto">Kolkata's premier luxury wedding planning service, specializing in Bengali and destination weddings.</p>
      </div>
    </section>

    {/* Story */}
    <section className="py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <img src={decorImg} alt="Wedding decoration" className="rounded-2xl shadow-romantic" />
        <div>
          <h2 className="font-heading text-3xl font-bold mb-4">Crafting Dreams into Reality</h2>
          <div className="section-divider mb-6 mx-0" />
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Vivaah Kolkata was born from a passion for creating extraordinary celebrations that honor the rich traditions of Bengali culture while embracing modern elegance. Founded in Kolkata, we have grown to become the city's most sought-after wedding planning service.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Our team of experienced wedding planners, decorators, and coordinators work tirelessly to ensure that every wedding we plan is unique, personal, and absolutely breathtaking. From intimate ceremonies at heritage homes to grand celebrations at five-star venues like The Oberoi Grand, Taj Bengal, and ITC Royal Bengal — we handle it all.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We specialize in traditional Bengali weddings, including all rituals from Aai Buro Bhaat to Biye and Bou Bhaat, ensuring every cultural detail is preserved with grace and beauty.
          </p>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 romantic-gradient">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <s.icon className="w-8 h-8 mx-auto mb-3 text-deep-rose" />
            <p className="font-heading text-3xl font-bold text-primary-foreground">{s.value}</p>
            <p className="text-primary-foreground/70 text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Venues */}
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading title="Popular Kolkata Venues" className="text-left [&_.section-divider]:mx-0" />
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We have extensive experience planning weddings at Kolkata's most prestigious venues. Our relationships with top venues ensure you get the best experience and rates.
          </p>
          <ul className="space-y-3">
            {["The Oberoi Grand", "Taj Bengal", "ITC Royal Bengal", "JW Marriott Kolkata", "The Lalit Great Eastern", "Rajbari Bawali", "Belgadia Palace"].map((v) => (
              <li key={v} className="flex items-center gap-2 text-foreground">
                <Heart className="w-3.5 h-3.5 text-deep-rose fill-deep-rose" /> {v}
              </li>
            ))}
          </ul>
        </div>
        <img src={p4} alt="Royal palace wedding venue" className="rounded-2xl shadow-romantic" />
      </div>
    </section>
  </div>
);

export default About;
