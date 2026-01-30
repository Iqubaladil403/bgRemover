import { Mail, MapPin, Phone } from "lucide-react";
import Common from "./Common";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Common
        title="Contact Us"
        subtitle="We’re always here to help — visit or call anytime"
        bg="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-800 text-white"
      >
        <div className="text-center space-y-8 py-8">
          {/* Location */}
          <div className="flex items-center justify-center space-x-3">
            <MapPin className="text-yellow-400 w-6 h-6" />
            <a
              href="https://maps.app.goo.gl/d4GG7463fBoEicXF8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-yellow-600 font-medium transition-all duration-300 underline"
            >
              Sirsi Hat, Rahmania Market (Akhlaque Hardware), Opposite side of CBI Bank (Hifzur Rahman)
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center space-x-3">
            <Phone className="text-green-400 w-6 h-6" />
            <p className="text-blue-900 font-medium">+91 9801259190</p>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center space-x-3">
            <Mail className="text-cyan-400 w-6 h-6" />
            <a
              href="mailto:asific007@gmail.com"
              className="text-blue-900 hover:text-cyan-700 font-medium transition-all duration-300"
            >
              asific007@gmail.com
            </a>
          </div>

          {/* Button */}
          <div className="mt-6">
            <a
              href="https://maps.app.goo.gl/d4GG7463fBoEicXF8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300"
            >
              Get Directions
            </a>
          </div>
        </div>
      </Common>
      <Footer />
    </>
  );
};

export default Contact;
