import { AtSign, Lock, Phone, User } from '@tamagui/lucide-icons';
import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Form, Spinner, XStack, YStack } from 'tamagui';

import { TextInput } from '@/ui/core';

export const RegisterForm = () => {
  const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>(
    'off',
  );

  useEffect(() => {
    if (status === 'submitting') {
      const timer = setTimeout(() => setStatus('off'), 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  return (
    <Form onSubmit={() => setStatus('submitting')} gap="$6">
      <YStack gap="$6" paddingRight="$4">
        <XStack alignItems="center">
          <User />
          <TextInput
            placeholder="Username"
            inputMode="text"
            autoFocus={true}
            width="100%"
          />
        </XStack>

        <XStack alignItems="center">
          <AtSign />
          <TextInput placeholder="Email ID" inputMode="email" width="100%" />
        </XStack>

        <XStack alignItems="center">
          <Phone />
          <TextInput
            placeholder="Phone Number"
            inputMode="numeric"
            width="100%"
          />
        </XStack>

        <XStack alignItems="center">
          <Lock />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            width="100%"
          />
        </XStack>
      </YStack>
      <Form.Trigger asChild disabled={status !== 'off'}>
        <Button
          backgroundColor="$primary"
          color="$white"
          borderRadius="$5"
          size="$5"
          icon={
            status === 'submitting' ? <Spinner color="$white" /> : undefined
          }
        >
          Sign Up
        </Button>
      </Form.Trigger>
    </Form>
  );
};
