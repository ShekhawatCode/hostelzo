import { UserDocument } from '@hostelzo-mono-repo/api-interfaces';
import * as mongoose from 'mongoose';
export interface UserModelType extends mongoose.Model<UserDocument> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}
const staticContentSchema = new mongoose.Schema({
  title: String,
  short_description:String,
  description: String,
  key:String,
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

export const StaticContent: UserModelType = mongoose.model<UserDocument>(
  'StaticContent',
  staticContentSchema
);
