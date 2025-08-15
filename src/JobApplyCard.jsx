// ImportantLinksCard.jsx

export default function JobApplyCard() {
  return (
    <div className="max-w-5xl mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-md mt-6">
      {/* WhatsApp & Telegram */}
      <div className="grid grid-cols-2 border-b border-gray-300">
        <div className="text-center text-pink-700 font-semibold p-3">
          Join Our <br /> WhatsApp Channel
        </div>
        <a
          href="https://chat.whatsapp.com/HrNyqv9UMof8SpfP9YNKs7?mode=ac_t"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-blue-700 font-semibold p-3 hover:underline"
        >
          Follow Now
        </a>
      </div>

      {/* Section Title */}
      <div className="bg-white text-center border-b border-gray-300">
        <p className="text-red-600 font-bold p-2">
          मुख्यमंत्री प्रोत्साहन योजना, 2025
        </p>
      </div>

      {/* Links Table */}
      {[
        {
          label:
            " मुख्यमंत्री बालक / बालिका (10th Passed) प्रोत्साहन योजना, 2025",
          url: "http://medhasoft.bihar.gov.in/Matric_2425/(S(4wdnocw10ifkx2ysmj4pe323))/Default.aspx",
        },
        {
          label:
            "मुख्यमंत्री कन्या उत्थान योजना मुख्यमंत्री बालिका (माध्यमिक+2) प्रोत्साहन योजना, 2025",
          url: "http://medhasoft.bihar.gov.in/inter_2425/(S(k2eyoywap5mqkw54wxzcw4wu))/Default.aspx",
        },
        {
          label:
            "मुख्यमंत्री मेधावृति योजना अनु0 जाति एवं अनु0 जनजाति के प्रथम एवं द्वितीय श्रेणी से Intermediate [+2] उतीर्ण छात्राओं के लिये आवेदन करें 2025",
          url: "http://medhasoft.bihar.gov.in/interscst_2425/(S(bhksz5juvdxzyrtn2buh4rpr))/Default.aspx",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="grid grid-cols-2 border-b border-gray-300 bg-yellow-200 last:border-b-0"
        >
          <div className="text-center font-semibold p-3">{item.label}</div>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-blue-700 font-semibold p-3 hover:underline"
          >
            Click Here
          </a>
        </div>
      ))}
    </div>
  );
}
