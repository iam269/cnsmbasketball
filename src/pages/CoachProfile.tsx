import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";
import { User } from "lucide-react";

const coach = {
  name: "Dumi Timofte",
  role: "Antrenor principal",
  desc: "Antrenor tânăr și dedicat, format în spiritul baschetului modern. Aduce energie, disciplină și idei proaspete la fiecare antrenament, este aproape de jucători și îi încurajează să își depășească limitele, punând accent atât pe dezvoltarea tehnică, cât și pe cea mentală.",
};

const CoachProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            ← Înapoi
          </button>

          <div className="grid md:grid-cols-[1.1fr,1.4fr] gap-8 items-start">
            <div className="card-glass overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/5] flex items-center justify-center bg-primary/20">
                <User className="w-32 h-32 text-accent" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-accent font-display text-sm uppercase tracking-[0.25em] mb-2">
                  Profil antrenor
                </p>
                <h1 className="font-display text-3xl md:text-4xl font-bold uppercase mb-1">
                  {coach.name}
                </h1>
                <p className="text-muted-foreground uppercase text-sm tracking-wider">
                  {coach.role}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-lg font-bold uppercase text-accent">
                  Despre antrenor
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {coach.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <TeamFooter />
    </div>
  );
};

export default CoachProfile;
