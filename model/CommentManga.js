import Sequelize from 'sequelize';
import { sequelize, Op } from '../config/database'
import User from './User'

const CommentManga = sequelize.define('comment_manga',{
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    context: {
        field: 'context',
        type: Sequelize.STRING
    },
    mangaId: {
        field: 'manga_id',
        type: Sequelize.INTEGER
    },
    userId: {
        field: 'user_id',
        type: Sequelize.INTEGER
    },
    imageId: {
        field: 'image_id',
        type: Sequelize.INTEGER
    },
    timeCreate: {
        field: 'time_create',
        type: Sequelize.DATE
    },
    timeUpdate: {
        field: 'time_update',
        type: Sequelize.DATE
    }
}, {
    tableName: 'comment_manga',
    timestamps: false
})

CommentManga.belongsTo(User);

export default CommentManga;