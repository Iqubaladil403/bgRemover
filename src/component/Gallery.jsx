import { useState } from "react";
import Footer from "./Footer";

function Gallery() {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
    <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-800 text-white pt-24 pb-10 px-4">
      {/* 🔹 Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-lg mb-2">
          Our Gallery
        </h1>
        <p className="text-lg text-blue-100">
          A glimpse of our creative workspace & happy clients
        </p>
      </div>

      {/* 🔹 Gallery Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group transform hover:scale-105 transition-all duration-400"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-56 object-cover rounded-2xl border border-transparent group-hover:border-yellow-400 transition-all"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"></div>
          </div>
        ))}
      </div>

      {/* 🔹 Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-2xl shadow-2xl border-4 border-yellow-400"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-yellow-500 rounded-full px-3 hover:bg-yellow-400 transition"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
      
    </div>
    <Footer/>
    </>
  );
}

export default Gallery;
