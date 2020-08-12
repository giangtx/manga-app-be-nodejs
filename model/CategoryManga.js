import Sequelize from 'sequelize';
import {sequelize, Op} from '../config/database';
import Manga from './Manga';
import Category from './Category';

const CategoryManga = sequelize.define('category_manga', {
    categoryId: {
        field: 'category_id',
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    mangaId: {
        field: 'manga_id',
        type: Sequelize.INTEGER,
        primaryKey: true
    }
}, {
    tableName: 'category_manga',
    timestamps: false
});

Manga.belongsToMany(Category, { through: CategoryManga})
Category.belongsToMany(Manga, { through: CategoryManga})
export default CategoryManga;