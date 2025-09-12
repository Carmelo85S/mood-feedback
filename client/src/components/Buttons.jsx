import { PlayCircle, PauseOctagon } from "lucide-react";
import React from "react";

const VideoButtons = ({ videoRef }) => {
  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Camera access denied:", err);
      alert("Camera access denied. Please allow it in your browser settings.");
    }
  };

  const stopVideo = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={startVideo}
        aria-label="Start video"
        className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 transition"
      >
        <PlayCircle size={28} className="text-white" />
      </button>

      <button
        onClick={stopVideo}
        aria-label="Stop video"
        className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 transition"
      >
        <PauseOctagon size={28} className="text-white" />
      </button>
    </div>
  );
};

export default VideoButtons;
