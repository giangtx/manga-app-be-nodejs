import ApiError from '../utils/ApiError'
import httpStatus from 'http-status'
import User from '../model/User'
import bcrypt from 'bcrypt'

export const getById = async(id) => {
    const user = await User.findByPk(id);
    if(!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'user not found')
    }
    return user
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