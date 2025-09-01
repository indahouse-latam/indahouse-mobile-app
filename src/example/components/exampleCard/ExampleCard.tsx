import React, { FC, memo } from 'react';

import { Pressable, Text } from '@/common';

import { useStyles } from './useStyles';

interface Props {
  text: string;
  onPress?: () => void;
}

export const ExampleCard: FC<Props> = memo(({ text, onPress }) => {
  const { styles } = useStyles();

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
});
