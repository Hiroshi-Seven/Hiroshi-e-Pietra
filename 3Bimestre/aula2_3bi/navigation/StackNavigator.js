
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/login';
import Home from '../screens/home';

const Stack = createNativeStackNavigator();

export default function StackNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                  name="login"
                  component={login}
                  />
                  <Stack.Screen
                  name="Home"
                  component={home}
                  />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
