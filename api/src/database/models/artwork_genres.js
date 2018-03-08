import Sequelize from 'sequelize';

import { sequelize } from '../index';

const ArtworkGenres = sequelize.define('artwork_genre', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  genre_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

export {
  ArtworkGenres,
};
