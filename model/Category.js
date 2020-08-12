import Sequelize from 'sequelize';
import {sequelize, Op} from '../config/database';

const Category = sequelize.define('category', {
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        field: 'title',
        type: Sequelize.STRING
    },
    description: {
        field: 'description',
        type: Sequelize.STRING
    }
}, {
    tableName: 'category',
    timestamps: false
})


export default Category