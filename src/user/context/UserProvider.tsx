import { FC, useMemo, useState } from 'react';

import { WithChildren } from '@/common';

import { User } from '../entities/user';

import { UserDispatchContext } from './UserDispatchContext';
import { UserStateContext } from './UserStateContext';

export const UserProvider: FC<WithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const userDispatch = useMemo(() => ({ setUser }), [setUser]);

  return (
    <UserDispatchContext.Provider value={userDispatch}>
      <UserStateContext.Provider value={user}>{children}</UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
};
