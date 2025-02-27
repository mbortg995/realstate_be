import { Router } from 'express';
import { postController } from './post.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', authMiddleware, postController.index);
router.post('/', authMiddleware, postController.create);
router.put('/:postId', authMiddleware, postController.update);
router.delete('/:postId', authMiddleware, postController.delete);

export default router;
