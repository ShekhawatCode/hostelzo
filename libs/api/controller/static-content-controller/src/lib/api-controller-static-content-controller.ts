import { validationResult } from 'express-validator';
import {
  APIResponseType,
  StaticContentType,
} from '@hostelzo-mono-repo/api-interfaces';
import {
  ERROR_500,
  STATIC_CONTENT_CREATE_SUCCESS,
} from '@hostelzo-mono-repo/message';
import {
  returnErrorResponse,
  returnSuccessResponse,
} from '@hostelzo-mono-repo/api/helper';

/**
 * Check validations for CREATE ADMIN request
 */

/**
 * Controller For Creat Static Content  API
 * @param request
 * @param response
 * @param next
 */

export const creatStaticContent = async (request, response, next) => {
  
  const errors = validationResult(request).array();

  const responseData = {} as APIResponseType;
  if (errors.length > 0) {
    
    responseData.data = {};
    responseData.message = errors[0].msg;
    return response.status(500).json(responseData);
  } else {
    
    try {

      const newStaticContent = { ...request.body } as StaticContentType;

      const createdDate = new Date().getTime();
      newStaticContent.createdAt = createdDate;
      
      const data = newStaticContent;

      if (data) {
        return returnSuccessResponse(
          STATIC_CONTENT_CREATE_SUCCESS,
          data,
          response
        );
      } else {
        return returnErrorResponse(ERROR_500, {}, response);
        
      }
    } catch (error) {
      next(error);
    }
  }
};
