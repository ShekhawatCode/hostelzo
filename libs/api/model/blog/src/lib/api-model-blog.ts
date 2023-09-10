import * as mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true],
    },
    description: {
      type: String,
    },
    // image: {
    //   type: String,
    // },
    urlSlug: {
      type: String,
      unique: true,
    },
    status: {
      type: String,
      enum: ['draft', 'unpublished', 'published'],
      default: 'published',
    },
    author: String,
    excerpt: String,
    // metaTags: {
    //   type: String,
    // },
    // tags: {
    //   type: Array,
    // },
    // createdBy: {
    //   type: Object,
    //   schema: {
    //     id: String,
    //     sortKey: String,
    //     staffId: String,
    //     hospitalId: String,
    //     firstName: String,
    //     lastName: String,
    //     email: String,
    //     userType: String,
    //     status: String,
    //     createdAt: Number,
    //   },
    // },
  },
  { timestamps: true }
);

/**
 * Get All Services
 * @param callback
 */
schema.statics.getAll = (callback) => {
  const sort:any = { _id: -1 };
  return Blog.find({}, callback).sort(sort);
};

/**
 * Get Services by Id
 * @param id
 * @param callback
 */
schema.statics.getById = (id, callback) => {
  return Blog.findById(id, callback);
};

mongoose.pluralize(null);
export const Blog = mongoose.models.Blog || mongoose.model<any>('Blog', schema);
