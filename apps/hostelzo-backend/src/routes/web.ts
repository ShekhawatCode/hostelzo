import express from 'express';
// import { logParams } from '@aitriage/api/helper';
import {
  adminUserCreateValidation,
  changePassword,
  creatAdminUser,
  forgotPasswordUser,
  forgotPasswordValidation,
  loginAdmin,
  updatePassword,
} from '@hostelzo-mono-repo/api/controller/admin-user-controller';
import { creatStaticContent, createStaticContentValidation, getAllStaticContent, staticContentGetById, staticContentGetByKey, updateStaticContent, updateStaticContentValidation } from '@hostelzo-mono-repo/api/controller/static-content-controller';
import { GetBlogById, changeBlogPostStatus, deleteBlogById, getAllBlogs, getBlogByUrl, getBlogLists, saveBlog, updateBlogById } from '@hostelzo-mono-repo/api/controller/blog-controller';

// import {
//   creatAdminUser,
//   adminUserCreateValidation,
// } from '@aitriage/api/controller/admin-user-controller';

export const webRouter = express.Router();

/**
 * ==============================
 * Auth Routes
 * ==============================
 */
webRouter.get('/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

/**
 * ==============================
 * Super Admin Routes
 * ==============================
 */
webRouter.route('/adminUser').post(adminUserCreateValidation, creatAdminUser);

webRouter.route('/adminLogin').post(loginAdmin);

webRouter
  .route('/forgot-password')
  .post(forgotPasswordValidation, forgotPasswordUser);

webRouter.route('/creatStaticContent').post(creatStaticContent, creatAdminUser);

webRouter
  .route('/reset-password')
  .post( updatePassword);
  webRouter
  .route('/change-password')
  .post(changePassword);


/**
 * ==============
 * Blog Post Routes
 * ==============
 */


webRouter
    .route('/saveBlogPost')
    .post(  saveBlog);

webRouter
.route('/getAllBlogPost').get(getAllBlogs);

webRouter.route('/getBlogPostById/:id').get( GetBlogById);


webRouter.route('/getBlogPostByUrl/:slug').get( getBlogByUrl);
webRouter.route('/getBlogPostPublished').get( getBlogLists);

webRouter
    .route('/updateBlogPost')
    .post( updateBlogById);

webRouter
    .route('/deleteBlogPost/:id')
    .get( deleteBlogById);
webRouter
    .route('/updateBlogStatus')
    .post( changeBlogPostStatus);


/**
 *===============================
 * Static Content Routes
 *================================
 */
webRouter
    .route('/saveStaticContent')
    .post(createStaticContentValidation, creatStaticContent);
webRouter.route('/getAllStaticContent').get(getAllStaticContent);
webRouter
    .route('/staticContentGetBykey/:key')
    .get( staticContentGetByKey);
webRouter
    .route('/staticContentGetById/:id')
    .get( staticContentGetById);
webRouter
    .route('/updateStaticContent')
    .post(
        updateStaticContentValidation,
        
        updateStaticContent
    );

/**
 * ==============================
 * Public Routes
 * ==============================
 */

webRouter.get('/', (req, res) => {
  res.send('Welcome aiTriage Web API');
});


