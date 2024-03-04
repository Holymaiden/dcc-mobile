import type { IconProps } from "@tamagui/helpers-icon";
import { ScanFace } from "@tamagui/lucide-icons";

import { View } from "../view";
import { StyleSheet } from "react-native";

export const FloatingButton = ({ ...props }: IconProps) => {
  return (
    <View style={styles.container}>
      <ScanFace {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center",
    zIndex: 2,
    top: -22.5,
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 27,
    backgroundColor: "#006EE9",
  },
});
