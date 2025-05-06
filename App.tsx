import React from "react";
import { View, Text, StyleSheet } from "react-native"; // Add the Text import here
import { ViroARSceneNavigator } from "@reactvision/react-viro";
import HelloWorldSceneAR from "./HelloWorldSceneAR"; // Import the AR scene

export default function App() {
  return (
    <View style={styles.container}>
      {/* AR Scene Navigator */}
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: HelloWorldSceneAR,
        }}
        style={styles.f1}
      />

      {/* Crosshair Overlay */}
      <View style={styles.crosshairContainer}>
        <Text style={styles.crosshair}>*</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  f1: { flex: 1 },

  // Crosshair overlay container
  crosshairContainer: {
    position: "absolute", // Fixed position over the AR scene
    top: "50%", // Center vertically
    left: "50%", // Center horizontally
    transform: [{ translateX: -20 }, { translateY: -20 }], // Adjust to exactly center the crosshair
    zIndex: 1, // Ensure it appears above the AR scene
  },

  // Crosshair style
  crosshair: {
    fontSize: 40, // Adjust the size of the crosshair
    color: "#8B0000", // Dark red color
    fontFamily: "Arial",
    textAlign: "center", // Center the crosshair
  },
});
