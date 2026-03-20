import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { User } from "lucide-react";

const players = [
  { name: "Marcus Johnson", position: "Fond de Terrain", number: 1, height: "1.85m", ppg: 18.5, apg: 7.2, rpg: 3.1 },
  { name: "Devon Williams", position: "Extremă", number: 3, height: "1.90m", ppg: 15.8, apg: 3.4, rpg: 4.0 },
  { name: "Jaylen Carter", position: "Aripă", number: 7, height: "1.96m", ppg: 22.1, apg: 2.8, rpg: 6.5 },
  { name: "Isaiah Thompson", position: "Pivot", number: 21, height: "2.01m", ppg: 14.2, apg: 1.9, rpg: 8.3 },
  { name: "Tyler Robinson", position: "Centru", number: 34, height: "2.06m", ppg: 12.6, apg: 1.2, rpg: 10.1 },
  { name: "Andre Davis", position: "Fond de Terrain", number: 11, height: "1.80m", ppg: 9.8, apg: 5.5, rpg: 2.4 },
  { name: "Chris Morgan", position: "Extremă", number: 15, height: "1.88m", ppg: 11.3, apg: 2.1, rpg: 3.7 },
  { name: "Ryan Mitchell", position: "Aripă", number: 22, height: "1.93m", ppg: 10.5, apg: 2.6, rpg: 5.2 },
];

const PlayerCard = ({ player, i, inView }: { player: typeof players[0]; i: number; inView: boolean }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: i * 0.08 }}
      className="perspective-1000 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front */}
        <div
          className="card-glass group hover:border-accent/40 hover:shadow-[var(--shadow-glow)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-48 bg-gradient-to-b from-primary/20 to-muted flex items-center justify-center overflow-hidden">
            <span className="absolute text-[120px] font-display font-bold text-foreground/5 leading-none">
              {player.number}
            </span>
            <User className="w-20 h-20 text-muted-foreground/40 group-hover:text-accent/60 transition-colors relative z-10" />
            <div className="absolute top-3 right-3 bg-accent text-accent-foreground font-display font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">
              #{player.number}
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-display text-lg font-bold uppercase group-hover:text-accent transition-colors">{player.name}</h3>
            <p className="text-accent text-sm font-semibold uppercase tracking-wider">{player.position}</p>
            <p className="text-muted-foreground text-sm mt-1">Înălțime: {player.height}</p>
            <p className="text-muted-foreground text-xs mt-2 italic">Apsați pentru statistici →</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="card-glass absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-primary/30 to-card"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display text-2xl font-bold mb-4">
            #{player.number}
          </div>
          <h3 className="font-display text-lg font-bold uppercase text-accent mb-1">{player.name}</h3>
          <p className="text-muted-foreground text-xs uppercase tracking-wider mb-6">{player.position}</p>
          <div className="grid grid-cols-3 gap-4 w-full">
            {[
              { label: "PPG", value: player.ppg },
              { label: "APG", value: player.apg },
              { label: "RPG", value: player.rpg },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-xs mt-4 italic">Apsați pentru a întoarce</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PlayersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="players" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Cunoaște <span className="text-accent">Lotul</span></h2>
          <p className="section-subtitle mx-auto">Inima și sufletul echipei CNSM — apasă pe o carte pentru a vedea statistici.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {players.map((player, i) => (
            <PlayerCard key={player.name} player={player} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlayersSection;
