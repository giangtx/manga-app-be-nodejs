import express from 'express';
import * as likeController from '../controller/like.controller';
import { verifyTokenCookie } from '../utils/jwtToken';
import { ROLE_ADMIN, ROLE_USER, ROLE_ROOT } from '../config/role.config';

const router = express.Router();

router.route('/')
    .post(verifyTokenCookie([ ROLE_ADMIN, ROLE_USER, ROLE_ROOT ]), likeController.addLike)

export default router;