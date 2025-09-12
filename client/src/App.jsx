import { useRef } from "react";
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

  const { mood, expressions } = useMoodDetection(videoRef);

  return (
    <div className="min-h-screen bg-stone-950 text-white flex flex-col items-center p-6">
      <Header />

      <section className="w-full max-w-6xl bg-stone-900 rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden mt-6">
        {/* Video Feed */}
        <div className="flex-1 p-4 flex justify-center items-center bg-stone-800 border-r border-stone-700 md:rounded-l-2xl">
          <VideoFeed videoRef={videoRef} />
        </div>

        {/* Mood & Expressions */}
        <aside className="flex-1 p-6 flex flex-col justify-center gap-6 bg-stone-800 md:rounded-r-2xl">
          <MoodDisplay mood={mood} />
          <ExpressionsList expressions={expressions} />
        </aside>
      </section>
    </div>
  );
};

export default App;
