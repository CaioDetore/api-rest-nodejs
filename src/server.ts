import fatify from "fastify";
import { env } from "./env";
import { transactionsRouter } from "./routes/transactions";

const app = fatify();

app.register(transactionsRouter, {
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
