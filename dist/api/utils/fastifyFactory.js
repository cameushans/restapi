import { fastify } from "fastify";
export default function createFastifyFactory(conf) {
  let fastifyServer;
  if (conf === "development") {
    fastifyServer = fastify({ logger: true });
  }
  fastifyServer = fastify();
  return fastifyServer;
}
// why use the factory Pattern here ?? Maybe to be able to create instance of the server with different
// configuration based on some environments
