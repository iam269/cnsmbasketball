import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const teamStats = [
  { label: "Puncte pe Meci", value: 78.4, max: 100 },
  { label: "Pase pe Meci", value: 18.2, max: 30 },
  { label: "Recuperări pe Meci", value: 34.6, max: 50 },
  { label: "Intercepții pe Meci", value: 8.3, max: 15 },
  { label: "% 3 Puncte", value: 38.5, max: 100 },
  { label: "% Aruncări Libere", value: 76.8, max: 100 },
];

const winLoss = { wins: 22, losses: 4 };
const winRate = Math.round((winLoss.wins / (winLoss.wins + winLoss.losses)) * 100);

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Statistici <span className="text-accent">Echipă</span></h2>
          <p className="section-subtitle mx-auto">Medii de sezon și metrici de performanță.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Bar stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {teamStats.map((stat, i) => (
              <div key={stat.label}>
                <div className="flex justify-between mb-1.5">
                  <span className="font-display text-sm uppercase tracking-wider text-muted-foreground">{stat.label}</span>
                  <span className="font-display font-bold text-accent">{stat.value}</span>
                </div>
                <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${(stat.value / stat.max) * 100}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Win rate circle */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative w-56 h-56">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60" cy="60" r="52"
                  fill="none"
                  className="stroke-muted"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="60" cy="60" r="52"
                  fill="none"
                  className="stroke-accent"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 52}
                  initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                  animate={inView ? { strokeDashoffset: 2 * Math.PI * 52 * (1 - winRate / 100) } : {}}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-5xl font-bold text-accent">{winRate}%</span>
                <span className="font-display text-sm uppercase tracking-wider text-muted-foreground">Rata de Victorii</span>
              </div>
            </div>
            <div className="flex gap-8 mt-8">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-green-400">{winLoss.wins}</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">Victorii</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-destructive">{winLoss.losses}</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">Înfrângeri</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
