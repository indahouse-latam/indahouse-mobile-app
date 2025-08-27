import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { FC, memo } from 'react';

import { Example1Screen, Example2Screen } from '@/example';

import { RootStackParamList, RootStackScreen } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
};

export const RootStackNavigation: FC = memo(() => {
  return (
    <Stack.Navigator initialRouteName={RootStackScreen.EXAMPLE_1} screenOptions={screenOptions}>
      <Stack.Screen name={RootStackScreen.EXAMPLE_1} component={Example1Screen} />
      <Stack.Screen name={RootStackScreen.EXAMPLE_2} component={Example2Screen} />
    </Stack.Navigator>
  );
});
