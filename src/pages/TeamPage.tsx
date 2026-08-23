import AboutSection from "@/components/AboutSection";
import CoachesSection from "@/components/CoachesSection";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AboutSection />
      <CoachesSection id="coaches" />
      <TeamFooter />
    </div>
  );
};

export default TeamPage;
