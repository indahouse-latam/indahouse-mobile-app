import { createStylesHook } from '@/theme';

export const useStyles = createStylesHook(({ theme }) => ({
  container: {
    flexDirection: 'row',
    borderRadius: theme.sizes.radius.full,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: theme.space.width(4),
    paddingVertical: theme.space.height(2),
    borderWidth: 3,
    borderColor: theme.colors.primary,
  },
  containedContainer: {
    backgroundColor: theme.colors.primary,
  },
  outlinedContainer: {
    backgroundColor: 'transparent',
  },
  text: {
    fontFamily: theme.fonts.primary.semibold,
    fontSize: theme.sizes.text.medium,
  },
  containedText: {
    color: theme.colors.background.secondary,
  },
  outlinedText: {
    color: theme.colors.primary,
  },
}));
