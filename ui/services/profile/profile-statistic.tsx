import { Text } from '@core';
import { BadgeCheck, BadgeInfo } from '@tamagui/lucide-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import { XStack, YStack } from 'tamagui';

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
          <Text color="$white" style={styles.text}>
            Task Done
          </Text>
          <XStack alignItems="center" gap="$4">
            <BadgeCheck color="$successLight" size="$3" />
            <Text color="$white" fontSize="$9" style={styles.text}>
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
          <Text color="$white" style={styles.text}>
            Task In Progress
          </Text>
          <XStack alignItems="center" gap="$4">
            <BadgeInfo color="$warningLight" size="$3" />
            <Text color="$white" fontSize="$9" style={styles.text}>
              5
            </Text>
          </XStack>
        </YStack>
      </XStack>
    </YStack>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'ManropeSemiBold',
  },
});
