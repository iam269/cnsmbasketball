import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const results2026 = [
  { date: "10 Martie", opponent: "Colegiul Național Roman Voda", homeScore: 78, awayScore: 65, won: false },
  { date: "10 Martie", opponent: "Colegiul Național Calistrat Hogaș", homeScore: 82, awayScore: 74, won: false },
];

const results2025 = [
  { date: "15 Decembrie", opponent: "Colegiul Național Roman Voda", homeScore: 88, awayScore: 72, won: false },
  { date: "8 Decembrie", opponent: "Colegiul Național Calistrat Hogaș", homeScore: 65, awayScore: 68, won: false },
];

const ResultsSection = () => {
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
          <h2 className="section-title mb-4">Rezultate <span className="text-accent">Recente</span></h2>
          <p className="section-subtitle mx-auto">Cele mai recente rezultate și tabele de scoruri.</p>
        </motion.div>

        {/* 2026 Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-display font-bold text-center mb-8">2026</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {results2026.map((game, i) => (
              <motion.div
                key={`2026-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className={`card-glass p-5 flex items-center gap-4 ${game.won ? "border-l-4 border-l-green-500" : "border-l-4 border-l-destructive"}`}
              >
                <div className="text-muted-foreground text-sm font-display uppercase w-16 shrink-0">{game.date}</div>
                <div className="flex-1">
                  <p className="font-display font-bold uppercase">Colegiul Național "Stefan cel Mare" vs {game.opponent}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`font-display text-2xl font-bold ${game.won ? "text-accent" : "text-foreground"}`}>
                    {game.homeScore}
                  </span>
                  <span className="text-muted-foreground text-sm">-</span>
                  <span className={`font-display text-2xl font-bold ${!game.won ? "text-accent" : "text-foreground"}`}>
                    {game.awayScore}
                  </span>
                  <span className={`ml-2 text-xs font-bold uppercase px-2 py-1 rounded ${game.won ? "bg-green-500/20 text-green-400" : "bg-destructive/20 text-destructive"}`}>
                    {game.won ? "V" : "I"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 2025 Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h3 className="text-3xl font-display font-bold text-center mb-8">2025</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {results2025.map((game, i) => (
              <motion.div
                key={`2025-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className={`card-glass p-5 flex items-center gap-4 ${game.won ? "border-l-4 border-l-green-500" : "border-l-4 border-l-destructive"}`}
              >
                <div className="text-muted-foreground text-sm font-display uppercase w-16 shrink-0">{game.date}</div>
                <div className="flex-1">
                  <p className="font-display font-bold uppercase">Colegiul Național "Stefan cel Mare" vs {game.opponent}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`font-display text-2xl font-bold ${game.won ? "text-accent" : "text-foreground"}`}>
                    {game.homeScore}
                  </span>
                  <span className="text-muted-foreground text-sm">-</span>
                  <span className={`font-display text-2xl font-bold ${!game.won ? "text-accent" : "text-foreground"}`}>
                    {game.awayScore}
                  </span>
                  <span className={`ml-2 text-xs font-bold uppercase px-2 py-1 rounded ${game.won ? "bg-green-500/20 text-green-400" : "bg-destructive/20 text-destructive"}`}>
                    {game.won ? "V" : "I"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
