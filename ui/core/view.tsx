import { View as RNView, ViewProps as RNViewProps } from "tamagui";

export const View = ({ children, ...props }: RNViewProps) => {
  return <RNView {...props}>{children}</RNView>;
};

export type ViewProps = RNViewProps;
