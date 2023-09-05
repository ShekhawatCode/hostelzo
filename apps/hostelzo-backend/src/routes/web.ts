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


webRouter
  .route('/reset-password')
  .post( updatePassword);
  webRouter
  .route('/change-password')
  .post(changePassword);

/**
 * ==============================
 * Public Routes
 * ==============================
 */

webRouter.get('/', (req, res) => {
  res.send('Welcome aiTriage Web API');
});
