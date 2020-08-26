import Sequelize from 'sequelize';
import { sequelize, Op } from '../config/database';

const LikeManga = sequelize.define('like_manga', {
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mangaId: {
        field: 'manga_id',
        type: Sequelize.INTEGER
    },
    userId: {
        field: 'user_id',
        type: Sequelize.INTEGER
    },
    timeCreate: {
        field: 'time_create',
        type: Sequelize.DATE
    }
}, {
    tableName: 'like_manga',
    timestamps: false
})
export default LikeManga;