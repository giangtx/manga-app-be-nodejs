import Sequelize from 'sequelize';
import { sequelize, Op } from '../config/database'

const Recent = sequelize.define('recent', {
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        field: 'user_id',
        type: Sequelize.INTEGER
    },
    mangaId: {
        field: 'manga_id',
        type: Sequelize.INTEGER
    },
    chapterId: {
        field: 'chapter_id',
        type: Sequelize.INTEGER
    }
}, {
    tableName: 'recent',
    timestamps: false
})
export default Recent