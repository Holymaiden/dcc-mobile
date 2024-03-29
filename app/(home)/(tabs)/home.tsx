import {
  HomeHeader,
  Notification,
  SafeAreaBackground,
  Text,
  View,
} from '@core';
import { Image } from 'expo-image';
import React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { H4, H5, ScrollView, XStack, YStack } from 'tamagui';

import type { NewsType } from '@/core/types';
import { MemberCard, News } from '@/ui/services';

// @ts-ignore
import carousel3 from '../../../assets/images/carousel3.png';

const datas: NewsType[] = [
  {
    id: '1',
    title: 'Title 1',
    description: 'Description 1',
    image: 'https://picsum.photos/200',
    date: '2022-01-01',
    url: 'https://google.com',
    created_by: 'fihaa',
  },
  {
    id: '2',
    title: 'Title 2',
    description: 'Description 2',
    image: 'https://picsum.photos/200',
    date: '2022-01-01',
    url: 'https://google.com',
    created_by: 'fihaa',
  },
];

const memberCard = {
  number: '12I1-37H-306',
  name: 'M. Fiqri Haikhar Anwar',
  role: 'Program',
};

const Home = () => {
  const [showNotif, setShowNotif] = useState(true);

  return (
    <SafeAreaBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader user="fihaa" notifications={1} />
        {showNotif ? (
          <YStack marginHorizontal="$4" marginBottom="$3">
            <Notification
              message={
                <>
                  The remaining time to attend{' '}
                  <Text fontSize="$5" color="$blue" style={styles.text}>
                    00:07:20
                  </Text>
                </>
              }
              status="primary"
              onPress={() => setShowNotif(false)}
            />
          </YStack>
        ) : null}
        <YStack marginHorizontal="$4" gap="$4">
          <XStack justifyContent="space-between" alignItems="center">
            <H4 flex={2} color="$white" style={styles.text}>
              Do you have a meeting today?
            </H4>
            <Image source={carousel3} style={styles.image} />
          </XStack>
          <View>
            <MemberCard member={memberCard} />
          </View>
          <View gap="$3">
            <XStack justifyContent="space-between" alignItems="center">
              <H5 color="$white" style={styles.text}>
                News
              </H5>
              <Text color="$white" style={styles.text}>
                See all
              </Text>
            </XStack>
            <News datas={datas} isLoading={false} isErorr={false} />
          </View>
        </YStack>
      </ScrollView>
    </SafeAreaBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'ManropeBold',
  },
  image: {
    flex: 1,
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});
