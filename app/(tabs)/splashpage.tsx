import React, { useState } from "react";
import { StyleSheet, Text, TextComponent, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function app() {
  const [x, setX] = useState<number>(1);
  const handlePress = () => setX(2);
  return (
    <SafeAreaView style={styles.stepContainer}>
      <Text numberOfLines={x} onPress={handlePress}>
        Hello React. We're pushing the limits of this display and are in neeed
        of a new line!
      </Text>
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
