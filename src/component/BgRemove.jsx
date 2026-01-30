import { useState } from "react";
import ImageCard from "../ImageCard";
import ScrollingText from "../ScrollingText";
import Footer from "./Footer";
function BgRemove() {
  const [files, setFiles] = useState([]);

  const handleFilesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  return (
    <>
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-x-hidden mt-14">
      {/* 🔹 Top Scrolling Text */}
      <ScrollingText />

      <div className=" text-center">
        <h1
          className="text-4xl md:text-5xl font-extrabold 
  text-transparent bg-clip-text 
  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-100
  drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]
  tracking-wide text-center mt-6 mb-8"
        >
          ✨ ASIF INTERNET CAFE SIRSI HAT ✨
          <div className="mt-6">
            <h1 className=" py-3 rounded-lg font-semibold text-white shadow-lg bg-gradient-to-r from-pink-500 to-yellow-400 hover:scale-105 transform transition duration-300">
              Smart Background Remover
            </h1>
          </div>
        </h1>
      </div>

      <label className="bg-white/20 backdrop-blur-md text-white font-semibold px-6 py-3 rounded-lg shadow-lg cursor-pointer hover:bg-white/30 transition mb-8">
        Upload Images
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFilesChange}
          className="hidden"
        />
      </label>

      <div className="flex flex-col gap-8 w-full max-w-4xl mb-8">
        {files.map((file, idx) => (
          <ImageCard key={idx} file={file} index={idx} />
        ))}
      </div>
      <Footer/>
    </div>
    
    </>
  );
}

export default BgRemove;