import NewsSection from "@/components/NewsSection";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <NewsSection />
      <TeamFooter />
    </div>
  );
};

export default NewsPage;
