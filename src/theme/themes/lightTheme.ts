import { Color } from '../types/color';
import { Theme } from '../types/theme';

import { baseTheme } from './baseTheme';

export const lightTheme: Theme = {
  ...baseTheme,
  colors: {
    primary: Color.BLUE,
    secondary: Color.DARK_BLUE,
    tertiary: Color.LIGHT_BLUE,
    background: {
      primary: Color.EXTRA_LIGHT_GRAY,
      secondary: Color.WHITE,
      success: Color.LIGHT_GREEN,
    },
    success: Color.GREEN,
    error: Color.RED,
    attention: Color.LIGHT_RED,
  },
};
