import Sequelize from 'sequelize';

import { sequelize } from '../index';

const Pigments = sequelize.define('pigment', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  pigment_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pigment_group: {
    type: Sequelize.STRING,
  },
  pigment_description: {
    type: Sequelize.STRING,
  },
});

export {
  Pigments,
};
