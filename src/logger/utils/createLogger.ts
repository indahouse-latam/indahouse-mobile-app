import { LogLevel } from '../types';

import { buildLogMethod } from './buildLogMethod';

export const createLogger = (initialContext?: string) => {
  return {
    log: buildLogMethod(LogLevel.LOG, initialContext),
    error: buildLogMethod(LogLevel.ERROR, initialContext),
  };
};
