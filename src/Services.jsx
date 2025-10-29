import {
  Book,
  Camera,
  Copy,
  CreditCard,
  Edit3,
  FileText,
  Globe,
  IdCard,
  Laptop,
  Mail,
  PenTool,
  Printer,
  Scan,
  SmartphoneCharging,
  UserCheck,
  Wifi,
} from "lucide-react";
import Footer from "./component/Footer";

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

const pressServices = [
  { icon: <Printer className="w-8 h-8 text-white" />, title: "शादी कार्ड प्रिंटिंग", bg: "from-red-400 to-pink-500" },
  { icon: <Printer className="w-8 h-8 text-white" />, title: "विज़िटिंग कार्ड प्रिंटिंग", bg: "from-blue-400 to-indigo-500" },
  { icon: <Printer className="w-8 h-8 text-white" />, title: "लेटरहेड प्रिंटिंग", bg: "from-green-400 to-emerald-500" },
  { icon: <Printer className="w-8 h-8 text-white" />, title: "बैनर व फ्लेक्स प्रिंटिंग", bg: "from-purple-400 to-fuchsia-500" },
  { icon: <Printer className="w-8 h-8 text-white" />, title: "ब्रॉशर और पैम्पलेट प्रिंटिंग", bg: "from-orange-400 to-amber-500" },
  { icon: <Printer className="w-8 h-8 text-white" />, title: "पोस्टर व हैंडबिल प्रिंटिंग", bg: "from-cyan-400 to-teal-500" },
];

export default function Services() {
  return (
    <>
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-800 text-white">
        {/* 🔹 Marquee */}
        <div className="overflow-hidden border-y border-white/20 py-2 bg-black/20 backdrop-blur-sm">
          <div className="flex animate-marquee space-x-12 px-6 text-sm sm:text-lg font-semibold text-yellow-300">
            <span>
              💳 पैन कार्ड — ✍️ आधार अपडेट — 🗳 वोटर आईडी — 🌐 पासपोर्ट — 💌 शादी कार्ड — 🖨 विज़िटिंग कार्ड — 📄 बैनर प्रिंटिंग — 📚 ब्रॉशर — 📄 रिज्यूमे / बायोडाटा
            </span>
            <span>
              💳 पैन कार्ड — ✍️ आधार अपडेट — 🗳 वोटर आईडी — 🌐 पासपोर्ट — 💌 शादी कार्ड — 🖨 विज़िटिंग कार्ड — 📄 बैनर प्रिंटिंग — 📚 ब्रॉशर — 📄 रिज्यूमे / बायोडाटा
            </span>
          </div>
        </div>

        {/* 🔹 Main Services */}
        <h2 className="text-4xl font-extrabold text-center text-yellow-400 pt-10 pb-8 drop-shadow-lg">
          प्रमुख सेवाएँ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 max-w-7xl mx-auto mb-14">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className={`relative group p-5 rounded-2xl shadow-lg text-white bg-gradient-to-r ${service.bg} hover:scale-105 transition-transform duration-300`}
            >
              <div className="absolute inset-0 rounded-2xl bg-black/20 blur-lg group-hover:opacity-50 transition"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm opacity-90">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Land Services */}
        <h2 className="text-3xl font-bold text-center text-green-300 mb-8 drop-shadow-md">
          🌐 ऑनलाइन ज़मीन संबंधी सेवाएँ
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 max-w-7xl mx-auto mb-14">
          {landServices.map((service, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 bg-gradient-to-r ${service.bg}`}
            >
              {service.icon}
              <p className="font-semibold">{service.title}</p>
            </div>
          ))}
        </div>

        {/* 🔹 Other Services */}
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-8 drop-shadow-md">
          अन्य सेवाएँ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-6 max-w-7xl mx-auto mb-14">
          {otherServices.map((work, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 bg-gradient-to-r ${work.bg}`}
            >
              {work.icon}
              <p className="text-base font-semibold">{work.title}</p>
            </div>
          ))}
        </div>

        {/* 🔹 Press Services */}
        <h2 className="text-3xl font-bold text-center text-pink-300 mb-8 drop-shadow-md">
          📌 प्रेस सेवाएँ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-6 max-w-7xl mx-auto">
          {pressServices.map((service, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 bg-gradient-to-r ${service.bg}`}
            >
              {service.icon}
              <p className="text-base font-semibold">{service.title}</p>
            </div>
          ))}
        </div>

        {/* 🔹 Contact */}
        <div className="text-center mt-16">
          <p className="text-xl font-bold text-yellow-300">
            ⚡ तेज़ • विश्वसनीय • किफ़ायती
          </p>
          <p className="mt-2 text-lg text-blue-100">
            📞 सम्पर्क करें: +91-9801259190 (ASIF IQBAL)
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
