import { Router } from 'express';
import { paymentController } from './payment.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', authMiddleware, paymentController.index);
router.post('/', authMiddleware, paymentController.bulkCreate);
router.put('/:paymentId', authMiddleware, paymentController.bulkUpdate);
router.delete('/:paymentId', authMiddleware, paymentController.delete);

export default router;