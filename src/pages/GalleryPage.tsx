import GallerySection from "@/components/GallerySection";
import FansSection from "@/components/FansSection";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GallerySection />
      <FansSection />
      <TeamFooter />
    </div>
  );
};

export default GalleryPage;
