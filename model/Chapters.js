import Sequelize from 'sequelize'
import { sequelize, Op } from '../config/database'

const Chapters = sequelize.define('chapters', {
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
    imageId: {
        field: 'image_id',
        type: Sequelize.INTEGER
    },
    dateOfOrigin: {
        field: 'date_of_origin',
        type: Sequelize.DATE
    },
    title: {
        field: 'title',
        type: Sequelize.STRING
    },
    chapterNo: {
        field: 'chapter_no',
        type: Sequelize.INTEGER
    },
    views: {
        field: 'views',
        type: Sequelize.INTEGER
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
    tableName: 'chapters',
    timestamps: false
})
export default Chapters;