import { useMemo } from "react";
import { motion } from "framer-motion";
import { videos } from "@/data/videos";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import TrendingSection from "@/components/sections/TrendingSection";
import MemeShortsSection from "@/components/sections/MemeShortsSection";
import StandUpSection from "@/components/sections/StandUpSection";
import ReelsSection from "@/components/sections/ReelsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Footer from "@/components/Footer";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Index() {
  const shuffled = useMemo(() => shuffle(videos), []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full overflow-hidden bg-white"
    >
      <Navigation />

      <HeroSection scrollY={0} />

      <section id="trending">
        <TrendingSection videos={shuffled.slice(0, 10)} />
      </section>

      <section id="categories">
        <MemeShortsSection videos={shuffled.slice(10, 20)} />
      </section>

      <StandUpSection videos={shuffled.slice(20, 30)} />

      <section id="latest">
        <ReelsSection videos={shuffled.slice(30, 40)} />
      </section>

      <section id="about">
        <FeaturesSection />
      </section>

      <Footer />
    </motion.div>
  );
}
