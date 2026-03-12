import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
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
    <div className="min-h-screen bg-background">
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
