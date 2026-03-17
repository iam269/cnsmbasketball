import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const coaches = [
  {
    name: "Dumi Timofte",
    role: "Antrenor principal",
    desc:
      "Antrenor tânăr și dedicat, format în spiritul baschetului modern. Aduce energie, disciplină și idei proaspete la fiecare antrenament, este aproape de jucători și îi încurajează să își depășească limitele, punând accent atât pe dezvoltarea tehnică, cât și pe cea mentală.",
  },
];

const CoachesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="coaches" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Antrenor</h2>
          <p className="section-subtitle mx-auto">Liderul din spatele echipei!</p>
        </motion.div>

        <div className="flex justify-center">
          {coaches.map((coach, i) => (
            <motion.button
              key={coach.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              onClick={() => navigate("/coach")}
              className="card-glass p-14 md:p-20 text-center group hover:border-accent/30 max-w-2xl w-full cursor-pointer"
            >
              <div className="w-40 h-40 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary/40 transition-colors">
                <User className="w-20 h-20 text-accent" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase group-hover:text-accent transition-colors">
                {coach.name}
              </h3>
              <p className="text-accent text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
                {coach.role}
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {coach.desc}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
