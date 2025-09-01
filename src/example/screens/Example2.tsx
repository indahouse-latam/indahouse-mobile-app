import React, { FC, useCallback } from 'react';

import { RootStackScreen, RootStackScreenProps } from '@/app';

import { ExampleCard } from '../components/exampleCard/ExampleCard';
import { ExampleContainer } from '../components/exampleContainer/ExampleContainer';

interface Props extends RootStackScreenProps<RootStackScreen.EXAMPLE_2> {}

export const Example2Screen: FC<Props> = ({ navigation }) => {
  const handleOnPress = useCallback(() => {
    navigation.goBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ExampleContainer>
      <ExampleCard text='Go To Example 1' onPress={handleOnPress} />
    </ExampleContainer>
  );
};
