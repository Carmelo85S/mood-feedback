const moodQuotes = {
  happy: { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  sad: { text: "Even the darkest night will end and the sun will rise.", author: "Victor Hugo" },
  angry: { text: "Anger is a short madness.", author: "Horace" },
  surprised: { text: "Life is full of surprises. Be ready to be amazed.", author: "Anonymous" },
  neutral: { text: "Calmness is the virtue of the strong.", author: "Anonymous" },
  fearful: { text: "Courage is not the absence of fear, but the triumph over it.", author: "Nelson Mandela" },
  disgusted: { text: "Even what we dislike can teach us something.", author: "Anonymous" },
};

const MoodQuote = ({ mood }) => {
  if (!mood || !moodQuotes[mood]) return null;
  const { text, author } = moodQuotes[mood];
  return (
    <div className="mt-2 sm:mt-4 p-2 sm:p-4 bg-black/50 border border-purple-500 rounded-lg shadow-neon max-w-xs sm:max-w-md text-center mx-auto">
      <p className="text-pink-300 italic text-sm sm:text-base">"{text}"</p>
      <p className="text-pink-400 text-xs sm:text-sm mt-2">- {author}</p>
    </div>
  );
};

export default MoodQuote;