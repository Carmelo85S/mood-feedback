import { useRef, useEffect } from "react";
import * as faceapi from "face-api.js";
import { useMoodDetection } from "./hooks/useMoodDetection";
import VideoFeed from "./components/VideoFeed.jsx";
import MoodDisplay from "./components/MoodDisplay.jsx";
import ExpressionsList from "./components/ExpressionList.jsx";

const App = () => {
  const videoRef = useRef();

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");
    };
    loadModels();

    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => (videoRef.current.srcObject = stream))
      .catch(console.error);
  }, []);

  const { mood, savedMood, expressions } = useMoodDetection(videoRef);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <VideoFeed videoRef={videoRef} />
      <MoodDisplay mood={mood} savedMood={savedMood} />
      <ExpressionsList expressions={expressions} />
    </div>
  );
};

export default App;
