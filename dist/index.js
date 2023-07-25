import createFastifyFactory from "./api/utils/fastifyFactory.js";
import { callbackPattern } from "./api/services/obs.js";
import dotenv from "dotenv";
function main() {
  dotenv.config();
  const dbConnection = callbackPattern("Callback coding style");
  const app = createFastifyFactory(process.env.ENV);
  app.get("/ping", (request, response) => {
    response.send("OK");
  });
  return app.listen({ host: process.env.HOST, port: Number(process.env.PORT) });
}
main().catch((e) => {
  console.error(e);
  return process.exit(1);
});
