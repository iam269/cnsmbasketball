import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop", alt: "Acțiune meci baschet" },
  { src: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&h=400&fit=crop", alt: "Echipă la consiliere" },
  { src: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?w=600&h=400&fit=crop", alt: "Dunk la baschet" },
  { src: "https://images.unsplash.com/photo-1504450758481-7338bbe75c8e?w=600&h=400&fit=crop", alt: "Teren de baschet" },
  { src: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&h=400&fit=crop", alt: "Minge de baschet" },
  { src: "https://images.unsplash.com/photo-1559692048-79a3f837883d?w=600&h=400&fit=crop", alt: "Jucători de baschet" },
];

const gameVideos = [
  {
    title: "Highlights meci acasă",
    embedUrl: "https://www.youtube.com/embed/oyjYgmsM00I",
  },
  {
    title: "Atmosferă în tribune",
    embedUrl: "https://www.youtube.com/embed/2VwsvrPFr9w",
  },
  {
    title: "Antrenament intens CNSM",
    embedUrl: "https://www.youtube.com/embed/O1JXIvG6GRk",
  },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Galerie <span className="text-accent">media</span></h2>
          <p className="section-subtitle mx-auto">Momente, highlight-uri și videoclipuri din meciurile și antrenamentele echipei.</p>
        </motion.div>

        {/* Fotografii */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryImages.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setSelected(i)}
              className="relative overflow-hidden rounded-lg aspect-[3/2] group"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-foreground font-display uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Vizualizează</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Videoclipuri meciuri */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-center">
            Videoclipuri <span className="text-accent">meciuri</span>
          </h3>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Revede momentele importante din partidele jucate: faze spectaculoase, atmosferă din sală și secvențe de joc.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {gameVideos.map((video) => (
              <div
                key={video.embedUrl}
                className="card-glass overflow-hidden rounded-xl aspect-video"
              >
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-full rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-foreground hover:text-accent transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={galleryImages[selected].src.replace("w=600&h=400", "w=1200&h=800")}
              alt={galleryImages[selected].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
