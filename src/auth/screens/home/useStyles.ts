import { createStylesHook } from '@/theme';

export const useStyles = createStylesHook(({ theme }) => ({
  bottomContainer: {
    rowGap: theme.space.height(2),
  },
}));
