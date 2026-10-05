import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { colors } from "../theme/colors";

export default function PrimaryButton({
  title,
  onPress,
  disabled = false,
  variant = "primary"
}) {
  const isOutline = variant === "outline";

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isOutline ? styles.outline : styles.primary,
        disabled && styles.disabled,
        pressed && !disabled && { opacity: 0.86 }
      ]}
    >
      <Text
        style={[
          styles.text,
          isOutline ? styles.outlineText : styles.primaryText
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 50,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18
  },
  primary: {
    backgroundColor: colors.primary
  },
  outline: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.primary
  },
  disabled: {
    opacity: 0.45
  },
  text: {
    fontSize: 16,
    fontWeight: "900"
  },
  primaryText: {
    color: colors.white
  },
  outlineText: {
    color: colors.primary
  }
});
