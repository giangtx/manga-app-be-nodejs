import express from 'express';
import categoryRouter from './category';
import chaptersRouter from './chapters';
import commentRouter from './comment';
import imagesRouter from './images';
import mangaRouter from './manga';
import userRouter from './users';
import authRouter from './auth';
import testRouter from './test';
import likeRouter from  './like';

const router = express.Router();

router.use('/categorys', categoryRouter);
router.use('/chapters', chaptersRouter);
router.use('/comments', commentRouter)
router.use('/images', imagesRouter);
router.use('/mangas', mangaRouter);
router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/test', testRouter);
router.use('/like', likeRouter);

export default router;
