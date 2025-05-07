import React, { useState } from "react";
import { View, Image, Button, Text, StyleSheet } from "react-native";
import { ViroARSceneNavigator } from "@reactvision/react-viro";
import HelloWorldSceneAR from "./HelloWorldSceneAR";

export default function App() {
  const [arText, setArText] = useState("");

  const handleButtonClick = () => {
    setArText("Button clicked");
  };

  return (
    <View style={styles.container}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: () => <HelloWorldSceneAR text={arText} />,
        }}
        style={styles.f1}
      />

      <View style={styles.crosshairContainer}>
        <Image source={require("./assets/target.png")} style={styles.crosshair} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Click me" onPress={handleButtonClick} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  f1: { flex: 1 },

  crosshairContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
    zIndex: 1,
  },

  crosshair: {
    width: 40, // Adjust size as needed
    height: 40, // Adjust size as needed
  },

  buttonContainer: {
    position: "absolute",
    bottom: 50, // Position the button below the crosshair
    left: "50%",
    transform: [{ translateX: -75 }],
    zIndex: 1,
  },
});
