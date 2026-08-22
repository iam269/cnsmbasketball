import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";
import { newsItems } from "@/data/news";

const RegulationContent = ({ content }: { content: string }) => {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    if (/^\d+\.\s.+/.test(line)) {
      const sectionTitle = line;
      const sectionId = sectionTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      elements.push(
        <h2
          key={`h2-${i}`}
          id={sectionId}
          className="text-2xl font-display font-bold uppercase tracking-tight text-accent mt-12 mb-6 pb-3 border-b border-border"
        >
          {sectionTitle}
        </h2>,
      );
      i++;
    } else if (/^\d+\.\d+\.\s.+/.test(line)) {
      elements.push(
        <h3
          key={`h3-${i}`}
          className="text-xl font-display font-bold uppercase tracking-tight text-foreground mt-8 mb-4"
        >
          {line}
        </h3>,
      );
      i++;
    } else if (/^\d{2}\s—\s.+/.test(line)) {
      elements.push(
        <div
          key={`principle-${i}`}
          className="flex items-start gap-3 mb-4 p-4 rounded-lg bg-accent/5 border border-accent/10"
        >
          <span className="text-accent font-bold text-sm mt-0.5">
            {line.slice(0, 2)}
          </span>
          <span className="text-foreground font-medium">{line.slice(5)}</span>
        </div>,
      );
      i++;
    } else if (line.startsWith("-")) {
      const listItems: string[] = [line.slice(1).trim()];
      i++;
      while (i < lines.length && lines[i].trim().startsWith("-")) {
        listItems.push(lines[i].trim().slice(1).trim());
        i++;
      }
      elements.push(
        <ul
          key={`ul-${i}`}
          className="list-disc list-inside space-y-2 mb-6 text-muted-foreground ml-2"
        >
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>,
      );
    } else {
      elements.push(
        <p
          key={`p-${i}`}
          className="text-muted-foreground leading-relaxed mb-4"
        >
          {line}
        </p>,
      );
      i++;
    }
  }

  return <>{elements}</>;
};

const NewsDetailPage = () => {
  const { id } = useParams();
  const news = newsItems.find((n) => n.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!news) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold">Noutate negăsită</h1>
          <NavLink
            to="/#news"
            className="text-accent hover:underline mt-4 inline-block"
          >
            Înapoi la noutăți
          </NavLink>
        </div>
        <TeamFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <NavLink
          to="/#news"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Înapoi la noutăți
        </NavLink>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {news.date}
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-6">
              {news.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {news.excerpt}
            </p>

            <div className="article-content prose prose-lg prose-invert max-w-none">
              <RegulationContent content={news.content} />
            </div>
          </motion.article>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h4 className="font-display font-bold uppercase tracking-wider text-accent mb-4 text-sm">
                Cuprins
              </h4>
              <nav className="space-y-2">
                {news.content
                  .split("\n")
                  .filter((line) => /^\d+\.\s.+/.test(line.trim()))
                  .map((section) => {
                    const sectionTitle = section.trim();
                    const sectionId = sectionTitle
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/^-|-$/g, "");
                    return (
                      <a
                        key={sectionId}
                        href={`#${sectionId}`}
                        className="block text-sm text-muted-foreground hover:text-accent transition-colors py-1 border-l-2 border-transparent hover:border-accent pl-3"
                      >
                        {sectionTitle}
                      </a>
                    );
                  })}
              </nav>
            </div>
          </aside>
        </div>
      </div>
      <TeamFooter />
    </div>
  );
};

export default NewsDetailPage;
