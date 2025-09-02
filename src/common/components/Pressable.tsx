import { FC, useCallback } from 'react';
import {
  Pressable as RNPressable,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { WithChildren } from '../types';

interface Props extends WithChildren {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  isDisabled?: boolean;
}

export const Pressable: FC<Props> = ({ children, style, onPress, isDisabled }) => {
  const pressableStyle = useCallback(
    (state: PressableStateCallbackType) => {
      const styles = [style];

      if (isDisabled) {
        styles.push({ opacity: 0.65 });
      } else if (state.pressed) {
        styles.push({ opacity: 0.75 });
      }

      return styles;
    },
    [style, isDisabled],
  );

  return (
    <RNPressable style={pressableStyle} onPress={onPress} disabled={isDisabled}>
      {children}
    </RNPressable>
  );
};
