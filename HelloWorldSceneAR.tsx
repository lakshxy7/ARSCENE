import {
  ViroARScene,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from "@reactvision/react-viro";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

// AR scene component
const HelloWorldSceneAR = () => {
  const [text, setText] = useState("Initializing AR...");

  // Update tracking state
  function onInitialized(state: any, reason: ViroTrackingReason) {
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText("AR Ready 🎯");
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      {/* Here you can add your AR content */}
    </ViroARScene>
  );
};

export default HelloWorldSceneAR;
