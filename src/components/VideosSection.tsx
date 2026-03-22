import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "CNSM Baschet - Meciuri 2025",
    description: "Highlights din sezonul 2025",
    thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
    youtubeId: "RlPNh_PBZb4",
  },
  {
    id: 2,
    title: "Antrenamente CNSM",
    description: "Pregătirea echipei pentru campionat",
    thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Meciuri Juvenil",
    description: "Partide din cadrul campionatului juvenil",
    thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
    youtubeId: "dQw4w9WgXcQ",
  },
];

const VideosSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

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

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-glass overflow-hidden group cursor-pointer"
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="relative aspect-video">
                {activeVideo === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                        <Play className="w-8 h-8 text-black ml-1" />
                      </div>
                    </div>
                  </>
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
