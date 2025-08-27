import React, { FC, memo, useCallback } from 'react';
import { Pressable, PressableStateCallbackType, View } from 'react-native';

import { Text } from '@/common';

import { useStyles } from './useStyles';

interface Props {
  text: string;
  onPress?: () => void;
}

export const Example: FC<Props> = memo(({ text, onPress }) => {
  const { styles } = useStyles();

  const pressableStyle = useCallback(
    (state: PressableStateCallbackType) => {
      return state.pressed ? [styles.card, styles.pressedCard] : styles.card;
    },
    [styles],
  );

  return (
    <View style={styles.container}>
      <Pressable style={pressableStyle} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
});
