import Sequelize from 'sequelize';
import { sequelize, Op } from '../config/database'

const Favourites = sequelize.define('favourites',{
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
    }
}, {
    tableName: 'favourites',
    timestamps: false
})
export default Favourites;