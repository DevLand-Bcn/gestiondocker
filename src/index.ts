import { Hono } from "hono";

const app = new Hono();

// Ruta principal
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// Sirve la aplicación en el puerto 3000
Bun.serve({
  port: 3000,
  fetch: app.fetch,
});
