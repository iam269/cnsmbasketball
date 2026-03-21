import PlayersSection from "@/components/PlayersSection";
import HighlightsSection from "@/components/HighlightsSection";
import StatsSection from "@/components/StatsSection";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

const PlayersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PlayersSection />
      <HighlightsSection />
      <StatsSection />
      <TeamFooter />
    </div>
  );
};

export default PlayersPage;
