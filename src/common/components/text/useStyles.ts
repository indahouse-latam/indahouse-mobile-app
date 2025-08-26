import { createStylesHook } from '@/theme';

export const useStyles = createStylesHook(({ theme }) => ({
  text: {
    fontFamily: theme.fonts.primary.medium,
    fontSize: theme.sizes.text.medium,
    color: theme.colors.primary,
  },
}));
