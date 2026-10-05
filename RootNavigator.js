import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAuth } from "../context/AuthContext";
import { MainTabs } from "./MainTabs";
import LoginScreen from "../screens/LoginScreen";
import CharacterDetailScreen from "../screens/CharacterDetailScreen";
import QuizScreen from "../screens/QuizScreen";
import QuizResultScreen from "../screens/QuizResultScreen";
import { colors } from "../theme/colors";

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.surface },
        headerTintColor: colors.primaryDark,
        headerTitleStyle: { fontWeight: "800" },
        contentStyle: { backgroundColor: colors.background }
      }}
    >
      {!user ? (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Main"
            component={MainTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CharacterDetail"
            component={CharacterDetailScreen}
            options={({ route }) => ({
              title: route.params?.character?.name ?? "Personagem"
            })}
          />
          <Stack.Screen
            name="Quiz"
            component={QuizScreen}
            options={({ route }) => ({
              title: `Quiz ${route.params?.level?.label ?? ""}`
            })}
          />
          <Stack.Screen
            name="QuizResult"
            component={QuizResultScreen}
            options={{
              title: "Resultado",
              headerBackVisible: false
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
