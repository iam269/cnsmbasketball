import { Trophy, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const footerLinks = [
  { label: "Acasă", id: "home" },
  { label: "Echipă", id: "team" },
  { label: "Jucători", id: "players" },
  { label: "Program", id: "schedule" },
  { label: "Galerie", id: "gallery" },
  { label: "Noutăți", id: "news" },
  { label: "Contact", id: "contact" },
];

const TeamFooter = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Trophy className="w-5 h-5 text-accent" />
              </div>
              <span className="font-display text-lg font-bold uppercase tracking-wider">
                CNSM <span className="text-accent">Baschet</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              CNSM Baschet — Construim campioni din 2001.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-wider text-accent mb-4">Link-uri Rapide</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-wider text-accent mb-4">Urmărește-ne</h4>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-muted/80 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} CNSM Baschet. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TeamFooter;
