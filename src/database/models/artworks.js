import Sequelize from 'sequelize';

import { sequelize } from '../index';

const Artworks = sequelize.define('artwork', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  artwork_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  original_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sizes: {
    type: Sequelize.TEXT,
  },
  creation_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  basis: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cost: {
    type: Sequelize.DECIMAL,
  }
});

export {
  Artworks,
};
