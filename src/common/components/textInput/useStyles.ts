import { createStylesHook } from '@/theme';

export const useStyles = createStylesHook(({ theme }) => ({
  container: {
    width: '100%',
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
  inputError: {
    borderColor: theme.colors.error,
  },
  label: {
    position: 'absolute',
    top: '-20%',
    left: '6%',
    color: theme.colors.secondary,
    backgroundColor: theme.colors.background.secondary,
    paddingHorizontal: theme.space.width(2),
  },
  errorMessage: {
    position: 'absolute',
    bottom: '-37%',
    left: '6%',
    color: theme.colors.error,
    fontSize: theme.sizes.text.small,
  },
}));
