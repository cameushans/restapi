import createFastifyFactory from "./api/utils/fastifyFactory.js";
import { callbackPattern } from "./api/services/obs.js";
import dotenv from "dotenv";
import { FastifyReply, FastifyRequest } from "fastify";

function main(): Promise<string> {
  dotenv.config();
  const dbConnection = callbackPattern("Callback coding style");
  const app = createFastifyFactory(process.env.ENV);
  app.get("/ping", (request: FastifyRequest, response: FastifyReply) => {
    response.send("It works");
  });
  return app.listen({ host: process.env.HOST, port: Number(process.env.PORT) });
}

main().catch((e) => {
  console.error(e);
  return process.exit(1);
});
