import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { hideSplashScreen } from '@/common';
import { ThemeProvider } from '@/theme';

import { RootStackNavigation } from './rootStack/RootStack';

export const App: FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor={'transparent'} barStyle='dark-content' />

      <ThemeProvider>
        <NavigationContainer onReady={hideSplashScreen}>
          <RootStackNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
