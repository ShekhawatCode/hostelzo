import { UserDocument } from '@hostelzo-mono-repo/api-interfaces';
import * as mongoose from 'mongoose';
export interface UserModelType extends mongoose.Model<UserDocument> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}
const blogContentSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  cover_image:String,
  slug:String,
  excerpt:String,
  status: {
    type: String,
    default: 'Active',
    enum: ['Active', 'Inactive', 'Deleted', 'Pending'],
  },
  createdAt: Number,
  updatedAt: Number,
   createdBy: {
    type: Object,
    schema: {
      id: String,
      sortKey: String,
      staffId: String,
      hospitalId: String,
      firstName: String,
      lastName: String,
      email: String,
      userType: String,
      status: String,
      createdAt: Number,
    },
  },
});

mongoose.pluralize(null);

export const AdminUserModel: UserModelType = mongoose.model<UserDocument>(
  'BlogContent',
  blogContentSchema
);
