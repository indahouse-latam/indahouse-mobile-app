import { FC, memo } from 'react';

import { Text } from '../text/Text';

import { useStyles } from './useStyles';

interface Props {
  text: string;
}

export const Title: FC<Props> = memo(({ text }) => {
  const { styles } = useStyles();

  return <Text style={styles.text}>{text}</Text>;
});
