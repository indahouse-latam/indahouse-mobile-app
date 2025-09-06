import { FC, useCallback } from 'react';
import { View } from 'react-native';

import { RootStackScreen, RootStackScreenProps } from '@/app';
import { authService } from '@/auth/service/authService';
import { Button, TextInput, Title } from '@/common';

import { Container } from '../../components/container/Container';

import { GoogleSignInButton } from './GoogleSignInButton';
import { useStyles } from './useStyles';

interface Props extends RootStackScreenProps<RootStackScreen.HOME> {}

export const HomeScreen: FC<Props> = ({ navigation }) => {
  const { styles } = useStyles();

  const handleSignInButtonPress = useCallback(async () => {
    await authService.sendVerificationCode('email@email.com');

    navigation.navigate(RootStackScreen.VERIFICATION_CODE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title text='¡Nos alegra que estés aquí!' />

      <TextInput label='Email' errorMessage='El email es requerido' />

      <View style={styles.bottomContainer}>
        <Button label='Ingresar' onPress={handleSignInButtonPress} />

        <GoogleSignInButton />
      </View>
    </Container>
  );
};
