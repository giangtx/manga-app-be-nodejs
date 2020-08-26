import ApiError from '../utils/ApiError'
import httpStatus from 'http-status'
import Manga from '../model/Manga'
import Category from '../model/Category'
import CategoryMana from '../model/CategoryManga'
import { singleUpload } from '../utils/multipleUpload'

export const getAll = async() => {
    return Manga.findAll()
}

export const getById = async(id) => {
    const manga = await Manga.findOne({
        where: {
            id
        },
        include: Category
    })
    if (!manga) {
        throw new ApiError(httpStatus.NOT_FOUND, 'manga not found')
    }
    return manga
}

export const getByUser = async(request, response) => {
    const mangas = await Manga.findAll({
        where: { createBy: request.jwtDecoded.id }
    })
    if (!mangas) {
        throw new ApiError(httpStatus.NOT_FOUND, 'manga not found')
    }
    return mangas
}

export const getByAuthor = async(request, response) => {
    const { author } = request.query;
    const mangas = await Manga.findAll({
        where: {
            author
        }
    })
    if(mangas.length == 0) {
        throw new ApiError(httpStatus.NOT_FOUND, `Manga with author: ${author} not found`);
    }
    return mangas;
}

export const getByNewUpdateChapter = async(request, response) => {
    const mangas = await Manga.findAll({
        order: [['time_update_chap', 'DESC']]
    })
    if(mangas.length == 0) {
        throw new ApiError(httpStatus.NOT_FOUND, `Manga not found`);
    }
    return mangas;
}

export const getByLikeDesc = async(request, response) => {
    const mangas = await Manga.findAll({
        order: [['likes','DESC']]
    })
    if(mangas.length == 0) {
        throw new ApiError(httpStatus.NOT_FOUND, `manga not found`)
    }
    return mangas;
}

export const createManga = async(request, response) => {
    await singleUpload(request,response)
    let { name, author, description,categoryId } = request.body;
    const newManga = await Manga.create({
        name,
        author,
        coverPicture: request.file ? request.file.path : 'defaul-image',
        description,
        createdTime: Date.now(),
        createBy: request.jwtDecoded.id
    },{
        include: Category
    })
    await newManga.addCategory(categoryId)
    return newManga
}

export const updateManga = async(request, response) => {
    let { id } = request.params;
    const manga = await Manga.findByPk(id);
    if(!manga) {
        throw new ApiError(httpStatus.NOT_FOUND, 'manga not found')
    }
    await singleUpload(request,response);
    let { name, numberOfChapters, author, description, categoryId } = request.body;  
    await manga.update({
        name: name ? name : manga.name,
        numberOfChapters: numberOfChapters ? numberOfChapters : manga.numberOfChapters,
        author: author ? author : manga.author,
        coverPicture: request.file ? request.file.path : manga.coverPicture,
        description: description ? description : manga.description,
        updatedTime: Date.now(),
        updateBy: request.jwtDecoded.id
    })
    if (categoryId){
        await manga.setCategories(categoryId)
    }
    return manga;
}

export const deleteManga = async(id) => {
    const manga = await Manga.findByPk(id);
    if(!manga) {
        throw new ApiError(httpStatus.NOT_FOUND, 'manga not found')
    }
    await manga.setCategories([]);
    await Manga.destroy({
        where: {
            id
        }
    })
} 