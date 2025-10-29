import Common from "./Common";
import Footer from "./Footer";

const Pricing = () => {
  return (
    <>
      <Common
        title="Pricing Plans"
        subtitle="Affordable Internet and Printing Packages"
        bg="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-800 text-white"
      >
        <div className="flex flex-wrap justify-center gap-8 py-8">
          {/* Basic Plan */}
          <div className="bg-gradient-to-b from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 shadow-2xl rounded-2xl p-8 w-72 text-center transition-all duration-300 transform hover:scale-105 border border-white/20">
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">Basic</h3>
            <p className="text-blue-100 mb-4">₹200/hr Internet Access</p>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-5 py-2 rounded-full shadow-lg transition-all">
              Choose Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-b from-cyan-700 to-blue-500 hover:from-cyan-600 hover:to-blue-400 shadow-2xl rounded-2xl p-8 w-72 text-center transition-all duration-300 transform hover:scale-105 border border-white/20">
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">Premium</h3>
            <p className="text-blue-100 mb-4">₹500/hr + Free Printouts</p>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-5 py-2 rounded-full shadow-lg transition-all">
              Choose Plan
            </button>
          </div>

          {/* Deluxe Plan */}
          <div className="bg-gradient-to-b from-teal-700 to-cyan-500 hover:from-teal-600 hover:to-cyan-400 shadow-2xl rounded-2xl p-8 w-72 text-center transition-all duration-300 transform hover:scale-105 border border-white/20">
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">Deluxe</h3>
            <p className="text-blue-100 mb-4">₹800/hr + Unlimited Printouts</p>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-5 py-2 rounded-full shadow-lg transition-all">
              Choose Plan
            </button>
          </div>
        </div>
      </Common>

      <Footer />
    </>
  );
};

export default Pricing;
