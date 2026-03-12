import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
      {/* Animated basketball */}
      <motion.div
        className="relative mb-8"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="w-20 h-20 rounded-full bg-accent relative overflow-hidden"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        >
          {/* Basketball lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[2px] bg-accent-foreground/30" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-full w-[2px] bg-accent-foreground/30" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-accent-foreground/30" />
          </div>
        </motion.div>
        {/* Shadow */}
        <motion.div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-2 bg-foreground/10 rounded-full blur-sm"
          animate={{ scaleX: [1, 0.6, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.h2
        className="font-display text-2xl font-bold uppercase tracking-[0.3em] text-foreground mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Eagles <span className="text-accent">Basketball</span>
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
