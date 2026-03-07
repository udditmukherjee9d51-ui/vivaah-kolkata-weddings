import { useState } from "react";
import { X, Heart } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import heroImg from "@/assets/hero-wedding.jpg";
import decorImg from "@/assets/wedding-decor.jpg";

const categories = ["All", "Bengali Weddings", "Luxury Weddings", "Traditional Weddings", "Royal Palace Weddings"];

const weddings = [
  { img: p1, title: "Priya & Arjun's Bengali Wedding", category: "Bengali Weddings", venue: "Taj Bengal, Kolkata" },
  { img: p2, title: "Sneha & Rahul's Grand Reception", category: "Luxury Weddings", venue: "ITC Royal Bengal" },
  { img: p3, title: "Ananya & Vikram's Traditional Ceremony", category: "Traditional Weddings", venue: "The Oberoi Grand" },
  { img: p4, title: "Ria & Dev's Royal Palace Wedding", category: "Royal Palace Weddings", venue: "Rajbari Bawali" },
  { img: heroImg, title: "Meera & Siddharth's Dream Wedding", category: "Bengali Weddings", venue: "JW Marriott Kolkata" },
  { img: decorImg, title: "Kavya & Rohan's Luxury Celebration", category: "Luxury Weddings", venue: "The Lalit Great Eastern" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = filter === "All" ? weddings : weddings.filter((w) => w.category === filter);

  return (
    <div className="pt-20">
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <p className="text-deep-rose font-medium tracking-widest uppercase text-sm mb-3">Our Work</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Wedding Portfolio</h1>
          <div className="section-divider mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">Browse our collection of beautiful Kolkata weddings</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === c ? "bg-deep-rose text-card" : "bg-muted text-muted-foreground hover:bg-primary/30"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((w, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[4/3]"
                onClick={() => setLightbox(i)}
              >
                <img src={w.img} alt={w.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h3 className="font-heading text-lg font-semibold text-card">{w.title}</h3>
                  <p className="text-card/80 text-sm">{w.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-card hover:text-primary" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[lightbox].img} alt={filtered[lightbox].title} className="w-full rounded-xl" />
            <div className="text-center mt-4">
              <h3 className="font-heading text-xl font-semibold text-card">{filtered[lightbox].title}</h3>
              <p className="text-card/70">{filtered[lightbox].venue}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
