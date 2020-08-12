import httpStatus from 'http-status';
import bcrypt from 'bcrypt'
import ApiError from '../utils/ApiError';
import User from '../model/User'
import * as jwtToken from '../utils/jwtToken'
import * as mailer from '../utils/mailer'
import { REGISTER_SUBJECT, REGISTER_BODY} from '../config/mailer.config'

export const login = async(request) => {
    let { username, password} = request;
    const user = await User.findOne({ where:{ username }});
    if(!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'user not exist')
    }else if(!bcrypt.compareSync(password, user.password)){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Incorrect password!')
    }
    return jwtToken.generateToken(user);
}

export const register = async(request) => {
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
    await mailer.sendMail(email, REGISTER_SUBJECT, REGISTER_BODY)
    return newUser;
}