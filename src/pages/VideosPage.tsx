import VideosSection from "@/components/VideosSection";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

const VideosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <VideosSection />
      <TeamFooter />
    </div>
  );
};

export default VideosPage;
