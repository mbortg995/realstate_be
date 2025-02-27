import { Router } from 'express';
import { paymentController } from './payment.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', authMiddleware, paymentController.index);
router.post('/', authMiddleware, paymentController.bulkCreate);
router.put('/', authMiddleware, paymentController.bulkUpdate);
router.delete('/:paymentId', authMiddleware, paymentController.bulkDelete);

export default router;