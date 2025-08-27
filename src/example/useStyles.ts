import { createStylesHook } from '@/theme';

export const useStyles = createStylesHook(({ theme, globalStyles }) => ({
  container: {
    ...globalStyles.paddingHorizontal,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background.primary,
  },
  card: {
    ...globalStyles.card,
    width: '100%',
    paddingVertical: theme.space.height(3),
  },
  pressedCard: {
    opacity: 0.7,
  },
  text: {
    fontSize: theme.sizes.text.large,
    textAlign: 'center',
  },
}));
