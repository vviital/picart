import Sequelize from 'sequelize';

import { sequelize } from '../index';

const Organizations = sequelize.define('organization', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    type: Sequelize.TEXT,
  },
  status: {
    type: Sequelize.TEXT,
  },
  type: {
    type: Sequelize.TEXT,
  },
  description: {
    type: Sequelize.TEXT,
  },
  address: {
    type: Sequelize.TEXT,
  },
  email: {
    type: Sequelize.TEXT,
  },
  phone_number: {
    type: Sequelize.TEXT,
  }
});

export {
  Organizations,
};
