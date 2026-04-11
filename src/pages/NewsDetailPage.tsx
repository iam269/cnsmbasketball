import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

const newsItems = [
  {
    id: 1,
    date: "5 Mar 2026",
    title: "Vulturii Asigură Locul în Playoff",
    excerpt: "O performanță remarcabilă de Marcus Johnson a dus Vulturii la o victorie cu 91-68, asigurându-și locul în playoff-ul de stat.",
    content: `Echipa de baschet CNSM a obținut o victorie crucială împotriva echipei CNRV cu scorul de 91-68, asigurându-și locul în playoff-ul de stat pentru al doilea an consecutiv.

Marcus Johnson a fost starul serii, terminând meciul cu o performanță incredibilă de 32 de puncte, 8 pase decisive și 6 recuperări. Jucătorul de anul mai mare a fost aproape de un record personal de puncte.

"Antrenorul nostru ne-a cerut să jucăm cu pasiune și dedicare, și asta am făcut", a declarat Johnson după meci. "Suntem o echipă unită și suntem pregătiți pentru ceea ce urmează."

Echipa va începe pregătirea pentru playoff săptămâna viitoare, cu meciuri programate împotriva celor mai bune echipe din stat.`,
    image: null,
  },
  {
    id: 2,
    date: "28 Feb 2026",
    title: "Jucător în Centrul Atenției: Jaylen Carter MVP",
    excerpt: "Forward-ul de anul mai mare Jaylen Carter a fost desemnat MVP-ul conferinței după o sezon incredibilă cu o medie de 22 de puncte pe meci.",
    content: `Jaylen Carter, forward-ul de anul mai mare al echipei CNSM, a fost desemnat Most Valuable Player (MVP) al conferinței după o performanță sezonieră excepțională.

Carter a terminat sezonul regulat cu o medie de 22 de puncte pe meci, alături de 7.5 recuperări și 3.2 pase decisive.performanțăa sa l-a făcut pe cel mai bun marcator din întreaga conferință.

"Este o onoare incredibilă", a declarat Carter. "Nu aș fi reușit fără echipa mea. Această recunoaștere ne aparține tuturor."

Carter este al doilea jucător din istoria CNSM care primește această distincție, după celegendul echipei din 2019.`,
    image: null,
  },
  {
    id: 3,
    date: "20 Feb 2026",
    title: "Înregistrare la Tabăra de Baschet",
    excerpt: "Înscrie-te la tabăra noastră de baschet din vară! Deschisă tuturor elevilor din clasele 6-12. Învață de la staff-ul nostru de antrenori și jucătorii echipei principale.",
    content: `Tabăra de Baschet CNSM își deschide porțile pentru vara 2026!

Ne adresăm tuturor elevilor din clasele 6-12 care doresc să-și îmbunătățească abilitățile de baschet. Tabăra va fi susținută de staff-ul nostru profesional de antrenori, inclusiv antrenorii echipei principale.

Ce include tabăra:
- Antrenamente tehnice zilnice
- Meciuri și competiții
- Sesiuni de tir și pasă
- Întâlniri cu jucătorii echipei
- Echipament de baschet gratuit

Data: 15 Iulie - 30 Iulie 2026
Locație: Sala de Sport CNSM
Taxă: 350 lei (incluzând echipament)

Înscrierile se fac până pe 30 Iunie 2026. Locurile sunt limitate!`,
    image: null,
  },
  {
    id: 4,
    date: "14 Feb 2026",
    title: "Noile Uniforme Dezvăluite",
    excerpt: "Echipa a debutat cu uniforme noi elegante, cu un logo de vultur actualizat și materiale premium pentru campania din playoff.",
    content: `Echipa de baschet CNSM a dezvăluit noile uniforme pentru sezonul de playoff 2026!

Noua garderobă prezintă un design modernizat cu logo-ul Vulturului actualizat, păstrând totodată tradiția culorilor galben și negru ale echipei.

"N am vrut ceva care să reprezinte puterea și eleganța echipei noastre", a declarat designerul. "Materialele premium asigură confort și libertate de mișcare în timpul meciurilor intense."

Uniformele vor fi purtate pentru prima dată în meciul de deschidere a playoff-ului. Fanii vor putea achiziționa replica oficială a uniformei de la magazinul echipei.`,
    image: null,
  },
];

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
          <NavLink to="/#news" className="text-accent hover:underline mt-4 inline-block">
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-24"
      >
        <NavLink
          to="/#news"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Înapoi la noutăți
        </NavLink>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
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

          <div className="prose prose-lg prose-invert max-w-none">
            {news.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.article>
      </motion.div>
      <TeamFooter />
    </div>
  );
};

export default NewsDetailPage;