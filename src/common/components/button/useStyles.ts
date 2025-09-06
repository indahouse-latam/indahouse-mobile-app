import { createStylesHook } from '@/theme';

export const useStyles = createStylesHook(({ theme }) => ({
  container: {
    flexDirection: 'row',
    borderRadius: theme.sizes.radius.full,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: theme.space.width(4),
    height: theme.space.height(7),
    shadowColor: theme.colors.primary,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 16.4,
    elevation: 12,
  },
  containedContainer: {
    backgroundColor: theme.colors.primary,
  },
  outlinedContainer: {
    borderWidth: 3,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.background.secondary,
  },
  text: {
    fontFamily: theme.fonts.primary.semibold,
    fontSize: theme.sizes.text.medium,
    textTransform: 'uppercase',
  },
  containedText: {
    color: theme.colors.background.secondary,
  },
  outlinedText: {
    color: theme.colors.primary,
  },
}));
