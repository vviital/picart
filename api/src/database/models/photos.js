import Sequelize from 'sequelize';

import { sequelize } from '../index';

const Photos = sequelize.define('photo', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  path_to_photo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  photo_notes: {
    type: Sequelize.TEXT,
  }
});

export {
  Photos,
};
