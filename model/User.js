import Sequelize from 'sequelize';
import { sequelize, Op } from '../config/database'

const User = sequelize.define('user',{
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        field: 'email',
        type: Sequelize.STRING
    },
    username: {
        field: 'username',
        type: Sequelize.STRING
    },
    password: {
        field: 'password',
        type: Sequelize.STRING
    },
    avatar: {
        field: 'avatar',
        type: Sequelize.STRING
    },
    fullName: {
        field: 'full_name',
        type: Sequelize.STRING
    },
    birthday: {
        field: 'birthday',
        type: Sequelize.DATE
    },
    phone: {
        field: 'phone',
        type: Sequelize.STRING
    },
    status: {
        field: 'status',
        type: Sequelize.INTEGER
    },
    gender: {
        field: 'gender',
        type: Sequelize.INTEGER
    },
    userType: {
        field: 'user_type',
        type: Sequelize.INTEGER
    },
    tokenFacebook: {
        field: 'token_facebook',
        type: Sequelize.STRING
    },
    tokenGoogle: {
        field: 'token_google',
        type: Sequelize.STRING
    },
    roleId: {
        field: 'role_id',
        type: Sequelize.INTEGER
    }
},{
    tableName: 'user',
    timestamps: false
})
export default User