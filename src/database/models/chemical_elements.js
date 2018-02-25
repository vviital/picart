import Sequelize from 'sequelize';

import { sequelize } from '../index';

const ChemicalElements = sequelize.define('chemical_element', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  element_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  atomic_number: {
    type: Sequelize.BIGINT,
  },
  atomic_weight: {
    type: Sequelize.NUMERIC,
  },
  description: {
    type: Sequelize.TEXT,
  },
  core: {
    type: Sequelize.BIGINT,
  },
  ions: {
    type: Sequelize.BIGINT,
  }
});

export {
  ChemicalElements,
};
