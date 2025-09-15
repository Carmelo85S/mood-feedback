import React, { useEffect, useRef } from "react";
import VideoButtons from "./Buttons.jsx";
import * as faceapi from "face-api.js";

const VideoFeed = ({ videoRef }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const handleLoaded = () => {
      if (canvasRef.current) return; // evita di ricrearlo

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
    <section className="relative p-4 flex flex-col bg-black/50 border border-purple-500 rounded-2xl shadow-glow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-pink-300">Video Feed</h2>
        <VideoButtons videoRef={videoRef} />
      </div>

      <video
        id="videoFeed"
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-80 md:w-96 h-60 md:h-72 border-4 border-pink-500 rounded-xl object-cover shadow-neon"
      />
    </section>
  );
};

export default VideoFeed;
