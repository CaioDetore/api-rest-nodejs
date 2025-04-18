import fatify from "fastify";
import cookie from "@fastify/cookie";

import { transactionsRoutes } from "./routes/transactions";

export const app = fatify();

app.register(cookie);

app.register(transactionsRoutes, {
  prefix: "/transactions",
});
