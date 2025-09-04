import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useAuthenticationCheck } from '@/auth';
import { ThemeProvider } from '@/theme';
import { UserProvider } from '@/user';

import { RootStackNavigation } from './rootStack/RootStack';

const withProviders = <T extends object>(Component: FC<T>) => {
  return (props: T) => (
    <UserProvider>
      <Component {...props} />
    </UserProvider>
  );
};

export const App: FC = withProviders(() => {
  const authentication = useAuthenticationCheck();

  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor={'transparent'} barStyle='dark-content' />

      <ThemeProvider>
        <NavigationContainer>
          {authentication.isLoaded && <RootStackNavigation />}
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
});
