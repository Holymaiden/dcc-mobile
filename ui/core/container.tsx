import React from "react";
import { YStack, YStackProps } from "tamagui";

export type ContainerProps = YStackProps;

export const Container: React.FC<YStackProps> = ({ children, ...props }) => (
  <YStack flex={1} backgroundColor="$white" padding="$4" {...props}>
    {children}
  </YStack>
);
