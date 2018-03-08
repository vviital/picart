import Sequelize from 'sequelize';

import { sequelize } from '../index';

const Paints = sequelize.define('paint', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  paint_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  remark: {
    type: Sequelize.STRING,
  },
});

export {
  Paints,
};
