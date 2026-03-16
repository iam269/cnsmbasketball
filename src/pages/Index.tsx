import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PlayersSection from "@/components/PlayersSection";
import HighlightsSection from "@/components/HighlightsSection";
import StatsSection from "@/components/StatsSection";
import ScheduleSection from "@/components/ScheduleSection";
import ResultsSection from "@/components/ResultsSection";
import AchievementsSection from "@/components/AchievementsSection";
import GallerySection from "@/components/GallerySection";
import CoachesSection from "@/components/CoachesSection";
import FansSection from "@/components/FansSection";
import SponsorsSection from "@/components/SponsorsSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import TeamFooter from "@/components/TeamFooter";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="pointer-events-none absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(37,99,235,0.35), transparent 30%)",
        }}
        animate={{ x: [-30, 40, -10], y: [0, 30, -20], opacity: [0.5, 0.8, 0.6] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 right-[-120px] w-[460px] h-[460px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(234,179,8,0.3), transparent 70%)",
        }}
        animate={{ x: [20, -40, 10], y: [10, -30, 15], opacity: [0.4, 0.7, 0.5] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>
      {!loading && (
        <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <PlayersSection />
          <HighlightsSection />
          <StatsSection />
          <ScheduleSection />
          <ResultsSection />
          <AchievementsSection />
          <GallerySection />
          <CoachesSection />
          <FansSection />
          <SponsorsSection />
          <NewsSection />
          <ContactSection />
          <TeamFooter />
        </>
      )}
    </div>
  );
};

export default Index;
