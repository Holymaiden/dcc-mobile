import { XStack, Button, H4 } from "tamagui";
import { ArrowLeft } from "@tamagui/lucide-icons";

import { View } from "../view";
import { router } from "expo-router";

export type PageHeaderProps = {
  title: string;
  rightButton?: React.ReactNode;
};

export const PageHeader = ({ title, rightButton }: PageHeaderProps) => {
  return (
    <XStack
      paddingHorizontal="$4"
      paddingVertical="$5"
      backgroundColor="$blue"
      justifyContent="space-between"
    >
      <View flex={1}>
        <XStack>
          <Button
            padding="$2"
            size="$3"
            borderRadius="$3"
            backgroundColor="$white"
            onPress={() => router.back()}
          >
            <ArrowLeft color="$blue" size="$1.5" />
          </Button>
        </XStack>
      </View>
      <View flex={1} justifyContent="center" alignItems="center">
        <H4 color="$white" style={{ fontFamily: "ManropeBold" }}>
          {title}
        </H4>
      </View>
      <View flex={1} justifyContent="center" alignItems="center">
        {rightButton}
      </View>
    </XStack>
  );
};
