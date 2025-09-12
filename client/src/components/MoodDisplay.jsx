import React, { useState, useEffect, useRef } from "react";

const MoodDisplay = ({ mood }) => {
  const [savedMood, setSavedMood] = useState("");
  const [counter, setCounter] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (mood !== savedMood) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setSavedMood(mood);
        setCounter(prev => prev + 1);
        timerRef.current = null;
      }, 2000);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [mood, savedMood]);

  return (
    <div className="bg-stone-800 p-6 text-center flex flex-col items-center gap-2">
      <h2 className="text-xl md:text-2xl font-bold text-white">Current Mood</h2>

      <div className="text-3xl md:text-4xl font-extrabold text-green-400 transition-all duration-300">
        {savedMood || "…"}
      </div>

      <div className="text-sm text-gray-400 mt-1">
        Confirmed {counter} {counter === 1 ? "time" : "times"}
      </div>
    </div>
  );
};

export default MoodDisplay;
