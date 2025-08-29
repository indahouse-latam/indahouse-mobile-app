import { createStylesBuilder } from '../utils/createStylesBuilder';

export const buildGlobalStyles = createStylesBuilder(theme => ({
  paddingHorizontal: {
    paddingHorizontal: theme.space.width(5),
  },
  card: {
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.sizes.radius.medium,
    shadowColor: theme.colors.shadow,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    elevation: 6,
  },
}));
