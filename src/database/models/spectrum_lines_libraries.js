import Sequelize from 'sequelize';

import { sequelize } from '../index';

const SpectrumLinesLibraries = sequelize.define('spectrum_lines_library', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  name_library: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  library_description: {
    type: Sequelize.STRING,
  },
  comments_library: {
    type: Sequelize.STRING,
  },
});

export {
  SpectrumLinesLibraries,
};
