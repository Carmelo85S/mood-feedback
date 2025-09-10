const VideoFeed = ({ videoRef }) => (
  <video
    ref={videoRef}
    autoPlay
    muted
    playsInline
    className="w-80 h-60 border-2 border-gray-300 rounded-lg"
  />
);

export default VideoFeed;
