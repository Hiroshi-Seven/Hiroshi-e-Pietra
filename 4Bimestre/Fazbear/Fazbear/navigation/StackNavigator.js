
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';

import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const cancelar = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
      setCarregando(false);
    });

    return cancelar;
  }, []);

  if (carregando) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#171717'
      }}>
        <ActivityIndicator size="large" color="#e63946" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {usuario ? (
          <Stack.Screen
            name="Home"
            component={Home}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
            />
            <Stack.Screen
              name="Cadastro"
              component={Cadastro}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
