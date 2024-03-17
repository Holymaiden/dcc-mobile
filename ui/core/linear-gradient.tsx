import React from 'react';
import type { LinearGradientProps as RNLinearGradientProps } from 'tamagui/linear-gradient';
import { LinearGradient as RNLinearGradient } from 'tamagui/linear-gradient';

export const LinearGradient = ({
  children,
  ...props
}: RNLinearGradientProps) => {
  return (
    <RNLinearGradient
      flex={1}
      justifyContent="center"
      colors={['$primary', '$blue']}
      start={[0, 1]}
      end={[0, 0]}
      {...props}
    >
      {children}
    </RNLinearGradient>
  );
};
export type LinearGradientProps = RNLinearGradientProps;
