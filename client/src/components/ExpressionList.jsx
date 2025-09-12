const expressionStyles = {
  Neutral: { color: "bg-green-300", emoji: "😐" },
  Happy: { color: "bg-yellow-400", emoji: "😊" },
  Sad: { color: "bg-blue-500", emoji: "😢" },
  Angry: { color: "bg-red-500", emoji: "😠" },
  Surprised: { color: "bg-purple-400", emoji: "😲" },
  Fearful: { color: "bg-indigo-500", emoji: "😨" },
  Disgusted: { color: "bg-green-600", emoji: "🤢" },
};

const ExpressionsList = ({ expressions }) => (
  <div className="mt-2 md:mt-4 space-y-2">
    {expressions && Object.keys(expressions).length > 0 &&
      Object.entries(expressions).map(([exp, value]) => {
        const percentage = (value * 100).toFixed(1);
        const { color, emoji } = expressionStyles[exp.charAt(0).toUpperCase() + exp.slice(1)] || { color: "bg-gray-500", emoji: "" };

        return (
          <div key={exp} className="flex items-center gap-2">
            <span className="text-sm text-gray-200 w-24">{emoji} {exp.charAt(0).toUpperCase() + exp.slice(1)}</span>
            <div className="flex-1 h-4 bg-gray-600 rounded-full overflow-hidden">
              <div
                className={`${color} h-4 rounded-full transition-all duration-500`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-200 w-12 text-right">{percentage}%</span>
          </div>
        );
      })}
  </div>
);

export default ExpressionsList;
