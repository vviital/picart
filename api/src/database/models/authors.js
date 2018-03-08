import Sequelize from 'sequelize';

import { sequelize } from '../index';

const Authors = sequelize.define('author', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  surname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  another_name: {
    type: Sequelize.STRING,
  },
  pseudonym: {
    type: Sequelize.STRING,
  },
  date_of_birth: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  date_of_death: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  biography: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  photo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  social_status: {
    type: Sequelize.STRING,
  },
  origin: {
    type: Sequelize.STRING,
  },
  education: {
    type: Sequelize.STRING,
  },
  sex: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  marital_status: {
    type: Sequelize.STRING,
  }
});

export {
  Authors,
};
