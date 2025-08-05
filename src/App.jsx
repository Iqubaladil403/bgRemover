import { useState } from "react";
import ImageCard from "./ImageCard";
import ScrollingText from "./ScrollingText";
import Services from "./Services";
function App() {
  const [files, setFiles] = useState([]);

  const handleFilesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-x-hidden">
      {/* 🔹 Top Scrolling Text */}
      <ScrollingText />

      <div className=" text-center">
        <h1
          className="text-4xl md:text-5xl font-extrabold 
  text-transparent bg-clip-text 
  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-100
  drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]
  tracking-wide text-center mt-6 mb-8"
        >
          ✨ ASIF INTERNET CAFE SIRSI HAT ✨
          <div className="mt-6">
            <h1 className=" py-3 rounded-lg font-semibold text-white shadow-lg bg-gradient-to-r from-pink-500 to-yellow-400 hover:scale-105 transform transition duration-300">
              Smart Background Remover
            </h1>
          </div>
        </h1>
      </div>

      <label className="bg-white/20 backdrop-blur-md text-white font-semibold px-6 py-3 rounded-lg shadow-lg cursor-pointer hover:bg-white/30 transition mb-8">
        Upload Images
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFilesChange}
          className="hidden"
        />
      </label>

      <div className="flex flex-col gap-8 w-full max-w-4xl mb-8">
        {files.map((file, idx) => (
          <ImageCard key={idx} file={file} index={idx} />
        ))}
      </div>
      <Services></Services>
    </div>
  );
}

export default App;

// import Services from "./Services";

// function App() {
//   return (
//     <div>
//       <Services></Services>
//     </div>
//   )
// }

// export default App

// import { useState } from "react";

// function App() {
//   const [files, setFiles] = useState([]);
//   const [bgColor, setBgColor] = useState("#ffffff");

//   const handleFilesChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     const fileData = selectedFiles.map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//       status: "pending",
//       output: null,
//     }));
//     setFiles(fileData);
//   };

//   const handleProcess = async () => {
//     const updatedFiles = files.map((f) => ({ ...f, status: "processing" }));
//     setFiles(updatedFiles);

//     for (let i = 0; i < updatedFiles.length; i++) {
//       const formData = new FormData();
//       formData.append("image_file", updatedFiles[i].file);
//       formData.append("size", "auto");

//       try {
//         const response = await fetch("https://api.remove.bg/v1.0/removebg", {
//           method: "POST",
//           headers: {
//             "X-Api-Key": "mdQ5SotQBRWVUhQ1h4i3aXax",
//           },
//           body: formData,
//         });

//         if (!response.ok) {
//           throw new Error(await response.text());
//         }

//         const blob = await response.blob();
//         const outputUrl = URL.createObjectURL(blob);

//         updatedFiles[i].status = "done";
//         updatedFiles[i].output = outputUrl;
//       } catch (error) {
//         updatedFiles[i].status = "error";
//       }

//       setFiles([...updatedFiles]);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-6 text-center">
//         Remove BG & Apply Custom Color
//       </h1>

//       {/* Upload + Process */}
//       <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
//         <input
//           type="file"
//           accept="image/*"
//           multiple
//           onChange={handleFilesChange}
//           className="mb-2 sm:mb-0"
//         />

//         <input
//           type="color"
//           value={bgColor}
//           onChange={(e) => setBgColor(e.target.value)}
//           className="w-12 h-10 border rounded cursor-pointer"
//         />

//         <button
//           onClick={handleProcess}
//           disabled={files.length === 0}
//           className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
//         >
//           Process Images
//         </button>
//       </div>

//       {/* Vertical List of Cards */}
//       <div className="w-full max-w-2xl flex flex-col gap-6">
//         {files.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-between"
//           >
//             <img
//               src={item.preview}
//               alt="Original"
//               className="w-28 h-28 object-cover rounded border mb-3 sm:mb-0"
//             />

//             {item.status === "pending" && (
//               <p className="text-gray-500">Waiting...</p>
//             )}

//             {item.status === "processing" && (
//               <div className="flex flex-col items-center">
//                 <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
//                 <p className="mt-2 text-blue-600">Processing...</p>
//               </div>
//             )}

//             {item.status === "done" && (
//               <div
//                 className="relative w-40 h-40 flex items-center justify-center rounded border"
//                 style={{ backgroundColor: bgColor }}
//               >
//                 <img
//                   src={item.output}
//                   alt="Processed"
//                   className="w-40 h-40 object-contain"
//                 />
//                 <a
//                   href={item.output}
//                   download={`processed-${idx + 1}.png`}
//                   className="absolute bottom-2 right-2 px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
//                 >
//                   Download
//                 </a>
//               </div>
//             )}

//             {item.status === "error" && (
//               <p className="text-red-500">Failed to process</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
