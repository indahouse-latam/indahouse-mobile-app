import { FC, ReactNode } from 'react';
import { StyleProp, Text as RNText, TextStyle } from 'react-native';

import { useStyles } from './useStyles';

interface Props {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export const Text: FC<Props> = ({ children, style }) => {
  const { styles } = useStyles();

  return (
    <RNText allowFontScaling={false} style={[styles.text, style]}>
      {children}
    </RNText>
  );
};
