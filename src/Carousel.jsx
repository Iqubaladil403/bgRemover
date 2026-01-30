import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "Fast Internet Access",
    subtitle: "Experience lightning-speed browsing and downloads",
  },
  {
    url: "img1.png",
    title: "Professional Printing & Scanning",
    subtitle: "High-quality prints, scans, and photocopies instantly",
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Learn & Work Comfortably",
    subtitle: "Clean, air-conditioned, and quiet environment",
  },
  {
    url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    title: "Online Forms & Government Services",
    subtitle: "Instant help with government and online form submissions",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const nextSlide = () => setIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setIndex((prev) => (prev - 1 + total) % total);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh] overflow-hidden bg-black -mt-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index].url}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          {/* Image */}
          <img
            src={images[index].url}
            alt={images[index].title}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

      

          {/* Caption */}
          <div className="absolute bottom-16 left-8 md:left-12 text-white max-w-lg">
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-lg leading-snug">
              {images[index].title}
            </h2>
            <p className="text-sm md:text-lg text-gray-200 mt-1 drop-shadow-md">
              {images[index].subtitle}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/80 hover:bg-white text-gray-900 p-2 md:p-3 rounded-full shadow-lg transition"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/80 hover:bg-white text-gray-900 p-2 md:p-3 rounded-full shadow-lg transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === index ? "bg-white scale-125 shadow-lg" : "bg-gray-500/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
