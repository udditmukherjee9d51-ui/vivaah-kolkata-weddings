import { useState } from "react";
import { Star, Send, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";

interface Review {
  name: string;
  text: string;
  rating: number;
  event: string;
  date: string;
}

const initialReviews: Review[] = [
  { name: "Priya & Arjun", text: "Utsaav made our dream wedding come true. Every detail was perfect!", rating: 5, event: "Wedding", date: "Feb 2026" },
  { name: "Sneha Banerjee", text: "The most beautiful birthday celebration we could have imagined. Absolutely magical!", rating: 5, event: "Birthday", date: "Jan 2026" },
  { name: "Ananya & Vikram", text: "Professional, creative, and so caring. They treated our engagement like their own.", rating: 5, event: "Engagement", date: "Dec 2025" },
  { name: "Rohit Sharma", text: "Our Griha Pravesh puja was organized flawlessly. Every ritual was perfect.", rating: 5, event: "Puja", date: "Nov 2025" },
  { name: "The Mukherjee Family", text: "Our family reunion was a grand success thanks to Utsaav. Everyone had a wonderful time!", rating: 4, event: "Family Reunion", date: "Oct 2025" },
];

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [form, setForm] = useState({ name: "", text: "", rating: 5, event: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.text || !form.event) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const newReview: Review = {
        name: form.name,
        text: form.text,
        rating: form.rating,
        event: form.event,
        date: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }),
      };
      setReviews([newReview, ...reviews]);
      setForm({ name: "", text: "", rating: 5, event: "" });
      toast.success("Thank you for your review!");
      setLoading(false);
    }, 500);
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <p className="text-deep-rose font-medium tracking-widest uppercase text-sm mb-3">What People Say</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Testimonials</h1>
          <div className="section-divider mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">Hear from the families and couples whose celebrations we brought to life</p>
        </div>
      </section>

      {/* Review Form */}
      <section className="py-16 bg-blush">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-center mb-8">Leave a Review</h2>
          <form onSubmit={handleSubmit} className="card-romantic rounded-2xl p-8 space-y-5">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Your Name *</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Event Type *</label>
              <select required value={form.event} onChange={(e) => setForm({ ...form, event: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Select event type</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>
                <option>Baby Shower</option>
                <option>Family Reunion</option>
                <option>Puja</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((r) => (
                  <button key={r} type="button" onClick={() => setForm({ ...form, rating: r })}>
                    <Star className={`w-6 h-6 ${r <= form.rating ? "text-gold fill-gold" : "text-muted-foreground"}`} />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Your Review *</label>
              <textarea required rows={4} value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us about your experience..." />
            </div>
            <button type="submit" disabled={loading} className="w-full py-3.5 rounded-full bg-deep-rose text-card font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60">
              <Send className="w-4 h-4" /> {loading ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="What Our Clients Say" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((r, i) => (
              <div key={i} className="card-romantic rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < r.rating ? "text-gold fill-gold" : "text-muted-foreground"}`} />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">"{r.text}"</p>
                <p className="font-heading font-semibold">{r.name}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {r.event} · {r.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
