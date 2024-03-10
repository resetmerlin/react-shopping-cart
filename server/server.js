const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Products
// GET /products - Already handled by jsonServer.router
// POST /products
server.post("/products", (req, res) => {
  const { price, name, imageUrl } = req.body.products; // Note the structure change to match API spec

  if (
    !Number.isInteger(price) ||
    typeof name !== "string" ||
    typeof imageUrl !== "string"
  ) {
    return res.sendStatus(400);
  }

  const product = router.db
    .get("products")
    .insert({ price, name, imageUrl })
    .write();
  res.status(201).send({ response: product });
});

// DELETE /products/:id - Already handled by jsonServer.router

// Carts
// GET /carts - Already handled by jsonServer.router
// POST /carts
server.post("/carts", (req, res) => {
  const { product } = req.body; // Directly using the structure as per API spec

  const cartItem = router.db.get("carts").insert({ product }).write();
  res.status(201).send({ response: cartItem });
});

// DELETE /carts/:cartId
server.delete("/carts/:cartId", (req, res) => {
  const { cartId } = req.params;
  router.db
    .get("carts")
    .remove({ id: parseInt(cartId) })
    .write();
  res.sendStatus(200);
});

// Orders
// POST /orders
server.post("/orders", (req, res) => {
  const { orderDetails } = req.body;

  const valid = orderDetails.every(
    (detail) =>
      Number.isInteger(detail.price) &&
      typeof detail.name === "string" &&
      typeof detail.imageUrl === "string" &&
      Number.isInteger(detail.quantity) &&
      detail.quantity > 0
  );

  if (!valid) {
    return res.sendStatus(400);
  }

  const order = router.db.get("orders").insert({ orderDetails }).write();
  res.status(201).send({ response: order });
});

// GET /orders - Already handled by jsonServer.router
// GET /orders/:id - Already handled by jsonServer.router

server.use(router);
server.listen(3003, () => {
  console.log("JSON Server is running");
});
