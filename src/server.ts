import fatify from "fastify";
import cookie from "@fastify/cookie";
import { env } from "./env";
import { transactionsRoutes } from "./routes/transactions";

const app = fatify();

app.register(cookie);

app.addHook("preHandler", async (request) => {
  console.log(`[${request.method}] ${request.url}`);
});

app.register(transactionsRoutes, {
  prefix: "/transactions",
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Server Running!");
    console.log("http://localhost:3333");
  });
