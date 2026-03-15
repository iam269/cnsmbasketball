import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sponsors = [
  "SportsPro Athletics", "Eagle Eye Optics", "Victory Nutrition", "GameDay Gear",
  "Champion Auto", "Peak Performance", "Riverside Medical", "Blue Line Sports",
];

const SponsorsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sponsors" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Sponsorii <span className="text-accent">noștri</span></h2>
          <p className="section-subtitle mx-auto">Mulțumim partenerilor care fac totul posibil.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={sponsor}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="card-glass p-6 flex items-center justify-center h-28 hover:border-accent/40 hover:shadow-[var(--shadow-yellow)] transition-all group cursor-pointer"
            >
              <span className="font-display text-sm md:text-base font-bold uppercase text-muted-foreground group-hover:text-accent transition-colors text-center tracking-wider">
                {sponsor}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
