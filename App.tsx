import React, { useState } from "react";
import { View, Image, Button, StyleSheet } from "react-native";
import { ViroARSceneNavigator } from "@reactvision/react-viro";
import HelloWorldSceneAR from "./HelloWorldSceneAR";

export default function App() {
  const [arText, setArText] = useState("AR Ready 🎯");

  const handleButtonClick = () => {
    if (arText === "AR Ready 🎯") {
      setArText("Button clicked");
    } else {
      setArText("");
    }
  };

  return (
    <View style={styles.container}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{ scene: HelloWorldSceneAR }}
        viroAppProps={{ arText }} // 👈 pass props like this
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
    width: 50,
    height: 50,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    left: "50%",
    transform: [{ translateX: -75 }],
    zIndex: 1,
  },
});
