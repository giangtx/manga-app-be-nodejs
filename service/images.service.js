import ApiError from '../utils/ApiError'
import httpStatus from 'http-status'
import Images from '../model/Images'
import { multipleUpload } from '../utils/multipleUpload'

export const getByChapter = async(chapterId) => {
    const images = await Images.findAll({
        where:{ chapterId }
    })
    if(!images) {
        throw new ApiError(httpStatus.NOT_FOUND, 'images not found')
    }
    return images
}

export const addImages = async(request, response) => {
    await multipleUpload(request, response);
    request.files.forEach( async(file,index) => {
        await Images.create({
            chapterId: request.body.chapterId,
            name: file.filename,
            url: file.path,
            stt: index,
            type: file.mimetype
        })
    });
}