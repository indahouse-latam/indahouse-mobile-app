import { FC, memo } from 'react';
import { StyleProp, TextInput as RNTextInput, View, ViewStyle } from 'react-native';

import { Text } from '../text/Text';

import { AutoCapitalize, InputMode } from './types';
import { useStyles } from './useStyles';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  inputMode?: InputMode;
  autoCorrect?: boolean;
  autoCapitalize?: AutoCapitalize;
  value?: string;
  onChange?: (value: string) => void;
  label: string;
}

export const TextInput: FC<Props> = memo(
  ({
    containerStyle,
    inputMode = InputMode.TEXT,
    autoCorrect = false,
    autoCapitalize = AutoCapitalize.WORDS,
    value,
    onChange,
    label,
  }) => {
    const { styles } = useStyles();

    return (
      <View style={[styles.container, containerStyle]}>
        <RNTextInput
          allowFontScaling={false}
          style={styles.input}
          inputMode={inputMode}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          value={value}
          onChangeText={onChange}
        />

        <Text style={styles.label}>{label}</Text>
      </View>
    );
  },
);
