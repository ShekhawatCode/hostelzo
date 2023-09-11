import { returnErrorResponse, returnSuccessResponse } from "@hostelzo-mono-repo/api/helper";
import { StaticContent } from "@hostelzo-mono-repo/api/model/static-content-model";
import { ERROR_500, STATIC_CONTENT_CREATE_SUCCESS, STATIC_CONTENT_LIST_SUCCESS, STATIC_CONTENT_UPDATE_SUCCESS } from "@hostelzo-mono-repo/message";

/**
 * save New Static Content
 * @param request
 * @param response
 * @param next
 */
export const saveNewContent = async (request, response, next) => {
    try {
        const data = await StaticContent.create(request.body);
        return returnSuccessResponse(
            STATIC_CONTENT_CREATE_SUCCESS,
            data,
            response
        );
    } catch (error) {
        // next(error);

        return returnErrorResponse(error.message, {}, response);
    }
};



/**
 * get Static Content By Key
 * @param request
 * @param response
 * @param next
 */
export const getContentByKey = async (request, response) => {
    try {
        const data = await StaticContent.getStaticContentByKey(
            request.params.key.split(',')
        );

        if (data) {
            return data;
        }

        throw Error(ERROR_500);
    } catch (error) {
        throw Error(error.message);
    }
};


/**
 * get All Static Content
 * @param response
 * @param next
 */
export const getAllContent = (response, next) => {
    try {
        StaticContent
            .staticContentGetAll()
            .then((data) => {
                if (data) {
                    return returnSuccessResponse(
                        STATIC_CONTENT_LIST_SUCCESS,
                        data,
                        response
                    );
                }
                return returnErrorResponse(ERROR_500, {}, response);
            })
            .catch((error) => {
                return returnErrorResponse(error, {}, response);
            });
    } catch (error) {
        // next(error);
    }
};



/**
 * get Static Content By Id
 * @param request
 * @param response
 * @param next
 */
export const getContentById = (request, response, next) => {
    try {
        StaticContent
            .getStaticContentById(request.params.id)
            .then((data) => {
                if (data) {
                    return returnSuccessResponse(
                        STATIC_CONTENT_LIST_SUCCESS,
                        data,
                        response
                    );
                }
                return returnErrorResponse(ERROR_500, {}, response);
            })
            .catch((error) => {
                return returnErrorResponse(error, {}, response);
            });
    } catch (error) {
        //next(error);
    }
};



/**
 * Update static Content
 * @param request
 * @param response
 * @param next
 */
export const updateContentByKey = async (request, response, next) => {
    try {
        const data = await StaticContent.findOneAndUpdate(
            { _id: request.body.id },
            {
                title: request.body.title,
                description: request.body.description,
            },
            { useFindAndModify: true }
        );
        if (data) {
        
            return returnSuccessResponse(
                STATIC_CONTENT_UPDATE_SUCCESS,
                data,
                response
            );
        } else {
     
            return returnErrorResponse(ERROR_500, {}, response);
        }
    } catch (error) {
        next(error);
    }
};