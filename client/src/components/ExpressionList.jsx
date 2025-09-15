const expressionStyles = {
  Neutral: { color: "bg-cyan-400", emoji: "😐" },
  Happy: { color: "bg-yellow-400", emoji: "😊" },
  Sad: { color: "bg-blue-400", emoji: "😢" },
  Angry: { color: "bg-red-500", emoji: "😠" },
  Surprised: { color: "bg-purple-400", emoji: "😲" },
  Fearful: { color: "bg-indigo-500", emoji: "😨" },
  Disgusted: { color: "bg-green-500", emoji: "🤢" },
};

const ExpressionsList = ({ expressions }) => (
  <div className="mt-2 md:mt-4 space-y-2 sm:space-y-3 bg-black/40 p-2 sm:p-4 rounded-2xl shadow-neon w-full max-w-xs sm:max-w-full">
    {expressions && Object.keys(expressions).length > 0 &&
      Object.entries(expressions).map(([exp, value]) => {
        const percentage = (value * 100).toFixed(1);
        const { color, emoji } = expressionStyles[exp.charAt(0).toUpperCase() + exp.slice(1)] || { color: "bg-gray-500", emoji: "" };

        return (
          <div key={exp} className="flex items-center gap-1 sm:gap-2">
            <span className="text-xs sm:text-sm text-pink-300 w-16 sm:w-24">{emoji} {exp.charAt(0).toUpperCase() + exp.slice(1)}</span>
            <div className="flex-1 h-3 sm:h-4 bg-white/20 rounded-full overflow-hidden border border-white/20 shadow">
              <div
                className={`${color} h-3 sm:h-4 rounded-full transition-all duration-500`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <span className="text-xs sm:text-sm text-pink-300 w-8 sm:w-12 text-right">{percentage}%</span>
          </div>
        );
      })}
  </div>
);

export default ExpressionsList;
