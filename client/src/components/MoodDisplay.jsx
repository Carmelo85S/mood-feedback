import React, { useState, useEffect, useRef } from "react";

const MoodDisplay = ({ mood }) => {
  const [savedMood, setSavedMood] = useState("");
  const [counter, setCounter] = useState(0);

  // timerRef serve per poter cancellare il timeout se il mood cambia prima dei 2s
  const timerRef = useRef(null);

  useEffect(() => {
    // Se il mood è diverso da quello già confermato
    if (mood !== savedMood) {
      // Cancella eventuale timer precedente
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      // Avvia un nuovo timer di 2 secondi
      timerRef.current = setTimeout(() => {
        setSavedMood(mood);
        setCounter(prev => prev + 1);
        timerRef.current = null;
      }, 2000);
    }

    // Pulizia quando il componente si smonta
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [mood, savedMood]);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-2">Current Mood</h2>
      <div className="text-4xl font-extrabold text-green-400">{mood}</div>
      <div className="text-sm text-gray-400 mt-1">
        Confirmed {counter} {counter === 1 ? "time" : "times"}
      </div>
    </div>
  );
};

export default MoodDisplay;
