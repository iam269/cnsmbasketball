import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Star, Award } from "lucide-react";

const achievements = [
  { year: "2025", title: "Campioni ai conferinței", desc: "A doua victorie consecutivă la campionatul conferinței.", icon: Trophy },
  { year: "2024", title: "Semifinaliști turneu de stat", desc: "Prima semifinală în 10 ani.", icon: Star },
  { year: "2023", title: "Campioni regionali", desc: "Turneu regional dominat cu 4-0.", icon: Medal },
  { year: "2021", title: "Campioni invitațional sărbători", desc: "Câștigători ai turneului prestigios cu 16 echipe.", icon: Award },
  { year: "2019", title: "Campioni de stat", desc: "Campionat istoric — primul în istoria școlii.", icon: Trophy },
  { year: "2017", title: "A 100-a victorie a programului", desc: "Sărbătoarea celei de-a 100-a victorii.", icon: Star },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Realizări ale <span className="text-accent">echipei</span></h2>
          <p className="section-subtitle mx-auto">O istorie mândră de excelență pe teren.</p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {achievements.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.year + item.title}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10 shadow-[var(--shadow-yellow)]" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="card-glass p-6 group hover:border-accent/40 hover:shadow-[var(--shadow-glow)]">
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                      <item.icon className="w-5 h-5 text-accent shrink-0" />
                      <span className="font-display text-accent text-sm font-bold uppercase tracking-wider">{item.year}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold uppercase group-hover:text-accent transition-colors mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
