import Sequelize from 'sequelize';

import { sequelize } from '../index';

const Spectrums = sequelize.define('spectrum', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  wave_length: {
    type: Sequelize.BIGINT,
  },
  line_description: {
    type: Sequelize.TEXT,
  },
  spectrum_base: {
    type: Sequelize.TEXT,
  },
});

export {
  Spectrums,
};
