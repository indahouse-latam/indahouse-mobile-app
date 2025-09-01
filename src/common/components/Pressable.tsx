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
}

export const Pressable: FC<Props> = ({ children, style, onPress }) => {
  const pressableStyle = useCallback(
    (state: PressableStateCallbackType) => {
      return state.pressed ? [style, { opacity: 0.7 }] : style;
    },
    [style],
  );

  return (
    <RNPressable style={pressableStyle} onPress={onPress}>
      {children}
    </RNPressable>
  );
};
