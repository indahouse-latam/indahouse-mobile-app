import { createStylesHook } from '@/theme';

export const useStyles = createStylesHook(({ theme, globalStyles }) => ({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    height: theme.space.height(68),
  },
  contentContainer: {
    ...globalStyles.paddingHorizontal,
    ...globalStyles.paddingBottom,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.background.secondary,
    height: theme.space.height(42) + theme.space.insets.bottom,
    paddingTop: theme.space.height(4),
    borderTopLeftRadius: theme.sizes.radius.large,
    borderTopRightRadius: theme.sizes.radius.large,
  },
}));
