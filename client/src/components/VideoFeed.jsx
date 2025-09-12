import React from "react";
import VideoButtons from "./Buttons.jsx";

const VideoFeed = ({ videoRef }) => (
  <section className="p-4 flex flex-col bg-stone-900 rounded-xl shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-white">Video Feed</h2>
      <VideoButtons videoRef={videoRef} />
    </div>

    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      className="w-80 md:w-96 h-60 md:h-72 border-2 border-gray-700 rounded-lg object-cover"
    />
  </section>
);

export default VideoFeed;
