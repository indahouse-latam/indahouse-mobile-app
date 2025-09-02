import { createStylesHook } from '@/theme';

export const useStyles = createStylesHook(({ theme }) => ({
  inputContainer: {
    marginTop: theme.space.height(6),
  },
}));
