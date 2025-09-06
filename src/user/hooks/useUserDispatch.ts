import { useContext } from 'react';

import { UserDispatchContext } from '../context/UserDispatchContext';

export const useUserDispatch = () => useContext(UserDispatchContext)!;
