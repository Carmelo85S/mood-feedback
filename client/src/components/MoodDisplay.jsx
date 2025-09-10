const MoodDisplay = ({ mood }) => {
  const emojiMood = {
    Happy: "😊",
    Sad: "😢",
    Angry: "😠",
    Surprised: "😲",
    Fearful: "😨",
    Disgusted: "🤢",
  };
  return (
    <div className="bg-gray-700 flex items-center justify-center p-4 rounded-lg shadow-md text-center">
      <h2 className="text-lg font-semibold text-white">
        Detected Mood: {mood} {emojiMood[mood] || "😐"}
      </h2>
    </div>
  );
};

export default MoodDisplay;
