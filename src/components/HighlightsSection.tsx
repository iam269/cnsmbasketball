import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Star, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Zap, title: "Invincibili acasă", desc: "12-0 la Eagles Arena în acest sezon — fortăreața noastră rămâne neatinsă." },
  { icon: Star, title: "Campioni ai conferinței", desc: "Două titluri consecutive care dovedesc dominația Eagles în ligă." },
  { icon: TrendingUp, title: "Sezon record", desc: "Cele mai multe puncte marcate într-un sezon în istoria școlii — 2.847 puncte în total." },
];

const HighlightsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Highlight-uri <span className="text-accent">sezon</span></h2>
          <p className="section-subtitle mx-auto">Realizări cheie dintr-un sezon incredibil.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-glass p-8 text-center group hover:border-accent/40 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
