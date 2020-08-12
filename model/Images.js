import Sequelize from 'sequelize';
import { sequelize, Op } from '../config/database';

const Images = sequelize.define('images', {
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    chapterId: {
        field: 'chapter_id',
        type: Sequelize.INTEGER
    },
    name: {
        field: 'name',
        type: Sequelize.STRING
    },
    url: {
        field: 'url',
        type: Sequelize.STRING
    },
    stt: {
        field: 'stt',
        type: Sequelize.INTEGER
    },
    type: {
        field: 'type',
        type: Sequelize.STRING
    }
}, {
    tableName: 'images',
    timestamps: false
})
export default Images