import React, { FC, memo } from 'react';
import { View } from 'react-native';

import { Text } from '@/common';

import { useStyles } from './useStyles';

interface Props {
  text: string;
}

export const Example: FC<Props> = memo(({ text }) => {
  const { styles } = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
});
