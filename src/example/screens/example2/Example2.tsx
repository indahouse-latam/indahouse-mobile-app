import React, { FC, useCallback, useState } from 'react';

import { RootStackScreen, RootStackScreenProps } from '@/app';
import { AutoCapitalize, InputMode, TextInput } from '@/common';

import { ExampleCard } from '../../components/exampleCard/ExampleCard';
import { ExampleContainer } from '../../components/exampleContainer/ExampleContainer';

import { useStyles } from './useStyles';

interface Props extends RootStackScreenProps<RootStackScreen.EXAMPLE_2> {}

export const Example2Screen: FC<Props> = ({ navigation }) => {
  const { styles } = useStyles();
  const [email, setEmail] = useState('');

  const handleOnPress = useCallback(() => {
    navigation.goBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = useCallback((value: string) => {
    setEmail(value);
    console.log('Input changed:', value);
  }, []);

  return (
    <ExampleContainer>
      <ExampleCard text='Go To Example 1' onPress={handleOnPress} />

      <TextInput
        label='Email'
        containerStyle={styles.inputContainer}
        inputMode={InputMode.EMAIL}
        autoCapitalize={AutoCapitalize.NONE}
        value={email}
        onChange={handleInputChange}
        errorMessage='El email es obligatorio'
      />
    </ExampleContainer>
  );
};
