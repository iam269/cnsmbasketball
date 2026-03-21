import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import iconImage from "../assets/icon.png";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Static icon */}
      <div className="relative mb-8">
        <img
          src={iconImage}
          alt="CNSM Basketball"
          className="w-24 h-24 rounded-full object-cover shadow-lg"
        />
      </div>

      <motion.h2
        className="font-display text-2xl font-bold uppercase tracking-[0.3em] text-foreground mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        CNSM <span className="text-accent">Baschet</span>
      </motion.h2>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
