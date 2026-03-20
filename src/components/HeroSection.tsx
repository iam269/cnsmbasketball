import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import basketball from "@/assets/basketball.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Basketball court" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      </div>

      {/* Animated spotlight lights */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-[600px] pointer-events-none"
        style={{
          background: "conic-gradient(from 180deg, transparent 40%, hsl(var(--accent) / 0.08) 50%, transparent 60%)",
          transformOrigin: "top center",
        }}
        animate={{ rotate: [-15, 15, -15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-[600px] pointer-events-none"
        style={{
          background: "conic-gradient(from 180deg, transparent 40%, hsl(var(--primary) / 0.08) 50%, transparent 60%)",
          transformOrigin: "top center",
        }}
        animate={{ rotate: [15, -15, 15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/3 left-[10%] w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-[10%] w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.12), transparent 70%)" }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating basketball */}
      <motion.img
        src={basketball}
        alt=""
        className="absolute right-[5%] top-[20%] w-24 md:w-40 opacity-60 pointer-events-none"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center glow behind content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.1), transparent 60%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-display text-lg md:text-xl uppercase tracking-[0.3em] mb-4">
            Site Oficial
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase leading-tight mb-4">
            Bine ai venit la
            <span className="block text-gradient">CNSM</span>
            Baschet
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Site-ul oficial al echipei de baschet CNSM — unde campionii sunt făcuți
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button onClick={() => scrollTo("players")} className="btn-accent">
            Vezi Lotul
          </button>
          <button onClick={() => scrollTo("schedule")} className="btn-primary">
            Ultimele Meciuri
          </button>
          <button onClick={() => scrollTo("contact")} className="btn-primary border border-primary bg-transparent hover:bg-primary/20">
            Alătură-te Echipei
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("team")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
