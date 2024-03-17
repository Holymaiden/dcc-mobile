import { Timer } from '@tamagui/lucide-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Paragraph } from 'tamagui';

type NotificationProps = {
  message: string | React.ReactNode;
  status: 'success' | 'warning' | 'error' | 'primary';
  size?: '$1' | '$2' | '$3' | '$4' | '$5';
  onPress: () => void;
};

export const Notification = ({
  message,
  status,
  size = '$3',
  onPress,
}: NotificationProps) => {
  const color = (val: string) => {
    switch (val) {
      case 'success':
        return { background: '$successLight', color: '$white' };
      case 'warning':
        return { background: '$warningLight', color: '$white' };
      case 'error':
        return { background: '$alertLight', color: '$white' };
      case 'primary':
        return { background: '$white', color: '$blue' };
    }
  };

  return (
    <Card
      backgroundColor={color(status)?.background}
      borderColor={color(status)?.background}
      borderWidth="$1"
      animation="bouncy"
      size={size}
      scale={0.9}
      hoverStyle={{ scale: 0.925 }} // eslint-disable-line react-native/no-inline-styles
      pressStyle={{ scale: 0.875 }} // eslint-disable-line react-native/no-inline-styles
      onPressOut={onPress}
    >
      <Card.Header padded flexDirection="row" gap="$2" alignItems="center">
        <Timer size="2" color={color(status)?.color} />
        <Paragraph color={color(status)?.color} size="$4" style={styles.text}>
          {message}
        </Paragraph>
      </Card.Header>
    </Card>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'ManropeSemiBold',
  },
});
