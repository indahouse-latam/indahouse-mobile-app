import { createContext } from 'react';

import { User } from '@/user';

export const UserStateContext = createContext<User | null>(null);
