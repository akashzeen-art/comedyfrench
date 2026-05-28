import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Smartphone, Play, Globe, Wifi, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Play,
    title: "Streaming HD",
    description: "Vidéos en qualité 4K cristalline sans aucun tampon",
    color: "from-orange-400 to-pink-500",
  },
  {
    icon: Zap,
    title: "Comédie Illimitée",
    description: "Des vidéos comiques à portée de main à tout moment",
    color: "from-pink-400 to-purple-600",
  },
  {
    icon: Wifi,
    title: "Chargement Rapide",
    description: "Streaming ultra-rapide avec des serveurs optimisés",
    color: "from-purple-500 to-cyan-400",
  },
  {
    icon: Globe,
    title: "Regarder Partout",
    description: "Accédez depuis n'importe quel appareil, bureau ou mobile",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Smartphone,
    title: "Compatible Mobile",
    description: "Design entièrement réactif pour une expérience parfaite sur tout écran",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Sûr et Sécurisé",
    description: "Vos données sont protégées par une sécurité de niveau entreprise",
    color: "from-indigo-500 to-purple-600",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // reserved
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="feature-title text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-4">
            <span className="text-white">Fait pour les </span>
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Amateurs de Rires
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Des grands rires rencontrent un streaming fluide conçu pour des nuits de comédie en binge.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                className="feature-card group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Card Background */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-gray-600 transition-colors"
                >
                  {/* Gradient Border on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-2xl p-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:via-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>

                  {/* Floating Dot */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: -1 }}
                    className="absolute bottom-6 right-6 w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            Prêt pour des rires illimités ?
          </p>
          <Link to="/categories">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 30px 60px rgba(249, 115, 22, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all"
            >
              Commencer à Regarder
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
