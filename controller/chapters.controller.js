import catchAsync from '../utils/catchAsync'
import * as chaptersService from '../service/chapters.service'

export const getByManga = catchAsync( async(request, response) => {
    const chapters = await chaptersService.getByManga(request.params.mangaId)
    response.json({
        status: 200,
        data: chapters,
        message: 'select chapters success'
    })
})

export const getById = catchAsync( async(request, response) => {
    const chapter = await chaptersService.getById(request.params.id)
    response.json({
        status: 200,
        data: chapter,
        message: 'select chapter success '
    })
})

export const addChapter = catchAsync( async(request, response) => {
    const chapter = await chaptersService.addChapters(request, response)
    response.json({
        status: 200,
        data: chapter,
        message: 'add chapter success'
    })
})

export const updateChapter =  catchAsync( async(request, response) => {
    const chapter = await chaptersService.updateChapters(request.params.id, request.body)
    response.json({
        status: 200,
        data: chapter,
        message: 'update chapter success'
    })
})