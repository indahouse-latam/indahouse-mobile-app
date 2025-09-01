import { createStylesHook } from '@/theme';

export const useStyles = createStylesHook(({ theme, globalStyles }) => ({
  card: {
    ...globalStyles.card,
    width: '100%',
    paddingVertical: theme.space.height(3),
  },
  text: {
    fontSize: theme.sizes.text.large,
    textAlign: 'center',
  },
}));
