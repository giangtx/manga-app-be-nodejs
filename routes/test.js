import express from 'express';
import { ROLE_USER, ROLE_ADMIN, ROLE_ROOT } from '../config/role.config';
import { verifyTokenCookie } from '../utils/jwtToken'
import csurf from 'csurf'

const csrfMiddleware = csurf({
    cookie: true
})

const router = express.Router();

router.get('/token', verifyTokenCookie([ ROLE_USER ]), (request, response) => {
    response.json({
        message: 'hello bạn'
    })
})

router.get('/gettoken', csrfMiddleware, (request, response) => {
    response.json({
        csrf: request.csrfToken()
    })
})

router.post('/', csrfMiddleware, (request, response) => {
    response.json({
        message: 'chào bạn!'
    })
})

export default router;