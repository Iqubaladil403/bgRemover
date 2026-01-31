import { useEffect, useState } from "react";
import { API_URL } from "../config/api";
import WeddingCard from "./WeddingCard";
import WeddingCardSkeleton from "./WeddingCardSkeleton";

const API = `${API_URL}/wedding-cards`;

export default function WeddingCards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(API)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch(() => {
        setError("❌ शादी कार्ड लोड नहीं हो पाए");
        setLoading(false);
      });
  }, []);

  /* 🔹 LOADING STATE (FIXED) */
  if (loading) {
    return (
      <section
        className="relative pt-20 sm:pt-24 pb-6
        bg-gradient-to-br from-[#020617] via-[#0f2a5f] to-[#0f766e]
        overflow-x-hidden text-white"
      >
        {/* Heading – navbar se proper gap */}
        <h2
          className="text-2xl sm:text-3xl font-extrabold text-center
          text-yellow-400 mb-6"
        >
          💌 शादी कार्ड लोड हो रहे हैं...
        </h2>

        <p className="text-center mb-8 animate-pulse">
          कृपया थोड़ा इंतज़ार करें
        </p>

        {/* ✅ Skeleton cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-6 max-w-7xl mx-auto px-4 sm:px-6"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <WeddingCardSkeleton key={i} />
          ))}
        </div>
      </section>
    );
  }

  /* 🔹 ERROR STATE */
  if (error) {
    return (
      <div className="pt-24 text-center text-red-400">
        {error}
      </div>
    );
  }

  /* 🔹 SUCCESS STATE */
  return (
    <section
      className="relative pt-20 sm:pt-24 text-white
  bg-gradient-to-br from-[#020617] via-[#0f2a5f] to-[#0f766e]
  overflow-x-hidden overflow-y-visible"

    >
      {/* Glow (content height only) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full">
        <div className="absolute -top-32 -left-32 w-[360px] h-[360px]
          bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-160px] right-[-160px]
          w-[360px] h-[360px] bg-teal-400/20 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10">
        {/* Heading – navbar ke niche perfect */}
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-center
          mb-8 sm:mb-10 text-yellow-400 drop-shadow-lg"
        >
          💌 यहाँ से अपना पसंदीदा शादी कार्ड चुनें और ऑर्डर करें
        </h2>

        {cards.length === 0 ? (
          <p className="text-center mb-8">
            No wedding cards available
          </p>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-6 max-w-7xl mx-auto px-4 sm:px-6"
          >
            {cards.map((card) => (
              <WeddingCard key={card._id} card={card} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
