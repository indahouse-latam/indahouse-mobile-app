import { buildHttpError, isHttpError } from './httpError';
import { HttpClient, HttpClientConfig, MutableConfig, RequestConfig } from './types';

const buildUrl = (httpClientConfig: HttpClientConfig, requestConfig: RequestConfig) => {
  let url = '';
  if (httpClientConfig.baseURL) url += httpClientConfig.baseURL;
  if (requestConfig.url) url += requestConfig.url;
  return url;
};

const buildHeaders = (httpClientConfig: HttpClientConfig, requestConfig: RequestConfig) => {
  return {
    'Content-Type': 'application/json',
    ...httpClientConfig.headers,
    ...requestConfig.headers,
  };
};

export const createHttpClient = (httpClientConfig: HttpClientConfig = {}): HttpClient => {
  const sendRequest = async <TResponse = any>(requestConfig: RequestConfig) => {
    const url = buildUrl(httpClientConfig, requestConfig);
    const headers = buildHeaders(httpClientConfig, requestConfig);

    let body: string | undefined;
    if (requestConfig.body) {
      body = JSON.stringify(requestConfig.body);
    }

    const mutableConfig: MutableConfig = { headers };

    try {
      if (httpClientConfig.onBeforeRequest) {
        httpClientConfig.onBeforeRequest(mutableConfig);
      }

      const response = await fetch(url, {
        method: requestConfig.method,
        headers: mutableConfig.headers,
        body: body,
      });

      if (response.ok) {
        return response.json() as Promise<TResponse>;
      }

      throw buildHttpError(response.status, await response.json());
    } catch (error) {
      if (isHttpError(error)) throw error;

      throw buildHttpError(500, error);
    }
  };

  return { sendRequest };
};
