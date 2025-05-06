import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ViroARSceneNavigator } from "@reactvision/react-viro";
import HelloWorldSceneAR from "./HelloWorldSceneAR"; // Import the AR scene

export default function App() {
  const [message, setMessage] = useState("");

  const handleButtonClick = () => {
    setMessage("Button clicked!");
    console.log("Button clicked!"); // You can log or display the message to confirm the button works
  };

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

      {/* Fixed Button Below Crosshair */}
      <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>

      {/* Message Display */}
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
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

  // Button style
  button: {
    position: "absolute", // Position below the crosshair
    bottom: 100, // Adjust the distance from the bottom of the screen
    backgroundColor: "#4CAF50", // Green color for the button
    padding: 10,
    borderRadius: 5,
    zIndex: 1, // Ensure it appears above the AR scene
  },
  
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },

  // Message display style
  message: {
    position: "absolute",
    bottom: 50,
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
  },
});
