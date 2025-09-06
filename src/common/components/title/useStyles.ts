import { createStylesHook } from '@/theme';

export const useStyles = createStylesHook(({ theme }) => ({
  text: {
    fontFamily: theme.fonts.primary.bold,
    fontSize: theme.sizes.text.large,
    textAlign: 'center',
  },
}));
