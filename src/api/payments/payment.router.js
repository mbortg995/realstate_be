import { Router } from 'express';
import { paymentController } from './payment.controller.js';

const router = Router();

router.get('/', paymentController.index);
router.post('/', paymentController.bulkCreate);
router.put('/:paymentId', paymentController.update);
router.delete('/:paymentId', paymentController.delete);

export default router;