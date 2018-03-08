import Sequelize from 'sequelize';

import { sequelize } from '../index';

const PaintingSchools = sequelize.define('painting_school', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  school_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  school_description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  creation_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  school_leader: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  origin_sname: {
    type: Sequelize.STRING,
  },
});

export {
  PaintingSchools,
};
