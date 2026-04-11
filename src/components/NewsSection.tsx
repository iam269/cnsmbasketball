import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const news = [
  { id: 1, date: "5 Mar 2026", title: "Vulturii Asigură Locul în Playoff", excerpt: "O performanță remarcabilă de Marcus Johnson a dus Vulturii la o victorie cu 91-68, asigurându-și locul în playoff-ul de stat." },
  { id: 2, date: "28 Feb 2026", title: "Jucător în Centrul Atenției: Jaylen Carter MVP", excerpt: "Forward-ul de anul mai mare Jaylen Carter a fost desemnat MVP-ul conferinței după o sezon incredibilă cu o medie de 22 de puncte pe meci." },
  { id: 3, date: "20 Feb 2026", title: "Înregistrare la Tabăra de Baschet", excerpt: "Înscrie-te la tabăra noastră de baschet din vară! Deschisă tuturor elevilor din clasele 6-12. Învață de la staff-ul nostru de antrenori și jucătorii echipei principale." },
  { id: 4, date: "14 Feb 2026", title: "Noile Uniforme Dezvăluite", excerpt: "Echipa a debutat cu uniforme noi elegante, cu un logo de vultur actualizat și materiale premium pentru campania din playoff." },
];

const NewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="news" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Ultimele <span className="text-accent">Noutăți</span></h2>
          <p className="section-subtitle mx-auto">Rămâi la curent cu baschetul CNSM.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {news.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-glass p-6 group hover:border-accent/30 cursor-pointer"
            >
              <NavLink to={`/news/${item.id}`} className="block">
                <p className="text-accent text-xs font-display uppercase tracking-wider mb-2">{item.date}</p>
                <h3 className="font-display text-xl font-bold uppercase mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold uppercase tracking-wider group-hover:gap-2 transition-all">
                  Citește mai mult <ArrowRight className="w-4 h-4" />
                </span>
              </NavLink>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
