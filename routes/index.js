import express from 'express';
import categoryRouter from './category';
import chaptersRouter from './chapters';
import imagesRouter from './images';
import mangaRouter from './manga';
import userRouter from './users';
import authRouter from './auth';
import testRouter from './test';

const router = express.Router();

router.use('/categorys', categoryRouter);
router.use('/mangas', mangaRouter);
router.use('/chapters', chaptersRouter);
router.use('/images', imagesRouter);
router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/test', testRouter);


export default router;
