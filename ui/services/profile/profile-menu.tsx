import { Text } from '@core';
import { LogOut, Map, Settings, User } from '@tamagui/lucide-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import { XStack, YStack } from 'tamagui';

const menus = [
  {
    name: 'My Profile',
    icon: <User color="$blue" size="$2" />,
    route: '/my-profile',
  },
  {
    name: 'Location',
    icon: <Map color="$blue" size="$2" />,
    route: '/location',
  },
  {
    name: 'Settings',
    icon: <Settings color="$blue" size="$2" />,
    route: '/settings',
  },
  {
    name: 'Logout',
    icon: <LogOut color="$blue" size="$2" />,
    route: '/logout',
  },
];

export const ProfileMenu = () => {
  return (
    <YStack
      justifyContent="flex-start"
      paddingHorizontal="$9"
      paddingVertical="$4"
      gap="$6"
    >
      {menus.map((menu) => (
        <XStack key={menu.name} gap="$7" alignItems="center">
          {menu.icon}
          <Text style={styles.text}>{menu.name}</Text>
        </XStack>
      ))}
    </YStack>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'ManropeSemiBold',
  },
});
