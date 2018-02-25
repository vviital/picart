import Sequelize from 'sequelize';

import { sequelize } from '../index';

const HistoricalPeriods = sequelize.define('historical_period', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  period_name: {
    type: Sequelize.STRING,
  },
  short_description: {
    type: Sequelize.TEXT,
  },
  dates: {
    type: Sequelize.DATE,
  }
});

export {
  HistoricalPeriods,
};
