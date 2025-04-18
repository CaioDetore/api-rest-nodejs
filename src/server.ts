import { app } from "./app";
import { env } from "./env";

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Server Running!");
    console.log("http://localhost:3333");
  });
