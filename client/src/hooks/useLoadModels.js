import { useEffect } from "react";
import * as faceapi from "face-api.js";

const useLoadModels = () => {
  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");
    };
    loadModels();
  }, []);
}

export default useLoadModels
