import { Text } from '@core';
import { Calendar } from '@tamagui/lucide-icons';
import { Image } from 'expo-image';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, H5, Paragraph, XStack, YStack } from 'tamagui';

import { firstLatterUppercase } from '@/core';
import type { NewsType } from '@/core/types';

export type NewsProps = {
  datas: NewsType[];
  isLoading: boolean;
  isErorr: boolean;
};

const NewsCard = ({ data }: { data: NewsType }) => {
  return (
    <Card
      animation="bouncy"
      scale={0.9}
      hoverStyle={{ scale: 0.925 }} // eslint-disable-line react-native/no-inline-styles
      pressStyle={{ scale: 0.875 }} // eslint-disable-line react-native/no-inline-styles
      backgroundColor="$white"
      borderRadius="$8"
    >
      <Card.Header padded>
        <XStack justifyContent="space-between">
          <YStack justifyContent="space-between">
            <YStack>
              <H5>{data.title}</H5>
              <Paragraph>{data.description}</Paragraph>
            </YStack>
            <XStack gap="$4" alignItems="center">
              <Text color="$grayscale600">
                {firstLatterUppercase(data.created_by)}
              </Text>
              <XStack gap="$1.5" alignItems="center">
                <Calendar color="$grayscale600" size="$1" />
                <Text color="$grayscale600">{data.date}</Text>
              </XStack>
            </XStack>
          </YStack>
          <Image source={{ uri: data.image }} style={styles.image} />
        </XStack>
      </Card.Header>
    </Card>
  );
};

export const News = ({ datas, isLoading, isErorr }: NewsProps) => {
  if (isLoading) return <Card />;
  if (isErorr) return <Card />;
  return (
    <FlatList
      data={datas}
      renderItem={({ item }) => <NewsCard data={item} />}
      keyExtractor={(item) => item.id}
      scrollEnabled={false}
      contentContainerStyle={styles.flatlist}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },
  flatlist: {
    gap: 16,
  },
});
