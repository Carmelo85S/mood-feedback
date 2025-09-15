import React, { useEffect, useRef } from "react";
import VideoButtons from "./Buttons.jsx";
import * as faceapi from "face-api.js";

const VideoFeed = ({ videoRef }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const handleLoaded = () => {
      if (canvasRef.current) return;
      const canvas = faceapi.createCanvasFromMedia(videoEl);
      canvasRef.current = canvas;
      canvas.classList.add("absolute", "top-0", "left-0");
      videoEl.parentNode.style.position = "relative";
      videoEl.parentNode.appendChild(canvas);
      canvas.width = videoEl.videoWidth;
      canvas.height = videoEl.videoHeight;
    };

    if (videoEl.readyState >= 1) {
      handleLoaded();
    } else {
      videoEl.addEventListener("loadedmetadata", handleLoaded);
    }

    return () => {
      videoEl.removeEventListener("loadedmetadata", handleLoaded);
      if (canvasRef.current) {
        canvasRef.current.remove();
        canvasRef.current = null;
      }
    };
  }, [videoRef]);

  return (
    <section className="relative p-2 sm:p-4 flex flex-col bg-black/50 border border-purple-500 rounded-2xl shadow-glow w-full max-w-xs sm:max-w-full">
      <div className="flex justify-between items-center mb-2 sm:mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-pink-300">Video Feed</h2>
        <VideoButtons videoRef={videoRef} />
      </div>

      <video
        id="videoFeed"
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-44 sm:w-80 sm:h-60 md:w-96 md:h-72 border-2 sm:border-4 border-pink-500 rounded-xl object-cover shadow-neon"
      />
    </section>
  );
};

export default VideoFeed;
