import { createContext } from 'react';

import { buildGlobalStyles } from '../styles/globalStyles';
import { Theme } from '../types/theme';

export interface ThemeState {
  theme: Theme;
  globalStyles: GlobalStyles;
}

type GlobalStyles = ReturnType<typeof buildGlobalStyles>;

export const ThemeContext = createContext<ThemeState | null>(null);
