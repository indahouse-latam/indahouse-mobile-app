import { FC } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Example } from '@/example';
import { ThemeProvider } from '@/theme';

export const App: FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor={'transparent'} barStyle='dark-content' />

      <ThemeProvider>
        <Example text='InDaHouse App' />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
