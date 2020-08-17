import express from 'express';
import * as userController from '../controller/user.controller'
import { verifyToken, verifyTokenCookie } from '../utils/jwtToken'
import { ROLE_USER, ROLE_ADMIN, ROLE_ROOT } from '../config/role.config'

const router = express.Router();

router.route('/')
    .post(verifyToken( [ ROLE_ADMIN ]), userController.createUser)

router.route('/:id')
    .get(verifyToken([ ROLE_USER, ROLE_ADMIN ]), userController.getById)
    .put(verifyToken([ ROLE_USER, ROLE_ADMIN ]), userController.updateUser)

router.route('/avatar/:id')
    .put(verifyTokenCookie([ ROLE_USER, ROLE_ADMIN]), userController.changeAvatar)

export default router;
