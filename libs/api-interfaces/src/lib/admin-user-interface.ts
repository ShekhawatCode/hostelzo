import { Document } from 'mongoose';
export interface AdminUserType {
  id: string;
  profileImage: string;
  updatedAt: number;
  emailVerifyToken: any;
  isEmailVerified: string;
  _id: string;
  sortKey: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordUpdatedAt: number;
  loginAttempt: number;
  lastLogin: number;
  authToken: string;
  resetPasswordToken: string;
  userType: string;
  status: string;
  createdAt: number;
  createdBy: string;
  token: any;
  userResult: any;
}

export interface AdminUserLoginRequestType {
  body: {
    email: string;
    password: string;
  };
}

export interface AdminUserForgotPasswordRequestType {
  body: {
    email: string;
  };
}

export interface AdminUserCreateRequestType {
  params: any;
  body: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
}

export interface UserDocument extends Document {
  profileImage: string;
  status: string;
  userType: string;
  email: string;
  name: string;
  isEmailVerified: string;
}
export interface userDataType {
  token: any;
  userResult: any;
}
