import { sequelize } from './src/database/index';

(async () => {
  await sequelize.authenticate();
})().then(console.log).catch(console.error);
