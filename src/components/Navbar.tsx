/**
 * CNSM Baschet - Website Oficial
 * Componenta de navigare (Navbar)
 * 
 * @module Navbar
 * @description Bara de navigare responsive cu meniu mobil, theme toggle și animatii
 */
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { NavLink } from "./NavLink";
import iconImage from "../assets/icon.png";

const navItems = [
  { label: "Acasă", path: "/" },
  { label: "Echipă", path: "/#players" },
  { label: "Program", path: "/#schedule" },
  { label: "Galerie", path: "/#gallery" },
  { label: "Noutăți", path: "/#news" },
  { label: "Sponsori", path: "/#sponsors" },
  { label: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    // If we're on the home page with a hash, scroll to top
    if (location.pathname === "/" && location.hash) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Clear the hash from URL without reloading
      window.history.replaceState(null, '', '/');
    }
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
        <NavLink 
          to="/" 
          onClick={handleHomeClick}
          className="flex items-center gap-2 group"
        >
          <img 
            src={iconImage} 
            alt="CNSM Baschet" 
            className="w-10 h-10 rounded-full object-cover group-hover:shadow-[var(--shadow-glow)] transition-shadow"
          />
          <span className="font-display text-xl font-bold uppercase tracking-wider text-foreground">
            CNSM <span className="text-accent">Baschet</span>
          </span>
        </NavLink>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={item.path === "/" ? handleHomeClick : undefined}
              className="text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              activeClassName="text-accent after:w-full"
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
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
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={(e) => {
                    if (item.path === "/") {
                      handleHomeClick(e);
                    }
                    setIsOpen(false);
                  }}
                  className="text-left font-display text-lg uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors py-2"
                  activeClassName="text-accent"
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-2">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
