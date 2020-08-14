import express from 'express';
import * as userController from '../controller/user.controller'
import * as jwtToken from '../utils/jwtToken'
import { ROLE_USER, ROLE_ADMIN, ROLE_ROOT } from '../config/role.config'

const router = express.Router();

router.route('/')
    .post(jwtToken.verifyToken( [ ROLE_ADMIN ]), userController.createUser)

router.route('/:id')
    .get(jwtToken.verifyToken([ ROLE_USER, ROLE_ADMIN ]), userController.getById)
    .put(jwtToken.verifyToken([ ROLE_USER, ROLE_ADMIN ]), userController.updateUser)

export default router;
