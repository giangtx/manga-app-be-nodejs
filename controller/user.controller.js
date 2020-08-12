import catchAsync from '../utils/catchAsync'
import * as userService from '../service/user.service'

export const getById = catchAsync( async(request, response) => {
    const user = await userService.getById(request.params.id)
    response.json({
        status: 200,
        data: user,
        message: 'select user success'
    })
})

export const createUser = catchAsync( async(request, response) => {
    const user = await userService.createUser(request.body)
    response.json({
        status: 200,
        data: user,
        message: 'select user success'
    })
})

export const updateUser = catchAsync( async(request, response) => {
    const user = await userService.updateUser(request.params.id, request.body)
    response.json({
        status: 200,
        data: user,
        message: 'update user success'
    })
})