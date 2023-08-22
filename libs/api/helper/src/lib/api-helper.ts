import { APIResponseType } from '@hostelzo-mono-repo/api-interfaces';

/**
 * Function for returning Error response
 * @param message
 * @param data
 * @param response
 */
export function returnErrorResponse(message, data, response): string {
  const responseData = {} as APIResponseType;
  responseData.message = message;
  responseData.data = data;
  return response.status(500).json(responseData);
}

/**
 * Function for returning Success response
 * @param message
 * @param data
 * @param response
 */
export function returnSuccessResponse(message, data, response): string {
  const responseData = {} as APIResponseType;
  responseData.message = message;
  responseData.data = data;
  return response.json(responseData);
}
