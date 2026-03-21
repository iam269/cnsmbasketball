import SponsorsSection from "@/components/SponsorsSection";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

const SponsorsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SponsorsSection />
      <TeamFooter />
    </div>
  );
};

export default SponsorsPage;
