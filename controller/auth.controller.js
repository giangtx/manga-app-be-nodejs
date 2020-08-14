import catchAsync from '../utils/catchAsync'
import * as authService from '../service/auth.service'

export const login = catchAsync( async(request, response) => {
    const user = await authService.login(request.body);
    response.cookie('JWT',user,{
        maxAge: 86400000,
        httpOnly: true
    })
    response.json({
        tokenType: 'Bearer',
        token: user,
    })
}) 
export const register = catchAsync( async(request, response) => {
    await authService.register(request.body);
    response.json({
        status: 200,
        message: 'register success! Please check gmail'
    })
})