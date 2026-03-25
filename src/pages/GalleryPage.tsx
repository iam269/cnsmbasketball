import GallerySection from "@/components/GallerySection";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GallerySection />
      <TeamFooter />
    </div>
  );
};

export default GalleryPage;
