import PlayersSection from "@/components/PlayersSection";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

const PlayersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PlayersSection showFormerPlayers={false} />
      <TeamFooter />
    </div>
  );
};

export default PlayersPage;
