import AboutSection from "@/components/AboutSection";
import CoachesSection from "@/components/CoachesSection";
import AchievementsSection from "@/components/AchievementsSection";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AboutSection />
      <CoachesSection id="coaches" />
      <AchievementsSection />
      <TeamFooter />
    </div>
  );
};

export default TeamPage;
