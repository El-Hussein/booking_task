import {BookingState} from '../booking';

export enum ErrorCodes {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
}

export interface ApiRequestErrorResponse {
  error: {
    message: string;
    type: string;
    code: ErrorCodes;
  };
}

export interface ReduxState {
  booking: BookingState;
}
