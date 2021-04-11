import { Router } from 'express';

import * as verifyController from '../controllers/verify';
import { codeValidator } from '../validators/codeValidator';

const router = Router();

/**
 * POST /api/verify
 */
router.post('/', codeValidator, verifyController.verify);

export default router;
