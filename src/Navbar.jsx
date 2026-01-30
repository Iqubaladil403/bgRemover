import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg border-b border-blue-700/30"
          : "bg-gradient-to-b from-black/90 via-black/50 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* 🔹 Brand / Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="aicLogo.png"
            alt="Cafe Logo"
            className="w-11 h-11 rounded-full shadow-lg border-2 border-blue-600"
          />
          <h1 className="text-white font-semibold text-lg sm:text-xl tracking-wide">
            Asif Internet Café{" "}
            <span className="text-blue-400 font-bold">– Sirsi Hat</span>
          </h1>
        </div>

        {/* 🔹 Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { path: "/", label: "Home" },
            { path: "/services", label: "Services" },
            { path: "/Gallery", label: "Gallery" },
            { path: "/contact", label: "Contact" },
            { path: "/pricing", label: "Pricing" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-gray-200 hover:text-blue-400 transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-blue-400 font-semibold"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/BgRemover"
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium px-5 py-2 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Online Bg Remover
          </Link>
        </div>

        {/* 🔹 Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 text-white px-6 py-5 space-y-5 border-t border-blue-800/40 shadow-inner">
          {[
            { path: "/", label: "Home" },
            { path: "/services", label: "Services" },
            { path: "/Gallery", label: "Gallery" },
            { path: "/pricing", label: "Pricing" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block hover:text-blue-400 transition ${
                location.pathname === item.path
                  ? "text-blue-400 font-semibold"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/BgRemover"
            className="block text-center bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-2 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Online Bg Remover
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
