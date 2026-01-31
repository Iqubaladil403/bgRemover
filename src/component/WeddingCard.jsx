import { useState } from "react";

const ADMIN_PHONE = import.meta.env.VITE_ADMIN_PHONE || "919801259190";

export default function WeddingCard({ card }) {
  const images = card.images || [];
  const [index, setIndex] = useState(0);

  const prevImage = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const nextImage = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const discountedPrice = card.discount
    ? Math.round(card.price - (card.price * card.discount) / 100)
    : card.price;

  const handleWhatsAppOrder = () => {
    const message = `
Hello 👋

I want to order this wedding card:

💌 Title: ${card.title}
💰 Price: ₹${discountedPrice}
📏 Size: ${card.size}
📄 Paper: ${card.paper}
    `;

    const url = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

 return (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
    {/* IMAGE */}
    <div className="relative bg-gray-100 h-[280px]">
      {images.length > 0 && (
        <img
          src={images[index]}   // ✅ ONLY THIS CHANGE
          alt={card.title}
          className="w-full h-full object-contain"
        />
      )}

      {card.discount && (
        <span
          className="absolute top-3 left-3 bg-red-600 text-white
          text-xs font-bold px-3 py-1 rounded-full shadow z-20"
        >
          {card.discount}% OFF
        </span>
      )}

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2
            bg-white/80 text-slate-700 rounded-full w-8 h-8 shadow z-20"
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2
            bg-white/80 text-slate-700 rounded-full w-8 h-8 shadow z-20"
          >
            ›
          </button>
        </>
      )}
    </div>

    {/* DETAILS */}
    <div className="p-4">
      <h3 className="text-base font-bold text-slate-800">
        {card.title}
      </h3>

      <p className="text-xs text-slate-600 mt-1">
        📏 {card.size} • 📄 {card.paper}
      </p>

      <div className="mt-3 flex items-center justify-between">
        <div>
          <span className="text-lg font-extrabold text-pink-600">
            ₹{discountedPrice}
          </span>
          {card.discount && (
            <span className="block text-xs text-slate-400 line-through">
              ₹{card.price}
            </span>
          )}
        </div>

        <button
          onClick={handleWhatsAppOrder}
          className="px-3 py-1.5 rounded-lg
          bg-green-600 text-white text-xs font-semibold
          hover:bg-green-700 transition"
        >
          Order on WhatsApp
        </button>
      </div>
    </div>
  </div>
);

}
