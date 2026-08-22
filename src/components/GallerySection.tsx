import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const gameImages = Object.values(
  import.meta.glob("/src/assets/games/images/*.jpeg", { as: "url", eager: true })
)
  .map((src, i) => ({ id: i, src, alt: `Imagine meci ${i + 1}` }))
  .sort((a, b) => a.src.localeCompare(b.src));

interface GallerySectionProps {
  limit?: number;
}

const GallerySection = ({ limit }: GallerySectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  const visibleImages = limit ? gameImages.slice(0, limit) : gameImages;
  const hasMore = limit !== undefined && gameImages.length > limit;

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Galerie <span className="text-accent">Foto</span></h2>
          <p className="section-subtitle mx-auto">Momente și aspecte importante din sezon.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {visibleImages.map((img, i) => (
            <motion.button
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setSelected(i)}
              className="relative overflow-hidden rounded-lg aspect-[3/2] group"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-foreground font-display uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Vezi</span>
              </div>
            </motion.button>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-8">
            <Link to="/gallery" className="btn-accent">
              Vezi toate imaginile
            </Link>
          </div>
        )}
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
            <button 
              className="absolute top-6 right-6 text-foreground hover:text-accent transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setSelected(null); }}
            >
              <X className="w-8 h-8" />
            </button>

            {gameImages.length > 1 && (
              <>
                <button
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-foreground hover:text-accent transition-colors bg-background/50 hover:bg-background/80 rounded-full p-2 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected((prev) => (prev !== null ? (prev - 1 + gameImages.length) % gameImages.length : null));
                  }}
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-foreground hover:text-accent transition-colors bg-background/50 hover:bg-background/80 rounded-full p-2 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected((prev) => (prev !== null ? (prev + 1) % gameImages.length : null));
                  }}
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            <motion.img
              key={selected}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={gameImages[selected].src}
              alt={gameImages[selected].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
