import fatify from "fastify";
import crypto from "node:crypto";
import { knex } from "./database";
import { env } from "./env";

const app = fatify();

app.get("/hello", async () => {
  const transaction = await knex("transactions")
    .insert({
      id: crypto.randomUUID(),
      title: "Transação de teste",
      amount: 1000,
    })
    .returning("*");

  return transaction;
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Server Running!");
    console.log("http://localhost:3333");
  });
