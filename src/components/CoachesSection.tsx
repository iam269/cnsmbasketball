import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { User, ArrowRight } from "lucide-react";

const coaches = [
  { id: 1, name: "Timofte Dumitrel", role: "Antrenor Principal", desc: "Antrenor cu experienta vasta in baschet. A condus echipa la multiple victorii si titluri nationale." },];
const CoachesSection = ({ id }: { id?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Staff de <span className="text-accent">Antrenament</span></h2>
          <p className="section-subtitle mx-auto">Liderii din spatele succesului CNSM.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          {coaches.map((coach, i) => (
            <motion.div
              key={coach.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-glass p-8 text-center group hover:border-accent/30"
            >
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/40 transition-colors">
                <User className="w-12 h-12 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase group-hover:text-accent transition-colors">{coach.name}</h3>
              <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">{coach.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{coach.desc}</p>
              <NavLink
                to={`/coach/${coach.id}`}
                className="inline-flex items-center gap-2 mt-4 text-accent hover:text-accent/80 transition-colors font-semibold"
              >
                Vezi mai multe despre antrenor
                <ArrowRight className="w-4 h-4" />
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
