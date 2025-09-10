const MoodDisplay = ({ mood, savedMood }) => (
  <div>
    <h2>Detected Mood: {mood}</h2>
    {savedMood && <h3>Saved Mood: {savedMood}</h3>}
  </div>
);

export default MoodDisplay;
