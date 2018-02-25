import Sequelize from 'sequelize';

import { sequelize } from '../index';

const Positions = sequelize.define('position', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  name_object: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type_object: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  longitude_loc: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  latitude_loc: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  }
});

export {
  Positions,
};
