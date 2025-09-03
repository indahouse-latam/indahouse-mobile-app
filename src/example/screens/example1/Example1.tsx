import React, { FC, useCallback } from 'react';

import { RootStackScreen, RootStackScreenProps } from '@/app';
import { Button, ButtonVariant, Icon } from '@/common';

import { ExampleCard } from '../../components/exampleCard/ExampleCard';
import { ExampleContainer } from '../../components/exampleContainer/ExampleContainer';

import { useStyles } from './useStyles';

interface Props extends RootStackScreenProps<RootStackScreen.EXAMPLE_1> {}

export const Example1Screen: FC<Props> = ({ navigation }) => {
  const { styles } = useStyles();

  const handleOnPress = useCallback(() => {
    navigation.navigate(RootStackScreen.EXAMPLE_2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ExampleContainer>
      <ExampleCard text='InDaHouse App - Example 1' />

      <Button
        label='EXAMPLE BUTTON'
        variant={ButtonVariant.OUTLINED}
        leftIconComponent={Icon.GoogleOutlined}
        containerStyle={styles.buttonContainer}
        onPress={handleOnPress}
      />
    </ExampleContainer>
  );
};
