import { FC } from 'react';
import { View } from 'react-native';

import { WithChildren } from '@/common';

import { useStyles } from './useStyles';

interface Props extends WithChildren {}

export const ExampleContainer: FC<Props> = ({ children }) => {
  const { styles } = useStyles();

  return <View style={styles.container}>{children}</View>;
};
