import { Blog } from '@hostelzo-mono-repo/api/model/blog';
import { ERROR_500 } from '@hostelzo-mono-repo/message';


/**
 * save new blog
 * @param req
 * @returns
 */
export const save = async (req) => {
    
  try {
   const blog = await Blog.findOne({urlSlug:req.body.urlSlug});
   if(blog){
     throw Error("Url Slug is not available");
   }
    if(req.file){
      req.body.image = await req.file.location;
    }
    const data = await Blog.create(req.body);
    if (data) {
      return data;
    }
    throw Error(ERROR_500);
  } catch (error) {
    throw Error(error.message);
  }
};






/**
 * Get All Blog
 * @returns
 */

export const getAll = async () => {
  try {
    const data = await Blog.find().sort({"createdAt":-1});

    if (data) {
      return data;
    }
    throw Error(ERROR_500);
  } catch (error) {
    throw Error(error.message);
  }
};



/**
 * get Blog By ID
 * @param req
 * @param res
 * @param next
 */
export const getById = async (req) => {
  try {
    const data = await Blog.findById(req.params.id);
    if (data) {
      return data;
    }
    throw Error(ERROR_500);
  } catch (error) {
    throw Error(error.message);
  }
};


/**
 * find Blog by UrlSlug
 * @param req
 * @returns
 */
export const getByUrl = async (url) => {
  try {
    const data = await Blog.findOne({ urlSlug: url });
    if (data) {
      return data;
    }
    throw Error(ERROR_500);
  } catch (error) {
    throw Error(error.message);
  }
};


/**
 * Update By Id
 * @param req 
 * @returns 
 */
export const updateById = async (req) => {
  try {
    if(req.file){
      req.body.image = await req.file.location;
    }
    const data = await Blog.findByIdAndUpdate(req.body.id, req.body, {
      useFindAndModify: false,
      new: true,
    });
    if (data) {
      return data;
    }
    throw Error(ERROR_500);
  } catch (error) {
    throw Error(error.message);
  }
};



/**
 * Delete By Id
 * @param req 
 * @returns 
 */
export const deleteById = async(req)=>{
  try {
    const data = await Blog.findByIdAndDelete(req.params.id,{useFindAndModify:false});
    if(data){
      return data
    }
    throw Error(ERROR_500)
  } catch (error) {
    throw Error(error.message);
  }
}

export const getAllPublished = async()=>{
  try {
    const data = await Blog.find({status:'published'}).sort({"createdAt":-1});
    return data;
  } catch (error) {
    throw Error(error.message)
  }
}




/**
 * Update Status
 * @param req 
 * @returns 
 */
export const statusUpdate = async (req)=>{
  try {
    const data = await Blog.findOneAndUpdate({_id:req.body.id},req.body,{useFindAndModify:false,new:true});
    return data;
  } catch (error) {
    throw Error(error.message);
  }
}