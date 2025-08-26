import { DEVICE_HEIGHT, DEVICE_WIDTH } from '@/common';

import { Font } from '../types/font';
import { Theme } from '../types/theme';

export const baseTheme = {
  fonts: {
    primary: {
      regular: Font.MONTSERRAT_REGULAR,
      medium: Font.MONTSERRAT_MEDIUM,
      semibold: Font.MONTSERRAT_SEMIBOLD,
      bold: Font.MONTSERRAT_BOLD,
    },
  },
  sizes: {
    text: {
      small: 12,
      medium: 16,
      large: 20,
    },
    radius: {
      medium: 10,
      large: 20,
      full: 9999,
    },
  },
  space: {
    height: (percent: number) => (percent / 100) * DEVICE_HEIGHT,
    width: (percent: number) => (percent / 100) * DEVICE_WIDTH,
  },
} satisfies Partial<Theme>;
