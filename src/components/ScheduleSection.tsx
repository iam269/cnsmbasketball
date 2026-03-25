import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

const games = [
];

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, mins: 0 };
      return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
      };
    };
    setTimeLeft(calc());
    const id = setInterval(() => setTimeLeft(calc()), 60000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <div className="flex gap-2">
      {[
        { val: timeLeft.days, label: "D" },
        { val: timeLeft.hours, label: "H" },
        { val: timeLeft.mins, label: "M" },
      ].map((unit) => (
        <div key={unit.label} className="bg-primary/20 rounded px-2 py-1 text-center min-w-[40px]">
          <p className="font-display text-sm font-bold text-accent leading-none">{unit.val}</p>
          <p className="text-[10px] text-muted-foreground uppercase">{unit.label}</p>
        </div>
      ))}
    </div>
  );
};

const ScheduleSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };
  const formatTime = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  };

  return (
    <section id="schedule" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Meciuri <span className="text-accent">Următoare</span></h2>
          <p className="section-subtitle mx-auto">Următoarele meciuri pentru sezonul 2026 nu sunt disponibile.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {games.map((game, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-glass p-5 flex flex-col md:flex-row md:items-center gap-4 hover:border-accent/30 group"
            >
              <div className="flex items-center gap-3 md:w-48 shrink-0">
                <Calendar className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <p className="font-display font-semibold text-sm uppercase">{formatDate(game.date)}</p>
                  <p className="text-muted-foreground text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {formatTime(game.date)}
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <p className="font-display text-lg font-bold uppercase group-hover:text-accent transition-colors">
                  vs {game.opponent}
                </p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>{game.location}</span>
              </div>
              <Countdown targetDate={game.date} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
