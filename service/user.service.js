import httpStatus from 'http-status'
import bcrypt from 'bcrypt'
import ApiError from '../utils/ApiError'
import User from '../model/User'
import { singleUpload } from '../utils/multipleUpload'

export const getById = async(id) => {
    const user = await User.findOne({
        where: { id },
        attributes: ['id', 'email', 'username', 'avatar', 'fullName', 'birthday', 'phone', 'status', 'gender', 'userType']
    });
    if(!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'user not found')
    }
    return user
}

export const getInfoUser = async(request, response) => {
    const { id } = request.jwtDecoded;
    const user = await User.findOne({
        where: { id },
        attributes: ['id', 'email', 'username', 'avatar', 'fullName', 'birthday', 'phone', 'status', 'gender', 'userType']
    });
    if(!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'user not found')
    }
    return user;
}

export const createUser = async(request) => {
    let { username, password, email } = request;
    if( await User.findOne({ where:{ username }})){
        throw new ApiError(httpStatus.BAD_REQUEST, 'username already taken')
    }
    let passwordHash = bcrypt.hashSync(password,10)
    const newUser = await User.create({
        username,
        password:passwordHash,
        email
    })
    return newUser;
}

export const updateUser = async(id, request) => {
    let { fullName, birthday, phone, gender} = request
    const user = await User.findByPk(id);
    if(!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'user not found')
    }
    await user.update({
        fullName : fullName ? fullName : user.fullName,
        birthday: birthday ? birthday : user.birthday,
        phone: phone ? phone : user.phone,
        gender: gender ? gender : user.gender
    })
    return user;
}

export const changeAvatar = async(request, response) => {
    let { id } = request.params;
    const user = await User.findByPk(id);
    if(!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'user not found')
    }
    await singleUpload(request, response);
    await user.update({
        avatar: request.file ? request.file.path : user.avatar
    })
    return user;
}