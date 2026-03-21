import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ContactSection />
      <TeamFooter />
    </div>
  );
};

export default ContactPage;
