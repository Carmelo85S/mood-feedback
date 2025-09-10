import { useState, useEffect, useRef } from 'react'
import * as faceapi from "face-api.js";

const App = () => {
  const videoRef = useRef();
  const [mood, setMood] = useState("Neutral");
  const [expressions, setExpressions] = useState({});

  useEffect(() => {
    // Start webcam
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
      })
      .catch(console.error);

    // Load face-api.js models
    const loadModels = async () => {
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
        await faceapi.nets.faceExpressionNet.loadFromUri("/models");
        console.log("Models loaded");
      } catch (err) {
        console.error("Error loading models:", err);
      }
    };

    loadModels();
  }, []);

    // Detect mood
  useEffect(() => {
    const options = new faceapi.TinyFaceDetectorOptions({
      inputSize: 416,      
      scoreThreshold: 0.5   
    });

    const detectMood = async () => {
      if (videoRef.current && !videoRef.current.paused) {
        const detections = await faceapi
          .detectSingleFace(videoRef.current, options)
          .withFaceExpressions();

        if (detections) {
          // Log expressions
          console.log("Expressions:", detections.expressions);

          // Update state with all expressions
          setExpressions(detections.expressions);

          // Pick top expression
          const topExpression = Object.entries(detections.expressions)
            .sort((a, b) => b[1] - a[1])[0][0];
          setMood(topExpression.charAt(0).toUpperCase() + topExpression.slice(1));
        } else {
          console.log("No face detected");
        }
      }
      requestAnimationFrame(detectMood);
    };

    detectMood();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        width="640"
        height="480"
        style={{ border: "2px solid #ccc", borderRadius: "8px" }}
      />
      <h2>Detected Mood: {mood}</h2>

      {/* Show live expression probabilities */}
      {expressions && Object.keys(expressions).length > 0 && (
        <div style={{ marginTop: "10px" }}>
          {Object.entries(expressions).map(([exp, value]) => (
            <p key={exp} style={{ margin: "2px 0" }}>
              {exp.charAt(0).toUpperCase() + exp.slice(1)}: {(value * 100).toFixed(1)}%
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App
