import { Button, Carousel, Container, LinearGradient } from '@core';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { YStack } from 'tamagui';

// @ts-ignore
import carousel1 from '../../assets/images/carousel1.png';
// @ts-ignore
import carousel2 from '../../assets/images/carousel2.png';
// @ts-ignore
import carousel3 from '../../assets/images/carousel3.png';

const carouselData = [
  {
    img: carousel1,
    desc: 'Welcome to DCC Mobile App. We will help you to manage your organizations.',
  },
  {
    img: carousel2,
    desc: 'With management based on priority and daily tasks, it will give you convenience in managing and determining the tasks that must be done first',
  },
  {
    img: carousel3,
    desc: 'the task that must be done first',
  },
];

const Auth: React.FC = () => {
  const router = useRouter();

  return (
    <Container padding="$0">
      <YStack flex={3} justifyContent="center">
        <Carousel data={carouselData} />
      </YStack>
      <LinearGradient paddingHorizontal="$6" gap="$4">
        <Button
          backgroundColor="$white"
          color="$blue"
          onPress={() => router.navigate('/login')}
        >
          Login
        </Button>
        <Button
          backgroundColor="transparent"
          color="$white"
          onPress={() => router.navigate('/register')}
        >
          Create an account
        </Button>
      </LinearGradient>
    </Container>
  );
};

export default Auth;
