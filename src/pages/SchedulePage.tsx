import ScheduleSection from "@/components/ScheduleSection";
import ResultsSection from "@/components/ResultsSection";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

const SchedulePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScheduleSection />
      <ResultsSection />
      <TeamFooter />
    </div>
  );
};

export default SchedulePage;
