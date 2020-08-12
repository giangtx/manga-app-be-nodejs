import express from 'express';
import * as imagesController from '../controller/images.controller';

const router = express.Router();

router.route('/')
    .post(imagesController.addImages)

router.get('/chapter/:chapterId', imagesController.getByChapter);

export default router;0