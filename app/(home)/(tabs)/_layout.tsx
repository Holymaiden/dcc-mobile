import React from "react";
import { Activity, CalendarCheck, Home, User } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";
import { getTokens } from "@tamagui/core";

import { FloatingButton } from "@core";

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
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <Home size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          headerShown: false,
          tabBarLabel: "Activity",
          tabBarIcon: ({ color }) => <Activity size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="absent"
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <FloatingButton
              size={32}
              color={focused ? "$white" : "$primary200"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="job"
        options={{
          headerShown: false,
          tabBarLabel: "Job",
          tabBarIcon: ({ color }) => <CalendarCheck size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => <User size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
