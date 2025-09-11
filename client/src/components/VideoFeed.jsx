const VideoFeed = ({ videoRef }) => (
  <div className="p-4 flex flex-col bg-stone-900">
    
      <h2 className="text-lg mb-4 font-semibold text-white">
        Video feed
      </h2>

    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      className="w-80 md:w-96 h-60 md:h-72 border-2 border-gray-300 rounded-lg object-cover"
    />
  </div>
);

export default VideoFeed;
