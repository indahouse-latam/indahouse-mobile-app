import { createContext } from 'react';

import { User } from '../entities/user';

interface UserDispatch {
  setUser: (user: User) => void;
}

export const UserDispatchContext = createContext<UserDispatch | null>(null);
