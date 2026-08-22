import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { newsItems } from "@/data/news";

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
          <h2 className="section-title mb-4">Ultimele <span className="text-accent">Noutăți și Articole</span></h2>
          <p className="section-subtitle mx-auto">Rămâi la curent cu noutățile și articolele despre baschetul CNSM.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {newsItems.map((item, i) => (
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
