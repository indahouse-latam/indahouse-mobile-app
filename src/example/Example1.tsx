import React, { FC, useCallback } from 'react';

import { RootStackScreen, RootStackScreenProps } from '@/app';

import { Example } from './Example';

interface Props extends RootStackScreenProps<RootStackScreen.EXAMPLE_1> {}

export const Example1Screen: FC<Props> = ({ navigation }) => {
  const handleOnPress = useCallback(() => {
    navigation.navigate(RootStackScreen.EXAMPLE_2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Example text='InDaHouse App - Example 1' onPress={handleOnPress} />;
};
