import { Calendar, CalendarCheck2 } from '@tamagui/lucide-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import { H4, View, XStack } from 'tamagui';

import { Button } from '../button';

export const ActivityHeader = () => {
  return (
    <XStack
      paddingHorizontal="$4"
      paddingVertical="$5"
      backgroundColor="$white"
      justifyContent="space-between"
    >
      <View justifyContent="center">
        <XStack gap="$2" alignItems="center">
          <Calendar color="$blue" size="$1" />
          <H4 color="$blue" style={styles.text}>
            {new Date()
              .toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'short',
              })
              .replace(' ', ', ')}
          </H4>
        </XStack>
      </View>
      <View alignItems="flex-end">
        <Button
          padding="$2"
          size="$3"
          borderRadius="$3"
          backgroundColor="$blue"
        >
          <CalendarCheck2 color="$white" size="$1.5" />
        </Button>
      </View>
    </XStack>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'ManropeBold',
  },
});
