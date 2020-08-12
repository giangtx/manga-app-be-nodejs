import Sequelize from 'sequelize'
import dbConfig from './db.config'

export const sequelize = new Sequelize(
    dbConfig.DBNAME, //db name
    dbConfig.USERNAME, //username
    dbConfig.PASSWORD, //password
    {
        dialect: 'mysql',
        host: dbConfig.HOST,
        operatorsAliases: 0,
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000,            
        }
    }
)
export const Op = Sequelize.Op