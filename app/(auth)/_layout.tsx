import { Stack } from 'expo-router';
import React from 'react';

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="index"
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="login"
        options={{
          headerShown: true,
          title: 'Login',
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: true,
          title: 'Register',
          headerBackTitle: 'Back',
        }}
      />
    </Stack>
  );
};
export default Layout;
