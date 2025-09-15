import React from "react";

const moodEmoji = {
  happy: "😄",
  sad: "😢",
  angry: "😠",
  surprised: "😲",
  neutral: "😐",
  fearful: "😨",
  disgusted: "🤢",
};

const MoodDisplay = ({ mood }) => {
  const emoji = moodEmoji[mood] || "…";
  return (
    <div className="bg-black/40 p-2 sm:p-5 rounded-2xl shadow-neon text-center flex flex-col items-center gap-1 sm:gap-2 border border-pink-500 animate-pulse w-full max-w-xs sm:max-w-full">
      <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-pink-400 glow">Current Mood</h2>
      <div className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-green-400 animate-bounce">{emoji} {mood || "…"}</div>
    </div>
  );
};

export default MoodDisplay;
