import Sequelize from 'sequelize';
import { sequelize, Op } from '../config/database'

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
    }
}, {
    tableName: 'comment_manga',
    timestamps: false
})
export default CommentManga;