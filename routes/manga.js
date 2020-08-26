import express from 'express';
import * as mangaController from '../controller/manga.controller'
import { verifyTokenCookie } from '../utils/jwtToken'
import { ROLE_ADMIN, ROLE_USER, ROLE_ROOT } from '../config/role.config'

const router = express.Router();

router.route('/')
    .get(mangaController.getAll)
    .post(verifyTokenCookie([ ROLE_ROOT, ROLE_ADMIN, ROLE_USER]), mangaController.addManga)

router.route('/user')
    .get(verifyTokenCookie([ ROLE_ROOT, ROLE_ADMIN, ROLE_USER]), mangaController.getByUser)

router.route('/author')
    .get(mangaController.getByAuthor)

router.route('/newUpdate')
    .get(mangaController.getByNewUpdateChapter)

router.route('/likeDesc')
    .get(mangaController.getByLikeDesc)

router.route('/:id')
    .get(mangaController.getById)
    .put(verifyTokenCookie([ ROLE_ROOT, ROLE_ADMIN, ROLE_USER]), mangaController.editManga)
    .delete(mangaController.deleteManga)

router.get('/category/:categoryId', mangaController.findByCategory)

export default router;