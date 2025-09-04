import { useCallback, useEffect, useState } from 'react';

import { useLogger } from '@/logger';
import { useUserDispatch } from '@/user';

import { authService } from '../service/authService';

export const useAuthenticationCheck = () => {
  const logger = useLogger(useAuthenticationCheck.name);
  const userDispatch = useUserDispatch();

  const [isLoaded, setIsLoaded] = useState(false);

  const checkAuthentication = useCallback(async () => {
    try {
      const user = await authService.checkAuthentication();
      userDispatch.setUser(user);
      logger.log({ message: 'User authenticated', user });
    } catch (error) {
      logger.error({ message: 'Error during authentication check', error });
    } finally {
      setIsLoaded(true);
    }
  }, [logger, userDispatch]);

  useEffect(() => {
    checkAuthentication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoaded };
};
