export default function ScrollingText() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 py-3">
      {/* Fading edges */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-indigo-900 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-pink-700 to-transparent z-10"></div>

      {/* Marquee track */}
      <div className="flex w-max animate-marquee">
        <span className="mx-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
          🌐 ASIF INTERNET CAFE SIRSI HAT ✦ Fast Browsing ✦ Printing ✦ Online Services Available  ✦  +91-9801259190🌐
        </span>
        <span className="mx-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
          🌐 ASIF INTERNET CAFE SIRSI HAT ✦ Fast Browsing ✦ Printing ✦ Online Services Available ✦ +91-9801259190 🌐
        </span>
      </div>
    </div>
  );
}
