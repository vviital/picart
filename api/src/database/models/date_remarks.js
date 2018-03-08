import Sequelize from 'sequelize';

import { sequelize } from '../index';

const DateRemarks = sequelize.define('date_remark', {
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
  DateRemarks,
};
