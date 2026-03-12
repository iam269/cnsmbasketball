import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Music, Twitter, Heart, MessageCircle, Share2 } from "lucide-react";

const socialPosts = [
  { platform: "instagram", handle: "@riverside_eagles", content: "GAME DAY! 🏀🔥 Let's pack Eagles Arena tonight. Tip-off at 7 PM!", likes: 342, comments: 48 },
  { platform: "instagram", handle: "@riverside_eagles", content: "Practice makes perfect 💪 The team putting in work ahead of playoffs.", likes: 256, comments: 31 },
  { platform: "tiktok", handle: "@eagleshoops", content: "Marcus Johnson's INSANE crossover had the crowd going WILD 🔥🦅", likes: 1200, comments: 89 },
  { platform: "instagram", handle: "@riverside_eagles", content: "Senior Night was 🔥 Thank you to our graduating players!", likes: 512, comments: 67 },
  { platform: "tiktok", handle: "@eagleshoops", content: "POV: You're watching the Eagles warm up before a playoff game 🏀", likes: 890, comments: 54 },
  { platform: "instagram", handle: "@riverside_eagles", content: "Championship vibes only! 🏆 #EaglesPride #Basketball", likes: 678, comments: 92 },
];

const FansSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="yellow-bar mx-auto mb-6" />
          <h2 className="section-title mb-4">Fan <span className="text-accent">Zone</span></h2>
          <p className="section-subtitle mx-auto">Follow us on social media and be part of the Eagles community.</p>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { icon: Instagram, label: "Instagram", color: "from-pink-500 to-purple-500" },
            { icon: Music, label: "TikTok", color: "from-foreground to-foreground" },
            { icon: Twitter, label: "Twitter", color: "from-sky-400 to-sky-500" },
          ].map((social) => (
            <a
              key={social.label}
              href="#"
              className="group card-glass px-6 py-3 flex items-center gap-3 hover:border-accent/40 hover:shadow-[var(--shadow-glow)] transition-all"
            >
              <social.icon className="w-5 h-5 text-accent" />
              <span className="font-display text-sm uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">{social.label}</span>
            </a>
          ))}
        </motion.div>

        {/* Social feed grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {socialPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="card-glass p-5 group hover:border-accent/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  {post.platform === "instagram" ? (
                    <Instagram className="w-4 h-4 text-accent" />
                  ) : (
                    <Music className="w-4 h-4 text-accent" />
                  )}
                </div>
                <span className="font-display text-xs uppercase tracking-wider text-accent">{post.handle}</span>
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4">{post.content}</p>
              <div className="flex items-center gap-4 text-muted-foreground text-xs">
                <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" /> {post.likes.toLocaleString()}</span>
                <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> {post.comments}</span>
                <Share2 className="w-3.5 h-3.5 ml-auto cursor-pointer hover:text-accent transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FansSection;
