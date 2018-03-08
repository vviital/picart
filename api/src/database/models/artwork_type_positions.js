import Sequelize from 'sequelize';

import { sequelize } from '../index';

const ArtworkTypePositions = sequelize.define('artwork_type_position', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
});

export {
  ArtworkTypePositions,
};
