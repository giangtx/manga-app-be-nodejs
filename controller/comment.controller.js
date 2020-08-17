import catchAsync from '../utils/catchAsync';
import * as commentService from '../service/comment.service';

export const getByManga = catchAsync(async(request, response) => {
    const comments = await commentService.getByManga(request, response);
    response.json({
        status: 200,
        data: comments,
        message: 'Success'
    })
})

export const addComment = catchAsync(async(request, response) => {
    const comment = await commentService.addComment(request, response);
    response.json({
        status: 200,
        data: comment,
        message: 'Add comment success'
    })
})

export const editComment = catchAsync(async(request, response) => {
    const comment = await commentService.editComment(request, response);
    response.json({
        status: 200,
        data: comment,
        message: 'Edit comment success'
    })
})

export const deleteComment = catchAsync(async(request, response) => {
    await commentService.deleteComment(request, response);
    response.json({
        status: 200,
        message: 'delete comment success'
    })
})