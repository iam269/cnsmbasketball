import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { toast } from "sonner";

const positions = ["Fond de Terrain", "Extremă", "Aripă", "Pivot", "Centru"];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", position: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mesaj trimis! Vă vom răspunde în curând.");
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
          <h2 className="section-title mb-4">Alătură-te <span className="text-accent">Echipei</span></h2>
          <p className="section-subtitle mx-auto">Ai întrebări? Vrei să încerci? Contactează-ne.</p>
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
              <label className="block text-sm font-display uppercase tracking-wider text-muted-foreground mb-2">Nume</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Numele tău" />
            </div>
            <div>
              <label className="block text-sm font-display uppercase tracking-wider text-muted-foreground mb-2">Email</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="email@tau.com" />
            </div>
            <div>
              <label className="block text-sm font-display uppercase tracking-wider text-muted-foreground mb-2">Poziția</label>
              <select value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} className={inputClass}>
                <option value="">Selectează o poziție...</option>
                {positions.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-display uppercase tracking-wider text-muted-foreground mb-2">Mesaj</label>
              <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Spune-ne despre tine..." />
            </div>
            <button type="submit" className="btn-accent w-full">Trimite Mesaj</button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-bold uppercase mb-6 text-accent">Informații de Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Sala de Sport CNSM</p>
                    <p className="text-muted-foreground text-sm">Strada Sportului Nr. 1, România</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <p className="text-muted-foreground">+40 123 456 789</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <p className="text-muted-foreground">cnsmbaschet@gmail.com</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold uppercase mb-4 text-accent">Urmărește-ne</h3>
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
