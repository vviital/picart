import Sequelize from 'sequelize';

import config from '../config';

const { database } = config;

const sequelize = new Sequelize(database.name, database.username, database.password, {
  host: database.host,
  dialect: database.dialect,
  pool: database.pool,
});

export {
  sequelize,
};
