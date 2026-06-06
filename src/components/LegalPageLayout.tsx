import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

interface LegalPageLayoutProps {
  title: string;
  children: ReactNode;
}

const LegalPageLayout = ({ title, children }: LegalPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi acasă
          </NavLink>

          <div className="yellow-bar mb-6" />
          <h1 className="section-title mb-8">{title}</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            {children}
          </div>
        </div>
      </main>
      <TeamFooter />
    </div>
  );
};

export default LegalPageLayout;
