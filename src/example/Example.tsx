import React, { FC, memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  text: string;
}

export const Example: FC<Props> = memo(({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
