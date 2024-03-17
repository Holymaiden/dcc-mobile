import { Text } from '@core';
import { Mail, MapPin } from '@tamagui/lucide-icons';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet } from 'react-native';
import { H4, H6, Separator, View, XStack, YStack } from 'tamagui';

// @ts-ignore
import carousel3 from '../../../assets/images/profile.png';

const profile = {
  name: 'Holymaiden',
  email: 'Holymaiden@test.com',
  address: 'Makassar, Indonesia',
  status: 'Anggota',
};

export const ProfileUser = () => {
  return (
    <YStack gap="$4" paddingBottom="$2">
      <View
        alignSelf="center"
        borderWidth="$1"
        borderRadius="$10"
        borderColor="$warning"
        borderStyle="dashed"
        position="absolute"
        top={-70}
        zIndex={999}
      >
        <Image source={carousel3} style={styles.imageHello} />
      </View>
      <YStack flex={1} marginTop="$8">
        <H4 textAlign="center" color="$blue" style={styles.textH4}>
          {profile.name}
        </H4>
        <H6 textAlign="center" color="$warning" style={styles.textH4}>
          {profile.status}
        </H6>
      </YStack>
      <XStack justifyContent="space-between">
        <XStack flex={1} gap="$2" alignItems="center">
          <MapPin color="$blue" size="$1" />
          <Text color="$grayscale900" fontSize="$2">
            {profile.address}
          </Text>
        </XStack>
        <Separator flex={1} vertical />
        <XStack flex={1} gap="$2" justifyContent="flex-end" alignItems="center">
          <Mail color="$blue" size="$1" />
          <Text color="$grayscale900" fontSize="$2">
            {profile.email}
          </Text>
        </XStack>
      </XStack>
    </YStack>
  );
};

const styles = StyleSheet.create({
  imageHello: {
    width: 100,
    height: 100,
    borderRadius: 36,
  },
  textH4: { fontFamily: 'ManropeBold' },
});
