import { Sequelize } from 'sequelize';
import log from 'npmlog';

import databaseConfig from '../config/database.config.js';

export const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    port: databaseConfig.port,
    dialect: 'mysql',
  },
);

export const connect = async () => {
  try {
    await sequelize.authenticate();
    log.info('Database', 'Connection has been established successfully.');
  } catch (error) {
    log.error('Database', 'Unable to connect to the database:', error);
  }
};
