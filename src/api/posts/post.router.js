import { Router } from 'express';
import { postController } from './post.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const router = Router();

router.get('/', authMiddleware, postController.index);
router.post('/', authMiddleware, upload.array('images', 10), postController.create);
router.put('/:postId', authMiddleware, postController.update);
router.delete('/:postId', authMiddleware, postController.delete);

export default router;
