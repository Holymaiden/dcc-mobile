import type { ButtonProps } from '@core';
import { Button, Text, View } from '@core';
import React from 'react';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { H5, XStack, YStack } from 'tamagui';

type DateCardProps = {
  month: string;
  day: string;
  active?: boolean;
};

export const DateCard = ({
  month,
  day,
  active,
  ...props
}: DateCardProps & ButtonProps) => {
  const date =
    new Date().getFullYear() +
    '-' +
    new Date().getMonth() +
    '-' +
    (+day + 1).toString();
  const weekday = new Date(date).toLocaleDateString('id-ID', {
    weekday: 'short',
    timeZone: 'Asia/Makassar',
  });

  return (
    <Button
      backgroundColor={active ? '$blue' : '$primary50'}
      borderRadius="$5"
      size={active ? '$9' : '$8'}
      padding="$4"
      {...props}
    >
      <YStack alignItems="center">
        <Text color={active ? '$white' : '$blue'}>{month}</Text>
        <H5 color={active ? '$white' : '$blue'}>{day.padStart(2, '0')}</H5>
        <Text color={active ? '$white' : '$blue'}>{weekday}</Text>
      </YStack>
    </Button>
  );
};

export const DatesCard = ({ ...props }: ButtonProps) => {
  const [active, setActive] = useState(
    new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      timeZone: 'Asia/Makassar',
    }),
  );

  const month = new Date().toLocaleDateString('id-ID', {
    month: 'short',
    timeZone: 'Asia/Makassar',
  });

  const totalDay = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0,
  ).getDate();

  const isActive = (day: string) => day === active;

  const handleActive = (index: number) => {
    setActive(String(index));
  };

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <XStack gap="$4" alignItems="center">
          {[...Array(totalDay)].map((_, index) => (
            <DateCard
              key={index}
              month={month}
              day={String(index + 1)}
              active={isActive(String(index + 1))}
              onPress={() => handleActive(index + 1)}
              {...props}
            />
          ))}
        </XStack>
      </ScrollView>
    </View>
  );
};
