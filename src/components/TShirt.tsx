import React, { useRef, useState } from "react";
import tShirtMockupImg from "../assets/mockups/t-shirt-mockup-1.png";
import html2canvas from "html2canvas";

const TShirt = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          T-Shirt Customizer
        </h1>
        <TShirtMockup />
      </div>
    </section>
  );
};

const TShirtMockup: React.FC = () => {
  const [color, setColor] = useState("#ff5733"); // Default T-shirt color
  const [design, setDesign] = useState<string | null>(null);
  const [text, setText] = useState("");

  const [downloading, setDownloading] = useState(false);
  const mockupRef = useRef<HTMLDivElement>(null);

  // Handle design upload
  const handleDesignUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => setDesign(event.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Handle download mockup
  const handleDownload = async () => {
    if (!mockupRef.current) {
      console.error("Mockup reference not found.");
      return;
    }

    console.log("Downloading...");

    try {
      setDownloading(true);

      const canvas = await html2canvas(mockupRef.current, {
        backgroundColor: null,
        scale: 2, // Higher quality
        logging: false,
      });

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `tshirt-mockup-${new Date().getTime()}.png`;
      link.click();
    } catch (error) {
      console.error("Error generating mockup:", error);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      {/* T-shirt Mockup */}
      <div ref={mockupRef} className="relative w-80 h-[400px]">
        {/* SVG Filter for Text Distortion */}
        <svg width="0" height="0">
          <filter id="textDistortion">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="3"
            />
            <feDisplacementMap in="SourceGraphic" scale="5" />
          </filter>
        </svg>

        {/* T-shirt Base Image */}
        <img
          src={tShirtMockupImg} // Replace with the actual mockup file path
          alt="T-shirt"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* Fabric Texture Overlay */}
        <div className="fabric-texture"></div>

        {/* Color Overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: color,
            mixBlendMode: "multiply",
            opacity: 0.85,
          }}
        />

        {/* Design Overlay */}
        {design && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-[50%] h-[40%] flex items-center justify-center">
            <img
              src={design}
              alt="T-shirt Design"
              className="max-w-full max-h-full object-contain embossed-design mix-blend-overlay opacity-90"
            />
          </div>
        )}

        {/* Text Overlay */}
        {text && (
          <div
            className="absolute top-[45%] left-1/2 transform -translate-x-1/2 text-black text-xl font-bold text-center px-2 w-[70%]"
            style={{
              mixBlendMode: "multiply",
              opacity: 0.85,
              filter: "blur(0.5px) contrast(1.2)", // Subtle blending effect
            }}
          >
            {text}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="mt-4 flex flex-col gap-2">
        <label className="flex items-center gap-2">
          Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="border p-1"
          />
        </label>

        <label className="flex items-center gap-2">
          Upload Design:
          <input type="file" accept="image/*" onChange={handleDesignUpload} />
        </label>

        <label className="flex items-center gap-2">
          Text:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border p-1"
          />
        </label>

        <button
          type="button" // Use button type to prevent form submittal
          onClick={handleDownload}
          disabled={downloading}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors disabled:bg-blue-400"
        >
          {downloading ? "Generating..." : "Download Mockup"}
        </button>
      </div>
    </div>
  );
};

export default TShirt;
