import catchAsync from '../utils/catchAsync'
import * as mangaService from '../service/manga.service'
import * as categoryService from '../service/category.service'

export const getAll = catchAsync( async(request, response) => {
    const mangas = await mangaService.getAll()
    response.json({
        status: 'ok',
        data: mangas,
        message: 'select manga success'
    })
});
export const getById = catchAsync( async(request, response) => {
    let { id } = request.params;
    const manga = await mangaService.getById(id)
    response.json({
        status: 'ok',
        data: manga,
        message: 'select manga success'
    })
})

export const findByCategory = catchAsync( async(request, response) => {
    const { categoryId } = request.params;
    const category = await categoryService.getByIdIncludeManga(categoryId)
    response.json({
        status: 'ok',
        data: category.mangas,
        message: 'success'
    })
})

export const addManga = catchAsync( async(request, response) => {
    const newManga = await mangaService.createManga(request, response)
    response.json({
        status: 'ok',
        data: newManga,
        message: 'insert manga success'
    })
})
export const editManga = catchAsync( async(request, response) => {
    let { id } = request.params
    const manga = await mangaService.updateManga(id, request.body)
    response.json({
        status: 'ok',
        data: manga,
        message: 'update manga success ' 
    })
})

export const deleteManga = catchAsync( async(request, response) => {
    await mangaService.deleteManga(request.params.id)
    response.json({
        status: 'ok',
        data: {},
        message: 'remove success'
    })
})

