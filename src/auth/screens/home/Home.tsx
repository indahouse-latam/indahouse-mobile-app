import { FC } from 'react';
import { View } from 'react-native';

import { Button, ButtonVariant, Icon, Text, TextInput } from '@/common';

import { Container } from '../../components/container/Container';

import { useStyles } from './useStyles';

export const HomeScreen: FC = () => {
  const { globalStyles, styles } = useStyles();

  return (
    <Container>
      <Text style={globalStyles.title}>¡Nos alegra que estés aquí!</Text>

      <TextInput label='Email' errorMessage='El email es requerido' />

      <View style={styles.buttonsContainer}>
        <Button label='Ingresar' />

        <Button
          label='Ingresar con Google'
          leftIconComponent={Icon.GoogleOutlined}
          variant={ButtonVariant.OUTLINED}
        />
      </View>
    </Container>
  );
};
