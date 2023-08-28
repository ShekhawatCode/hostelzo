export interface Message {
  message: string;
}
export interface Error {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface APIResponseType {
  message: string;
  data: Record<string, unknown>;
}
export interface APISuccessResponseType {
  message: string;
  data: Record<string, unknown>;
}

export interface APIErrorResponseType {
  message: string;
  error: Record<string, unknown>;
}

export interface CSRFAPIResponseType {
  csrfToken: string;
}

export interface saveAdminUserRequestType {
  body: {
    name: string;
    email: string;
    password: string;
  };
}

export interface loginAdminUserRequestType {
  body: {
    email: string;
    password: string;
  };
  originalUrl: string;
}

export interface userForgotPasswordRequestType {
  body: {
    email: any;
  };
  originalUrl: string;
}
export type GeneralObject = { [key: string]: any };
