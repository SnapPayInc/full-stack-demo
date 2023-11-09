import { Sequelize } from 'sequelize';

import databaseConfig from "../config/database.config.js";

export const sequelize = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, {
    host: databaseConfig.host,
    post: databaseConfig.port,
    dialect: 'mysql'
});


export const connect = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

