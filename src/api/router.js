import { Router } from 'express';
import authRoutes from './auth/auth.router.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('Bienvenido a mi API');
});

router.use('/auth', authRoutes);


export default router;