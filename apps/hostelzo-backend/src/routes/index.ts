import cookieParser from 'cookie-parser';
import csurf from 'csurf';

import { appRouter } from './app';
import { webRouter } from './web';

const routes = (app) => {
  /**
   * ==============================
   * CSRF Protection
   * ==============================
   */
  const csurfProtection = csurf({
    cookie: true,
  });

  /**
   * ==============================
   * Web Admin Routes
   * ==============================
   */
  app.use('/api/web', cookieParser(), csurfProtection, webRouter);

  /**
   * ==============================
   * Staff App Routes
   * ==============================
   */
  app.use('/api/app', appRouter);
};

export default routes;
