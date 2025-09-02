import { createStylesHook } from '@/theme';

export const useStyles = createStylesHook(({ theme }) => ({
  container: {
    width: '100%',
  },
  label: {
    color: theme.colors.secondary,
    position: 'absolute',
    top: '-20%',
    left: '6%',
    backgroundColor: theme.colors.background.secondary,
    paddingHorizontal: theme.space.width(2),
  },
  input: {
    color: theme.colors.secondary,
    fontFamily: theme.fonts.primary.regular,
    fontSize: theme.sizes.text.medium,
    paddingVertical: 0,
    paddingHorizontal: theme.space.width(4),
    backgroundColor: theme.colors.background.secondary,
    height: theme.space.height(6),
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    borderRadius: theme.sizes.radius.full,
  },
}));
