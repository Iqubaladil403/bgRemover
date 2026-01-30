import {
  Facebook,
  Instagram
} from "lucide-react";
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white  shadow-inner ">
  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* Left Section (Cafe Info with Social Links) */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h3 className="text-2xl font-extrabold mb-4 border-b border-white/30 pb-2">
        ASIF INTERNET CAFE
      </h3>
      <p className="text-base leading-relaxed mb-4">
        💡 At ASIF INTERNET CAFE, we provide all digital and online services 
        under one roof. From internet browsing, printing, land record services, 
        and form filling to passport applications — we ensure fast, secure, and 
        affordable solutions.
      </p>
      {/* Cafe Social Links */}
      <div className="flex gap-5 mt-2">
        <a
          href="https://www.instagram.com/iqbal_aic03"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 shadow-md transition transform hover:scale-110"
        >
          <Instagram className="w-6 h-6 text-pink-200 hover:text-pink-300" />
        </a>
        <a
          href="https://www.facebook.com/share/14KaqeASbxW/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 shadow-md transition transform hover:scale-110"
        >
          <Facebook className="w-6 h-6 text-blue-200 hover:text-blue-300" />
        </a>
      </div>
    </div>

    {/* Developer Section (Centered) */}
    <div className="flex flex-col items-center text-center">
      <h3 className="text-2xl font-extrabold mb-4 border-b border-white/30 pb-2">
        About Developer
      </h3>
      <div className="bg-white/20 p-6 rounded-xl shadow-lg backdrop-blur-md w-full sm:w-80">
        <p className="text-lg font-semibold text-yellow-300">Md Adil Iqubal</p>
        <p className="text-base mt-1 text-gray-100">
          Full Stack Developer & Designer
        </p>
        <p className="text-sm mt-2">
          Passionate about building user-friendly web applications with modern 
          technologies.
        </p>
        <p className="text-base mt-3">📞 +91-6200445174</p>
        {/* Developer Instagram Link */}
        <div className="flex justify-between">
          <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://www.instagram.com/royal_adil_03?igsh=aGpvOHYzc2xxbGZo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 shadow-md transition transform hover:scale-110"
          >
            <Instagram className="w-6 h-6 text-pink-200 hover:text-pink-300" />
          </a>
        </div>
        <a
          href="mailto:royaladiliqubal@gmail.com"
          className="mt-5 inline-block px-5 py-2 bg-yellow-400 text-indigo-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition"
        >
          Hire Me
        </a>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="bg-indigo-900/70 py-4 mt-10 text-center text-sm border-t border-white/20">
    <p>
      © {new Date().getFullYear()} <span className="font-semibold">ASIF INTERNET CAFE</span>. 
      All rights reserved.
    </p>
  </div>
</footer>

  )
}

export default Footer