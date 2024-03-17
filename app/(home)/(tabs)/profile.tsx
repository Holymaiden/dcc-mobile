import { Container, SafeAreaBackground } from '@core';
import React from 'react';
import { ScrollView, View, YStack } from 'tamagui';

import {
  CommitteProgress,
  ProfileMenu,
  ProfileStatistic,
  ProfileUser,
} from '@/ui/services';

const Profile = () => {
  return (
    <SafeAreaBackground backgroundColor="white">
      <View
        backgroundColor="$blue"
        height="20%"
        borderBottomLeftRadius="$10"
        borderBottomRightRadius="$10"
        position="absolute"
        zIndex={-1}
        width="100%"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <YStack gap="$4">
          <Container
            gap="$4"
            borderRadius="$10"
            marginTop="$10"
            marginHorizontal="$4"
            shadowOffset={{ width: 0, height: 1 }}
            shadowOpacity={0.22}
            shadowRadius={2.22}
          >
            <ProfileUser />
          </Container>
          <ProfileStatistic />
          <Container
            justifyContent="center"
            borderRadius="$10"
            marginHorizontal="$4"
            gap="$4"
            shadowOffset={{ width: 0, height: 1 }}
            shadowOpacity={0.22}
            shadowRadius={2.22}
          >
            <CommitteProgress />
          </Container>
          <ProfileMenu />
        </YStack>
      </ScrollView>
    </SafeAreaBackground>
  );
};

export default Profile;
