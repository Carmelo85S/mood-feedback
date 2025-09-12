import { useRef, useEffect } from "react";
import * as faceapi from "face-api.js";
import { useMoodDetection } from "./hooks/useMoodDetection";
import Header from "./components/Header.jsx";
import VideoFeed from "./components/VideoFeed.jsx";
import MoodDisplay from "./components/MoodDisplay.jsx";
import ExpressionsList from "./components/ExpressionList.jsx";
import "./index.css";
import useLoadModels from "./hooks/useLoadModels.js";

const App = () => {
  const videoRef = useRef();

  // Load face-api models once
  useLoadModels();

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
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

  const { mood, expressions } = useMoodDetection(videoRef);

  return (
    <div className="min-h-screen bg-stone-950 text-white flex flex-col items-center p-6">
      <Header />

      <div className="flex gap-4 mt-4">
        <button
          onClick={startVideo}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Start Video
        </button>
        <button
          onClick={stopVideo}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Stop Video
        </button>
      </div>

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
