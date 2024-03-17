import React from 'react';
import type { TextProps as RNTextProps } from 'tamagui';
import { Text as RNText } from 'tamagui';

export const Text: React.FC<TextProps> = ({ children, ...props }) => (
  <RNText
    style={{ fontFamily: 'Manrope' }} // eslint-disable-line react-native/no-inline-styles
    {...props}
  >
    {children}
  </RNText>
);

export type TextProps = RNTextProps;
