import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { User, ChevronRight } from "lucide-react";

const players = [
  { id: 1, name: "Vasiliu Mateo Ioan", position: "Extremă", number: 1, height: "1.85m", ppg: 18.5, apg: 7.2, rpg: 3.1 },
  { id: 2, name: "Iacob Dumitru Emanuel ", position: "Extremă", number: 3, height: "1.90m", ppg: 15.8, apg: 3.4, rpg: 4.0 },
  { id: 3, name: "Istrate David", position: "Aripă", number: 7, height: "1.96m", ppg: 22.1, apg: 2.8, rpg: 6.5 },
  { id: 4, name: "Ioniță Aurel Mihai", position: "Pivot", number: 21, height: "2.01m", ppg: 14.2, apg: 1.9, rpg: 8.3 },
  { id: 5, name: "Cepoi Dragoș Constantin", position: "Centru", number: 34, height: "2.06m", ppg: 12.6, apg: 1.2, rpg: 10.1 },
  { id: 6, name: "Stănica Luca Sebastian", position: "Fond de Terrain", number: 11, height: "1.80m", ppg: 9.8, apg: 5.5, rpg: 2.4 },
  { id: 7, name: "Hanganu Ștefan ", position: "Extremă", number: 15, height: "1.88m", ppg: 11.3, apg: 2.1, rpg: 3.7 },
  { id: 8, name: "Chioșa Constantin Adrian", position: "Aripă", number: 22, height: "1.93m", ppg: 10.5, apg: 2.6, rpg: 5.2 },
  { id: 9, name: "Birsan Cristian", position: "Aripă", number: 22, height: "1.93m", ppg: 10.5, apg: 2.6, rpg: 5.2 },
];

const PlayerCard = ({ player, i, inView }: { player: typeof players[0]; i: number; inView: boolean }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: i * 0.08 }}
    >
      <div
        className="card-glass group hover:border-accent/40 hover:shadow-[var(--shadow-glow)]"
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
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(`/player/${player.id}`);
            }}
            className="mt-3 inline-flex items-center gap-1 text-sm text-accent hover:underline"
          >
            Vezi detalii <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
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
          <p className="section-subtitle mx-auto">Inima și sufletul echipei CNSM — vezi detaliile complete ale jucătorilor.</p>
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
