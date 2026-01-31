// import { useEffect, useState } from "react";
// import { API_URL } from "../config/api";
// import WeddingCard from "./WeddingCard";

// const API = `${API_URL}/wedding-cards`;

// export default function WeddingCards() {
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(API)
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch");
//         return res.json();
//       })
//       .then((data) => {
//         setCards(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching cards:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="pt-32 text-center text-white">
//         Loading wedding cards...
//       </div>
//     );
//   }

//   return (
//     <section
//       className="relative pt-24 pb-16 min-h-screen text-white
//       bg-gradient-to-br from-[#020617] via-[#0f2a5f] to-[#0f766e] overflow-hidden"
//     >
//       {/* Glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -top-40 -left-40 w-[500px] h-[500px]
//           bg-blue-500/20 rounded-full blur-[120px]" />
//         <div className="absolute bottom-[-200px] right-[-200px]
//           w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-[140px]" />
//         <div className="absolute inset-0 bg-black/25" />
//       </div>

//       <div className="relative z-10">
//         <h2 className="text-4xl font-extrabold text-center mb-12
//           text-yellow-400 drop-shadow-lg">
//           💌 यहाँ से अपना पसंदीदा शादी कार्ड चुनें और ऑर्डर करें
//         </h2>

//         {cards.length === 0 ? (
//           <p className="text-center">No wedding cards available</p>
//         ) : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3
//             gap-8 max-w-7xl mx-auto px-6">
//             {cards.map((card) => (
//               <WeddingCard key={card._id} card={card} />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }



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

  /* 🔹 LOADING STATE */
  if (loading) {
    return (
      <section
        className="pt-24 pb-16 min-h-screen
        bg-gradient-to-br from-[#020617] via-[#0f2a5f] to-[#0f766e]"
      >
        <h2 className="text-3xl font-extrabold text-center mb-6
          text-yellow-400">
          💌 शादी कार्ड लोड हो रहे हैं...
        </h2>

        <p className="text-center text-white mb-10 animate-pulse">
          कृपया थोड़ा इंतज़ार करें
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3
          gap-8 max-w-7xl mx-auto px-6">
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
      <div className="pt-32 text-center text-red-300">
        {error}
      </div>
    );
  }

  /* 🔹 SUCCESS STATE */
  return (
    <section
      className="relative pt-24 pb-16 min-h-screen text-white
      bg-gradient-to-br from-[#020617] via-[#0f2a5f] to-[#0f766e]"
    >
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px]
          bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-200px]
          w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-12
          text-yellow-400 drop-shadow-lg">
          💌 यहाँ से अपना पसंदीदा शादी कार्ड चुनें और ऑर्डर करें
        </h2>

        {cards.length === 0 ? (
          <p className="text-center">No wedding cards available</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3
            gap-8 max-w-7xl mx-auto px-6">
            {cards.map((card) => (
              <WeddingCard key={card._id} card={card} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
