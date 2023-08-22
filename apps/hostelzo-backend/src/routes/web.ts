import express from 'express';
// import { logParams } from '@aitriage/api/helper';
import {
  adminUserCreateValidation,
  creatAdminUser,
  loginAdmin,
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

/**
 * ==============================
 * Public Routes
 * ==============================
 */

webRouter.get('/', (req, res) => {
  res.send('Welcome aiTriage Web API');
});
