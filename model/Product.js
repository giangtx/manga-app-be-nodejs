import Sequelize from 'sequelize';
import { sequelize, Op } from '../config/database'

const Product = sequelize.define('product',{
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    point: {
        field: 'point',
        type: Sequelize.INTEGER
    },
    origin: {
        field: 'origin',
        type: Sequelize.INTEGER
    },
    size: {
        field: 'size',
        type: Sequelize.INTEGER
    },
}, {
    tableName: 'product',
    timestamps: false
})
export default Product