import Sequelize from 'sequelize';

import { sequelize } from '../index';

const PassportResearches = sequelize.define('passport_research', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  conclusion_method: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export {
  PassportResearches,
};
