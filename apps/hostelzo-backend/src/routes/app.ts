import express from 'express';

export const appRouter = express.Router();

/**
 * ==============================
 * Staff App Routes
 * ==============================
 */

/**
 * ==============================
 * Public Routes
 * ==============================
 */

appRouter.get('/', (req, res) => {
  res.send('Welcome HostelZo API111');
});
