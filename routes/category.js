import express from 'express';
import * as CategoryController from '../controller/category.controller'

const router = express.Router();

router.get('/', CategoryController.getAll);
router.get('/:id', CategoryController.getById)

export default router