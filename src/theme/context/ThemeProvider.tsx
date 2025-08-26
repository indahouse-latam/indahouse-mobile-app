import { FC, ReactNode, useMemo } from 'react';

import { buildGlobalStyles } from '../styles/globalStyles';
import { lightTheme } from '../themes/lightTheme';

import { ThemeContext, ThemeState } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const state = useMemo(
    (): ThemeState => ({ theme: lightTheme, globalStyles: buildGlobalStyles(lightTheme) }),
    [],
  );

  return <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>;
};
