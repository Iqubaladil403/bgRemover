import {
  Book,
  Camera,
  Copy,
  CreditCard,
  Edit3,
  Facebook,
  FileText,
  Globe,
  IdCard,
  Instagram,
  Laptop,
  Mail,
  PenTool,
  Printer,
  Scan,
  SmartphoneCharging,
  UserCheck,
  Wifi
} from "lucide-react";
const mainServices = [
  {
    icon: <CreditCard className="w-10 h-10 text-white" />,
    title: "पैन कार्ड सेवाएँ",
    desc: "नया पैन कार्ड बनवाएँ या अपडेट करें",
    bg: "from-yellow-400 to-orange-500",
  },
  {
    icon: <IdCard className="w-10 h-10 text-white" />,
    title: "आधार सेवाएँ",
    desc: "आधार कार्ड अपडेट / डाउनलोड सुविधा",
    bg: "from-cyan-500 to-blue-600",
  },
  {
    icon: <UserCheck className="w-10 h-10 text-white" />,
    title: "वोटर आईडी सेवाएँ",
    desc: "नया वोटर आईडी बनवाएँ और सुधार कराएँ",
    bg: "from-purple-500 to-pink-600",
  },
  {
    icon: <Globe className="w-10 h-10 text-white" />,
    title: "पासपोर्ट सेवाएँ",
    desc: "पासपोर्ट आवेदन और नवीनीकरण सहायता",
    bg: "from-green-500 to-emerald-600",
  },
];

// 🌐 ज़मीन सेवाएँ
const landServices = [
  {
    icon: <Globe className="w-8 h-8 text-white" />,
    title: "ऑनलाइन ज़मीन रसीद (खतौनी / जमाबंदी) निकालना",
    bg: "from-green-400 to-emerald-500",
  },
  {
    icon: <FileText className="w-8 h-8 text-white" />,
    title: "खसरा, खतौनी एवं नक्शा प्रिंट करना",
    bg: "from-blue-400 to-indigo-500",
  },
  {
    icon: <Printer className="w-8 h-8 text-white" />,
    title: "भू-अभिलेख (Land Record) डाउनलोड व प्रिंट करना",
    bg: "from-purple-400 to-pink-500",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-white" />,
    title: "ऑनलाइन भूमि कर भुगतान",
    bg: "from-orange-400 to-amber-500",
  },
  {
    icon: <Book className="w-8 h-8 text-white" />,
    title: "जमीन की खाता/खेसरा जानकारी",
    bg: "from-cyan-400 to-blue-500",
  },
];

// अन्य सेवाएँ
const otherServices = [
  { icon: <Wifi className="w-8 h-8 text-white" />, title: "हाई-स्पीड इंटरनेट ब्राउज़िंग", bg: "from-cyan-400 to-blue-500" },
  { icon: <Camera className="w-8 h-8 text-white" />, title: "पासपोर्ट साइज फोटो (3.5 & 4.5)", bg: "from-purple-400 to-indigo-600" },
  { icon: <FileText className="w-8 h-8 text-white" />, title: "ऑनलाइन फॉर्म भरना (सरकारी / निजी)", bg: "from-indigo-400 to-purple-500" },
  { icon: <FileText className="w-8 h-8 text-white" />, title: "परीक्षा पंजीकरण व प्रवेश पत्र प्रिंट", bg: "from-purple-400 to-pink-500" },
  { icon: <CreditCard className="w-8 h-8 text-white" />, title: "किसी भी साइज का लेमिनेशन", bg: "from-orange-400 to-amber-500" },
  { icon: <Globe className="w-8 h-8 text-white" />, title: "रेलवे / बस / फ्लाइट टिकट बुकिंग", bg: "from-teal-400 to-green-500" },
  { icon: <Printer className="w-8 h-8 text-white" />, title: "ब्लैक एंड व्हाइट व कलर प्रिंटिंग", bg: "from-pink-500 to-rose-600" },
  { icon: <FileText className="w-8 h-8 text-white" />, title: "जॉब फॉर्म व स्कॉलरशिप फॉर्म", bg: "from-indigo-400 to-purple-600" },
  { icon: <Scan className="w-8 h-8 text-white" />, title: "स्कैनिंग (A4, लीगल एवं अन्य आकार)", bg: "from-green-400 to-emerald-500" },
  { icon: <Copy className="w-8 h-8 text-white" />, title: "फोटोकॉपी (ज़ेरॉक्स)", bg: "from-purple-400 to-indigo-600" },
  { icon: <Mail className="w-8 h-8 text-white" />, title: "ईमेल बनाना और भेजना", bg: "from-blue-400 to-indigo-600" },
  { icon: <SmartphoneCharging className="w-8 h-8 text-white" />, title: "ऑनलाइन भुगतान (बिजली बिल, पानी बिल, मोबाइल रिचार्ज आदि)", bg: "from-green-500 to-teal-600" },
  { icon: <Edit3 className="w-8 h-8 text-white" />, title: "फोटो एडिटिंग", bg: "from-purple-400 to-pink-600" },
  { icon: <Laptop className="w-8 h-8 text-white" />, title: "किसी भी प्रकार का वेबसाइट या App भी बनाया जाता है", bg: "from-pink-500 to-rose-600" },
  { icon: <PenTool className="w-8 h-8 text-white" />, title: "आवश्यक्तानुसार सभी ऑनलाइन कार्य", bg: "from-indigo-500 to-purple-700" },
];
// प्रेस सेवाएँ
const pressServices = [
  {
    icon: <Printer className="w-8 h-8 text-white" />,
    title: "शादी कार्ड प्रिंटिंग",
    bg: "from-red-400 to-pink-500",
  },
  {
    icon: <Printer className="w-8 h-8 text-white" />,
    title: "विज़िटिंग कार्ड प्रिंटिंग",
    bg: "from-blue-400 to-indigo-500",
  },
  {
    icon: <Printer className="w-8 h-8 text-white" />,
    title: "लेटरहेड प्रिंटिंग",
    bg: "from-green-400 to-emerald-500",
  },
  {
    icon: <Printer className="w-8 h-8 text-white" />,
    title: "बैनर व फ्लेक्स प्रिंटिंग",
    bg: "from-purple-400 to-fuchsia-500",
  },
  {
    icon: <Printer className="w-8 h-8 text-white" />,
    title: "ब्रॉशर और पैम्पलेट प्रिंटिंग",
    bg: "from-orange-400 to-amber-500",
  },
  {
    icon: <Printer className="w-8 h-8 text-white" />,
    title: "पोस्टर व हैंडबिल प्रिंटिंग",
    bg: "from-cyan-400 to-teal-500",
  },
];

export default function Services() {
  return (
    <>
      <section className="py-10 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        {/* 🔹 Marquee */}
        <div className="overflow-hidden border-y py-2 bg-white shadow relative">
          <div className="flex animate-marquee space-x-12 px-6 text-sm sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            <span>
              💳 पैन कार्ड बनवाएँ — ✍️ आधार कार्ड अपडेट करें — 🗳 वोटर आईडी
              सेवाएँ — 🌐 पासपोर्ट आवेदन — 💌 शादी कार्ड प्रिंटिंग — 🖨 विज़िटिंग
              कार्ड प्रिंटिंग — 📄 बैनर व फ्लेक्स प्रिंटिंग — 📚 ब्रॉशर
              प्रिंटिंग — 📄 रिज्यूमे / बायोडाटा बनाना
            </span>
            <span>
              💳 पैन कार्ड बनवाएँ — ✍️ आधार कार्ड अपडेट करें — 🗳 वोटर आईडी
              सेवाएँ — 🌐 पासपोर्ट आवेदन — 💌 शादी कार्ड प्रिंटिंग — 🖨 विज़िटिंग
              कार्ड प्रिंटिंग — 📄 बैनर व फ्लेक्स प्रिंटिंग — 📚 ब्रॉशर
              प्रिंटिंग — 📄 रिज्यूमे / बायोडाटा बनाना
            </span>
          </div>
        </div>

        {/* 🔹 Main Services */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 pt-6 pb-8">
          प्रमुख सेवाएँ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 max-w-7xl mx-auto mb-12">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className={`relative group p-5 rounded-2xl shadow-lg text-white bg-gradient-to-r ${service.bg} hover:scale-105 transition-transform duration-300`}
            >
              <div className="absolute inset-0 rounded-2xl bg-white opacity-20 blur-lg group-hover:opacity-40 transition"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-3">{service.icon}</div>
                <h3 className="text-base sm:text-lg font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm opacity-90">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Land Services */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-8">
          🌐 ऑनलाइन ज़मीन संबंधी सेवाएँ
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 max-w-7xl mx-auto mb-12">
          {landServices.map((service, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 text-white bg-gradient-to-r ${service.bg}`}
            >
              {service.icon}
              <p className="font-semibold">{service.title}</p>
            </div>
          ))}
        </div>

        {/* 🔹 Other Services */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-6">
          अन्य सेवाएँ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 max-w-7xl mx-auto mb-12">
          {otherServices.map((work, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 text-white bg-gradient-to-r ${work.bg}`}
            >
              {work.icon}
              <p className="text-sm sm:text-base font-semibold">{work.title}</p>
            </div>
          ))}
        </div>

        {/* 🔹 Press Services */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-pink-700 mb-6">
          📌 प्रेस सेवाएँ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 max-w-7xl mx-auto">
          {pressServices.map((service, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 text-white bg-gradient-to-r ${service.bg}`}
            >
              {service.icon}
              <p className="text-sm sm:text-base font-semibold">
                {service.title}
              </p>
            </div>
          ))}
        </div>

        {/* 🔹 Contact */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-lg sm:text-xl font-bold text-indigo-700">
            ⚡ तेज़ • विश्वसनीय • किफ़ायती
          </p>
          <p className="mt-2 text-sm sm:text-lg text-gray-700">
            📞 सम्पर्क करें: +91-9801259190 (ASIF IQBAL)
          </p>
        </div>
      </section>

      {/* 🔹 Footer */}
<footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white mt-12 shadow-inner rounded-lg mb-10">
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
  <div className="bg-indigo-900/70 py-4 mt-10 text-center text-sm border-t border-white/20 rounded-lg">
    <p>
      © {new Date().getFullYear()} <span className="font-semibold">ASIF INTERNET CAFE</span>. 
      All rights reserved.
    </p>
  </div>
</footer>

    </>
  );
}
