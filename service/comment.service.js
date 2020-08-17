import httpStatus from 'http-status'
import ApiError from '../utils/ApiError'
import CommentManga from '../model/CommentManga'
import User from '../model/User'

export const getByManga = async(request, response) => {
    let { mangaId } = request.params;
    const comments = await CommentManga.findAll({
        where: { mangaId },
        include: {
            model: User,
            attributes: ['username', 'avatar']
        }
    })
    if(!comments){
        throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found')
    }
    return comments;
}

export const addComment = async(request, response) => {
    let { context, mangaId, userId } = request.body;
    const comment = await CommentManga.create({
        context,
        mangaId,
        userId,
        timeCreate: Date.now()
    }) 
    return comment;
}

export const editComment = async(request, response) => {
    let { context } = request.body;
    let { id } = request.params;
    const comment = await CommentManga.findByPk(id);
    if(!comment){
        throw new ApiError(httpStatus.NOT_FOUND, 'cannot find comment with id: ' + id)
    }
    await comment.update({
        context: context ? context : comment.context,
        timeUpdate: Date.now()
    })
    return comment;
}

export const deleteComment = async(request, response) => {
    let { id } = request.params;
    await CommentManga.destroy({ where: { id } } );
}