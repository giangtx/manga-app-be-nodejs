import catchAsync from '../utils/catchAsync'
import * as imagesService from '../service/images.service'

export const getByChapter = catchAsync( async(request, response) => {
    const images = await imagesService.getByChapter(request.params.chapterId)
    response.json({
        status: 'ok',
        data: images,
        message: 'select images success'
    })
})

export const addImages = catchAsync( async(request, response) => {
    await imagesService.addImages(request, response)
    response.json({
        status: 200,
        data: {},
        message: 'success'
    })
})
