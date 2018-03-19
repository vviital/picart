import Sequelize from "sequelize";

import { sequelize } from "../index";

const SpectrumLines = sequelize.define("spectrum_line", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  date_line: {
    type: Sequelize.DATE
  },
  name_of_the_person: {
    type: Sequelize.STRING
  },
  wave_length_line: {
    type: Sequelize.NUMERIC
  },
  other_options: {
    type: Sequelize.STRING
  }
});

export { SpectrumLines };
