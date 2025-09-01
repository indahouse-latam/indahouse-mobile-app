import { createStylesHook } from '@/theme';

export const useStyles = createStylesHook(({ theme }) => ({
  buttonContainer: {
    marginTop: theme.space.height(6),
  },
}));
