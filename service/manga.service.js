import ApiError from '../utils/ApiError'
import httpStatus from 'http-status'
import Manga from '../model/Manga'
import Category from '../model/Category'
import CategoryMana from '../model/CategoryManga'
import multipleUpload from '../utils/multipleUpload'

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

export const createManga = async(request, response) => {

    let { name, numberOfChapters, author, coverPicture, description,categoryId } = request.body;
    const newManga = await Manga.create({
        name,
        numberOfChapters,
        author,
        coverPicture,
        description,
        createdTime: Date.now(),
    },{
        include: Category
    })
    await newManga.addCategory(categoryId)
    return newManga
}

export const updateManga = async(id, request) => {
    let { name, numberOfChapters, author, coverPicture, description, categoryId } = request.body;
    const manga = await Manga.findByPk(id);
    if(!manga) {
        throw new ApiError(httpStatus.NOT_FOUND, 'manga not found')
    }
    await manga.update({
        name: name ? name : manga.name,
        numberOfChapters: numberOfChapters ? numberOfChapters : manga.numberOfChapters,
        author: author ? author : manga.author,
        coverPicture: coverPicture ? coverPicture : manga.coverPicture,
        description: description ? description : manga.description,
        updatedTime: Date.now(),
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