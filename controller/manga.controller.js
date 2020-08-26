import catchAsync from '../utils/catchAsync'
import * as mangaService from '../service/manga.service'
import * as categoryService from '../service/category.service'
import { response } from 'express';

export const getAll = catchAsync( async(request, response) => {
    const mangas = await mangaService.getAll()
    response.json({
        status: 200,
        data: mangas,
        message: 'select manga success'
    })
});

export const getById = catchAsync( async(request, response) => {
    let { id } = request.params;
    const manga = await mangaService.getById(id)
    response.json({
        status: 200,
        data: manga,
        message: 'select manga success'
    })
});

export const findByCategory = catchAsync( async(request, response) => {
    const { categoryId } = request.params;
    const category = await categoryService.getByIdIncludeManga(categoryId)
    response.json({
        status: 200,
        data: category.mangas,
        message: 'success'
    })
});

export const getByUser = catchAsync( async(request, response) => {
    const mangas = await mangaService.getByUser(request, response);
    response.json({
        status: 200,
        data: mangas,
        message: 'get mangas success'
    })
})

export const getByAuthor = catchAsync( async(request, response) => {
    const mangas = await mangaService.getByAuthor(request, response);
    response.json({
        status: 200,
        data: mangas,
        message: 'get mangas success'
    })
})

export const getByNewUpdateChapter = catchAsync( async(request, response) => {
    const mangas = await mangaService.getByNewUpdateChapter(request, response);
    response.json({
        status: 200,
        data: mangas,
        message: 'get mangas success'
    })
})

export const getByLikeDesc = catchAsync( async(request, response) => {
    const mangas = await mangaService.getByLikeDesc(request, response);
    response.json({
        status: 200,
        data: mangas,
        message: 'get manga success'
    })
})

export const addManga = catchAsync( async(request, response) => {
    const newManga = await mangaService.createManga(request, response)
    response.json({
        status: 200,
        data: newManga,
        message: 'insert manga success'
    })
});

export const editManga = catchAsync( async(request, response) => {
    const manga = await mangaService.updateManga(request, response)
    response.json({
        status: 200,
        data: manga,
        message: 'update manga success ' 
    })
});

export const deleteManga = catchAsync( async(request, response) => {
    await mangaService.deleteManga(request.params.id)
    response.json({
        status: 200,
        data: {},
        message: 'remove success'
    })
});

