import { useRef, useEffect } from "react";
import * as faceapi from "face-api.js";
import { useMoodDetection } from "./hooks/useMoodDetection";
import Header from "./components/Header.jsx";
import VideoFeed from "./components/VideoFeed.jsx";
import MoodDisplay from "./components/MoodDisplay.jsx";
import ExpressionsList from "./components/ExpressionList.jsx";
import './index.css';

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

  const { mood, expressions } = useMoodDetection(videoRef);

  return (
  <div className="min-h-screen bg-stone-950 text-white flex flex-col items-center p-6">
    <Header />

    <section className="w-full max-w-6xl bg-gray-800 rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden mt-6">
      
      {/* Video Feed */}
      <div className="flex-1 p-4 flex justify-center items-center bg-stone-900">
        <VideoFeed videoRef={videoRef} />
      </div>

      {/* Mood & Expressions */}
      <aside className="flex-1 p-6 flex flex-col justify-center gap-6 bg-gray-800">
        <MoodDisplay mood={mood} />
        <ExpressionsList expressions={expressions} />
      </aside>

    </section>
  </div>
);

};

export default App;
