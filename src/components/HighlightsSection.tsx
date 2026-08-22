import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Star, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Zap, title: "Calificați la Etapa Locală", desc: "Am reușit calificarea în etapa locală a campionatului județean, demonstrând progresul sezonului." },
  { icon: Star, title: "Locul 3 la Județ", desc: "Performanță remarcabilă la faza județeană — am terminat pe locul 3, cea mai bună clasare din istoria proiectului." },
  { icon: TrendingUp, title: "Sezon Record", desc: "Cei mai mulți puncte marcați într-un singur sezon — rezultatul muncii și coeziunii lotului." },
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
          <h2 className="section-title mb-4">Momente Importante <span className="text-accent">din Sezonoane</span></h2>
          <p className="section-subtitle mx-auto">Realizări cheie din sezoanele trecute</p>
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
