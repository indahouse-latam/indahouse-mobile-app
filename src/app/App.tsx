import { FC } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Example } from '@/example';
import { ThemeProvider } from '@/theme';

import { text } from './text';

export const App: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <ThemeProvider>
        <Example text={text} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
