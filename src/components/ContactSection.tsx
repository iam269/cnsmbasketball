import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { toast } from "sonner";

const positions = ["Point Guard", "Shooting Guard", "Small Forward", "Power Forward", "Center"];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", position: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", position: "", message: "" });
  };

  const inputClass = "w-full bg-card border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors";

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Join the <span className="text-accent">Team</span></h2>
          <p className="section-subtitle mx-auto">Have questions? Want to try out? Reach out to us.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-display uppercase tracking-wider text-muted-foreground mb-2">Name</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-display uppercase tracking-wider text-muted-foreground mb-2">Email</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-display uppercase tracking-wider text-muted-foreground mb-2">Position</label>
              <select value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} className={inputClass}>
                <option value="">Select a position...</option>
                {positions.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-display uppercase tracking-wider text-muted-foreground mb-2">Message</label>
              <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Tell us about yourself..." />
            </div>
            <button type="submit" className="btn-accent w-full">Send Message</button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-bold uppercase mb-6 text-accent">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Riverside High School Gymnasium</p>
                    <p className="text-muted-foreground text-sm">1200 Eagle Drive, Riverside, CA 92501</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <p className="text-muted-foreground">(951) 555-0123</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <p className="text-muted-foreground">basketball@riversideeagles.edu</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold uppercase mb-4 text-accent">Follow Us</h3>
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all hover:shadow-[var(--shadow-yellow)]">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
