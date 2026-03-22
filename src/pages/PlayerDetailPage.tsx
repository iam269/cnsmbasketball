import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, User, Award, Calendar, Target, TrendingUp, Gamepad2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import TeamFooter from "@/components/TeamFooter";

const players = [
  {
    id: 1,
    name: "Vasiliu Mateo Ioan",
    position: "Extremă",
    number: 1,
    height: "1.85m",
    weight: "75kg",
    age: 17,
    ppg: 18.5,
    apg: 7.2,
    rpg: 3.1,
    description: "Jucător talentat cu abilități excepționale de tir. Este unul dintre cei mai promițători jucători ai echipei.",
    achievements: [
      "Cel mai bun marcator - Campionatul Judetean 2025",
      "Selectat în Echipa All-Star Judeteană",
      "Participant la Turneul Național de Juniori",
    ],
    stats: {
      gamesPlayed: 24,
      totalPoints: 444,
      totalAssists: 173,
      totalRebounds: 74,
      fieldGoalPercentage: "52.3%",
      threePointPercentage: "38.7%",
      freeThrowPercentage: "85.2%",
    },
  },
  {
    id: 2,
    name: "Iacob Dumitru Emanuel",
    position: "Extremă",
    number: 3,
    height: "1.90m",
    weight: "80kg",
    age: 18,
    ppg: 15.8,
    apg: 3.4,
    rpg: 4.0,
    description: "Jucător cu experiență, capabil să joace multiple poziții. Lider natural pe teren.",
    achievements: [
      "Locul 2 - Campionatul Judetean 2024",
      "Căpitanul echipei CNSM",
    ],
    stats: {
      gamesPlayed: 28,
      totalPoints: 442,
      totalAssists: 95,
      totalRebounds: 112,
      fieldGoalPercentage: "48.9%",
      threePointPercentage: "35.2%",
      freeThrowPercentage: "78.5%",
    },
  },
  {
    id: 3,
    name: "Istrate David",
    position: "Aripă",
    number: 7,
    height: "1.96m",
    weight: "85kg",
    age: 17,
    ppg: 22.1,
    apg: 2.8,
    rpg: 6.5,
    description: "Cel mai bun marcator al echipei. Performanță excepțională în atac și apărare.",
    achievements: [
      "Cel mai valoros jucător (MVP) - Campionatul Judetean 2025",
      "Locul 1 - Campionatul Judetean 2025",
      "Record personal - 42 de puncte într-un meci",
    ],
    stats: {
      gamesPlayed: 22,
      totalPoints: 486,
      totalAssists: 62,
      totalRebounds: 143,
      fieldGoalPercentage: "56.1%",
      threePointPercentage: "41.3%",
      freeThrowPercentage: "82.8%",
    },
  },
  {
    id: 4,
    name: "Ioniță Aurel Mihai",
    position: "Pivot",
    number: 21,
    height: "2.01m",
    weight: "95kg",
    age: 18,
    ppg: 14.2,
    apg: 1.9,
    rpg: 8.3,
    description: "Pivot dominant sub coș. Forță și prezență în aria de sub panou.",
    achievements: [
      "Cel mai bun recuperator - Campionatul Judetean 2025",
      "Blocaj record în sezon",
    ],
    stats: {
      gamesPlayed: 26,
      totalPoints: 369,
      totalAssists: 49,
      totalRebounds: 216,
      fieldGoalPercentage: "61.2%",
      threePointPercentage: "22.1%",
      freeThrowPercentage: "65.4%",
    },
  },
  {
    id: 5,
    name: "Cepoi Dragoș Constantin",
    position: "Centru",
    number: 34,
    height: "2.06m",
    weight: "100kg",
    age: 17,
    ppg: 12.6,
    apg: 1.2,
    rpg: 10.1,
    description: "Centru de elită cu abilități excelente de recuperare și protecție a coșului.",
    achievements: [
      "Cel mai bun centru - Campionatul Judetean 2024",
      "Selectat în lotul național de juniori",
    ],
    stats: {
      gamesPlayed: 20,
      totalPoints: 252,
      totalAssists: 24,
      totalRebounds: 202,
      fieldGoalPercentage: "58.7%",
      threePointPercentage: "18.5%",
      freeThrowPercentage: "70.2%",
    },
  },
  {
    id: 6,
    name: "Stănica Luca Sebastian",
    position: "Fond de Terrain",
    number: 11,
    height: "1.80m",
    weight: "70kg",
    age: 16,
    ppg: 9.8,
    apg: 5.5,
    rpg: 2.4,
    description: "Playmaker talentat cu viziune excelentă de joc. Creator de ocazii pentru colegi.",
    achievements: [
      "Cel mai bun pasator - Campionatul Judetean 2025",
      "Cea mai mică rată de pierderi de balon",
    ],
    stats: {
      gamesPlayed: 25,
      totalPoints: 245,
      totalAssists: 138,
      totalRebounds: 60,
      fieldGoalPercentage: "44.2%",
      threePointPercentage: "32.8%",
      freeThrowPercentage: "76.9%",
    },
  },
  {
    id: 7,
    name: "Hanganu Ștefan",
    position: "Extremă",
    number: 15,
    height: "1.88m",
    weight: "78kg",
    age: 17,
    ppg: 11.3,
    apg: 2.1,
    rpg: 3.7,
    description: "Jucător versatil cu potențial mare de creștere. Apărător agresiv.",
    achievements: [
      "Echipa All-Defensive - Campionatul Judetean 2025",
    ],
    stats: {
      gamesPlayed: 23,
      totalPoints: 260,
      totalAssists: 48,
      totalRebounds: 85,
      fieldGoalPercentage: "46.8%",
      threePointPercentage: "34.5%",
      freeThrowPercentage: "79.3%",
    },
  },
  {
    id: 8,
    name: "Chioșa Constantin Adrian",
    position: "Aripă",
    number: 22,
    height: "1.93m",
    weight: "82kg",
    age: 18,
    ppg: 10.5,
    apg: 2.6,
    rpg: 5.2,
    description: "Aripă completă cu abilități de scor și pasă. Energie constantă.",
    achievements: [
      "Progresul sezonului 2025",
    ],
    stats: {
      gamesPlayed: 21,
      totalPoints: 221,
      totalAssists: 55,
      totalRebounds: 109,
      fieldGoalPercentage: "47.3%",
      threePointPercentage: "36.2%",
      freeThrowPercentage: "81.5%",
    },
  },
  {
    id: 9,
    name: "Birsan Cristian",
    position: "Aripă",
    number: 22,
    height: "1.93m",
    weight: "83kg",
    age: 17,
    ppg: 10.5,
    apg: 2.6,
    rpg: 5.2,
    description: "Jucător cu mentality de învingător. Performanță consistentă în meciuri importante.",
    achievements: [
      "Jucătorul meciului de cele mai multe ori",
    ],
    stats: {
      gamesPlayed: 24,
      totalPoints: 252,
      totalAssists: 62,
      totalRebounds: 125,
      fieldGoalPercentage: "48.1%",
      threePointPercentage: "37.8%",
      freeThrowPercentage: "83.2%",
    },
  },
];

const PlayerDetailPage = () => {
  const { id } = useParams();
  const player = players.find((p) => p.id === Number(id));

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!player) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold">Jucător negăsit</h1>
          <NavLink to="/team#players" className="text-accent hover:underline mt-4 inline-block">
            Înapoi la echipă
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
          to="/team#players"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Înapoi la echipă
        </NavLink>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Player Number & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              <div className="h-[500px] bg-gradient-to-b from-primary/20 to-muted flex items-center justify-center rounded-2xl">
                <div className="text-[200px] font-display font-bold text-foreground/10 leading-none">
                  {player.number}
                </div>
                <User className="w-32 h-32 text-muted-foreground/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute bottom-6 left-6 bg-accent text-accent-foreground font-display font-bold text-4xl w-20 h-20 rounded-full flex items-center justify-center">
                #{player.number}
              </div>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold uppercase mb-2">
              {player.name}
            </h1>
            <p className="text-accent text-xl font-semibold uppercase tracking-wider mb-6">
              {player.position}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-muted/30 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-foreground">{player.height}</div>
                <div className="text-xs text-muted-foreground">Înălțime</div>
              </div>
              <div className="bg-muted/30 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-foreground">{player.weight}</div>
                <div className="text-xs text-muted-foreground">Greutate</div>
              </div>
              <div className="bg-muted/30 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-foreground">{player.age}</div>
                <div className="text-xs text-muted-foreground">Vârstă</div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {player.description}
            </p>

            {/* Season Stats */}
            <div className="bg-muted/30 p-6 rounded-lg mb-8">
              <h3 className="font-display text-lg font-bold uppercase mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Statistici Sezon
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">{player.ppg}</div>
                  <div className="text-xs text-muted-foreground uppercase">PPG</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">{player.apg}</div>
                  <div className="text-xs text-muted-foreground uppercase">APG</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">{player.rpg}</div>
                  <div className="text-xs text-muted-foreground uppercase">RPG</div>
                </div>
              </div>
              <div className="border-t border-border pt-4 mt-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Meciuri jucate</span>
                    <span className="font-semibold">{player.stats.gamesPlayed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total puncte</span>
                    <span className="font-semibold">{player.stats.totalPoints}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total pase</span>
                    <span className="font-semibold">{player.stats.totalAssists}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total recuperări</span>
                    <span className="font-semibold">{player.stats.totalRebounds}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CG</span>
                    <span className="font-semibold">{player.stats.fieldGoalPercentage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">3P</span>
                    <span className="font-semibold">{player.stats.threePointPercentage}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="font-display text-lg font-bold uppercase mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Realizări
              </h3>
              <ul className="space-y-2">
                {player.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {achievement}
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

export default PlayerDetailPage;
