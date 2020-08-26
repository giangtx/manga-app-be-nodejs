import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import * as upload from '../utils/multipleUpload';
import Chapters from '../model/Chapters';
import Images from '../model/Images';
import Manga from '../model/Manga';

export const getByManga = async(mangaId) => {
    const chapters = await Chapters.findAll({
        where: { mangaId }
    })
    if(!chapters) {
        throw new ApiError(httpStatus.NOT_FOUND, 'chapter not found')
    }
    return chapters
}

export const getById = async(id) => {
    const chapter = await Chapters.findByPk(id);
    if(!chapter) {
        throw new ApiError(httpStatus.NOT_FOUND, 'chapter not found')
    }
    return chapter
}

export const addChapters = async(request, response) => {
    await upload.multipleUpload(request, response);
    let { mangaId, title, chapterNo} = request.body;
    const manga = await Manga.findOne({where:{id:mangaId}});
    if(!manga){
        throw new ApiError(httpStatus.NOT_FOUND, `manga with id: ${mangaId} not found`)
    }
    const chapter = await Chapters.create({
        mangaId,
        dateOfOrigin: Date.now(),
        title,
        chapterNo
    })
    request.files.forEach( async(file,index) => {
        await Images.create({
            chapterId: chapter.id,
            name: file.filename,
            url: file.path,
            stt: index,
            type: file.mimetype
        })
    });
    
    return chapter;
}
export const updateChapters = async(id, request) => {
    let { title, chapterNo} = request;
    const chapter = await Chapters.findByPk(id);
    if(!chapter) {
        throw new ApiError(httpStatus.NOT_FOUND, 'chapter not found')
    }
    await chapter.update({
        dateOfOrigin: Date.now(),
        title: title ? title : chapter.title,
        chapterNo: chapterNo ? chapterNo : chapter.chapterNo
    })
    return chapter
}