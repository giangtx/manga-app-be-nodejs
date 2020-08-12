import express from 'express';
import * as MangaController from '../controller/manga.controller'

const router = express.Router();

router.route('/')
    .get(MangaController.getAll)
    .post(MangaController.addManga)

router.route('/:id')
    .get(MangaController.getById)
    .put(MangaController.editManga)
    .delete(MangaController.deleteManga)

router.get('/category/:categoryId', MangaController.findByCategory)

export default router;