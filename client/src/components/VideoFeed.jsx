const VideoFeed = ({ videoRef }) => (
  <video
    ref={videoRef}
    autoPlay
    muted
    playsInline
    width="640"
    height="480"
    style={{ border: "2px solid #ccc", borderRadius: "8px" }}
  />
);

export default VideoFeed;
