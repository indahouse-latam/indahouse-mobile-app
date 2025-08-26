import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { ThemeState } from '../context/ThemeContext';
import { useTheme } from '../hooks/useTheme';
import { BaseStyles } from '../types/baseStyles';

export const createStylesHook = <T extends BaseStyles<T>>(
  getStyles: (themeState: ThemeState) => T,
) => {
  return () => {
    const themeState = useTheme();

    return useMemo(
      () => ({
        styles: StyleSheet.create(getStyles(themeState)),
        ...themeState,
      }),
      [themeState],
    );
  };
};
