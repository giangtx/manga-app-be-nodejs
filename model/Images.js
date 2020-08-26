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
    },
    createBy: {
        field: 'create_by',
        type: Sequelize.INTEGER
    },
    updateBy: {
        field: 'update_by',
        type: Sequelize.INTEGER
    },
    createTime: {
        field: 'create_time',
        type: Sequelize.DATE
    },
    updateTime: {
        field: 'update_time',
        type: Sequelize.DATE
    }
}, {
    tableName: 'images',
    timestamps: false
})
export default Images