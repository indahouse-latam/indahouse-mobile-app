import React, { FC, useCallback } from 'react';

import { RootStackScreen, RootStackScreenProps } from '@/app';

import { Example } from './Example';

interface Props extends RootStackScreenProps<RootStackScreen.EXAMPLE_2> {}

export const Example2Screen: FC<Props> = ({ navigation }) => {
  const handleOnPress = useCallback(() => {
    navigation.goBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Example text='Go To Example 1' onPress={handleOnPress} />;
};
