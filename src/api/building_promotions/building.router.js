import { Router } from 'express';
import { buildingController } from './building.controller.js';

const router = Router();

router.get('/', buildingController.index);

export default router;