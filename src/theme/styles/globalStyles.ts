import { createStylesBuilder } from '../utils/createStylesBuilder';

export const buildGlobalStyles = createStylesBuilder(theme => ({
  card: {
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.sizes.radius.medium,
  },
}));
