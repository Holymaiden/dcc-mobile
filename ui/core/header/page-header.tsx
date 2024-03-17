import { ArrowLeft } from '@tamagui/lucide-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, H4, XStack } from 'tamagui';

import { View } from '../view';

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
        <H4 color="$white" style={styles.text}>
          {title}
        </H4>
      </View>
      <View flex={1} justifyContent="center" alignItems="center">
        {rightButton}
      </View>
    </XStack>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'ManropeBold',
  },
});
