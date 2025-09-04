import { LogLevel } from '../types';

export const buildLog = (logLevel: LogLevel, data: any, context?: string) => {
  return JSON.stringify({ level: logLevel, context, data }, null, 2);
};
