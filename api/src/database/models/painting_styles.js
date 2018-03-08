import Sequelize from 'sequelize';

import { sequelize } from '../index';

const PaintingStyles = sequelize.define('painting_style', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  painting_style_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  painting_style_description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  painting_style_source: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  origin_painting_style: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export {
  PaintingStyles,
};
