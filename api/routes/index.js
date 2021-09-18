import clientsRouter from "./client.route.js";
import productsRouter from "./product.route.js";
import suppliersRouter from "./supplier.route.js";
import salesRouter from "./sale.route.js";

const routes = (app) => {
  app.use("/", (_, res) => res.status(200).send({ api: true }));
  app.use("/client", clientsRouter);
  app.use("/product", productsRouter);
  app.use("/supplier", suppliersRouter);
  app.use("/sale", salesRouter);
};

export default routes;
