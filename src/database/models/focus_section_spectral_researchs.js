import Sequelize from 'sequelize';

import { sequelize } from '../index';

const FocusSectionSpectralResearchs = sequelize.define('focus_section_spectral_research', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  focus_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  time: {
    type: Sequelize.DATE,
  },
  file: {
    type: Sequelize.TEXT,
  },
  point_focus_description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  main_colour_focus: {
    type: Sequelize.TEXT,
  },
});

export {
  FocusSectionSpectralResearchs,
};
