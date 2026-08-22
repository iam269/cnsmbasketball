import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

const ContributePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-6">
            Contribuție
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Sprijină echipa CNSM Baschet și ajută-ne să continuăm să creștem
            împreună!
          </p>

          <div className="space-y-8">
            <section className="card-glass p-8">
              <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-accent mb-4">
                Cum poți contribui
              </h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground ml-2">
                <li>Participă la meciuri și adu prietenii să te susțină</li>
                <li>Promovează echipa pe rețelele sociale</li>
                <li>Oferă feedback și sugestii pentru îmbunătățiri</li>
              </ul>
            </section>

            <section className="card-glass p-8">
              <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-accent mb-4">
                Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Pentru orice informații despre contribuție, ne poți contacta
                prin rețelele de socializare sau direct prin{" "}
                <Link to="/dezvoltator" className="text-accent hover:underline">
                  secțiunea dezvoltatorului
                </Link>{" "}
                de pe site-ul nostru, dacă vrei să contribui la dezvoltarea platformei.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <TeamFooter />
    </div>
  );
};

export default ContributePage;
