import { Text } from '@core';
import { CreditCard, Eye, EyeOff } from '@tamagui/lucide-icons';
import { Image } from 'expo-image';
import React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Card, H5, XStack } from 'tamagui';

export type MemberCardProps = {
  number: string;
  name: string;
  role: string;
};
export const MemberCard = ({ member }: { member: MemberCardProps }) => {
  const [showNumber, setShowNumber] = useState(false);

  const toggleShowNumber = () => {
    setShowNumber((prev) => !prev);
  };

  return (
    <Card
      animation="bouncy"
      scale={0.9}
      hoverStyle={{ scale: 0.925 }} // eslint-disable-line react-native/no-inline-styles
      pressStyle={{ scale: 0.875 }} // eslint-disable-line react-native/no-inline-styles
      backgroundColor="$primary50"
      borderRadius="$8"
      borderColor="transparent"
    >
      <Card.Header padded flexDirection="row" gap="$2" alignItems="center">
        <CreditCard color="$white" size="$1" />
        <H5 color="$white" style={style.text}>
          Member Card
        </H5>
      </Card.Header>
      <Card.Footer padded flexDirection="column">
        <XStack alignItems="center" gap="$2" marginVertical="$4">
          <H5 color="$white" fontSize="$8">
            {showNumber ? member.number : '**** **** ****'}
          </H5>
          {showNumber ? (
            <EyeOff color="$white" size="$1" onPress={toggleShowNumber} />
          ) : (
            <Eye color="$white" size="$1" onPress={toggleShowNumber} />
          )}
        </XStack>

        <XStack justifyContent="space-between">
          <Text color="$white">{member.name}</Text>
          <Text color="$white">{member.role}</Text>
        </XStack>
      </Card.Footer>
      <Card.Background>
        <Image
          contentFit="cover"
          style={style.memberImage}
          source={require('../../../assets/images/member-card.png')}
        />
      </Card.Background>
    </Card>
  );
};

const style = StyleSheet.create({
  text: {
    fontFamily: 'ManropeSemiBold',
  },
  memberImage: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
});
