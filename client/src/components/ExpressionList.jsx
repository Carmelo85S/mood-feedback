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
  <div className="mt-2 md:mt-4 space-y-3">
    {expressions && Object.keys(expressions).length > 0 &&
      Object.entries(expressions).map(([exp, value]) => {
        const percentage = (value * 100).toFixed(1);
        const { color, emoji } = expressionStyles[exp.charAt(0).toUpperCase() + exp.slice(1)] || { color: "bg-gray-500", emoji: "" };

        return (
          <div key={exp} className="flex items-center gap-2">
            <span className="text-sm text-pink-300 w-24">{emoji} {exp.charAt(0).toUpperCase() + exp.slice(1)}</span>
            <div className="flex-1 h-4 bg-black/50 rounded-full overflow-hidden border border-purple-500 shadow-neon">
              <div
                className={`${color} h-4 rounded-full transition-all duration-500`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <span className="text-sm text-pink-300 w-12 text-right">{percentage}%</span>
          </div>
        );
      })}
  </div>
);

export default ExpressionsList;
