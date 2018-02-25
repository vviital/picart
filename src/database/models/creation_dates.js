import Sequelize from 'sequelize';

import { sequelize } from '../index';

const CreationDates = sequelize.define('creation_date', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  date_value: {
    type: Sequelize.DATE,
  },
});

export {
  CreationDates,
};
