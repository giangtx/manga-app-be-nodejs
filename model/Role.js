import Sequelize from 'sequelize';
import { sequelize, Op } from '../config/database';

const Role = sequelize.define('role', {
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role: {
        field: 'role',
        type: Sequelize.STRING
    }
}, {
    tableName: 'role',
    timestamps: false
})
export default Role