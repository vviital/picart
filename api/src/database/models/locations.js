import Sequelize from 'sequelize';

import { sequelize } from '../index';

const Locations = sequelize.define('location', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  location_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location_type: {
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
  location_description: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
});

export {
  Locations,
};
