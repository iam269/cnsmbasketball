import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Target, Award, Users } from "lucide-react";

const stats = [
  { label: "Ani de Activitate", value: 4, icon: Target },
  { label: "Podiumuri Județene", value: 2, icon: Award },
  { label: "Meciuri Disputate", value: 23, icon: Users },
];

const Counter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const step = (timestamp: number, startTime?: number) => {
      const st = startTime ?? timestamp;
      const progress = Math.min((timestamp - st) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame((t) => step(t, st));
    };
    requestAnimationFrame((t) => step(t));
  }, [inView, target]);
  return <span>{count}</span>;
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Despre <span className="text-accent">CNSM</span></h2>
          <p className="section-subtitle mx-auto">
            Din 2022, CNSM Baschet Târgu Neamț a fost o forță în baschetul judetean. Programul nostru dezvoltă nu doar sportivi, ci și lideri, campioni pe și în afara terenului.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-glass p-8 text-center hover:border-accent/30 group"
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="stat-number mb-2">
                <Counter target={stat.value} inView={inView} />
              </div>
              <p className="text-muted-foreground font-display uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="card-glass p-8">
            <h3 className="font-display text-2xl font-bold uppercase mb-4 text-accent">Misiunea Noastră</h3>
            <p className="text-muted-foreground leading-relaxed">
              Să cultivăm excelența sportivă, munca în echipă și sportivitatea pregătind tinerii sportivi pentru succes dincolo de teren. Credem în munca asiduă, disciplină și puterea unității.
            </p>
          </div>
          <div className="card-glass p-8">
            <h3 className="font-display text-2xl font-bold uppercase mb-4 text-accent">Obiectivele Noastre</h3>
            <p className="text-muted-foreground leading-relaxed">
              Să câștigăm campionatul, să menținem o medie a echipei peste 8.0, să trimitem jucătorii la programe universitare și să construim caracter pentru o viață. Fiecare antrenament, fiecare meci contează.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
