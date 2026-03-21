import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, User, Award, Calendar, Target, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

const coaches = [
  {
    id: 1,
    name: "Coach David Harris",
    role: "Head Coach",
    desc: "20+ years of coaching experience. Former Division I player with a passion for developing young talent and building championship teams.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    achievements: [
      "3x Campion National",
      "2x finalist NBA Development League",
      "Coach of the Year 2023",
    ],
    experience: [
      { year: "2020-prezent", team: "CNSM Baschet", position: "Head Coach" },
      { year: "2015-2020", team: "College Eagles", position: "Assistant Coach" },
      { year: "2010-2015", team: "Youth Academy", position: "Head Coach" },
    ],
    philosophy: "Cred in dezvoltarea completa a jucatorilor - atat pe plan tehnic, cat si pe plan personal. Succesul adevarat vine din munca in echipa si dedicare.",
    stats: {
      victories: 156,
      defeats: 78,
      winRate: "66.7%",
      titles: 3,
    },
  },
];

const CoachDetailPage = () => {
  const { id } = useParams();
  const coach = coaches.find((c) => c.id === Number(id));

  if (!coach) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold">Antrenor negasit</h1>
          <NavLink to="/team#coaches" className="text-accent hover:underline mt-4 inline-block">
            Inapoi la echipa
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
          to="/team#coaches"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Inapoi la echipa
        </NavLink>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              <img
                src={coach.image}
                alt={coach.name}
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-2">
              {coach.name}
            </h1>
            <p className="text-accent text-xl font-semibold uppercase tracking-wider mb-6">
              {coach.role}
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {coach.desc}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent">{coach.stats.victories}</div>
                <div className="text-sm text-muted-foreground">Victorii</div>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent">{coach.stats.defeats}</div>
                <div className="text-sm text-muted-foreground">Infrangeri</div>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent">{coach.stats.winRate}</div>
                <div className="text-sm text-muted-foreground">Rata de castig</div>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent">{coach.stats.titles}</div>
                <div className="text-sm text-muted-foreground">Titluri</div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-muted/30 p-6 rounded-lg mb-8">
              <h3 className="font-display text-lg font-bold uppercase mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                Filosofie
              </h3>
              <p className="text-muted-foreground">{coach.philosophy}</p>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h3 className="font-display text-lg font-bold uppercase mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Realizari
              </h3>
              <ul className="space-y-2">
                {coach.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience */}
            <div>
              <h3 className="font-display text-lg font-bold uppercase mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                Experienta
              </h3>
              <ul className="space-y-3">
                {coach.experience.map((exp, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-muted pb-2">
                    <div>
                      <div className="font-semibold">{exp.team}</div>
                      <div className="text-sm text-muted-foreground">{exp.position}</div>
                    </div>
                    <div className="text-accent text-sm">{exp.year}</div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <TeamFooter />
    </div>
  );
};

export default CoachDetailPage;
