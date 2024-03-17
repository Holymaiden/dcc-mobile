import React from 'react';
import type { InputProps } from 'tamagui';
import { Input } from 'tamagui';

export const TextInput = ({ ...props }: InputProps) => {
  return (
    <Input
      borderWidth="$0"
      borderBottomWidth="$0.25"
      borderColor="$primary200"
      focusStyle={{ borderColor: '$primary' }} // eslint-disable-line react-native/no-inline-styles
      {...props}
    />
  );
};
