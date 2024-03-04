import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "tamagui";

export const Text: React.FC<TextProps> = ({ children, ...props }) => (
  <RNText style={{ fontFamily: "Manrope" }} {...props}>
    {children}
  </RNText>
);

export type TextProps = RNTextProps;
