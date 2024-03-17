import { Container, GoogleButton, Text, View } from '@core';
import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, Separator, XStack, YStack } from 'tamagui';

import { TabsLogin } from '@/ui/services';

const Login: React.FC = () => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View gap="$6">
          <YStack justifyContent="center" gap="$3">
            <Text fontWeight="bold" fontSize="$6">
              Login Account
            </Text>
            <Text>Hello, welcome back to our account</Text>
          </YStack>

          <YStack>
            <TabsLogin />
          </YStack>

          <XStack justifyContent="center" alignItems="center" gap="$3">
            <Separator />
            <Text fontWeight="bold" fontSize="$3">
              OR
            </Text>
            <Separator />
          </XStack>

          <YStack gap="$6">
            <GoogleButton />
            <XStack gap="$1">
              <Text color="$gray" fontWeight="bold" fontSize="$3">
                Not Registered yet?
              </Text>
              <Link href="/register">
                <Text
                  color="$blue"
                  fontFamily="unset"
                  fontWeight="bold"
                  fontSize="$3"
                >
                  Create an Account
                </Text>
              </Link>
            </XStack>
          </YStack>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Login;
