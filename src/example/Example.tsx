import React, { FC, memo } from 'react';
import { View } from 'react-native';

import { Pressable, Text } from '@/common';

import { useStyles } from './useStyles';

interface Props {
  text: string;
  onPress?: () => void;
}

export const Example: FC<Props> = memo(({ text, onPress }) => {
  const { styles } = useStyles();

  return (
    <View style={styles.container}>
      <Pressable style={styles.card} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
});
