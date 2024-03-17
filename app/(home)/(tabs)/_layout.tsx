import { FloatingButton } from '@core';
import { getTokens } from '@tamagui/core';
import { Activity, CalendarCheck, Home, User } from '@tamagui/lucide-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: getTokens().color.blue.val,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Home size={28} color={color} />, // eslint-disable-line react/no-unstable-nested-components
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          headerShown: false,
          tabBarLabel: 'Activity',
          tabBarIcon: ({ color }) => <Activity size={28} color={color} />, // eslint-disable-line react/no-unstable-nested-components
        }}
      />
      <Tabs.Screen
        name="absent"
        options={{
          headerShown: false,
          tabBarLabel: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <FloatingButton
              size={32}
              color={focused ? '$white' : '$primary200'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="job"
        options={{
          headerShown: false,
          tabBarLabel: 'Job',
          tabBarIcon: ({ color }) => <CalendarCheck size={28} color={color} />, // eslint-disable-line react/no-unstable-nested-components
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => <User size={28} color={color} />, // eslint-disable-line react/no-unstable-nested-components
        }}
      />
    </Tabs>
  );
}
