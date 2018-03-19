import Sequelize from "sequelize";

import { sequelize } from "../index";

const SpectrumLinesLibraryRecords = sequelize.define(
  "spectrum_lines_library_record",
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    wave_length: {
      type: Sequelize.NUMERIC
    },
    ionization_stage: {
      type: Sequelize.NUMERIC
    },
    intensity: {
      type: Sequelize.NUMERIC
    }
  },
  { underscored: true }
);

export { SpectrumLinesLibraryRecords };
