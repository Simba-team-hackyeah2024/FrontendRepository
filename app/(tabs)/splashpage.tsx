import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextBase,
  TextComponent,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function app() {
  const [x, setX] = useState<number>(1);
  const handlePress = () => {
    if (x == 2) {
      setX(1);
    } else setX(2);
  };
  const [kolor, setkolor] = useState<string>("orange");
  const handlePressKolor = () => {
    if (kolor == "orange") {
      setkolor("green");
    } else setkolor("orange");
  };
  return (
    <SafeAreaView style={styles.stepContainer}>
      <Text
        style={{ fontSize: 25, fontWeight: "bold" }}
        numberOfLines={x}
        onPress={handlePress}
      >
        Hello React. We're pushing the limits of this display and are in neeed
        of a new line!
      </Text>
      <Button color={kolor} title="Button" onPress={handlePressKolor} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    gap: 8,
  },
  stepContainer: {
    flex: 1,
    gap: 8,
  },
});
