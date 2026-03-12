import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const news = [
  { date: "Mar 5, 2026", title: "Eagles Clinch Playoff Spot with Dominant Win", excerpt: "An outstanding performance by Marcus Johnson led the Eagles to a 91-68 victory, securing their spot in the state playoffs." },
  { date: "Feb 28, 2026", title: "Player Spotlight: Jaylen Carter Named MVP", excerpt: "Senior forward Jaylen Carter has been named the conference MVP after an incredible season averaging 22 points per game." },
  { date: "Feb 20, 2026", title: "Annual Basketball Camp Registration Open", excerpt: "Sign up for our summer basketball camp! Open to all students grades 6-12. Learn from our coaching staff and varsity players." },
  { date: "Feb 14, 2026", title: "New Uniforms Unveiled for Playoff Push", excerpt: "The team debuted sleek new uniforms featuring an updated eagle logo and premium materials for the postseason run." },
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
          <h2 className="section-title mb-4">Latest <span className="text-accent">News</span></h2>
          <p className="section-subtitle mx-auto">Stay updated with Eagles basketball.</p>
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
              <p className="text-accent text-xs font-display uppercase tracking-wider mb-2">{item.date}</p>
              <h3 className="font-display text-xl font-bold uppercase mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold uppercase tracking-wider group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
