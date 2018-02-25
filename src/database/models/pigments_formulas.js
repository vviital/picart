import Sequelize from 'sequelize';

import { sequelize } from '../index';

const PigmentsFormulas = sequelize.define('pigments_formula', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  quantity: {
    type: Sequelize.NUMERIC,
  },
});

export {
  PigmentsFormulas,
};
