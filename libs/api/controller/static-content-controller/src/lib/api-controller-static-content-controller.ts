import {check, validationResult } from 'express-validator';
import {
  APIResponseType,
} from '@hostelzo-mono-repo/api-interfaces';
import {
  STATIC_CONTENT_KEY_MAX_LENGTH,
  STATIC_CONTENT_KEY_REQUIRED,
  STATIC_DESCRIPTION_REQUIRED,
  STATIC_TITLE_REQUIRED,
} from '@hostelzo-mono-repo/message';
import {
  returnErrorResponse,
} from '@hostelzo-mono-repo/api/helper';
import { getAllContent, getContentById, getContentByKey, saveNewContent, updateContentByKey } from './static-content.service';

/**
 * Check validations for CREATE ADMIN request
 */

// static content validation
export const createStaticContentValidation = [
    check('title').not().isEmpty().withMessage(STATIC_TITLE_REQUIRED),
    check('description')
        .not()
        .isEmpty()
        .withMessage(STATIC_DESCRIPTION_REQUIRED),
    check('key')
        .not()
        .isEmpty()
        .withMessage(STATIC_CONTENT_KEY_REQUIRED)
        .isLength({ min: undefined, max: 100 })
        .withMessage(STATIC_CONTENT_KEY_MAX_LENGTH),
];


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
       saveNewContent(request, response, next);
    } catch (error) {
      next(error);
    }
  }
};


// get All Static content
export const getAllStaticContent = async (request, response, next) => {
    try {
        return await getAllContent(response, next);
    } catch (error) {
        throw Error(error.message);
    }
};


//get static content  by Key
export const staticContentGetByKey = async (request, response) => {
    try {
        return await getContentByKey(request, response);
    } catch (error) {
        throw Error(error.message);
    }
};


//get static content  by Id
export const staticContentGetById = async (request, response, next) => {
    try {
        return await getContentById(request, response, next);
    } catch (error) {
        throw Error(error.message);
    }
};



/**
 * update static content validation
 */
export const updateStaticContentValidation = [
    check('title').not().isEmpty().withMessage(STATIC_TITLE_REQUIRED),
    check('description')
        .not()
        .isEmpty()
        .withMessage(STATIC_DESCRIPTION_REQUIRED),
];

// update  static content
export const updateStaticContent = async (request, response, next) => {
    const errors = validationResult(request).array();
    if (errors.length > 0) {
        return returnErrorResponse(errors[0].msg, {}, response);
    }
    try {
        return await updateContentByKey(request, response, next);
    } catch (error) {
        throw Error(error.message);
    }
};

