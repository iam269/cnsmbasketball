import { useParams, useNavigate } from "react-router-dom";
import { players } from "@/data/players";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

const PlayerProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const player = players.find((p) => p.id === id);

  if (!player) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center space-y-4">
            <p className="text-lg font-display uppercase tracking-wider text-muted-foreground">
              Jucătorul nu a fost găsit
            </p>
            <button
              onClick={() => navigate(-1)}
              className="btn-primary px-6 py-2 rounded-md"
            >
              Înapoi
            </button>
          </div>
        </main>
        <TeamFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            ← Înapoi la lot
          </button>

          <div className="grid md:grid-cols-[1.1fr,1.4fr] gap-8 items-start">
            <div className="card-glass overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/5]">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display text-2xl font-bold shadow-lg">
                    {player.number}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-accent font-display text-sm uppercase tracking-[0.25em] mb-2">
                  Profil jucător
                </p>
                <h1 className="font-display text-3xl md:text-4xl font-bold uppercase mb-1">
                  {player.name}
                </h1>
                <p className="text-muted-foreground uppercase text-sm tracking-wider">
                  {player.position} • #{player.number}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="card-glass p-4 text-center">
                  <p className="font-display text-2xl font-bold text-foreground">
                    {player.ppg}
                  </p>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">
                    Puncte / meci
                  </p>
                </div>
                <div className="card-glass p-4 text-center">
                  <p className="font-display text-2xl font-bold text-foreground">
                    {player.apg}
                  </p>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">
                    Pase decisive / meci
                  </p>
                </div>
                <div className="card-glass p-4 text-center">
                  <p className="font-display text-2xl font-bold text-foreground">
                    {player.rpg}
                  </p>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">
                    Recuperări / meci
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Înălțime: <span className="font-semibold text-foreground">{player.height}</span>
                </p>
              </div>

              {player.bio && (
                <div className="space-y-2">
                  <h2 className="font-display text-lg font-bold uppercase text-accent">
                    Despre jucător
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {player.bio}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <TeamFooter />
    </div>
  );
};

export default PlayerProfile;

