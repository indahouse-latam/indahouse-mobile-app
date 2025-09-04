import { LogLevel } from '../types';

import { buildLog } from './buildLog';

export const buildLogMethod = (logLevel: LogLevel, initialContext?: string) => {
  return (data: any, context?: string) => {
    console.log(buildLog(logLevel, data, context ?? initialContext));
  };
};
