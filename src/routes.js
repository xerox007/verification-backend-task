import { Router } from 'express';

import verifyRoutes from './routes/verifyRoutes';

/**
 * Contains all API routes for the application.
 */
const router = Router();

/**
 * GET /api
 */
router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

router.use('/verify', verifyRoutes);

export default router;
