import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const sponsors = [
  { name: "CNSM", desc: "Colegiul Național Ștefan cel Mare", url: "https://cnsm.ro" },
  { name: "Ioniță Aurel Mihai", desc: "Dezvoltator Web", url: "https://ionitaaurelmihai.vercel.app" },
];

const SponsorsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sponsors" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Partenerii <span className="text-accent">Noștri</span></h2>
          <p className="section-subtitle mx-auto">Mulțumim partenerilor noștri care fac totul posibil.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {sponsors.map((sponsor, i) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.15 }}
              className="card-glass p-8 flex items-center justify-between hover:border-accent/40 hover:shadow-[var(--shadow-yellow)] transition-all group cursor-pointer"
            >
              <div>
                <span className="font-display text-xl md:text-2xl font-bold uppercase text-accent group-hover:text-accent/80 transition-colors">
                  {sponsor.name}
                </span>
                <p className="text-muted-foreground text-sm mt-1">{sponsor.desc}</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
