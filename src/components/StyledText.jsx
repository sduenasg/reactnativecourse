import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme.js";

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.textPrimary,
    fontFamily: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.colorPrimary,
  },
  colorSecondary: {
    color: theme.colors.colorSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fonstSize: theme.fontSizes.subheading,
  },
});

export default function StyledText({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheading,
    fontWeight ==="bold" && styles.bold
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
