import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import video1 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.48.48.mp4";
import video2 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.48.55 (1).mp4";
import video3 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.48.55.mp4";
import video4 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.48.57.mp4";
import video5 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.48.58.mp4";
import video6 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.49.01.mp4";
import video7 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.49.02 (1).mp4";
import video8 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.49.02 (2).mp4";
import video9 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.49.02 (3).mp4";
import video10 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.49.02 (4).mp4";
import video11 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.49.02 (5).mp4";
import video12 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.49.02 (6).mp4";
import video13 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.49.02 (7).mp4";
import video14 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.49.02.mp4";
import video15 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.49.03 (1).mp4";
import video16 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.49.03.mp4";
import video17 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.49.06 (1).mp4";
import video18 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.49.06 (2).mp4";
import video19 from "@/assets/games/WhatsApp Video 2026-03-22 at 17.49.06.mp4";

const videos = [
  { id: 1, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video1 },
  { id: 2, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video2 },
  { id: 3, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video3 },
  { id: 4, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video4 },
  { id: 5, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video5 },
  { id: 6, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video6 },
  { id: 7, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video7 },
  { id: 8, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video8 },
  { id: 9, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video9 },
  { id: 10, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video10 },
  { id: 11, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video11 },
  { id: 12, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video12 },
  { id: 13, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video13 },
  { id: 14, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video14 },
  { id: 15, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video15 },
  { id: 16, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video16 },
  { id: 17, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video17 },
  { id: 18, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video18 },
  { id: 19, year: 2026, title: "CNSM vs CNRV - Martie 2026", description: "Meci împotriva Colegiului Național Roman-Vodă", src: video19 },
];

const years = [2026, 2025, 2024];

const VideosSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number>(2026);

  const filteredVideos = videos.filter(video => video.year === selectedYear);

  return (
    <section id="videos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Video <span className="text-accent">Meciuri</span></h2>
          <p className="section-subtitle mx-auto">Urmărește cele mai recente meciuri și momente ale echipei.</p>
        </motion.div>

        {/* Year Filter */}
        <div className="flex justify-center gap-2 mb-10">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 rounded-full font-display font-bold uppercase tracking-wider transition-all ${
                selectedYear === year
                  ? "bg-accent text-black"
                  : "bg-card border border-border text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredVideos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.5) }}
              className="card-glass overflow-hidden group cursor-pointer"
              onClick={() => setActiveVideo(activeVideo === video.id ? null : video.id)}
            >
              <div className="relative aspect-video">
                {activeVideo === video.id ? (
                  <video
                    src={video.src}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                      <Play className="w-8 h-8 text-black ml-1" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-display font-bold uppercase mb-1 group-hover:text-accent transition-colors">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
