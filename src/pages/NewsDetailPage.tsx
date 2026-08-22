import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

const newsItems = [
  {
    id: 1,
    date: "10 Apr 2026",
    title: "Regulamentul Oficial de Baschet Actualizat",
    excerpt: "Regulamentul oficial de baschet pentru sezonul 2025-2026 este acum disponibil. Află toate regulile, principiile de joc și ghidurile oficiale pentru a deveni un adevărat fan al sportului.",
    content: `
1. 🏀 Jocul

1.1. Definiția jocului

Baschetul se joacă între două echipe.
Fiecare echipă are 5 jucători pe teren.
Scopul este înscrierea mingii în coșul adversarului și împiedicarea adversarului să înscrie.
Câștigă echipa care are cele mai multe puncte la finalul timpului regulamentar și, dacă este cazul, al prelungirilor.

1.2. Coșul propriu și coșul advers

Coșul atacat reprezintă coșul advers.
Coșul apărat reprezintă coșul propriu.

1.3. Câștigătoarea

Echipa cu cel mai mare număr de puncte la finalul jocului este declarată câștigătoare.
2. 🏟️ Terenul de joc și echipamentul
2.1. Terenul
Dimensiune standard: 28 m × 15 m.
Suprafața trebuie să fie plană, dură și fără obstacole.
Terenul este delimitat de liniile de fund și liniile laterale.
Linia de centru împarte terenul în teren din spate și teren din față.
Liniile terenului trebuie să fie clar vizibile.
2.2. Principalele marcaje
linia de centru;
cercul central;
linia de 3 puncte;
zona de restricție;
linia de aruncări libere;
liniile de fund;
liniile laterale;
zonele pentru aruncări libere.
2.3. Coșul

Sistemul coșului include:

panoul;
inelul;
plasa;
structura de susținere;
protecțiile necesare.
2.4. Echipamentul tehnic

Pentru desfășurarea unui joc sunt necesare, între altele:

mingea de joc;
tabela de scor;
cronometrul de joc;
cronometrul de 24 de secunde;
dispozitiv pentru time-out;
semnale sonore;
foaia oficială de joc;
indicatoare pentru greșelile jucătorilor;
indicatoare pentru greșelile de echipă;
săgeata posesiei alternative;
iluminare corespunzătoare.
3. 👥 Echipele
3.1. Componența echipei
O echipă are jucători eligibili înscriși pe foaia oficială.
În timpul jocului, 5 jucători din fiecare echipă se află pe teren.
Ceilalți jucători eligibili sunt rezerve.
3.2. Căpitanul

Căpitanul reprezintă echipa pe teren și poate comunica cu arbitrii în condițiile prevăzute de regulament.

3.3. Antrenorul

Antrenorul:

stabilește componența echipei;
nominalizează jucătorii;
solicită time-out-uri;
solicită schimbări;
răspunde de comportamentul echipei și al staffului.
3.4. Echipamentul jucătorilor

Echipamentul trebuie să fie conform regulamentului și să permită identificarea clară a jucătorilor.

4. ⏱️ Desfășurarea jocului
4.1. Durata jocului

Un joc regulamentar este format din:

4 sferturi;
fiecare sfert are 10 minute;
între sferturile 1–2 și 3–4 există pauze;
între reprize există pauza principală.
4.2. Prelungirea

Dacă scorul este egal la finalul timpului regulamentar:

se joacă prelungiri;
fiecare prelungire are 5 minute;
se joacă prelungiri succesive până când există un câștigător.
4.3. Începerea jocului
Jocul începe printr-o situație de jump ball.
După începerea jocului, situațiile corespunzătoare de posesie alternativă sunt gestionate prin săgeata posesiei.
4.4. Mingea

Mingea poate fi:

vie;
moartă.

Statutul mingii determină dacă jocul poate continua sau dacă este necesară o repunere, o aruncare liberă ori o altă procedură.

4.5. Coșurile și punctajul
1 punct – aruncare liberă;
2 puncte – coș înscris din interiorul zonei de 3 puncte;
3 puncte – coș înscris din afara zonei de 3 puncte.
5. 🔄 Posesia și repunerea mingii
5.1. Jump ball

Jump ball este utilizat la începutul jocului și în situațiile prevăzute de regulament.

5.2. Posesia alternativă

În anumite situații de minge ținută sau alte situații prevăzute de regulament, posesia este stabilită prin săgeata posesiei alternative.

5.3. Repunerea mingii

Repunerea se efectuează:

din locul indicat de arbitru;
de un jucător desemnat;
cu respectarea timpului și procedurii regulamentare.
6. 🚨 Abateri / Violations

O abatere este o încălcare a regulilor care, în general, conduce la pierderea posesiei.

6.1. Mingea ieșită în afara terenului

Un jucător sau mingea este considerat(ă) în afara terenului atunci când intră în contact cu:

podeaua din afara limitelor;
liniile de delimitare;
obiectele sau persoanele aflate în afara terenului, în condițiile regulamentului.
6.2. Driblingul

Driblingul reprezintă controlul mingii și deplasarea acesteia prin lovirea repetată de podea.

Sunt sancționate situații precum:

dublul dribling;
oprirea driblingului și reluarea lui;
purtarea mingii.
6.3. Pașii / Traveling

Jucătorul nu poate deplasa ilegal unul sau ambele picioare în timp ce controlează mingea.

Este una dintre cele mai frecvente abateri.

6.4. 3 secunde

Un jucător al echipei aflate în atac nu poate rămâne ilegal mai mult de 3 secunde consecutive în zona de restricție adversă, în condițiile prevăzute de regulament.

6.5. 5 secunde

În situațiile prevăzute de regulament, un jucător trebuie să acționeze în limita celor 5 secunde.

6.6. 8 secunde

Echipa care dobândește controlul mingii în terenul din spate trebuie să treacă mingea în terenul din față în maximum 8 secunde.

6.7. 24 de secunde

Echipa aflată în atac trebuie să încerce o aruncare la coș în timpul alocat de cronometrul de atac.

6.8. Revenirea în terenul din spate

După ce o echipă a stabilit controlul mingii în terenul din față, nu poate readuce ilegal mingea în terenul din spate.

6.9. Goaltending și interferență

Sunt sancționate acțiunile ilegale asupra mingii în apropierea coșului, inclusiv intervenția ilegală asupra unei mingi aflate în traiectoria corespunzătoare spre coș.

7. 🤝 Greșelile / Fouls
7.1. Greșeala personală

Este un contact ilegal cu adversarul.

Exemple:

împingere;
ținere;
lovire;
blocaj ilegal;
folosirea ilegală a mâinilor;
contact ilegal în timpul deplasării.
7.2. Principiul cilindrului

Fiecare jucător are dreptul la spațiul său vertical, iar contactele care încalcă drepturile adversarului pot fi sancționate.

7.3. Greșeala în atac

Poate apărea atunci când jucătorul aflat în atac provoacă un contact ilegal.

7.4. Greșeala dublă

Situația în care doi adversari comit simultan greșeli personale unul împotriva celuilalt.

7.5. Greșeala tehnică 🟨

Poate fi sancționată pentru:

comportament nesportiv;
lipsă de respect;
gesturi provocatoare;
comunicare necorespunzătoare cu oficialii;
întârzierea intenționată a jocului;
alte comportamente prevăzute de regulament.
7.6. Greșeala antisportivă 🟥

Este o greșeală personală care nu reprezintă o încercare legitimă de a juca mingea sau care îndeplinește criteriile regulamentare pentru caracterul antisportiv.

7.7. Greșeala descalificantă

Reprezintă o abatere gravă de comportament sau o acțiune care îndeplinește criteriile pentru descalificare.

Jucătorul sau persoana sancționată poate fi eliminată din joc conform procedurii regulamentare.

7.8. Bătaia / Fighting

Confruntările fizice sau implicarea într-o altercație sunt tratate conform prevederilor specifice privind fighting și sancțiunile disciplinare.

8. 🟨 Greșelile de echipă

Greșelile personale ale jucătorilor se cumulează la nivelul echipei într-un sfert.

După atingerea limitei regulamentare de greșeli de echipă, anumite greșeli personale comise împotriva unui jucător care nu este în actul de aruncare pot conduce la aruncări libere pentru adversari, conform regulamentului.

9. 🎯 Aruncările libere
9.1. Principiu

O aruncare liberă este o oportunitate acordată unui jucător pentru a înscrie 1 punct, fără apărare directă asupra executării.

9.2. Executarea

Jucătorul trebuie:

să se poziționeze corect;
să respecte timpul disponibil;
să nu calce ilegal linia;
să execute aruncarea conform procedurii.
9.3. Poziționarea jucătorilor

În timpul aruncărilor libere, jucătorii trebuie să ocupe pozițiile regulamentare sau să rămână în afara zonelor desemnate.

10. ⏸️ Time-out

Un time-out reprezintă o întrerupere regulamentară solicitată de echipă.

Poate fi solicitat de antrenor sau de primul antrenor în condițiile regulamentului.

În timpul time-out-ului:

echipa se poate reuni;
antrenorul poate transmite indicații;
jocul este reluat conform procedurii regulamentare.
11. 🔄 Înlocuirile

Un jucător poate fi înlocuit conform procedurii oficiale.

Înlocuirea se efectuează:

în timpul unei oportunități de înlocuire;
după solicitarea corespunzătoare;
cu acordul oficialului responsabil.

Jucătorul care intră pe teren trebuie să respecte procedura regulamentară.

12. ⚠️ Situații speciale

Regulamentul stabilește proceduri speciale pentru situații precum:

greșeli simultane;
posesie alternativă;
situații în care mai multe sancțiuni trebuie aplicate;
erori ale oficialilor;
întreruperi neobișnuite;
situații care necesită corectarea unei erori.
13. ❌ Cinci greșeli ale unui jucător

Un jucător care acumulează numărul regulamentar de greșeli personale trebuie să părăsească jocul.

Echipa trebuie să îl înlocuiască în conformitate cu regulamentul.

14. 🧑‍⚖️ Oficialii jocului

Un joc oficial este gestionat de oficialii desemnați conform competiției.

Aceștia includ, după caz:

arbitrii;
oficialii mesei;
comisarul, dacă este prezent;
alte persoane oficiale prevăzute de competiție.
Atribuțiile arbitrilor

Arbitrii:

aplică regulamentul;
verifică situațiile de joc;
sancționează abaterile;
validează sau invalidează acțiunile;
gestionează situațiile de contact;
controlează desfășurarea jocului.
15. 📝 Masa oficială

La masa oficială pot exista:

Scorerul
completează foaia de joc;
înregistrează punctele;
înregistrează greșelile;
urmărește situațiile regulamentare.
Ajutorul scorerului
asistă scorerul;
contribuie la menținerea evidențelor oficiale.
Cronometrorul
controlează timpul de joc;
oprește și pornește cronometrul conform semnalelor regulamentare.
Operatorul de 24 de secunde
controlează cronometrul de atac;
resetează timpul atunci când regulamentul o impune.
16. 📊 Foaia oficială de joc

Foaia de joc conține informații precum:

echipele;
jucătorii;
numerele de pe tricouri;
antrenorii;
punctele;
greșelile;
time-out-urile;
evoluția scorului;
rezultatul final.

Este documentul oficial prin care se înregistrează desfășurarea partidei.

17. 🏆 Rezultatul jocului

La final:

Echipa cu cele mai multe puncte = câștigătoarea.

Dacă scorul este egal:

se joacă prelungiri de câte 5 minute până la stabilirea unei câștigătoare.

18. 🔍 Corectarea erorilor

Regulamentul prevede situații în care anumite erori ale oficialilor pot fi corectate, dacă sunt descoperite în condițiile și intervalele prevăzute de regulament.

Acestea pot privi, de exemplu:

acordarea sau anularea unor puncte;
acordarea unor aruncări libere;
identificarea greșită a unui jucător;
gestionarea incorectă a timpului.
19. 🧠 Principii esențiale pentru jucători

Pentru o versiune ușor de înțeles pe site, aș avea și o secțiune:

„Cele mai importante reguli pe care trebuie să le știi”

01 — 5 jucători
Fiecare echipă are 5 jucători pe teren.

02 — 4 sferturi
Meciul are 4 sferturi de câte 10 minute.

03 — 24 secunde
Atacul trebuie finalizat în timpul regulamentar al cronometrului de atac.

04 — 8 secunde
Mingea trebuie trecută în terenul din față în maximum 8 secunde.

05 — 3 secunde
Atacantul nu poate sta ilegal mai mult de 3 secunde în zona de restricție.

06 — 5 greșeli
Un jucător care ajunge la limita regulamentară de greșeli trebuie să părăsească jocul.

07 — 1 / 2 / 3 puncte
Aruncarea liberă valorează 1 punct, coșul din interiorul arcului 2 puncte, iar cel din exterior 3 puncte.

08 — Traveling
Deplasarea ilegală cu mingea este sancționată.

09 — Double dribble
Reluarea ilegală a driblingului este abatere.

10 — Fair-play
Comportamentul nesportiv poate fi sancționat.`,
    image: null,
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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

const RegulationContent = ({ content }: { content: string }) => {
  const lines = content.split('\n');
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
      const sectionId = sectionTitle.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

      elements.push(
        <h2 key={`h2-${i}`} id={sectionId} className="text-2xl font-display font-bold uppercase tracking-tight text-accent mt-12 mb-6 pb-3 border-b border-border">
          {sectionTitle}
        </h2>
      );
      i++;
    } else if (/^\d+\.\d+\.\s.+/.test(line)) {
      elements.push(
        <h3 key={`h3-${i}`} className="text-xl font-display font-bold uppercase tracking-tight text-foreground mt-8 mb-4">
          {line}
        </h3>
      );
      i++;
    } else if (/^\d{2}\s—\s.+/.test(line)) {
      elements.push(
        <div key={`principle-${i}`} className="flex items-start gap-3 mb-4 p-4 rounded-lg bg-accent/5 border border-accent/10">
          <span className="text-accent font-bold text-sm mt-0.5">{line.slice(0, 2)}</span>
          <span className="text-foreground font-medium">{line.slice(5)}</span>
        </div>
      );
      i++;
    } else if (line.startsWith('-')) {
      const listItems: string[] = [line.slice(1).trim()];
      i++;
      while (i < lines.length && lines[i].trim().startsWith('-')) {
        listItems.push(lines[i].trim().slice(1).trim());
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground ml-2">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      );
    } else {
      elements.push(
        <p key={`p-${i}`} className="text-muted-foreground leading-relaxed mb-4">
          {line}
        </p>
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
                  {news.content.split('\n').filter(line => /^\d+\.\s.+/.test(line.trim())).map((section) => {
                    const sectionTitle = section.trim();
                    const sectionId = sectionTitle.toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/^-|-$/g, '');
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