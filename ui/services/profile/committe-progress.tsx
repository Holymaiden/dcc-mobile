import { Text } from '@core';
import { Loader } from '@tamagui/lucide-icons';
import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { H4, Progress, XStack } from 'tamagui';

export const CommitteProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setProgress(Math.floor(Math.random() * 10)),
      1000,
    );
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <XStack justifyContent="space-between" alignItems="center">
        <XStack gap="$2" alignItems="center">
          <Loader color="$blue" />
          <Text style={styles.text}>Committes Completed</Text>
        </XStack>
        <H4 color="$blue" style={styles.textH4}>
          {progress} / 10
        </H4>
      </XStack>
      <Progress
        height="$1.5"
        value={100 * (progress / 10)}
        bordered
        borderColor="$grayscale600"
        backgroundColor="$primary100"
      >
        <Progress.Indicator animation="bouncy" backgroundColor="$blue" />
      </Progress>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'ManropeSemiBold',
  },
  textH4: {
    fontFamily: 'ManropeBold',
  },
});
