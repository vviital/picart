import Sequelize from 'sequelize';

import { sequelize } from '../index';

const Cities = sequelize.define('city', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  city_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  administrative_devision: {
    type: Sequelize.STRING,
  },
  region: {
    type: Sequelize.STRING,
  }
});

export {
  Cities,
};
