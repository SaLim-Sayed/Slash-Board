import { useEffect, useState } from "react";

export default function Hero() {
  const [videoHeight, setVideoHeight] = useState("100vh");
 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVideoHeight("60vh"); // Small screens
      } else if (window.innerWidth < 1024) {
        setVideoHeight("75vh"); // Medium screens
      } else {
        setVideoHeight("100vh"); // Large screens
      }
    };

    handleResize(); // Initialize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="pt-6" style={{ position: "relative", width: "100%", height: videoHeight }}>
      
      <video
        src="https://res.cloudinary.com/depx9sqyy/video/upload/v1738533786/VID-20250126-WA0000_gctkcx.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source
          src="https://res.cloudinary.com/depx9sqyy/video/upload/v1738533786/VID-20250126-WA0000_gctkcx.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
