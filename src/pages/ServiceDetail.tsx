import { useParams, Link } from "react-router-dom";
import { Heart, ChevronRight } from "lucide-react";
import venueImg from "@/assets/service-venue.jpg";
import eventImg from "@/assets/service-event.jpg";
import pujaImg from "@/assets/service-puja.jpg";
import clothingImg from "@/assets/service-clothing.jpg";
import preweddingImg from "@/assets/service-prewedding.jpg";
import cateringImg from "@/assets/service-catering.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import heroImg from "@/assets/hero-wedding.jpg";

const serviceData: Record<string, {
  title: string;
  description: string;
  longDesc: string;
  features: string[];
  images: string[];
}> = {
  "venue-booking": {
    title: "Venue Booking",
    description: "Find the perfect venue for your event in Kolkata",
    longDesc: "Our venue booking service gives you access to Kolkata's finest event spaces. Whether you need a grand banquet hall for a wedding, an intimate garden for a birthday, or a heritage palace for an engagement — we help you find, negotiate, and secure the ideal venue. Our relationships with top venues across Kolkata ensure you get premium service and the best rates.",
    features: ["Venue shortlisting & site visits", "Contract negotiation", "Capacity planning", "Venue decoration coordination", "Parking & logistics management", "Backup venue arrangements"],
    images: [venueImg, p1, p2, p3, p4],
  },
  "event-management": {
    title: "Event Management",
    description: "End-to-end event planning for weddings, birthdays, engagements, and more",
    longDesc: "Our comprehensive event management service covers every detail of your celebration. From concept development and theme design to vendor coordination, timeline management, and day-of execution — we ensure your event is flawless. We specialize in weddings, birthdays, engagements, anniversaries, baby showers, family reunions, and corporate events.",
    features: ["Complete event planning", "Theme & décor design", "Vendor coordination", "Timeline management", "Day-of coordination", "Budget management"],
    images: [eventImg, heroImg, p1, p4, venueImg],
  },
  "pujas": {
    title: "Pujas",
    description: "Sacred and traditional puja ceremonies arranged with devotion",
    longDesc: "We organize beautiful and authentic puja ceremonies for all occasions — Griha Pravesh, Satyanarayan Puja, Durga Puja celebrations, Lakshmi Puja, Saraswati Puja, and many more. Our team ensures every ritual is performed correctly with proper arrangements including flowers, offerings, priest coordination, and traditional setup.",
    features: ["Priest arrangement", "Traditional setup & decoration", "Flower & offering arrangements", "Ritual coordination", "Prasad preparation", "Guest management"],
    images: [pujaImg, p2, p3, heroImg, venueImg],
  },
  "clothing": {
    title: "Clothing",
    description: "Premium event attire — sarees, lehengas, sherwanis, and more",
    longDesc: "Look your absolute best at every celebration. Our clothing service connects you with Kolkata's finest designers and boutiques for weddings, engagements, pujas, and special events. From bridal lehengas and groom sherwanis to family outfits and designer sarees — we curate the perfect wardrobe for your occasion.",
    features: ["Bridal & groom attire", "Family outfit coordination", "Designer sarees & lehengas", "Accessory styling", "Mehendi & jewelry consultation", "Custom tailoring coordination"],
    images: [clothingImg, p1, p3, heroImg, eventImg],
  },
  "pre-wedding-shoots": {
    title: "Pre Wedding Shoots",
    description: "Romantic and creative pre-wedding photography sessions",
    longDesc: "Capture your love story with our stunning pre-wedding photoshoot services. We coordinate with top photographers in Kolkata to create magical moments at beautiful locations — from heritage mansions and botanical gardens to rooftop terraces and riverside settings. Each shoot is customized to reflect your unique personality and love story.",
    features: ["Location scouting", "Professional photography", "Cinematic videography", "Outfit planning assistance", "Makeup & styling", "Album design & delivery"],
    images: [preweddingImg, p2, p4, heroImg, venueImg],
  },
  "catering-and-food": {
    title: "Catering and Food",
    description: "Exquisite multi-cuisine catering for every celebration",
    longDesc: "Delight your guests with exceptional food. Our catering service covers Bengali cuisine, North Indian, South Indian, Chinese, continental, and fusion menus. Whether it's a grand wedding feast, an intimate birthday dinner, or traditional puja prasad — we curate menus that leave lasting impressions. From menu planning and tasting sessions to live counters and bar setup.",
    features: ["Multi-cuisine menu planning", "Tasting sessions", "Live food counters", "Bar & beverage service", "Traditional Bengali cuisine", "Dessert & sweet stations"],
    images: [cateringImg, p1, p3, eventImg, venueImg],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Service not found.</p>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <p className="text-deep-rose font-medium tracking-widest uppercase text-sm mb-3">Our Services</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <div className="section-divider mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">{service.description}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading text-2xl font-bold mb-4">About This Service</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{service.longDesc}</p>
            <h3 className="font-heading text-lg font-semibold mb-3">What We Offer</h3>
            <ul className="space-y-2 mb-8">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <Heart className="w-3.5 h-3.5 text-deep-rose fill-deep-rose" /> {f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-deep-rose text-card font-medium hover:opacity-90 transition-opacity">
              Book This Service <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {service.images.map((img, i) => (
              <div key={i} className={`rounded-xl overflow-hidden ${i === 0 ? "col-span-2 aspect-video" : "aspect-square"}`}>
                <img src={img} alt={`${service.title} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
