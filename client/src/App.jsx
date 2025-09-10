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
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <video ref={videoRef} autoPlay muted playsInline width="640" height="480" />
    </div>
  )
}

export default App
