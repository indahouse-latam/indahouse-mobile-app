import { useContext } from 'react';

import { ThemeContext, ThemeState } from '../context/ThemeContext';

export const useTheme = (): ThemeState => useContext(ThemeContext)!;
