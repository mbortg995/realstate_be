import { Router } from 'express';
import authRoutes from './auth/auth.router.js';
import buildingRoutes from './building_promotions/building.router.js'
import paymentRoutes from './payments/payment.router.js';
import postRoutes from './posts/post.router.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('Bienvenido a mi API');
});

router.use('/auth', authRoutes);
router.use('/buildings', buildingRoutes);
router.use('/payments', paymentRoutes);
router.use('/posts', postRoutes);


export default router;