import { useMemo } from 'react';

import { createLogger } from '../utils/createLogger';

export const useLogger = (context: string) => {
  return useMemo(() => createLogger(context), [context]);
};
