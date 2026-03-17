import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { players, type Player } from "@/data/players";

const PlayerCard = ({ player, i, inView }: { player: Player; i: number; inView: boolean }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: i * 0.08 }}
      className="perspective-1000 cursor-pointer"
      onClick={() => navigate(`/players/${player.id}`)}
    >
      <motion.div
        className="relative w-full"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className="card-glass group hover:border-accent/40 hover:shadow-[var(--shadow-glow)]">
          <div className="relative h-48 bg-gradient-to-b from-primary/20 to-muted flex items-center justify-center overflow-hidden">
            <img
              src={player.image}
              alt={player.name}
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-card/95 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-2 text-[80px] font-display font-bold text-white/20 leading-none drop-shadow">
              #{player.number}
            </span>
            <div className="absolute top-3 right-3 bg-accent text-accent-foreground font-display font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10">
              #{player.number}
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-display text-lg font-bold uppercase group-hover:text-accent transition-colors">{player.name}</h3>
            <p className="text-accent text-sm font-semibold uppercase tracking-wider">{player.position}</p>
            <p className="text-muted-foreground text-sm mt-1">Înălțime: {player.height}</p>
            <p className="text-muted-foreground text-xs mt-2 italic">Click pentru profilul jucătorului →</p>
          </div>
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
          <h2 className="section-title mb-4">Cunoaște <span className="text-accent">lotul</span></h2>
          <p className="section-subtitle mx-auto">Inima echipei — jucătorii Colegiului Național „Ștefan cel Mare” (CNSM).</p>
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
