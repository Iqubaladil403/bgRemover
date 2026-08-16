import { useState } from "react";

const images = [
  "/images/nikah-dupatta/nikah-dupatta-1.webp",
  "/images/nikah-dupatta/nikah-dupatta-2.webp",
  "/images/nikah-dupatta/nikah-dupatta-3.webp",
  "/images/nikah-dupatta/nikah-dupatta-4.webp",
];

export default function NikahDupattaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative bg-gray-100 h-[400px] sm:h-[450px]">

      {/* MAIN IMAGE */}

      <img
        src={images[currentIndex]}
        alt={`Nikah Dupatta ${currentIndex + 1}`}
        className="w-full h-full object-contain"
      />

      {/* PREVIOUS */}

      {images.length > 1 && (
        <button
          type="button"
          onClick={previousImage}
          className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            w-10
            h-10
            rounded-full
            bg-white/90
            text-slate-800
            text-2xl
            font-bold
            shadow-lg
            hover:bg-white
            transition
          "
        >
          ‹
        </button>
      )}

      {/* NEXT */}

      {images.length > 1 && (
        <button
          type="button"
          onClick={nextImage}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            w-10
            h-10
            rounded-full
            bg-white/90
            text-slate-800
            text-2xl
            font-bold
            shadow-lg
            hover:bg-white
            transition
          "
        >
          ›
        </button>
      )}

      {/* DOTS */}

      {images.length > 1 && (
        <div
          className="
            absolute
            bottom-3
            left-1/2
            -translate-x-1/2
            flex
            gap-2
          "
        >
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`
                w-2.5
                h-2.5
                rounded-full
                transition
                ${
                  currentIndex === index
                    ? "bg-pink-600 scale-125"
                    : "bg-white/80"
                }
              `}
            />
          ))}
        </div>
      )}

      {/* IMAGE NUMBER */}

      {images.length > 1 && (
        <div
          className="
            absolute
            top-3
            right-3
            px-3
            py-1
            rounded-full
            bg-black/60
            text-white
            text-xs
            font-semibold
          "
        >
          {currentIndex + 1} / {images.length}
        </div>
      )}

    </div>
  );
}