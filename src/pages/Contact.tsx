import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", weddingDate: "", venue: "", guestCount: "", budget: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission (will be replaced with DB once Cloud is enabled)
    setTimeout(() => {
      toast.success("Thank you! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", phone: "", weddingDate: "", venue: "", guestCount: "", budget: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  const update = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  return (
    <div className="pt-20">
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <p className="text-deep-rose font-medium tracking-widest uppercase text-sm mb-3">Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Book a Consultation</h1>
          <div className="section-divider mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">Ready to start planning your dream wedding in Kolkata? Fill out the form below.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Address", value: "Park Street, Kolkata 700016, West Bengal" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: Mail, label: "Email", value: "hello@vivaahkolkata.com" },
                { icon: Clock, label: "Hours", value: "Mon-Sat: 10 AM - 7 PM" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-deep-rose" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{c.label}</p>
                    <p className="text-muted-foreground text-sm">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://chat.whatsapp.com/E0IEJulwpgP6K5nvnGSBTj?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#25D366] text-background font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Chat on WhatsApp
            </a>

            {/* Google Maps */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-romantic">
              <iframe
                title="Vivaah Kolkata Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5!2d88.35!3d22.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMzJzAwLjAiTiA4OMKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card-romantic rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                  <input required value={form.name} onChange={(e) => update("name", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email *</label>
                  <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Phone *</label>
                  <input required value={form.phone} onChange={(e) => update("phone", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Wedding Date</label>
                  <input type="date" value={form.weddingDate} onChange={(e) => update("weddingDate", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Wedding Venue</label>
                  <input value={form.venue} onChange={(e) => update("venue", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Venue name or TBD" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Guest Count</label>
                  <input type="number" value={form.guestCount} onChange={(e) => update("guestCount", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Approx. guests" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Estimated Budget</label>
                <select value={form.budget} onChange={(e) => update("budget", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select budget range</option>
                  <option>₹2-5 Lakhs</option>
                  <option>₹5-10 Lakhs</option>
                  <option>₹10-25 Lakhs</option>
                  <option>₹25-50 Lakhs</option>
                  <option>₹50 Lakhs+</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Message</label>
                <textarea rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us about your dream wedding..." />
              </div>
              <button type="submit" disabled={loading} className="w-full py-3.5 rounded-full bg-deep-rose text-card font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60">
                <Send className="w-4 h-4" /> {loading ? "Sending..." : "Send Consultation Request"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
