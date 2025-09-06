import React, { FC, memo, useCallback, useState } from 'react';

import { Button, ButtonVariant, Icon } from '@/common';
import { useLogger } from '@/logger';
import { useUserDispatch } from '@/user';

import { authService } from '../../service/authService';

export const GoogleSignInButton: FC = memo(() => {
  const logger = useLogger(GoogleSignInButton.name);
  const userDispatch = useUserDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handlePress = useCallback(async () => {
    setIsLoading(true);

    try {
      const user = await authService.authenticateWithGmail();
      userDispatch.setUser(user);
      logger.log({ message: 'User signed in with Google', user });
    } catch (error) {
      logger.error({ message: 'Error signing in with Google', error });
    } finally {
      setIsLoading(false);
    }
  }, [logger, userDispatch]);

  return (
    <Button
      label='Ingresar con Google'
      leftIconComponent={Icon.GoogleOutlined}
      variant={ButtonVariant.OUTLINED}
      onPress={handlePress}
      isLoading={isLoading}
    />
  );
});
