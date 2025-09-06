import { FC, useCallback } from 'react';

import { Button, Icon, TextInput, Title } from '@/common';
import { useUserDispatch } from '@/user';

import { Container } from '../../components/container/Container';
import { authService } from '../../service/authService';

import { useStyles } from './useStyles';

export const VerificationCodeScreen: FC = () => {
  const userDispatch = useUserDispatch();

  const { styles } = useStyles();

  const handleButtonPress = useCallback(async () => {
    const user = await authService.verifyCode('123456');
    userDispatch.setUser(user);
  }, [userDispatch]);

  return (
    <Container>
      <Icon.LogoWithText style={styles.icon} />

      <Title text='Te hemos enviado el código de acceso a tu correo' />

      <TextInput label='Código de ingreso' errorMessage='El código es incorrecto' />

      <Button label='Ingresar' onPress={handleButtonPress} />
    </Container>
  );
};
