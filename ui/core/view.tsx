import React from 'react';
import type { ViewProps as RNViewProps } from 'tamagui';
import { View as RNView } from 'tamagui';

export const View = ({ children, ...props }: RNViewProps) => {
  return <RNView {...props}>{children}</RNView>;
};

export type ViewProps = RNViewProps;
