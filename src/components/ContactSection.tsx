import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Contactează<span className="text-accent">-Ne</span></h2>
          <p className="section-subtitle mx-auto">Întrebări? Vrei să te alături echipei? Contactează-ne!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left side - Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="card-glass overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1739.8467760595836!2d26.369140538143842!3d47.20553016501453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4735473f1e5700b1%3A0x84e20966c8d87ce3!2zQ29sZWdpdWwgTmHIm2lvbmFsICLImHRlZmFuIGNlbCBNYXJlIiBkaW4gVMOicmd1IE5lYW3Imw!5e1!3m2!1sro!2sro!4v1774192515431!5m2!1sro!2sro"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația Colegiului Național Ștefan cel Mare"
            />
            <div className="p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Colegiul Național Ștefan cel Mare</p>
                  <p className="text-muted-foreground text-sm">Târgu Neamț, Județul Neamț, România</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="card-glass p-8">
              <h3 className="font-display text-xl font-bold uppercase mb-6 text-accent">Informații de Contact</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-sm">Telefon</p>
                    <p className="text-lg">0233790932</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-sm">Adresă</p>
                    <p className="text-lg">Colegiul Național Ștefan cel Mare</p>
                    <p className="text-muted-foreground">Târgu Neamț, Județul Neamț</p>
                    <p className="text-muted-foreground text-sm mt-2">Coordonate: 47°12'19.91"N 26°22'8.91"E</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-glass p-8">
              <h3 className="font-display text-xl font-bold uppercase mb-4 text-accent">Urmărește-ne</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/cnsmtarguneamt/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all hover:shadow-[var(--shadow-yellow)]">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/CNSMTGNT?locale=ro_RO" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all hover:shadow-[var(--shadow-yellow)]">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
