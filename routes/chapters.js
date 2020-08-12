import express from 'express';
import * as chaptersController from '../controller/chapters.controller'

const router = express.Router();

router.post('/', chaptersController.addChapter)

router.route('/:id')
    .get(chaptersController.getById)
    .put(chaptersController.updateChapter)

router.get('/manga/:mangaId', chaptersController.getByManga)

export default router;