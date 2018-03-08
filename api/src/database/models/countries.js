import Sequelize from 'sequelize';

import { sequelize } from '../index';

const Countries = sequelize.define('country', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  country_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  capital: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  languages: {
    type: Sequelize.STRING,
  },
  country_code: {
    type: Sequelize.STRING,
  },
});

export {
  Countries,
};
