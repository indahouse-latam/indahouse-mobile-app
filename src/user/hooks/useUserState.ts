import { useContext } from 'react';

import { UserStateContext } from '../context/UserStateContext';

export const useUserState = () => useContext(UserStateContext);
