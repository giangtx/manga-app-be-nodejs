import catchAsync from '../utils/catchAsync';
import * as likeService from '../service/like.service';

export const addLike = catchAsync( async(request,response) => {
    const like = await likeService.addLike(request, response);
    response.json({
        status: 200,
        data: like,
        message: 'like success!'
    })
})