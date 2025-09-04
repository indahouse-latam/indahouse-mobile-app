export interface HttpError {
  isHttpError: true;
  statusCode: number;
  data: any;
}

export const buildHttpError = (statusCode: number, data: any): HttpError => {
  return { isHttpError: true, statusCode, data };
};

export const isHttpError = (error: any): error is HttpError => {
  return error && (error as HttpError).isHttpError;
};
