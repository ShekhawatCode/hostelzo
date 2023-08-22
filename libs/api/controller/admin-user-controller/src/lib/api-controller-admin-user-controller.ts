import { AdminUserModel } from '@hostelzo-mono-repo/api/model/admin-user-model';
import * as jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';
import { compareSync, hashSync } from 'bcrypt';
import {
  APIResponseType,
  AdminUserType,
} from '@hostelzo-mono-repo/api-interfaces';
import {
  ACCOUNT_APPROVAL,
  ACCOUNT_BLOCKED,
  ACCOUNT_INACTIVATED,
  ADMIN_CREATE_SUCCESS,
  EMAIL_REGISTERED,
  EMAIL_REQUIRED,
  ERROR_401,
  ERROR_500,
  FIRST_NAME_REQUIRED,
  INVALID_EMAIL_PASS,
  LAST_NAME_REQUIRED,
  LOGIN_SUCCESS,
  NOT_REGISTERED_EMAIL,
  PASSWORD_MAX_LENGTH,
  PASSWORD_REQUIRED,
} from '@hostelzo-mono-repo/message';
import {
  returnErrorResponse,
  returnSuccessResponse,
} from '@hostelzo-mono-repo/api/helper';

/**
 * Check validations for CREATE ADMIN request
 */
export const adminUserCreateValidation = [
  check('firstName').not().isEmpty().withMessage(FIRST_NAME_REQUIRED),
  check('lastName').not().isEmpty().withMessage(LAST_NAME_REQUIRED),
  check('email').not().isEmpty().withMessage(EMAIL_REQUIRED),
  check('password').not().isEmpty().withMessage(PASSWORD_REQUIRED),
  check('password').isLength({ min: 8 }).withMessage(PASSWORD_MAX_LENGTH),
];

/**
 * Controller for CREATE ADMIN API
 * @param request
 * @param response
 * @param next
 */

export const signUp = async (user) => {
  const userRecord = await AdminUserModel.create(user);
  return userRecord;
};

export const checkEmail = async (email) => {
  console.log(email);

  const Data = await AdminUserModel.findOne({ email: email });
  return Data ? true : false;
};

export const sendEmailVerificationMail = async (newUser) => {
  console.log('hello');
};

export const creatAdminUser = async (request, response, next) => {
  const errors = validationResult(request).array();

  const responseData = {} as APIResponseType;
  if (errors.length > 0) {
    responseData.data = {};
    responseData.message = errors[0].msg;
    return response.status(500).json(responseData);
  } else {
    try {
      const user = await checkEmail(request.body.email);

      if (user) {
        return returnErrorResponse(EMAIL_REGISTERED, {}, response);
      } else {
        const newUser = { ...request.body } as AdminUserType;

        const createdDate = new Date().getTime();
        newUser.password = hashSync(newUser.password, 12);

        newUser.emailVerifyToken = jwt.sign(
          {
            email: newUser.email,
            userType: newUser.userType,
          },
          'process.env.JWT_KEY'
        );
        newUser.createdAt = createdDate;
        newUser.updatedAt = createdDate;
        if (newUser.userType == 'user') {
          newUser.status = 'Active';
        } else {
          newUser.status = 'Pending';
        }

        const data = await signUp(newUser);
        if (data) {
          sendEmailVerificationMail(newUser);
          return returnSuccessResponse(ADMIN_CREATE_SUCCESS, data, response);
        } else {
          return returnErrorResponse(ERROR_500, {}, response);
        }
      }
    } catch (error) {
      next(error);
    }
  }
};

const isSuperAdmin = async (email) => {
  const data = await AdminUserModel.findByEmail(email);
  return data.userType === 'SuperAdmin' ? true : false;
};
export const increaseLoginAttemptForUser = async (
  userId: string,
  currentNumberOfAttempt: number
) => {
  try {
    const Data = await AdminUserModel.findByIdAndUpdate(
      userId,
      { loginAttempt: currentNumberOfAttempt + 1 },
      { useFindAndModify: false }
    );
    return Data;
  } catch (error) {
    return error;
  }
};
export const generateJwtTokenForUser = (userData) => {
  return jwt.sign(
    {
      _id: userData._id,
      userType: userData.userType,
    },
    process.env.JWT_KEY || 'secret'
  );
};
export const updateLoginInfoForUser = async (userData) => {
  try {
    const token = generateJwtTokenForUser(userData);
    const userResult = await AdminUserModel.findByIdAndUpdate(
      userData._id,
      {
        authToken: token,
        loginAttempt: 0,
        lastLogin: new Date().getTime(),
      },
      { useFindAndModify: false }
    );
    const user = userResult.toJSON() as unknown as AdminUserType;
    delete user.password;
    delete user.authToken;
    const data = { userResult: user, token: token };
    return data;
  } catch (error) {
    return error;
  }
};
export const verifyAdminAccount = async (params, response, next) => {
  try {
    const result = await AdminUserModel.findOne({ email: params.email });
    const userData = result.toJSON() as unknown as AdminUserType;
    if (userData && userData.isEmailVerified === 'No') {
      sendEmailVerificationMail(userData);
      returnErrorResponse(ADMIN_CREATE_SUCCESS, {}, response);
    } else if (userData.status === 'Pending') {
      returnErrorResponse(ACCOUNT_APPROVAL, {}, response);
    } else if (userData.status !== 'Active') {
      returnErrorResponse(ACCOUNT_INACTIVATED, {}, response);
    } else if (userData.loginAttempt >= 3) {
      const userResult = await AdminUserModel.findByIdAndUpdate(
        userData._id,
        {
          status: 'Blocked',
        },
        { useFindAndModify: false }
      );
      returnErrorResponse(ACCOUNT_BLOCKED, {}, response);
    } else if (!compareSync(params.password, userData.password)) {
      if (userData.userType !== 'SuperAdmin') {
        await increaseLoginAttemptForUser(userData._id, userData.loginAttempt);
      }
      returnErrorResponse(INVALID_EMAIL_PASS, {}, response);
    } else {
      return await updateLoginInfoForUser(userData);
    }
  } catch (error) {
    return error;
  }
};

/**
 * Admin Login
 * @param request
 * @param response
 * @param next
 */
export const loginAdmin = async (request, response, next) => {
  try {
    const emailExists = await checkEmail(request.body.email);
    if (!emailExists) {
      return returnErrorResponse(NOT_REGISTERED_EMAIL, {}, response);
    }
    const isAdmin = await isSuperAdmin(request.body.email);
    if (!isAdmin) {
      return returnErrorResponse(ERROR_401, {}, response);
    }
    const data = await verifyAdminAccount(request.body, response, next);
    const userData = data as AdminUserType;
    response.cookie('token', userData.token, {
      maxAge: 60 * 60 * 1000, // 1 hour
      httpOnly: true,
      sameSite: true,
    });

    return returnSuccessResponse(LOGIN_SUCCESS, userData.userResult, response);
  } catch (error) {
    next(error);
  }
};
