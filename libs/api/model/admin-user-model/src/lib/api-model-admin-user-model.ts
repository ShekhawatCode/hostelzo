import { UserDocument } from '@hostelzo-mono-repo/api-interfaces';
import * as mongoose from 'mongoose';
export interface UserModelType extends mongoose.Model<UserDocument> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}
const schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    index: {
      name: 'emailIndex',
      global: true,
    },
  },
  password: String,
  passwordUpdatedAt: Number,
  isEmailVerified: {
    type: String,
    default: 'No',
  },
  loginAttempt: {
    type: Number,
    default: 0,
  },

  profileImage: String,
  lastLogin: Number,
  userType: {
    type: String,
  },
  authToken: String,
  resetPasswordToken: String,
  emailVerifyToken: String,
  status: {
    type: String,
    default: 'Active',
    enum: ['Active', 'Inactive', 'Deleted', 'Pending'],
  },
  gender: String,
  dob: String,
  mobile: String,
  createdAt: Number,
  updatedAt: Number,
  createdBy: String,
});

mongoose.pluralize(null);

/**
 * Get user By Id
 * @param id
 * @param callback
 */
schema.statics.getById = (id, callback) => {
  return AdminUserModel.findById(id, callback);
};

schema.statics.findByEmail = (email, callback) => {
  return AdminUserModel.findOne({ email: email }, callback);
};

/**
 * Get All user by type
 * @param id
 * @param callback
 */
schema.statics.getUsers = (type) => {
  const sort = { _id: -1 };

  return AdminUserModel.find({ userType: type })
    .select('-password')
    .sort(sort as any);
};
export const AdminUserModel: UserModelType = mongoose.model<UserDocument>(
  'users',
  schema
);
