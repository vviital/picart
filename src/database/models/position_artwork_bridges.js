import Sequelize from 'sequelize';

import { sequelize } from '../index';

const PositionArtworkBridges = sequelize.define('position_artwork_bridge', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
});

export {
  PositionArtworkBridges,
};
