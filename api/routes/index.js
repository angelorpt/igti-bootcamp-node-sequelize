import clientsRouter from "./client.route.js";
import productsRouter from "./product.route.js";
import suppliersRouter from "./supplier.route.js";
import salesRouter from "./sale.route.js";

const routes = (app) => {
  app.use("/", (_, res) => res.status(200).send({ api: true }));
  app.use("/api/clients", clientsRouter);
  app.use("/api/products", productsRouter);
  app.use("/api/suppliers", suppliersRouter);
  app.use("/api/sales", salesRouter);
};

export default routes;
