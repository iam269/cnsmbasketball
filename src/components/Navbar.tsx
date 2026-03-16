import { useState, useEffect } from "react";
import { Menu, X, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems: { label: string; id: string }[] = [
  { label: "Acasă", id: "home" },
  { label: "Echipă", id: "team" },
  { label: "Jucători", id: "players" },
  { label: "Program", id: "schedule" },
  { label: "Galerie", id: "gallery" },
  { label: "Știri", id: "news" },
  { label: "Sponsori", id: "sponsors" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:shadow-[var(--shadow-glow)] transition-shadow">
            <Trophy className="w-5 h-5 text-accent" />
          </div>
          <span className="font-display text-xl font-bold uppercase tracking-wider text-foreground">
            Baschet <span className="text-accent">CNSM</span>
          </span>
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border"
          >
            <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left font-display text-lg uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
