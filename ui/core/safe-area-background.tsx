import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

type SafeAreaBackgroundProps = {
  backgroundColor?: string;
  children: React.ReactNode;
};

export const SafeAreaBackground = ({
  backgroundColor = "#006EE9",
  children,
  ...props
}: SafeAreaBackgroundProps & SafeAreaViewProps) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: backgroundColor }}
      edges={["right", "top", "left"]}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};
