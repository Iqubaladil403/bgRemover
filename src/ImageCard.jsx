import { useRef, useState } from "react";

function ImageCard({ file, index }) {
  const [status, setStatus] = useState("pending");
  const [output, setOutput] = useState(null);
  const [bgColor, setBgColor] = useState("#ffffff");
  const imgRef = useRef(null);

  const handleProcess = async () => {
    setStatus("processing");

    const formData = new FormData();
    formData.append("image_file", file);
    formData.append("size", "auto");

    try {
      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": "mdQ5SotQBRWVUhQ1h4i3aXax",
        },
        body: formData,
      });

      if (!response.ok) throw new Error(await response.text());

      const blob = await response.blob();
      const outputUrl = URL.createObjectURL(blob);

      setOutput(outputUrl);
      setStatus("done");
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  const handleDownload = async () => {
    if (!output) return;

    const img = imgRef.current;
    if (!img.complete) {
      await new Promise((resolve) => (img.onload = resolve));
    }

    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");

    // Fill background color
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the processed image on top
    ctx.drawImage(img, 0, 0);

    // Convert canvas to image and download
    const link = document.createElement("a");
    link.download = `processed-${index + 1}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-2xl p-6 flex flex-col gap-4 w-full">
      {/* Side by Side Layout */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Original Image */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-white font-semibold">Original</h3>
          <img
            src={URL.createObjectURL(file)}
            alt="Original"
            className="w-40 h-40 object-cover rounded-xl border-2 border-white/40 shadow-md"
          />
        </div>

        {/* Processed Image */}
        <div className="flex flex-col items-center gap-3">
          {status === "pending" && (
            <button
              onClick={handleProcess}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition"
            >
              Remove BG
            </button>
          )}

          {status === "processing" && (
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-2 text-white font-medium">Processing...</p>
            </div>
          )}

          {status === "done" && (
            <>
              <h3 className="text-white font-semibold">Processed</h3>
              <div
                className="w-40 h-40 flex items-center justify-center rounded-xl border-2 border-white/40 shadow-md"
                style={{ backgroundColor: bgColor }}
              >
                <img
                  ref={imgRef}
                  src={output}
                  alt="Processed"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Color Picker */}
              <div className="flex items-center gap-3">
                <label className="text-white font-semibold">BG Color:</label>
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-12 h-10 border rounded cursor-pointer"
                />
              </div>

              {/* Download with BG */}
              <button
                onClick={handleDownload}
                className="px-5 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition"
              >
                Download
              </button>
            </>
          )}

          {status === "error" && (
            <p className="text-red-200 font-semibold">Failed to process</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
