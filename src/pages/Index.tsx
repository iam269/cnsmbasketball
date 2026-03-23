import { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PlayersSection from "@/components/PlayersSection";
import HighlightsSection from "@/components/HighlightsSection";

import ScheduleSection from "@/components/ScheduleSection";
import ResultsSection from "@/components/ResultsSection";
import AchievementsSection from "@/components/AchievementsSection";
import GallerySection from "@/components/GallerySection";
import CoachesSection from "@/components/CoachesSection";
import SponsorsSection from "@/components/SponsorsSection";
import VideosSection from "@/components/VideosSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import TeamFooter from "@/components/TeamFooter";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);
  const location = useLocation();

  // Handle scroll to hash when page loads
  useEffect(() => {
    if (!loading && location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [loading, location.hash]);

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
          <CoachesSection id="coaches" />
          <HighlightsSection />
          <ScheduleSection />
          <ResultsSection />
          <AchievementsSection />
          <GallerySection />
          <VideosSection />
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
