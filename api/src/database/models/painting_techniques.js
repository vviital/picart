import Sequelize from 'sequelize';

import { sequelize } from '../index';

const PaintingTechniques = sequelize.define('painting_technique', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  painting_technique_name: {
    type: Sequelize.STRING,
  },
  painting_technique_description: {
    type: Sequelize.TEXT,
  },
  origin_painting_technique_name: {
    type: Sequelize.STRING,
  }
});

export {
  PaintingTechniques,
};
