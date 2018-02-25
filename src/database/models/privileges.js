import Sequelize from 'sequelize';

import { sequelize } from '../index';

const Privileges = sequelize.define('privilege', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  user_type: {
    type: Sequelize.STRING,
  },
  privileges: {
    type: Sequelize.BIGINT,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

export {
  Privileges,
};
