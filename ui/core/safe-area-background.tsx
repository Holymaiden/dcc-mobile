import React from 'react';
import { StyleSheet } from 'react-native';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';

type SafeAreaBackgroundProps = {
  backgroundColor?: string;
  children: React.ReactNode;
};

export const SafeAreaBackground = ({
  backgroundColor = '#006EE9',
  children,
  ...props
}: SafeAreaBackgroundProps & SafeAreaViewProps) => {
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColor }]}
      edges={['right', 'top', 'left']}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
