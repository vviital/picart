// import { sequelize } from './src/database/index';

// (async () => {
//   await sequelize.authenticate();
// })().then(console.log).catch(console.error);

import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(3000);
