import React from "react";

import {
  NavigationContainer,
} from "@react-navigation/native";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Home from "../screens/Home";
import Wiki from "../screens/Wiki";
import Detalhes from "../screens/Detalhes";
import QuizMenu from "../screens/QuizMenu";
import Quiz from "../screens/Quiz";
import Resultado from "../screens/Resultado";

const Stack =
  createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Login"
      >

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "UmaWiki",
            headerBackVisible: false,
          }}
        />

        <Stack.Screen
          name="Wiki"
          component={Wiki}
          options={{
            title: "Wiki",
          }}
        />

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            title: "Personagem",
          }}
        />

        <Stack.Screen
          name="QuizMenu"
          component={QuizMenu}
          options={{
            title: "Quiz",
          }}
        />

        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{
            title: "Perguntas",
          }}
        />

        <Stack.Screen
          name="Resultado"
          component={Resultado}
          options={{
            title: "Resultado",
            headerBackVisible: false,
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}