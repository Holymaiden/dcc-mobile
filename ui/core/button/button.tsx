import React from 'react';
import type { ButtonProps as RNButtonProps } from 'tamagui';
import { Button as RNButton } from 'tamagui';

export const Button = ({ children, ...props }: RNButtonProps) => {
  return (
    <RNButton
      backgroundColor="$primary"
      color="$white"
      borderRadius="$5"
      size="$5"
      {...props}
    >
      {children}
    </RNButton>
  );
};

export type ButtonProps = RNButtonProps;
