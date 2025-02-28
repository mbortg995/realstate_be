import { Router } from 'express';
import { postController } from './post.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import upload from '../middleware/images.middleware.js';

const router = Router();

router.get('/', authMiddleware, postController.index);
router.post('/', authMiddleware, upload.array('images', 10), postController.create);
router.put('/:postId', authMiddleware, postController.update);
router.delete('/:postId', authMiddleware, postController.delete);

export default router;
