import ApiError from '../utils/ApiError';
import httpStatus from 'http-status';
import Manga from '../model/Manga';
import LikeManga from '../model/LikeManga';

export const addLike = async(request, response) => {
    let { mangaId } = request.body;
    const { id } = request.jwtDecoded;
    const likeCheck = await LikeManga.findOne({
        where: {
            mangaId: mangaId,
            userId: id
        }
    })
    if(likeCheck){
        await LikeManga.destroy({
            where:{
                id: likeCheck.id
            }
        })
        return 'unlike'
    }else{
        const manga = await Manga.findOne({ where: {id: mangaId }});
        if(!manga){
            throw new ApiError(httpStatus.NOT_FOUND, `manga with id: ${mangaId} not found`)
        }
        const like =  await LikeManga.create({
            mangaId: mangaId,
            userId: id,
            timeCreate: Date.now()
        })
        return like;
    }
    
}