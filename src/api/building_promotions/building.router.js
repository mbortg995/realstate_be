import { Router } from 'express';
import { buildingController } from './building.controller.js';

const router = Router();

router.get('/', buildingController.index);
router.get('/:buildingId', buildingController.getById);
router.post('/', buildingController.create);

export default router;