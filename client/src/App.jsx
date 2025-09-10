import React, { useEffect, useRef } from 'react'

const App = () => {
  const videoRef = useRef()

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

  return (
    <div>
      <h1>Hello World</h1>
      <video ref={videoRef} autoPlay muted playsInline width="640" height="480" />
    </div>
  )
}

export default App
