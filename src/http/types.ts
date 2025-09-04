import { JsonValueInput } from '@/common';

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface WithHeaders {
  headers?: Record<string, string>;
}

export interface RequestConfig extends WithHeaders {
  method: HttpMethod;
  url?: string;
  body?: JsonValueInput;
}

export type MutableConfig = Required<WithHeaders>;

export interface HttpClientConfig extends WithHeaders {
  baseURL?: string;
  onBeforeRequest?: (config: MutableConfig) => void;
}

export interface HttpClient {
  sendRequest<TResponse = any>(requestConfig: RequestConfig): Promise<TResponse>;
}
