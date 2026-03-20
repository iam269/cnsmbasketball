import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Target, Award, Users } from "lucide-react";

const stats = [
  { label: "Years Active", value: 25, icon: Target },
  { label: "Championships", value: 8, icon: Award },
  { label: "Total Wins", value: 342, icon: Users },
];

const Counter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
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
          <h2 className="section-title mb-4">About the <span className="text-accent">Eagles</span></h2>
          <p className="section-subtitle mx-auto">
            For over two decades, the Riverside Eagles have been a powerhouse of high school basketball. Our program develops not just athletes, but leaders, scholars, and champions both on and off the court.
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
            <h3 className="font-display text-2xl font-bold uppercase mb-4 text-accent">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To foster athletic excellence, teamwork, and sportsmanship while preparing young athletes for success beyond the court. We believe in hard work, discipline, and the power of unity.
            </p>
          </div>
          <div className="card-glass p-8">
            <h3 className="font-display text-2xl font-bold uppercase mb-4 text-accent">Our Goals</h3>
            <p className="text-muted-foreground leading-relaxed">
              Win the state championship, maintain a team GPA above 3.5, send players to college programs, and build character that lasts a lifetime. Every practice, every game, every moment counts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
