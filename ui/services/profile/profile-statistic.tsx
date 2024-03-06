import { XStack, YStack } from "tamagui";

import { Text } from "@core";
import { BadgeCheck, BadgeInfo } from "@tamagui/lucide-icons";

export const ProfileStatistic = () => {
  return (
    <YStack paddingHorizontal="$4">
      <XStack gap="$4">
        <YStack
          flex={1}
          backgroundColor="$blue"
          opacity={0.8}
          justifyContent="flex-start"
          padding="$4"
          borderRadius="$8"
          gap="$2"
        >
          <Text color="$white" style={{ fontFamily: "ManropeSemiBold" }}>
            Task Done
          </Text>
          <XStack alignItems="center" gap="$4">
            <BadgeCheck color="$successLight" size="$3" />
            <Text
              color="$white"
              fontSize="$9"
              style={{ fontFamily: "ManropeSemiBold" }}
            >
              5
            </Text>
          </XStack>
        </YStack>

        <YStack
          flex={1}
          backgroundColor="$blue"
          opacity={0.8}
          justifyContent="flex-start"
          padding="$4"
          borderRadius="$8"
          gap="$2"
        >
          <Text color="$white" style={{ fontFamily: "ManropeSemiBold" }}>
            Task In Progress
          </Text>
          <XStack alignItems="center" gap="$4">
            <BadgeInfo color="$warningLight" size="$3" />
            <Text
              color="$white"
              fontSize="$9"
              style={{ fontFamily: "ManropeSemiBold" }}
            >
              5
            </Text>
          </XStack>
        </YStack>
      </XStack>
    </YStack>
  );
};
