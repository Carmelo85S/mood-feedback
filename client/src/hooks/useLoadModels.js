import { useEffect } from "react";
import * as faceapi from "face-api.js";

const useLoadModels = () => {
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = import.meta.env.BASE_URL + "models";

      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
        console.log("Face-api models loaded successfully");
      } catch (err) {
        console.error("Error loading face-api models:", err);
      }
    };

    loadModels();
  }, []);
};

export default useLoadModels;
