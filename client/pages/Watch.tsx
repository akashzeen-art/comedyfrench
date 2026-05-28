import { useRef, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { videos } from "@/data/videos";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play, X } from "lucide-react";

export default function Watch() {
  const { id } = useParams<{ id: string }>();
  const video = videos.find((v) => v.id === id);
  const relatedVideos = videos
    .filter((v) => v.id !== id && v.category === video?.category)
    .slice(0, 4);

  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play();
  }, [id]);

  if (!video) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Vidéo Introuvable</h1>
          <p className="text-gray-600 mb-6">La vidéo que vous recherchez n'existe pas.</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-white"
    >
      <Navigation />

      <div className="pt-32 pb-12">
        {/* Video Player Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-video rounded-3xl overflow-hidden bg-gray-950 shadow-2xl"
          >
            <video
              ref={videoRef}
              src={video.videoUrl}
              poster={video.thumbnail}
              controls
              controlsList="nodownload"
              autoPlay
              preload="auto"
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="absolute top-4 left-4 z-10 w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur rounded-full flex items-center justify-center text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Video Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8"
          >
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              {video.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              {video.description}
            </p>
          </motion.div>
        </div>

        {/* Related Videos */}
        {relatedVideos.length > 0 && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-gray-200">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-black text-gray-900 mb-8"
            >
              Vidéos Connexes
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedVideos.map((relatedVideo, idx) => (
                <motion.div
                  key={relatedVideo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link to={`/watch/${relatedVideo.id}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="group relative rounded-2xl overflow-hidden cursor-pointer"
                    >
                      <img
                        src={relatedVideo.thumbnail}
                        alt={relatedVideo.title}
                        className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-end p-4">
                        <h3 className="text-white font-bold line-clamp-2">{relatedVideo.title}</h3>
                      </div>
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-cyan-500 transition-all">
                          <Play className="w-6 h-6 text-gray-900 group-hover:text-white ml-1" fill="currentColor" />
                        </div>
                      </motion.div>
                    </motion.div>
                    <div className="mt-4">
                      <h3 className="font-bold text-gray-900 line-clamp-2">{relatedVideo.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{relatedVideo.comedian}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </motion.div>
  );
}
