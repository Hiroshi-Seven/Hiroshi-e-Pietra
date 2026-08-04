import { NavigationConstainer } from '@react-navigation/NavigateEvent';
import { createNativeStackNavigator } from '@react=navigation/native-stack';

import Login from '. ./srceens/login/login';
import Home from '. ./srceens/login/login';

const Stack = createNativeStackNavigator();

export default function createNativeStackNavigator(); {
    return (
        <NavigationConstainer>
            <Stack.Navigator>

                <Stack.Sreen
                name="Login"
                component={Login}
                />

                <Stack.Sreen
                name="Home"
                component={Home}
                />

            </Stack.Navigator>
        </NavigationConstainer>
    );
}
