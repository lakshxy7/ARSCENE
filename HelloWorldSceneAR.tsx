import React, { useState } from "react";
import { ViroARScene, ViroText, ViroTrackingStateConstants } from "@reactvision/react-viro";

const HelloWorldSceneAR = (props) => {
  const [sceneText, setSceneText] = useState("Initializing AR...");

  const arText = props.arText;

  function onInitialized(state, reason) {
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL && !arText) {
      setSceneText("AR Ready 🎯");
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      {(arText || sceneText) && (
        <ViroText
          text={arText || sceneText}
          position={[0, 0, -1]}
          style={{ fontSize: 30, color: "#ff0000" }}
        />
      )}
    </ViroARScene>
  );
};

export default HelloWorldSceneAR;
