import ApiError from '../utils/ApiError'
import httpStatus from 'http-status'
import Category from '../model/Category'
import Manga from '../model/Manga'
import CategoryMana from '../model/CategoryManga'

export const getAll = async() => {
    return Category.findAll()
}

export const getById = async(id) => {
    const category = await Category.findByPk(id)
    if(!category){
        throw new ApiError(httpStatus.NOT_FOUND, 'category not found')
    }
    return category
}

export const getByIdIncludeManga = async(id) => {
    const category = await Category.findOne({
        where:{ id },
        include: Manga
    })
    if (!category){
        throw new ApiError(httpStatus.NOT_FOUND, 'category not found')
    }
    return category;
}