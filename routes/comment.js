import express from 'express'
import * as commentController from '../controller/comment.controller'

const router = express.Router();

router.route('/')
    .post(commentController.addComment)

router.route('/:id')
    .put(commentController.editComment)
    .delete(commentController.deleteComment)

router.route('/manga/:mangaId')
    .get(commentController.getByManga)

export default router;