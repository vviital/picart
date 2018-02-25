import Sequelize from 'sequelize';

import { sequelize } from '../index';

const Epochs = sequelize.define('epoch', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  epoch_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  epoch_time: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

export {
  Epochs,
};
