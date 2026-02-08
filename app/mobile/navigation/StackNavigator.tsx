import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenContent } from 'components/ScreenContent';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={ScreenContent} />
        </Stack.Navigator>
    )
};