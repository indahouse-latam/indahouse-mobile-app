import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { FC, memo, useEffect } from 'react';

import { HomeScreen } from '@/auth';
import { hideSplashScreen } from '@/common';
import { Example1Screen, Example2Screen } from '@/example';
import { useUserState } from '@/user';

import { RootStackParamList, RootStackScreen } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
};

export const RootStackNavigation: FC = memo(() => {
  const user = useUserState();

  useEffect(() => {
    hideSplashScreen();
  }, []);

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {user ? (
        <>
          <Stack.Screen name={RootStackScreen.EXAMPLE_1} component={Example1Screen} />
          <Stack.Screen name={RootStackScreen.EXAMPLE_2} component={Example2Screen} />
        </>
      ) : (
        <Stack.Screen name={RootStackScreen.HOME} component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
});
