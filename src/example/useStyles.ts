import { createStylesHook } from '@/theme';

export const useStyles = createStylesHook(({ theme, globalStyles }) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background.primary,
  },
  card: {
    ...globalStyles.card,
    padding: 25,
  },
  text: {
    fontSize: theme.sizes.text.large,
    fontFamily: theme.fonts.primary.medium,
  },
}));
