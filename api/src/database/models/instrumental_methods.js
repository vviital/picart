import Sequelize from 'sequelize';

import { sequelize } from '../index';

const InstrumentalMethods = sequelize.define('instrumental_method', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  method_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
});

export {
  InstrumentalMethods,
};
