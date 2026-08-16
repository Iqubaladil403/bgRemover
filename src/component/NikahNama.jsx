import { useState } from "react";
import NikahNamaCarousel from "./NikahNamaCarousel";

const ADMIN_PHONE =
  import.meta.env.VITE_ADMIN_PHONE || "919801259190";

const NIKAH_NAMA = {
  title: "प्रीमियम निकाह नामा ",
  priceRange: "₹700 – ₹1300",
  size: "12x18",
  paper: "Premium Papeer with Acrylic Cutting & Valvet Sheet",
};

export default function NikahNama() {
  const [showDupattaQuestion, setShowDupattaQuestion] = useState(false);
  const [wantsDupatta, setWantsDupatta] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    state: "",
    district: "",
    address: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "नाम दर्ज करें";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "मोबाइल नंबर दर्ज करें";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "सही 10 अंकों का मोबाइल नंबर दर्ज करें";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State दर्ज करें";
    }

    if (!formData.district.trim()) {
      newErrors.district = "District दर्ज करें";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Local Address दर्ज करें";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode दर्ज करें";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "सही 6 अंकों का Pincode दर्ज करें";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const message = `
📜 *NIKAH NAMA ORDER*

━━━━━━━━━━━━━━━━━━
📄 *Product Details*
━━━━━━━━━━━━━━━━━━

📜 Design: ${NIKAH_NAMA.title}
💰 Price: ₹${NIKAH_NAMA.priceRange}
📏 Size: ${NIKAH_NAMA.size}
📄 Paper: ${NIKAH_NAMA.paper}

🧕 Nikah Dupatta: ${
      wantsDupatta
        ? "Yes, Customer wants Nikah Dupatta"
        : "No, Customer does not want Nikah Dupatta"
    }

━━━━━━━━━━━━━━━━━━
👤 *Customer Details*
━━━━━━━━━━━━━━━━━━

👤 Name: ${formData.name}
📱 Mobile: ${formData.mobile}

━━━━━━━━━━━━━━━━━━
📍 *Delivery Address*
━━━━━━━━━━━━━━━━━━

🏛️ State: ${formData.state}
🏙️ District: ${formData.district}
🏠 Local Address: ${formData.address}
📮 Pincode: ${formData.pincode}

━━━━━━━━━━━━━━━━━━

Please confirm my Nikah Nama order. 🙏
`;

    const whatsappURL = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="min-h-screen pt-20 sm:pt-24 pb-16 text-white bg-gradient-to-br from-[#020617] via-[#0f2a5f] to-[#0f766e] relative overflow-hidden">

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -top-32 -left-32 w-[360px] h-[360px] bg-blue-500/20 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-160px] right-[-160px] w-[360px] h-[360px] bg-teal-400/20 rounded-full blur-[140px]" />

      </div>

      <div className="relative z-10">

        {/* Heading */}

        <div className="text-center px-4 mb-8">

          <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 drop-shadow-lg">
            📜 निकाह नामा
          </h1>

          <p className="mt-3 text-blue-100 text-sm sm:text-base">
            खूबसूरत और प्रीमियम निकाह नामा प्रिंटिंग
          </p>

        </div>

        {/* Product Card */}

        <div className="max-w-md mx-auto px-4">

          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">

            {/* Carousel */}

            <NikahNamaCarousel />

            {/* Details */}

            <div className="p-5 text-slate-800">

              <h2 className="text-xl font-extrabold">
                {NIKAH_NAMA.title}
              </h2>

              <p className="text-sm text-slate-600 mt-2">
                📏 {NIKAH_NAMA.size}
                &nbsp; • &nbsp;
                📄 {NIKAH_NAMA.paper}
              </p>

              <div className="flex items-center justify-between mt-5">

                <div>
<div>
  <p className="text-xs text-slate-500">
    Price Range
  </p>

  <span className="text-xl sm:text-2xl font-extrabold text-pink-600">
    {NIKAH_NAMA.priceRange}
  </span>

  <p className="text-xs text-slate-500 mt-1">
    Final price depends on design & customization
  </p>
</div>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    setShowDupattaQuestion(true)
                  }
                  className="px-4 py-2.5 rounded-xl bg-green-600 text-white text-sm font-bold hover:bg-green-700 transition shadow-md"
                >
                  Order on WhatsApp
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =========================
          DUPATTA QUESTION
      ========================= */}

      {showDupattaQuestion && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">

            <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-5">

              <h2 className="text-xl font-bold">
                📜 निकाह नामा ऑर्डर
              </h2>

              <p className="text-sm text-pink-100 mt-1">
                एक और विकल्प चुनें
              </p>

            </div>

            <div className="p-6 text-center">

              {/* Nikah Dupatta Image */}

              <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden bg-gray-100">

                <img
                  src="/images/nikah-dupatta/nikah-dupatta-1.webp"
                  alt="Nikah Dupatta"
                  className="w-full h-full object-contain"
                />

              </div>

              <h3 className="text-xl font-bold text-slate-800">
                क्या आप निकाह दुपट्टा भी खरीदना चाहते हैं?
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                निकाह नामा के साथ निकाह दुपट्टा भी उपलब्ध है।
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">

                <button
                  type="button"
                  onClick={() => {
                    setWantsDupatta(true);
                    setShowDupattaQuestion(false);
                    setShowForm(true);
                  }}
                  className="py-3 px-4 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition"
                >
                  ✅ हाँ, चाहिए
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setWantsDupatta(false);
                    setShowDupattaQuestion(false);
                    setShowForm(true);
                  }}
                  className="py-3 px-4 rounded-xl bg-slate-200 text-slate-800 font-bold hover:bg-slate-300 transition"
                >
                  ❌ नहीं, सिर्फ निकाह नामा
                </button>

              </div>

              <button
                type="button"
                onClick={() =>
                  setShowDupattaQuestion(false)
                }
                className="mt-4 text-sm text-red-500 hover:underline"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

      {/* =========================
          FORM MODAL
      ========================= */}

      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">

          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl my-8">

            {/* Close Button */}

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="absolute right-3 top-3 w-9 h-9 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition z-10"
            >
              ✕
            </button>

            {/* Form Header */}

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-2xl p-5">

              <h2 className="text-xl font-bold">
                📜 निकाह नामा ऑर्डर
              </h2>

              <p className="text-sm text-green-100 mt-1">
                WhatsApp पर ऑर्डर भेजने के लिए अपनी जानकारी भरें
              </p>

            </div>

            {/* Form */}

            <form
              onSubmit={handleWhatsAppOrder}
              className="p-5 space-y-4"
            >

              {/* Name */}

              <div>

                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  👤 नाम
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="अपना पूरा नाम दर्ज करें"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-800 outline-none focus:ring-2 focus:ring-green-500"
                />

                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name}
                  </p>
                )}

              </div>

              {/* Mobile */}

              <div>

                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  📱 मोबाइल नंबर
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  maxLength={10}
                  inputMode="numeric"
                  placeholder="10 अंकों का मोबाइल नंबर"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-800 outline-none focus:ring-2 focus:ring-green-500"
                />

                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.mobile}
                  </p>
                )}

              </div>

              {/* State */}

              <div>

                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  🏛️ State
                </label>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="जैसे Bihar"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-800 outline-none focus:ring-2 focus:ring-green-500"
                />

                {errors.state && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.state}
                  </p>
                )}

              </div>

              {/* District */}

              <div>

                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  🏙️ District
                </label>

                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  placeholder="जैसे Purnia"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-800 outline-none focus:ring-2 focus:ring-green-500"
                />

                {errors.district && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.district}
                  </p>
                )}

              </div>

              {/* Local Address */}

              <div>

                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  🏠 Local Address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  placeholder="गाँव / मोहल्ला / पंचायत / थाना आदि"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-800 outline-none focus:ring-2 focus:ring-green-500 resize-none"
                />

                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.address}
                  </p>
                )}

              </div>

              {/* Pincode */}

              <div>

                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  📮 Pincode
                </label>

                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  maxLength={6}
                  inputMode="numeric"
                  placeholder="6 अंकों का Pincode"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-800 outline-none focus:ring-2 focus:ring-green-500"
                />

                {errors.pincode && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.pincode}
                  </p>
                )}

              </div>

              {/* Submit */}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition shadow-lg"
              >
                💬 WhatsApp पर Order भेजें
              </button>

              <p className="text-center text-xs text-slate-500">
                Button दबाने पर WhatsApp खुलेगा और आपकी order details automatically भर जाएंगी।
              </p>

            </form>

          </div>

        </div>
      )}

    </section>
  );
}