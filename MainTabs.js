import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import WikiScreen from "../screens/WikiScreen";
import QuizLevelsScreen from "../screens/QuizLevelsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

const icons = {
  Home: "🏠",
  Wiki: "📚",
  QuizLevels: "🏁",
  Profile: "👤"
};

export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: colors.surface },
        headerTitleStyle: { color: colors.primaryDark, fontWeight: "800" },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          height: 64,
          paddingTop: 6,
          paddingBottom: 8,
          borderTopColor: colors.border
        },
        tabBarIcon: ({ focused }) => (
          <Text style={{ fontSize: focused ? 22 : 20 }}>
            {icons[route.name]}
          </Text>
        )
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Início", tabBarLabel: "Início" }}
      />
      <Tab.Screen
        name="Wiki"
        component={WikiScreen}
        options={{ title: "Uma Wiki", tabBarLabel: "Wiki" }}
      />
      <Tab.Screen
        name="QuizLevels"
        component={QuizLevelsScreen}
        options={{ title: "Quiz", tabBarLabel: "Quiz" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Perfil", tabBarLabel: "Perfil" }}
      />
    </Tab.Navigator>
  );
}
