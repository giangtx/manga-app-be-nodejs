import Sequelize from 'sequelize';
import { sequelize, Op } from '../config/database'

const Manga = sequelize.define('manga', {
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        field: 'name',
        type: Sequelize.STRING,
    },
    numberOfChapters: {
        field: 'number_of_chapters',
        type: Sequelize.INTEGER
    },
    author: {
        field: 'author',
        type: Sequelize.STRING
    },
    ratings: {
        field: 'ratings',
        type: Sequelize.DOUBLE
    },
    ratingsCount: {
        field: 'ratings_count',
        type: Sequelize.DOUBLE
    },
    createBy: {
        field: 'create_by',
        type: Sequelize.INTEGER
    },
    updateBy: {
        field: 'update_by',
        type: Sequelize.INTEGER
    },
    createdTime: {
        field: 'created_time',
        type: Sequelize.DATE
    },
    updatedTime: {
        field: 'updated_time',
        type: Sequelize.DATE
    },
    coverPicture: {
        field: 'cover_picture',
        type: Sequelize.STRING
    },
    description: {
        field: 'description',
        type: Sequelize.STRING
    },
    likes: {
        field: 'likes',
        type: Sequelize.INTEGER
    },
    views: {
        field: 'views',
        type: Sequelize.INTEGER
    },
    timeUpdateChap: {
        field: 'time_update_chap',
        type: Sequelize.DATE
    }
},{
    tableName: 'manga',
    timestamps: false
})
export default Manga