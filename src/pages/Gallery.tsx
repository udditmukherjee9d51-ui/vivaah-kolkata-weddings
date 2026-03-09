import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import venueImg from "@/assets/service-venue.jpg";
import eventImg from "@/assets/service-event.jpg";
import pujaImg from "@/assets/service-puja.jpg";
import clothingImg from "@/assets/service-clothing.jpg";
import preweddingImg from "@/assets/service-prewedding.jpg";
import cateringImg from "@/assets/service-catering.jpg";

const categories = [
  { title: "Venue Booking", img: venueImg, slug: "venue-booking" },
  { title: "Event Management", img: eventImg, slug: "event-management" },
  { title: "Pujas", img: pujaImg, slug: "pujas" },
  { title: "Clothing", img: clothingImg, slug: "clothing" },
  { title: "Pre Wedding Shoots", img: preweddingImg, slug: "pre-wedding-shoots" },
  { title: "Catering and Food", img: cateringImg, slug: "catering-and-food" },
];

const Gallery = () => (
  <div className="pt-20">
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 text-center">
        <p className="text-deep-rose font-medium tracking-widest uppercase text-sm mb-3">Our Work</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
        <div className="section-divider mb-4" />
        <p className="text-muted-foreground max-w-2xl mx-auto">Browse our collection of beautifully managed events across Kolkata</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((c) => (
          <div key={c.slug} className="group">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-4">
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent flex items-end p-6">
                <h3 className="font-heading text-xl font-semibold text-card">{c.title}</h3>
              </div>
            </div>
            <Link
              to={`/services/${c.slug}`}
              className="inline-flex items-center gap-2 text-deep-rose font-medium text-sm hover:gap-3 transition-all"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Gallery;
