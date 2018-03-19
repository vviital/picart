import Koa from "koa";
import { sequelize } from "./database/index";
import { uploadDataSources } from "./services/adapters/index";

(async () => {
  await sequelize.authenticate();

  await uploadDataSources();

  const app = new Koa();

  app.use(async ctx => {
    ctx.body = "Hello World, from api";
  });

  app.listen(3000);
})().catch(console.error);
