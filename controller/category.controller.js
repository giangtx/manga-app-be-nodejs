import catchAsync from '../utils/catchAsync'
import * as categoryService from '../service/category.service'

export const getAll = catchAsync( async(request, response) => {
    const categorys = await categoryService.getAll()
    response.json({
        status: 'Ok',
        data: categorys,
        message: 'Success'
    })
});

export const getById = catchAsync( async(request, response) => {
    const category = await categoryService.getById(request.params.id)
    response.json({
        status: 'ok',
        data: category,
        message: 'success'
    }) 
});
    
