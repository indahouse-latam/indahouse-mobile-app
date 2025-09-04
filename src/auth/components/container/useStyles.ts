import { createStylesHook } from '@/theme';

export const useStyles = createStylesHook(({ theme, globalStyles }) => ({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    height: theme.space.height(68),
  },
  gradient: {
    ...globalStyles.absoluteFill,
  },
  contentContainer: {
    ...globalStyles.paddingHorizontal,
    backgroundColor: theme.colors.background.secondary,
    height: theme.space.height(44),
    paddingTop: theme.space.height(3),
    paddingBottom: theme.space.height(5),
    borderTopLeftRadius: theme.sizes.radius.large,
    borderTopRightRadius: theme.sizes.radius.large,
  },
}));
