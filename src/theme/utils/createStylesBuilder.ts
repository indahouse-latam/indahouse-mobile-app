import { StyleSheet } from 'react-native';

import { BaseStyles } from '../types/baseStyles';
import { Theme } from '../types/theme';

export const createStylesBuilder = <T extends BaseStyles<T>>(getStyles: (theme: Theme) => T) => {
  return (theme: Theme) => {
    return StyleSheet.create(getStyles(theme));
  };
};
