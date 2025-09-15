import { useState, useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

export const useMoodDetection = (videoRef, saveDelay = 2000) => {
  const [mood, setMood] = useState("Neutral");
  const [expressions, setExpressions] = useState({});

  useEffect(() => {
    const options = new faceapi.TinyFaceDetectorOptions({ inputSize: 416, scoreThreshold: 0.9 });

    const detectMood = async () => {
      if (videoRef.current && !videoRef.current.paused) {
        const detections = await faceapi
          .detectSingleFace(videoRef.current, options)
          .withFaceExpressions();

        if (detections) {
          const expr = detections.expressions;
          setExpressions(expr);

          const topExpression = Object.entries(expr).sort((a, b) => b[1] - a[1])[0][0];
          const capitalizedMood = topExpression.charAt(0).toUpperCase() + topExpression.slice(1);
          setMood(capitalizedMood);
        }
      }
      requestAnimationFrame(detectMood);
    };

    detectMood();
  }, [videoRef, saveDelay]);

  return { mood, expressions };
};
