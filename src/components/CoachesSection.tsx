import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";

const coaches = [
  { name: "Antrenor David Harris", role: "Antrenor principal", desc: "Peste 20 de ani experiență. Fost jucător Divizia I, pasionat de dezvoltarea tinerilor talenți și construirea echipelor de campionat." },
  { name: "Antrenoara Sarah Mitchell", role: "Antrenor secund", desc: "Fostă valoare colegială și specialistă în apărare. Se concentrează pe dezvoltarea jucătorilor, strategie și mentalitate de câștigător." },
  { name: "Antrenor Mike Torres", role: "Pregătire fizică", desc: "Antrenor certificat pentru forță și condiționare, dedicat performanței atletice și prevenției accidentărilor." },
];

const CoachesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Antrenori</h2>
          <p className="section-subtitle mx-auto">Liderii din spatele succesului Eagles.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {coaches.map((coach, i) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-glass p-8 text-center group hover:border-accent/30"
            >
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/40 transition-colors">
                <User className="w-12 h-12 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase group-hover:text-accent transition-colors">{coach.name}</h3>
              <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">{coach.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{coach.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
