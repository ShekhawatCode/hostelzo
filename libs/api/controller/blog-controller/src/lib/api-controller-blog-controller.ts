
import { returnErrorResponse, returnSuccessResponse } from "@hostelzo-mono-repo/api/helper";
import { SUCCESS } from "@hostelzo-mono-repo/message";
import { deleteById, getAll, getAllPublished, getById, getByUrl, save, statusUpdate, updateById } from "./blog.service";

/**
 * Save Blog
 * @param req 
 * @param res 
 * @returns 
 */
export const saveBlog = async(req,res)=>{
  
  try {
    const data = await save(req);
    return returnSuccessResponse(SUCCESS,data,res);
  } catch (error) {
    return returnErrorResponse(error.message,{},res);
  }
}



/**
 * Get All Blogs
 * @param req 
 * @param res 
 * @returns 
 */
export const getAllBlogs = async (req,res)=>{
  
  const url = req.baseUrl ? req.baseUrl.split('/') : [];
  console.log("son",url);

  try {
    const data = await getAll();
    if (url[2] === 'web' || url[2] === 'app') {
      return returnSuccessResponse(SUCCESS,data,res)
    }
    return data;
  } catch (error) {
    if (url[2] === 'web' || url[2] === 'app') {
      return returnErrorResponse(error.message,{},res);
    }
    throw Error(error.message);
  }
}



/**
 * Get Blog By Id
 * @param req 
 * @param res 
 * @returns 
 */
export const GetBlogById = async (req,res)=>{
  const url = req.baseUrl ? req.baseUrl.split('/') : [];
  try {
    const data = await getById(req);
    if (url[2] === 'web' || url[2] === 'app') {
      return returnSuccessResponse(SUCCESS,data,res)
    }
    return data;
  } catch (error) {
    if (url[2] === 'web' || url[2] === 'app') {
      return returnErrorResponse(error.message,{},res);
    }
    throw Error(error.message);
  }
}





/**
 * Get blog By urlSlug
 * @param req 
 * @param res 
 * @returns 
 */
export const getBlogByUrl = async(req,res)=>{
  const url = req.baseUrl ? req.baseUrl.split('/') : [];
  try {
    const data = await getByUrl(req.params.url);
    if (url[2] === 'web' || url[2] === 'app') {
      return returnSuccessResponse(SUCCESS,data,res)
    }
    return data;
  } catch (error) {
    if (url[2] === 'web' || url[2] === 'app') {
      return returnErrorResponse(error.message,{},res);
    }
    throw Error(error.message);
  }
}




/**
 * Update Blog By Id
 * @param req 
 * @param res 
 * @returns 
 */
export const updateBlogById = async(req,res)=>{
  const url = req.baseUrl ? req.baseUrl.split('/') : [];
  try {
    const data  =await updateById(req);
    if (url[2] === 'web' || url[2] === 'app') {
      return returnSuccessResponse(SUCCESS,data,res)
    }
    return data;
  } catch (error) {
    if (url[2] === 'web' || url[2] === 'app') {
      return returnErrorResponse(error.message,{},res);
    }
    throw Error(error.message);
  }
}


/**
 * Delete Blog By Id
 * @param req 
 * @param res 
 * @returns 
 */
export const deleteBlogById = async (req,res)=>{
  const url = req.baseUrl ? req.baseUrl.split('/') : [];
  try {
    const data = await deleteById(req);
    if (url[2] === 'web' || url[2] === 'app') {
      return returnSuccessResponse(SUCCESS,data,res)
    }
    return data;
  } catch (error) {
    if (url[2] === 'web' || url[2] === 'app') {
      return returnErrorResponse(error.message,{},res);
    }
    throw Error(error.message);
  }
}
/**
 * Get Blog Listing controller for website only
 * @returns 
 */
export const getBlogLists = async ()=>{
  try {
    const data = await getAllPublished();
    
    return data;
  } catch (error) {
   
    throw Error(error.message);
  }
}

/**
 * Change Blog post status
 * @param req 
 * @param res 
 * @returns 
 */
export const changeBlogPostStatus = async(req,res)=>{
  try {
    const data = await statusUpdate(req);
    return returnSuccessResponse(SUCCESS,data,res)
  } catch (error) {
    return returnErrorResponse(error.message,{},res)
  }
}