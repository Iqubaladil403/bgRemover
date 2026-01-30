const Common = ({ title, subtitle, children, bg }) => {
  return (
    <section
      className={`min-h-screen w-full flex flex-col items-center justify-center px-6 py-16 ${
        bg ? bg : "bg-base-200"
      }`}
    >
      <div className="max-w-5xl w-full text-center">
        {/* Title Section */}
        {title && (
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 drop-shadow-sm">
            {title}
          </h1>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="text-gray-500 text-lg mb-10">
            {subtitle}
          </p>
        )}

        {/* Dynamic Content */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-8">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Common;
