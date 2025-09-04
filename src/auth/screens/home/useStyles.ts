import { createStylesHook } from '@/theme';

export const useStyles = createStylesHook(({ theme }) => ({
  buttonsContainer: {
    rowGap: theme.space.height(2),
  },
}));
